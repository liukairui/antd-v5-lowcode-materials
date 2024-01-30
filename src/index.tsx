import _Affix from 'antd/es/affix';
import _Alert from 'antd/es/alert';
import _Anchor from 'antd/es/anchor';
import _App from 'antd/es/app';
import _AutoComplete from 'antd/es/auto-complete';
import _Avatar from 'antd/es/avatar';
import _Badge from 'antd/es/badge';
import _Breadcrumb from 'antd/es/breadcrumb';
import _Button from 'antd/es/button';
import _Calendar from 'antd/es/calendar';
import _Card from 'antd/es/card';
import _Carousel from 'antd/es/carousel';
import _Cascader from 'antd/es/cascader';
import _Checkbox from 'antd/es/checkbox';
import _Collapse from 'antd/es/collapse';
import _ColorPicker from 'antd/es/color-picker';
import _ConfigProvider from 'antd/es/config-provider';
import _DatePicker from 'antd/es/date-picker';
import _Descriptions from 'antd/es/descriptions';
import _Divider from 'antd/es/divider';
import _Drawer from 'antd/es/drawer';
import _Dropdown from 'antd/es/dropdown';
import _Empty from 'antd/es/empty';
import _Flex from 'antd/es/flex';
import _FloatButton from 'antd/es/float-button';
import _Form, { FormInstance } from 'antd/es/form';
import _Col from 'antd/es/grid/col';
import _Row from 'antd/es/grid/row';
import _Image from 'antd/es/image';
import _Input from 'antd/es/input';
import _InputNumber from 'antd/es/input-number';
import _Layout from 'antd/es/layout';
import _List from 'antd/es/list';
import _Mentions from 'antd/es/mentions';
import _Menu from 'antd/es/menu';
import _Message from 'antd/es/message';
import _Modal from 'antd/es/modal';
import _Notification from 'antd/es/notification';
import _Pagination from 'antd/es/pagination';
import _Popconfirm from 'antd/es/popconfirm';
import _Popover from 'antd/es/popover';
import _Progress from 'antd/es/progress';
import _QRCode from 'antd/es/qr-code';
import _Radio from 'antd/es/radio';
import _Rate from 'antd/es/rate';
import _Result from 'antd/es/result';
import _Segmented from 'antd/es/segmented';
import _Select from 'antd/es/select';
import _Skeleton from 'antd/es/skeleton';
import _Slider from 'antd/es/slider';
import _Space from 'antd/es/space/index';
import _Spin from 'antd/es/spin';
import _Statistic from 'antd/es/statistic';
import _Steps from 'antd/es/steps';
import _Switch from 'antd/es/switch';
import _Table, { TableRef } from 'antd/es/table';
import _Tabs from 'antd/es/tabs';
import _Tag from 'antd/es/tag';
import _TimePicker from 'antd/es/time-picker';
import _Timeline from 'antd/es/timeline';
import _Tooltip from 'antd/es/tooltip';
import _Tour from 'antd/es/tour';
import _Transfer from 'antd/es/transfer';
import _Tree from 'antd/es/tree';
import _TreeSelect from 'antd/es/tree-select';
import _Typography from 'antd/es/typography';
import _Upload from 'antd/es/upload';
import _Watermark from 'antd/es/watermark';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import lodash from 'lodash';
import React, {
  ComponentProps as CP,
  Component,
  FC,
  createElement,
  createRef,
  useEffect,
  useState
} from 'react';

dayjs.locale('zh-cn');
window['dayjs'] = dayjs;

window['_'] = lodash;

/** PlainText 纯文本 */
export const PlainText: FC<{ content?: string; id?: string }> = (props) => {
  const { content, children, ...restProps } = props;
  return createElement('span', { children: content, ...restProps });
};

/** Button 按钮 */
export const Button: FC<CP<typeof _Button>> = (props) => {
  return <_Button {...props} />;
};

/** FloatButton 悬浮按钮 */
export const FloatButton: FC<CP<typeof _FloatButton>> = (props) => {
  return <_FloatButton {...props} />;
};
export const FloatButtonBackTop: FC<CP<typeof _FloatButton.BackTop>> = (props) => {
  return <_FloatButton.BackTop {...props} />;
};
export const FloatButtonGroup: FC<CP<typeof _FloatButton.Group>> = (props) => {
  return <_FloatButton.Group {...props} />;
};

/** Typography 排版 */
export const Typography: FC<CP<typeof _Typography>> = (props) => {
  return <_Typography {...props} />;
};
export const TypographyLink: FC<CP<typeof _Typography.Link>> = (props) => {
  return <_Typography.Link {...props} />;
};
export const TypographyParagraph: FC<CP<typeof _Typography.Paragraph>> = (props) => {
  return <_Typography.Paragraph {...props} />;
};
export const TypographyText: FC<CP<typeof _Typography.Text>> = (props) => {
  return <_Typography.Text {...props} />;
};
export const TypographyTitle: FC<CP<typeof _Typography.Title>> = (props) => {
  return <_Typography.Title {...props} />;
};

/** Divider 分割线 */
export const Divider: FC<CP<typeof _Divider>> = (props) => {
  return <_Divider {...props} />;
};

/** Flex 弹性布局 */
export const Flex: FC<CP<typeof _Flex>> = (props) => {
  return <_Flex {...props} />;
};

/** Grid 栅格 */
export const GridCol: FC<CP<typeof _Col>> = (props) => {
  return <_Col {...props} />;
};
export const GridRow: FC<CP<typeof _Row>> = (props) => {
  return <_Row {...props} />;
};

/** Layout 布局 */
export const Layout: FC<CP<typeof _Layout>> = (props) => {
  return <_Layout {...props} />;
};
export const LayoutContent: FC<CP<typeof _Layout.Content>> = (props) => {
  return <_Layout.Content {...props} />;
};
export const LayoutFooter: FC<CP<typeof _Layout.Footer>> = (props) => {
  return <_Layout.Footer {...props} />;
};
export const LayoutHeader: FC<CP<typeof _Layout.Header>> = (props) => {
  return <_Layout.Header {...props} />;
};
export const LayoutSider: FC<CP<typeof _Layout.Sider>> = (props) => {
  return <_Layout.Sider {...props} />;
};

/** Space 间距 */
export const Space: FC<CP<typeof _Space>> = (props) => {
  return <_Space {...props} />;
};
export const SpaceCompact: FC<CP<typeof _Space.Compact>> = (props) => {
  return <_Space.Compact {...props} />;
};

/** Anchor 锚点 */
export const Anchor: FC<CP<typeof _Anchor>> = (props) => {
  return <_Anchor {...props} />;
};

/** Breadcrumb 面包屑 */
export const Breadcrumb: FC<CP<typeof _Breadcrumb>> = (props) => {
  return <_Breadcrumb {...props} />;
};

/** Dropdown 下拉菜单 */
export const Dropdown: FC<CP<typeof _Dropdown>> = (props) => {
  return <_Dropdown {...props} />;
};
export const DropdownButton: FC<CP<typeof _Dropdown.Button>> = (props) => {
  return <_Dropdown.Button {...props} />;
};

/** 导航菜单 Menu */
export const Menu: FC<CP<typeof _Menu>> = (props) => {
  return <_Menu {...props} />;
};

/** Pagination 分页 */
export const Pagination: FC<CP<typeof _Pagination>> = (props) => {
  return <_Pagination {...props} />;
};

/** Steps 步骤条 */
export const Steps: FC<CP<typeof _Steps>> = (props) => {
  return <_Steps {...props} />;
};

/** AutoComplete 自动完成 */
export const AutoComplete: FC<CP<typeof _AutoComplete>> = ({ children, ...props }) => {
  return <_AutoComplete {...props} />;
};

/** Cascader 级联选择 */
export const Cascader: FC<CP<typeof _Cascader>> = ({ children, ...props }) => {
  return <_Cascader {...props} />;
};

/** Checkbox 多选框 */
export const Checkbox: FC<CP<typeof _Checkbox>> = (props) => {
  return <_Checkbox {...props} />;
};
export const CheckboxGroup: FC<CP<typeof _Checkbox.Group>> = ({ children, ...props }) => {
  return <_Checkbox.Group {...props} />;
};

/** ColorPicker 颜色选择器 */
export const ColorPicker: FC<CP<typeof _ColorPicker>> = ({ children, ...props }) => {
  return <_ColorPicker {...props} />;
};

/** DatePicker 日期选择框 */
export const DatePicker: FC<CP<typeof _DatePicker>> = (props) => {
  return <_DatePicker {...props} />;
};
export const DateRangePicker: FC<CP<typeof _DatePicker.RangePicker>> = (props) => {
  return <_DatePicker.RangePicker {...props} />;
};

/** Form 表单 */
export class Form extends Component<CP<typeof _Form>> {
  ref = createRef<FormInstance>();
  render() {
    return <_Form ref={this.ref} {...this.props} />;
  }
}
export const FormErrorList: FC<CP<typeof _Form.ErrorList>> = (props) => {
  return <_Form.ErrorList {...props} />;
};
export const FormItem: FC<CP<typeof _Form.Item>> = (props) => {
  return <_Form.Item {...props} />;
};
export const FormList: FC<CP<typeof _Form.List> & { content: any }> = (props) => {
  const { children, content, ...restProps } = props;
  return <_Form.List children={content} {...restProps} />;
};
export const FormProvider: FC<CP<typeof _Form.Provider>> = (props) => {
  return <_Form.Provider {...props} />;
};

/** Input 输入框 */
export const Input: FC<CP<typeof _Input>> = ({ children, ...props }) => {
  return <_Input {...props} />;
};
export const InputTextArea: FC<CP<typeof _Input.TextArea>> = ({ children, ...props }) => {
  return <_Input.TextArea {...props} />;
};

/** InputNumber 数字输入框 */
export const InputNumber: FC<CP<typeof _InputNumber>> = ({ children, ...props }) => {
  return <_InputNumber {...props} />;
};

/** Mentions 提及 */
export const Mentions: FC<CP<typeof _Mentions>> = ({ children, ...props }) => {
  return <_Mentions {...props} />;
};

/** Radio 单选框 */
export const Radio: FC<CP<typeof _Radio>> = (props) => {
  return <_Radio {...props} />;
};
export const RadioButton: FC<CP<typeof _Radio.Button>> = (props) => {
  return <_Radio.Button {...props} />;
};
export const RadioGroup: FC<CP<typeof _Radio.Group>> = (props) => {
  return <_Radio.Group {...props} />;
};

/** Rate 评分 */
export const Rate: FC<CP<typeof _Rate>> = (props) => {
  return <_Rate {...props} />;
};

/** Select 选择器 */
export const Select: FC<CP<typeof _Select>> = (props) => {
  return <_Select {...props} />;
};

/** Slider 滑动输入条 */
export const Slider: FC<CP<typeof _Slider>> = (props) => {
  return <_Slider {...props} />;
};

/** Switch 开关 */
export const Switch: FC<CP<typeof _Switch>> = (props) => {
  return <_Switch {...props} />;
};

/** TimePicker 时间选择框 */
export const TimePicker: FC<CP<typeof _TimePicker>> = (props) => {
  return <_TimePicker {...props} />;
};
export const TimeRangePicker: FC<CP<typeof _TimePicker.RangePicker>> = (props) => {
  return <_TimePicker.RangePicker {...props} />;
};

/** Transfer 穿梭框 */
export const Transfer: FC<CP<typeof _Transfer>> = ({ children, ...props }) => {
  return <_Transfer {...props} />;
};

/** TreeSelect 树选择 */
export const TreeSelect: FC<CP<typeof _TreeSelect>> = (props) => {
  return <_TreeSelect {...props} />;
};

/** Upload 上传 */
export const Upload: FC<CP<typeof _Upload>> = (props) => {
  return <_Upload {...props} />;
};

/** Avatar 头像 */
export const Avatar: FC<CP<typeof _Avatar>> = (props) => {
  return <_Avatar {...props} />;
};
export const AvatarGroup: FC<CP<typeof _Avatar.Group>> = (props) => {
  return <_Avatar.Group {...props} />;
};

/** Badge 徽标数 */
export const Badge: FC<CP<typeof _Badge>> = (props) => {
  return <_Badge {...props} />;
};
export const BadgeRibbon: FC<CP<typeof _Badge.Ribbon>> = (props) => {
  return <_Badge.Ribbon {...props} />;
};
/** Calendar 日历 */
export const Calendar: FC<CP<typeof _Calendar>> = (props) => {
  return <_Calendar {...props} />;
};

/**
 * Card 卡片
 * 由于封装一层后组件 type 发生改变，无法触发内嵌卡片样式变化，所以需要特殊处理
 * @see https://github.com/ant-design/ant-design/blob/91f77ee6b7c329259e8282fe3b6e78a9715f6da2/components/card/Card.tsx#L90
 */
export const Card: FC<CP<typeof _Card>> = (props) => {
  const [className, setClassName] = useState(null);
  useEffect(() => {
    const isGridMode = (props.children as any[]).find((c) => c.props._componentName === 'CardGrid');
    setClassName(
      isGridMode
        ? props.className
          ? `${props.className} ant-card-contain-grid`
          : 'ant-card-contain-grid'
        : props.className
    );
  }, [props.children]);
  return <_Card {...props} className={className} />;
};
export const CardGrid: FC<CP<typeof _Card.Grid>> = (props) => {
  return <_Card.Grid {...props} />;
};
export const CardMeta: FC<CP<typeof _Card.Meta>> = (props) => {
  return <_Card.Meta {...props} />;
};

/** Carousel 走马灯 */
export const Carousel: FC<CP<typeof _Carousel>> = (props) => {
  return <_Carousel {...props} />;
};

/** Collapse 折叠面板 */
export const Collapse: FC<CP<typeof _Collapse>> = (props) => {
  return <_Collapse {...props} />;
};

/** Descriptions 描述列表 */
export const Descriptions: FC<CP<typeof _Descriptions>> = (props) => {
  return <_Descriptions {...props} />;
};

/** Empty 空状态 */
export const Empty: FC<CP<typeof _Empty>> = (props) => {
  return <_Empty {...props} />;
};

/** Image 图片 */
export const Image: FC<CP<typeof _Image>> = (props) => {
  return <_Image {...props} />;
};
export const ImagePreviewGroup: FC<CP<typeof _Image.PreviewGroup>> = (props) => {
  return <_Image.PreviewGroup {...props} />;
};

/** List 列表 */
export const List: FC<CP<typeof _List>> = (props) => {
  return <_List {...props} />;
};
export const ListItem: FC<CP<typeof _List.Item>> = (props) => {
  return <_List.Item {...props} />;
};
export const ListItemMeta: FC<CP<typeof _List.Item.Meta>> = (props) => {
  return <_List.Item.Meta {...props} />;
};

/** Popover 气泡卡片 */
export const Popover: FC<CP<typeof _Popover>> = (props) => {
  return <_Popover {...props} />;
};

/** QRCode 二维码 */
export const QRCode: FC<CP<typeof _QRCode>> = (props) => {
  return <_QRCode {...props} />;
};

/** Segmented 分段控制器 */
export const Segmented: FC<CP<typeof _Segmented>> = (props) => {
  return <_Segmented {...props} />;
};

/** Statistic 统计数值 */
export const Statistic: FC<CP<typeof _Statistic>> = (props) => {
  return <_Statistic {...props} />;
};
export const StatisticCountdown: FC<CP<typeof _Statistic.Countdown>> = (props) => {
  return <_Statistic.Countdown {...props} />;
};

/** Table 表格 */
export class Table extends Component<CP<typeof _Table>> {
  ref = createRef<TableRef>();
  render() {
    return <_Table ref={this.ref} {...this.props} />;
  }
}
export const TableSummary: FC<CP<typeof _Table.Summary>> = (props) => {
  return <_Table.Summary {...props} />;
};
export const TableSummaryRow: FC<CP<typeof _Table.Summary.Row>> = (props) => {
  return <_Table.Summary.Row {...props} />;
};
export const TableSummaryCell: FC<CP<typeof _Table.Summary.Cell>> = (props) => {
  return <_Table.Summary.Cell {...props} />;
};

/** Tabs 标签页 */
export const Tabs: FC<CP<typeof _Tabs>> = (props) => {
  return <_Tabs {...props} />;
};

/** Tag 标签 */
export const Tag: FC<CP<typeof _Tag>> = (props) => {
  return <_Tag {...props} />;
};
export const TagCheckableTag: FC<CP<typeof _Tag.CheckableTag>> = (props) => {
  return <_Tag.CheckableTag {...props} />;
};

/** Timeline 时间轴 */
export const Timeline: FC<CP<typeof _Timeline>> = (props) => {
  return <_Timeline {...props} />;
};

/** Tooltip 文字提示 */
export const Tooltip: FC<CP<typeof _Tooltip>> = (props) => {
  return <_Tooltip {...props} />;
};

/** Tour 漫游式引导 */
export const Tour: FC<CP<typeof _Tour>> = (props) => {
  return <_Tour {...props} />;
};

/** Tree 树形控件 */
export const Tree: FC<CP<typeof _Tree>> = (props) => {
  return <_Tree {...props} />;
};
export const TreeDirectoryTree: FC<CP<typeof _Tree.DirectoryTree>> = (props) => {
  return <_Tree.DirectoryTree {...props} />;
};

/** Alert 警告提示 */
export const Alert: FC<CP<typeof _Alert>> = (props) => {
  return <_Alert {...props} />;
};
export const AlertErrorBoundary: FC<CP<typeof _Alert.ErrorBoundary>> = (props) => {
  return <_Alert.ErrorBoundary {...props} />;
};

/** Drawer 抽屉 */
export const Drawer: FC<CP<typeof _Drawer>> = (props) => {
  return <_Drawer {...props} />;
};

/** Modal 对话框 */
export const Modal: FC<CP<typeof _Modal>> = (props) => {
  return <_Modal {...props} />;
};

/** Popconfirm 气泡确认框 */
export const Popconfirm: FC<CP<typeof _Popconfirm>> = (props) => {
  return <_Popconfirm {...props} />;
};

/** Progress 进度条 */
export const Progress: FC<CP<typeof _Progress>> = (props) => {
  return <_Progress {...props} />;
};

/** Result 结果 */
export const Result: FC<CP<typeof _Result>> = (props) => {
  return <_Result {...props} />;
};

/** Skeleton 骨架屏 */
export const Skeleton: FC<CP<typeof _Skeleton>> = (props) => {
  return <_Skeleton {...props} />;
};
export const SkeletonAvatar: FC<CP<typeof _Skeleton.Avatar>> = (props) => {
  return <_Skeleton.Avatar {...props} />;
};
export const SkeletonButton: FC<CP<typeof _Skeleton.Button>> = (props) => {
  return <_Skeleton.Button {...props} />;
};
export const SkeletonImage: FC<CP<typeof _Skeleton.Image>> = (props) => {
  return <_Skeleton.Image {...props} />;
};
export const SkeletonInput: FC<CP<typeof _Skeleton.Input>> = (props) => {
  return <_Skeleton.Input {...props} />;
};
export const SkeletonNode: FC<CP<typeof _Skeleton.Node>> = (props) => {
  return <_Skeleton.Node {...props} />;
};

/** Spin 加载中 */
export const Spin: FC<CP<typeof _Spin>> = (props) => {
  return <_Spin {...props} />;
};

/** Watermark 水印 */
export const Watermark: FC<CP<typeof _Watermark>> = (props) => {
  return <_Watermark {...props} />;
};

/** Affix 固钉 */
export const Affix: FC<CP<typeof _Affix>> = (props) => {
  return <_Affix {...props} />;
};

/** App 包裹组件 */
export const App: FC<CP<typeof _App> & { this: any }> = (props) => {
  const [message, messageContextHolder] = _Message.useMessage(props.message);
  const [modal, modalContextHolder] = _Modal.useModal();
  const [notification, notificationContextHolder] = _Notification.useNotification(
    props.notification
  );
  const { appHelper } = props.this.context;
  appHelper.utils = { ...appHelper.utils, message, modal, notification };
  return (
    <ConfigProvider>
      {messageContextHolder}
      {modalContextHolder}
      {notificationContextHolder}
      <_App children={props.children} style={props.style} />
    </ConfigProvider>
  );
};

/** ConfigProvider 全局化配置 */
export const ConfigProvider: FC<CP<typeof _ConfigProvider>> = (props) => {
  const { locale, ...restProps } = props;
  return <_ConfigProvider locale={{ ...zhCN, ...locale }} {...restProps} />;
};

/** ZcForm 表单 [零码] */
export { ZcForm } from './components/zero-code/zc-form';

/** ZcUserPicker 用户选择器 [零码] */
export { ZcUserPicker } from './components/zero-code/zc-user-picker';
