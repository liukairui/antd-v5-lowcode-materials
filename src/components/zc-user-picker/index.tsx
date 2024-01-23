import { CloseCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Card, Empty, Flex, Form, Input, List, Modal, Select, Tree } from 'antd/es';
import { DataNode } from 'antd/es/tree';
import { FC, Fragment, Key, createElement, useEffect, useMemo, useState } from 'react';
import { IZcFieldProps } from 'src/types';

type IKey = string;

interface IUserPickerProps {
  departments: IDepartment[];
  disabled?: boolean;
  multiple?: boolean;
  onChange?: (value: IKey[] | null) => void;
  value?: IKey[] | null;
}

interface IZcUserPickerProps extends IZcFieldProps {
  dataSource?: Function;
  multiple?: boolean;
}

const UserPicker: FC<IUserPickerProps> = (props) => {
  const { departments, disabled = false, multiple = true, onChange, value } = props;
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [keyword, setKeyword] = useState('');

  /* 获取所有员工（递归） */
  const getMembers = (departments: IDepartment[]): IEmployee[] => {
    return departments.flatMap((department) => [...department.memList, ...getMembers(department.nodes ?? [])]);
  };

  /* 获取所有部门的 key（递归） */
  const getDepartmentKeys = (departments: IDepartment[]): IKey[] => {
    return departments.flatMap((department) => [department.depid, ...getDepartmentKeys(department.nodes ?? [])]);
  };

  /* 获取所有父节点的 key（递归） */
  const findParentKeys = (tree: DataNode[], targetKey: Key): Key[] | null => {
    const search = (nodes: DataNode[], key: Key, parents: Key[]): Key[] | null => {
      for (const node of nodes) {
        if (node.key === key) {
          return [...parents, node.key];
        }
        if (node.children) {
          const result = search(node.children, key, [...parents, node.key]);
          if (result) return result;
        }
      }
      return null;
    };
    return search(tree, targetKey, []);
  };

  /* 生成树结构（递归） */
  const generateTree = (departments: IDepartment[]): DataNode[] => {
    return departments.map((department) => {
      const nodeChildren = department.nodes ? generateTree(department.nodes) : [];
      const memberChildren =
        department.memList?.map((member) => {
          return {
            title: `${member.empname}（${member.empno}）`,
            key: member.empno
          };
        }) ?? [];
      return {
        checkable: multiple ? true : !('memList' in department),
        children: [...nodeChildren, ...memberChildren],
        key: department.depid,
        title: department.name
      };
    });
  };

  /* 筛选树结构（递归） */
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

  /* 树数据 */
  const treeData: DataNode[] = useMemo(() => {
    const data = generateTree(departments);
    if (keyword == null || keyword === '') {
      if (departments.length > 0) setExpandedKeys([departments[0].depid]);
      return data;
    } else {
      setExpandedKeys(getDepartmentKeys(departments));
      return filterTreeDataByKeyword(data, keyword);
    }
  }, [departments, keyword]);

  /* 所有部门的 key */
  const departmentsKeys: IKey[] = useMemo(() => {
    return getDepartmentKeys(departments);
  }, [departments]);

  /* 所有员工 */
  const users: IEmployee[] = useMemo(() => {
    return getMembers(departments);
  }, [departments]);

  /* 已选中的员工的 key */
  const checkedUsersKeys: IKey[] = useMemo(() => {
    return checkedKeys.filter((key) => !departmentsKeys.includes(key));
  }, [checkedKeys]);

  /* 已选中的员工 */
  const checkedUsers: IEmployee[] = useMemo(() => {
    return users.filter((user) => checkedUsersKeys.includes(user.empno));
  }, [checkedUsersKeys]);

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
        options={users.map((user) => ({ label: `${user.empname}（${user.empno}）`, value: user.empno }))}
        value={value}
      />
      <Modal
        open={showModal}
        onOk={() => {
          onChange(checkedUsersKeys);
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
                  autoExpandParent={autoExpandParent}
                  checkable
                  checkedKeys={checkedKeys}
                  disabled={disabled}
                  expandedKeys={expandedKeys}
                  selectable={false}
                  treeData={treeData}
                  onCheck={(checked: IKey[]) => {
                    /* 单选模式下取末项 */
                    const checkedKeys = multiple ? checked : checked.length > 0 ? [checked[checked.length - 1]] : checked;
                    setCheckedKeys(checkedKeys);
                  }}
                  onExpand={(expandedKeysValue: IKey[]) => {
                    setExpandedKeys(expandedKeysValue);
                    setAutoExpandParent(false);
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
                    children={`${item.empname}（${item.empno}）`}
                    style={{ height: 41, padding: '4px 8px 4px 16px' }}
                    extra={
                      disabled ? null : (
                        <Button
                          type="text"
                          icon={<CloseCircleOutlined />}
                          onClick={() => {
                            const removeKeys = findParentKeys(treeData, item.empno);
                            setCheckedKeys(checkedKeys.filter((k) => !removeKeys.includes(k)));
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
  const { dataSource, multiple, disabled, label, name, required } = props;
  const [departments, setDepartments] = useState<IDepartment[]>([]);

  const getDepartments = async () => {
    setDepartments(dataSource ? await dataSource?.() : []);
  };

  useEffect(() => {
    getDepartments();
  }, [dataSource]);

  return (
    <Form.Item {...{ label, name, rules: [{ required }] }}>
      <UserPicker departments={departments} disabled={disabled} multiple={multiple} />
    </Form.Item>
  );
};

export { ZcUserPicker };
