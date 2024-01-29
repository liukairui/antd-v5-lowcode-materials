import { CloseCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Card, Empty, Flex, Form, Input, List, Modal, Select, Tree } from 'antd/es';
import { DataNode, TreeProps } from 'antd/es/tree';
import axios, { AxiosError, AxiosInstance } from 'axios';
import { isFunction, isString } from 'lodash';
import { FC, Fragment, createElement, useEffect, useMemo, useState } from 'react';
import { IZcFieldProps } from 'src/types';
import { handleFormItemProps } from '../utils';

type IKey = string;

interface IUserPickerProps {
  departments: IDepartment[];
  disabled?: boolean;
  multiple?: boolean;
  value?: IKey[] | null;
  valueFieldName?: string;
  onChange?: (value: IKey[] | null) => void;
}

interface IZcUserPickerProps extends IZcFieldProps {
  dataSource?: Function | string;
  multiple?: boolean;
  valueFieldName?: string;
}

const UserPicker: FC<IUserPickerProps> = (props) => {
  const { departments, disabled = false, multiple = true, valueFieldName = 'empno', value, onChange } = props;
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [keyword, setKeyword] = useState('');

  /**
   * 判断搜索
   * @returns 是否搜索中
   */
  const isSearching = () => keyword !== '';

  /**
   * 获取所有员工（递归）
   * @param departments 部门列表
   * @returns 用户列表
   */
  const getMembers = (departments: IDepartment[]): IMember[] => {
    return departments.flatMap((department) => [...(department.members ?? []), ...getMembers(department.nodes ?? [])]);
  };

  /**
   * 获取所有部门的 key（递归）
   * @param departments 部门列表
   * @returns 部门 key 列表
   */
  const getDepartmentKeys = (departments: IDepartment[]): IKey[] => {
    return departments.flatMap((department) => [department.deptcode, ...getDepartmentKeys(department.nodes ?? [])]);
  };

  /**
   * 生成树结构（递归）
   * @param departments 部门列表（源数据）
   * @returns 树数据
   */
  const generateTree = (departments: IDepartment[]): DataNode[] => {
    return departments.map((d) => {
      const children = [
        ...(d.nodes ? generateTree(d.nodes) : []),
        ...(d.members?.map((m) => ({
          title: `${m.name}（${m.empno}）`,
          key: m[valueFieldName]
        })) ?? [])
      ];
      /* 当多选且有子节点，或者单选且没有子节点时，节点可勾选 */
      const checkable = multiple ? children.length > 0 : children.length === 0;
      return {
        checkable,
        children,
        key: d.deptcode,
        title: d.name
      };
    });
  };

  /**
   * 筛选树结构（递归）
   * @param tree 树结构
   * @param keyword 搜索关键字
   * @returns
   */
  const filterTreeDataByKeyword = (tree: DataNode[], keyword: string): DataNode[] => {
    const filterNodes = (nodes: DataNode[]): DataNode[] => {
      return nodes.reduce((filtered: DataNode[], node) => {
        const matchSelf = (node.title as IKey).includes(keyword) || (node.key as IKey).includes(keyword);
        let matchChildren = false;
        let children: DataNode[] | undefined = undefined;
        if (node.children && node.children.length > 0) {
          children = filterNodes(node.children);
          matchChildren = children.length > 0;
        }
        if (matchSelf || matchChildren) {
          filtered.push({
            ...node,
            children: matchChildren ? children : undefined
          });
        }
        return filtered;
      }, []);
    };
    return filterNodes(tree);
  };

  /**
   * 获取树结构中所有节点
   * @param nodes 树结构
   * @returns 节点列表
   */
  const flattenTree = (nodes: DataNode[]): DataNode[] => {
    let result: DataNode[] = [];
    nodes.forEach((node) => {
      result.push(node);
      if (node.children && node.children.length > 0) {
        result = result.concat(flattenTree(node.children));
      }
    });
    return result;
  };

  /**
   * 处理选中事件
   * @param checked 已选的 key 列表
   * @param info 选中操作的更多信息
   */
  const onCheck: TreeProps['onCheck'] = (checked: IKey[], info) => {
    let newKeys: string[] = [];
    if (multiple) {
      /**
       * 判断是否在搜索
       * 若否，则筛选出用户后直接赋值
       * 若是，则是对已选用户进行增减操作，根据操作类型分别处理
       */
      if (isSearching()) {
        const operatedKeys = flattenTree([info.node])
          .filter((n) => n.children == null)
          .map((n) => n.key);
        if (info.checked) {
          /* 选中 */
          newKeys = [...new Set([...checkedKeys, ...operatedKeys])];
        } else {
          /* 取消选中 */
          newKeys = checkedKeys.filter((key) => !operatedKeys.includes(key));
        }
      } else {
        newKeys = checked.filter((key) => !departmentsKeys.includes(key));
      }
    } else {
      newKeys = checked.length > 0 ? [checked[checked.length - 1]] : [];
    }
    setCheckedKeys(newKeys);
  };

  /* 树数据 */
  const treeData: DataNode[] = useMemo(() => {
    const data = generateTree(departments);
    if (isSearching()) {
      setExpandedKeys(getDepartmentKeys(departments));
      return filterTreeDataByKeyword(data, keyword);
    } else return data;
  }, [departments, keyword]);

  /* 所有部门的 key */
  const departmentsKeys: IKey[] = useMemo(() => {
    return getDepartmentKeys(departments);
  }, [departments]);

  /* 所有员工 */
  const users: IMember[] = useMemo(() => {
    return getMembers(departments);
  }, [departments]);

  /* 已选中的员工 */
  const checkedUsers: IMember[] = useMemo(() => {
    return users.filter((user) => checkedKeys.includes(user[valueFieldName]));
  }, [checkedKeys]);

  return (
    <Fragment>
      <Select
        mode="tags"
        open={false}
        disabled={disabled}
        placeholder="请选择"
        style={{ width: '100%' }}
        onClick={() => {
          setCheckedKeys(value ?? []);
          setShowModal(true);
        }}
        onDeselect={(v) => onChange(value.filter((item) => item !== v))}
        options={users.map((user) => ({ label: `${user.name}（${user[valueFieldName]}）`, value: user[valueFieldName] }))}
        value={value}
      />
      <Modal
        open={showModal}
        onOk={() => {
          onChange(checkedKeys);
          setShowModal(false);
        }}
        onCancel={() => setShowModal(false)}
        title="选择用户"
        width={800}
        styles={{ body: { height: '600px' } }}
      >
        <Flex gap="small" style={{ height: '100%', marginTop: 16 }}>
          <Card
            size="small"
            title={multiple ? '多选' : '单选'}
            bodyStyle={{ height: 'calc(100% - 38px)', padding: 0, marginTop: 1, overflow: 'auto' }}
            style={{ width: '50%', height: '100%', overflow: 'hidden' }}
          >
            <Flex vertical style={{ height: '100%' }}>
              <Flex style={{ padding: 8 }}>
                <Input allowClear placeholder="筛选" prefix={<SearchOutlined />} onChange={(e) => setKeyword(e.target.value)} value={keyword} />
              </Flex>
              <Flex flex={1} style={{ padding: '8px 0', borderTop: '1px solid #f0f0f0', overflow: 'auto' }}>
                <Tree
                  checkable
                  checkedKeys={checkedKeys}
                  disabled={disabled}
                  expandedKeys={expandedKeys}
                  selectable={false}
                  treeData={treeData}
                  onCheck={onCheck}
                  onExpand={(keys: IKey[]) => {
                    setExpandedKeys(keys);
                  }}
                />
              </Flex>
            </Flex>
          </Card>
          <Card
            size="small"
            title={`已选 ${checkedUsers.length} 人`}
            extra={disabled ? null : <Button type="link" children="清空" style={{ padding: 0 }} onClick={() => setCheckedKeys([])} />}
            bodyStyle={{ height: 'calc(100% - 38px)', padding: 0, marginTop: 1, overflow: 'auto' }}
            style={{ width: '50%', height: '100%', overflow: 'hidden' }}
          >
            {checkedUsers.length > 0 ? (
              <List
                size="small"
                dataSource={checkedUsers}
                style={{ height: '100%' }}
                renderItem={(item) => (
                  <List.Item
                    children={`${item.name}（${item.empno}）`}
                    style={{ height: 41, padding: '4px 8px 4px 16px' }}
                    extra={
                      disabled ? null : (
                        <Button
                          type="text"
                          icon={<CloseCircleOutlined />}
                          onClick={() => {
                            setCheckedKeys(checkedKeys.filter((k) => k !== item[valueFieldName]));
                          }}
                        />
                      )
                    }
                  />
                )}
              />
            ) : (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                style={{
                  position: 'absolute',
                  top: '48%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            )}
          </Card>
        </Flex>
      </Modal>
    </Fragment>
  );
};

const ZcUserPicker: FC<IZcUserPickerProps> = (props) => {
  const { that, dataSource, multiple, disabled, valueFieldName } = props;
  const [departments, setDepartments] = useState<IDepartment[]>([]);

  const getDepartments = async () => {
    let result: IDepartment[] = [];
    if (isFunction(dataSource)) {
      result = await dataSource();
    } else if (isString(dataSource)) {
      const http: AxiosInstance = that?.['utils']?.axios;
      if (http) {
        result = (await http.post(dataSource))?.data ?? [];
      } else {
        await axios
          .create()
          .post(dataSource)
          .then(({ data: res }) => {
            if (res.code === 0) {
              result = res.data;
            } else console.error(res);
          })
          .catch((e: AxiosError) => {
            console.error('用户选择器查询出错', e.response.data);
          });
      }
    }
    setDepartments(result);
  };

  useEffect(() => {
    getDepartments();
  }, [dataSource]);

  return (
    <Form.Item {...handleFormItemProps(props)}>
      <UserPicker {...{ departments, disabled, multiple, valueFieldName }} />
    </Form.Item>
  );
};

export { ZcUserPicker };
