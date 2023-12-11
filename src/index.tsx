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
import { ComponentProps as CP, Component, FC, Fragment, createElement, createRef, useEffect, useState } from 'react';

dayjs.locale('zh-cn');
window['dayjs'] = dayjs;
window['_'] = lodash;

/** PlainText 纯文本 */
const PlainText: FC<{ content?: string; id?: string }> = (props) => {
  const { content, children, ...restProps } = props;
  return createElement('span', { children: content, ...restProps });
};
export { PlainText };

/** Button 按钮 */
const Button: FC<CP<typeof _Button>> = (props) => <_Button {...props} />;
export { Button };

/** FloatButton 悬浮按钮 */
const FloatButton: FC<CP<typeof _FloatButton>> = (props) => <_FloatButton {...props} />;
const FloatButtonBackTop: FC<CP<typeof _FloatButton.BackTop>> = (props) => <_FloatButton.BackTop {...props} />;
const FloatButtonGroup: FC<CP<typeof _FloatButton.Group>> = (props) => <_FloatButton.Group {...props} />;
export { FloatButton, FloatButtonBackTop, FloatButtonGroup };

/** Typography 排版 */
const Typography: FC<CP<typeof _Typography>> = (props) => <_Typography {...props} />;
const TypographyLink: FC<CP<typeof _Typography.Link>> = (props) => <_Typography.Link {...props} />;
const TypographyParagraph: FC<CP<typeof _Typography.Paragraph>> = (props) => <_Typography.Paragraph {...props} />;
const TypographyText: FC<CP<typeof _Typography.Text>> = (props) => <_Typography.Text {...props} />;
const TypographyTitle: FC<CP<typeof _Typography.Title>> = (props) => <_Typography.Title {...props} />;
export { Typography, TypographyLink, TypographyParagraph, TypographyText, TypographyTitle };

/** Divider 分割线 */
const Divider: FC<CP<typeof _Divider>> = (props) => <_Divider {...props} />;
export { Divider };

/** Flex 弹性布局 */
const Flex: FC<CP<typeof _Flex>> = (props) => <_Flex {...props} />;
export { Flex };

/** Grid 栅格 */
const GridCol: FC<CP<typeof _Col>> = (props) => <_Col {...props} />;
const GridRow: FC<CP<typeof _Row>> = (props) => <_Row {...props} />;
export { GridCol, GridRow };

/** Layout 布局 */
const Layout: FC<CP<typeof _Layout>> = (props) => <_Layout {...props} />;
const LayoutContent: FC<CP<typeof _Layout.Content>> = (props) => <_Layout.Content {...props} />;
const LayoutFooter: FC<CP<typeof _Layout.Footer>> = (props) => <_Layout.Footer {...props} />;
const LayoutHeader: FC<CP<typeof _Layout.Header>> = (props) => <_Layout.Header {...props} />;
const LayoutSider: FC<CP<typeof _Layout.Sider>> = (props) => <_Layout.Sider {...props} />;
export { Layout, LayoutContent, LayoutFooter, LayoutHeader, LayoutSider };

/** Space 间距 */
const Space: FC<CP<typeof _Space>> = (props) => <_Space {...props} />;
const SpaceCompact: FC<CP<typeof _Space.Compact>> = (props) => <_Space.Compact {...props} />;
export { Space, SpaceCompact };

/** Anchor 锚点 */
const Anchor: FC<CP<typeof _Anchor>> = (props) => <_Anchor {...props} />;
export { Anchor };

/** Breadcrumb 面包屑 */
const Breadcrumb: FC<CP<typeof _Breadcrumb>> = (props) => <_Breadcrumb {...props} />;
export { Breadcrumb };

/** Dropdown 下拉菜单 */
const Dropdown: FC<CP<typeof _Dropdown>> = (props) => <_Dropdown {...props} />;
const DropdownButton: FC<CP<typeof _Dropdown.Button>> = (props) => <_Dropdown.Button {...props} />;
export { Dropdown, DropdownButton };

/** 导航菜单 Menu */
const Menu: FC<CP<typeof _Menu>> = (props) => <_Menu {...props} />;
export { Menu };

/** Pagination 分页 */
const Pagination: FC<CP<typeof _Pagination>> = (props) => <_Pagination {...props} />;
export { Pagination };

/** Steps 步骤条 */
const Steps: FC<CP<typeof _Steps>> = (props) => <_Steps {...props} />;
export { Steps };

/** AutoComplete 自动完成 */
const AutoComplete: FC<CP<typeof _AutoComplete>> = ({ children, ...props }) => <_AutoComplete {...props} />;
export { AutoComplete };

/** Cascader 级联选择 */
const Cascader: FC<CP<typeof _Cascader>> = ({ children, ...props }) => <_Cascader {...props} />;
export { Cascader };

/** Checkbox 多选框 */
const Checkbox: FC<CP<typeof _Checkbox>> = (props) => <_Checkbox {...props} />;
const CheckboxGroup: FC<CP<typeof _Checkbox.Group>> = ({ children, ...props }) => <_Checkbox.Group {...props} />;
export { Checkbox, CheckboxGroup };

/** ColorPicker 颜色选择器 */
const ColorPicker: FC<CP<typeof _ColorPicker>> = ({ children, ...props }) => <_ColorPicker {...props} />;
export { ColorPicker };

/** DatePicker 日期选择框 */
const DatePicker: FC<CP<typeof _DatePicker>> = (props) => <_DatePicker {...props} />;
const DateRangePicker: FC<CP<typeof _DatePicker.RangePicker>> = (props) => <_DatePicker.RangePicker {...props} />;
export { DatePicker, DateRangePicker };

/** Form 表单 */
class Form extends Component<CP<typeof _Form>> {
  ref = createRef<FormInstance>();
  render = () => <_Form ref={this.ref} {...this.props} />;
}
const FormErrorList: FC<CP<typeof _Form.ErrorList>> = (props) => <_Form.ErrorList {...props} />;
const FormItem: FC<CP<typeof _Form.Item>> = (props) => <_Form.Item {...props} />;
const FormList: FC<CP<typeof _Form.List> & { content: any }> = ({ children, content, ...props }) => <_Form.List {...props} children={content} />;
const FormProvider: FC<CP<typeof _Form.Provider>> = (props) => <_Form.Provider {...props} />;
export { Form, FormErrorList, FormItem, FormList, FormProvider };

/** Input 输入框 */
const Input: FC<CP<typeof _Input>> = ({ children, ...props }) => <_Input {...props} />;
const InputTextArea: FC<CP<typeof _Input.TextArea>> = ({ children, ...props }) => <_Input.TextArea {...props} />;
export { Input, InputTextArea };

/** InputNumber 数字输入框 */
const InputNumber: FC<CP<typeof _InputNumber>> = ({ children, ...props }) => <_InputNumber {...props} />;
export { InputNumber };

/** Mentions 提及 */
const Mentions: FC<CP<typeof _Mentions>> = ({ children, ...props }) => <_Mentions {...props} />;
export { Mentions };

/** Radio 单选框 */
const Radio: FC<CP<typeof _Radio>> = (props) => <_Radio {...props} />;
const RadioButton: FC<CP<typeof _Radio.Button>> = (props) => <_Radio.Button {...props} />;
const RadioGroup: FC<CP<typeof _Radio.Group>> = (props) => <_Radio.Group {...props} />;
export { Radio, RadioButton, RadioGroup };

/** Rate 评分 */
const Rate: FC<CP<typeof _Rate>> = (props) => <_Rate {...props} />;
export { Rate };

/** Select 选择器 */
const Select: FC<CP<typeof _Select>> = (props) => <_Select {...props} />;
export { Select };

/** Slider 滑动输入条 */
const Slider: FC<CP<typeof _Slider>> = (props) => <_Slider {...props} />;
export { Slider };

/** Switch 开关 */
const Switch: FC<CP<typeof _Switch>> = (props) => <_Switch {...props} />;
export { Switch };

/** TimePicker 时间选择框 */
const TimePicker: FC<CP<typeof _TimePicker>> = (props) => <_TimePicker {...props} />;
const TimeRangePicker: FC<CP<typeof _TimePicker.RangePicker>> = (props) => <_TimePicker.RangePicker {...props} />;
export { TimePicker, TimeRangePicker };

/** Transfer 穿梭框 */
const Transfer: FC<CP<typeof _Transfer>> = ({ children, ...props }) => <_Transfer {...props} />;
export { Transfer };

/** TreeSelect 树选择 */
const TreeSelect: FC<CP<typeof _TreeSelect>> = (props) => <_TreeSelect {...props} />;
export { TreeSelect };

/** Upload 上传 */
const Upload: FC<CP<typeof _Upload>> = (props) => <_Upload {...props} />;
export { Upload };

/** Avatar 头像 */
const Avatar: FC<CP<typeof _Avatar>> = (props) => <_Avatar {...props} />;
const AvatarGroup: FC<CP<typeof _Avatar.Group>> = (props) => <_Avatar.Group {...props} />;
export { Avatar, AvatarGroup };

/** Badge 徽标数 */
const Badge: FC<CP<typeof _Badge>> = (props) => <_Badge {...props} />;
const BadgeRibbon: FC<CP<typeof _Badge.Ribbon>> = (props) => <_Badge.Ribbon {...props} />;
export { Badge, BadgeRibbon };

/** Calendar 日历 */
const Calendar: FC<CP<typeof _Calendar>> = (props) => <_Calendar {...props} />;
export { Calendar };

/** Card 卡片 */
const Card: FC<CP<typeof _Card>> = (props) => {
  const [className, setClassName] = useState(null);
  /**
   * 处理网格型内嵌卡片 @see https://github.com/ant-design/ant-design/blob/91f77ee6b7c329259e8282fe3b6e78a9715f6da2/components/card/Card.tsx#L90
   * */
  useEffect(() => {
    const isGridMode = (props.children as any[]).find((c) => c.props._componentName === 'CardGrid');
    setClassName(isGridMode ? (props.className ? `${props.className} ant-card-contain-grid` : 'ant-card-contain-grid') : props.className);
  }, [props.children]);
  return <_Card {...props} className={className} />;
};
const CardGrid: FC<CP<typeof _Card.Grid>> = (props) => <_Card.Grid {...props} />;
const CardMeta: FC<CP<typeof _Card.Meta>> = (props) => <_Card.Meta {...props} />;
export { Card, CardGrid, CardMeta };

/** Carousel 走马灯 */
const Carousel: FC<CP<typeof _Carousel>> = (props) => <_Carousel {...props} />;
export { Carousel };

/** Collapse 折叠面板 */
const Collapse: FC<CP<typeof _Collapse>> = (props) => <_Collapse {...props} />;
export { Collapse };

/** Descriptions 描述列表 */
const Descriptions: FC<CP<typeof _Descriptions>> = (props) => <_Descriptions {...props} />;
export { Descriptions };

/** Empty 空状态 */
const Empty: FC<CP<typeof _Empty>> = (props) => <_Empty {...props} />;
export { Empty };

/** Image 图片 */
const Image: FC<CP<typeof _Image>> = (props) => <_Image {...props} />;
const ImagePreviewGroup: FC<CP<typeof _Image.PreviewGroup>> = (props) => <_Image.PreviewGroup {...props} />;
export { Image, ImagePreviewGroup };

/** List 列表 */
const List: FC<CP<typeof _List>> = (props) => <_List {...props} />;
const ListItem: FC<CP<typeof _List.Item>> = (props) => <_List.Item {...props} />;
const ListItemMeta: FC<CP<typeof _List.Item.Meta>> = (props) => <_List.Item.Meta {...props} />;
export { List, ListItem, ListItemMeta };

/** Popover 气泡卡片 */
const Popover: FC<CP<typeof _Popover>> = (props) => <_Popover {...props} />;
export { Popover };

/** QRCode 二维码 */
const QRCode: FC<CP<typeof _QRCode>> = (props) => <_QRCode {...props} />;
export { QRCode };

/** Segmented 分段控制器 */
const Segmented: FC<CP<typeof _Segmented>> = (props) => <_Segmented {...props} />;
export { Segmented };

/** Statistic 统计数值 */
const Statistic: FC<CP<typeof _Statistic>> = (props) => <_Statistic {...props} />;
const StatisticCountdown: FC<CP<typeof _Statistic.Countdown>> = (props) => <_Statistic.Countdown {...props} />;
export { Statistic, StatisticCountdown };

/** Table 表格 */
class Table extends Component<CP<typeof _Table>> {
  ref = createRef<TableRef>();
  render = () => <_Table ref={this.ref} {...this.props} />;
}

export { Table };

/** Tabs 标签页 */
const Tabs: FC<CP<typeof _Tabs>> = (props) => <_Tabs {...props} />;
export { Tabs };

/** Tag 标签 */
const Tag: FC<CP<typeof _Tag>> = (props) => <_Tag {...props} />;
const TagCheckableTag: FC<CP<typeof _Tag.CheckableTag>> = (props) => <_Tag.CheckableTag {...props} />;
export { Tag, TagCheckableTag };

/** Timeline 时间轴 */
const Timeline: FC<CP<typeof _Timeline>> = (props) => <_Timeline {...props} />;
export { Timeline };

/** Tooltip 文字提示 */
const Tooltip: FC<CP<typeof _Tooltip>> = (props) => <_Tooltip {...props} />;
export { Tooltip };

/** Tour 漫游式引导 */
const Tour: FC<CP<typeof _Tour>> = (props) => <_Tour {...props} />;
export { Tour };

/** Tree 树形控件 */
const Tree: FC<CP<typeof _Tree>> = (props) => <_Tree {...props} />;
const TreeDirectoryTree: FC<CP<typeof _Tree.DirectoryTree>> = (props) => <_Tree.DirectoryTree {...props} />;
export { Tree, TreeDirectoryTree };

/** Alert 警告提示 */
const Alert: FC<CP<typeof _Alert>> = (props) => <_Alert {...props} />;
const AlertErrorBoundary: FC<CP<typeof _Alert.ErrorBoundary>> = (props) => <_Alert.ErrorBoundary {...props} />;
export { Alert, AlertErrorBoundary };

/** Drawer 抽屉 */
const Drawer: FC<CP<typeof _Drawer>> = (props) => <_Drawer {...props} />;
export { Drawer };

/** Message 全局提示 */

/** Modal 对话框 */
const Modal: FC<CP<typeof _Modal>> = (props) => <_Modal {...props} />;
export { Modal };

/** Notification 通知提醒框 */

/** Popconfirm 气泡确认框 */
const Popconfirm: FC<CP<typeof _Popconfirm>> = (props) => <_Popconfirm {...props} />;
export { Popconfirm };

/** Progress 进度条 */
const Progress: FC<CP<typeof _Progress>> = (props) => <_Progress {...props} />;
export { Progress };

/** Result 结果 */
const Result: FC<CP<typeof _Result>> = (props) => <_Result {...props} />;
export { Result };

/** Skeleton 骨架屏 */
const Skeleton: FC<CP<typeof _Skeleton>> = (props) => <_Skeleton {...props} />;
const SkeletonAvatar: FC<CP<typeof _Skeleton.Avatar>> = (props) => <_Skeleton.Avatar {...props} />;
const SkeletonButton: FC<CP<typeof _Skeleton.Button>> = (props) => <_Skeleton.Button {...props} />;
const SkeletonImage: FC<CP<typeof _Skeleton.Image>> = (props) => <_Skeleton.Image {...props} />;
const SkeletonInput: FC<CP<typeof _Skeleton.Input>> = (props) => <_Skeleton.Input {...props} />;
const SkeletonNode: FC<CP<typeof _Skeleton.Node>> = (props) => <_Skeleton.Node {...props} />;
export { Skeleton, SkeletonAvatar, SkeletonButton, SkeletonImage, SkeletonInput, SkeletonNode };

/** Spin 加载中 */
const Spin: FC<CP<typeof _Spin>> = (props) => <_Spin {...props} />;
export { Spin };

/** Watermark 水印 */
const Watermark: FC<CP<typeof _Watermark>> = (props) => <_Watermark {...props} />;
export { Watermark };

/** Affix 固钉 */
const Affix: FC<CP<typeof _Affix>> = (props) => <_Affix {...props} />;
export { Affix };

/** App 包裹组件 */
const App: FC<CP<typeof _App> & { this: any }> = (props) => {
  const [message, messageContextHolder] = _Message.useMessage(props.message);
  const [modal, modalContextHolder] = _Modal.useModal();
  const [notification, notificationContextHolder] = _Notification.useNotification(props.notification);
  const { appHelper } = props.this.context;
  appHelper.utils = { ...appHelper.utils, message, modal, notification };
  return (
    <Fragment>
      {messageContextHolder}
      {modalContextHolder}
      {notificationContextHolder}
      <_App children={props.children} />
    </Fragment>
  );
};
export { App };

/** ConfigProvider 全局化配置 */
const ConfigProvider: FC<CP<typeof _ConfigProvider>> = (props) => {
  const { locale, ...restProps } = props;
  return <_ConfigProvider locale={{ ...zhCN, ...locale }} {...restProps} />;
};
export { ConfigProvider };
