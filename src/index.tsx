import { ComponentProps as CP, Component, FC, Fragment, createElement, createRef, useEffect, useState } from 'react';

/**
 * PlainText 纯文本
 */
const PlainText: FC<{ content?: string; id?: string }> = (props) => {
  const { content, children, ...restProps } = props;
  return createElement('span', { children: content, ...restProps });
};
export { PlainText };

/**
 * Button 按钮
 */
import _Button from 'antd/es/button';
const Button: FC<CP<typeof _Button>> = (props) => <_Button {...props} />;
export { Button };

/**
 * FloatButton 悬浮按钮
 */
import _FloatButton from 'antd/es/float-button';
const FloatButton: FC<CP<typeof _FloatButton>> = (props) => <_FloatButton {...props} />;
const FloatButtonBackTop: FC<CP<typeof _FloatButton.BackTop>> = (props) => <_FloatButton.BackTop {...props} />;
const FloatButtonGroup: FC<CP<typeof _FloatButton.Group>> = (props) => <_FloatButton.Group {...props} />;
export { FloatButton, FloatButtonBackTop, FloatButtonGroup };

/**
 * Typography 排版
 */
import _Typography from 'antd/es/typography';
const Typography: FC<CP<typeof _Typography>> = (props) => <_Typography {...props} />;
const TypographyLink: FC<CP<typeof _Typography.Link>> = (props) => <_Typography.Link {...props} />;
const TypographyParagraph: FC<CP<typeof _Typography.Paragraph>> = (props) => <_Typography.Paragraph {...props} />;
const TypographyText: FC<CP<typeof _Typography.Text>> = (props) => <_Typography.Text {...props} />;
const TypographyTitle: FC<CP<typeof _Typography.Title>> = (props) => <_Typography.Title {...props} />;
export { Typography, TypographyLink, TypographyParagraph, TypographyText, TypographyTitle };

/**
 * Divider 分割线
 */
import _Divider from 'antd/es/divider';
const Divider: FC<CP<typeof _Divider>> = (props) => <_Divider {...props} />;
export { Divider };

/**
 * Flex 弹性布局
 */
import _Flex from 'antd/es/flex';
const Flex: FC<CP<typeof _Flex>> = (props) => <_Flex {...props} />;
export { Flex };

/**
 * Grid 栅格
 */
import _Col from 'antd/es/grid/col';
import _Row from 'antd/es/grid/row';
const GridCol: FC<CP<typeof _Col>> = (props) => <_Col {...props} />;
const GridRow: FC<CP<typeof _Row>> = (props) => <_Row {...props} />;
export { GridCol, GridRow };

/**
 * Layout 布局
 */
import _Layout from 'antd/es/layout';
const Layout: FC<CP<typeof _Layout>> = (props) => <_Layout {...props} />;
const LayoutContent: FC<CP<typeof _Layout.Content>> = (props) => <_Layout.Content {...props} />;
const LayoutFooter: FC<CP<typeof _Layout.Footer>> = (props) => <_Layout.Footer {...props} />;
const LayoutHeader: FC<CP<typeof _Layout.Header>> = (props) => <_Layout.Header {...props} />;
const LayoutSider: FC<CP<typeof _Layout.Sider>> = (props) => <_Layout.Sider {...props} />;
export { Layout, LayoutContent, LayoutFooter, LayoutHeader, LayoutSider };

/**
 * Space 间距
 */
import _Space from 'antd/es/space/index';
const Space: FC<CP<typeof _Space>> = (props) => <_Space {...props} />;
const SpaceCompact: FC<CP<typeof _Space.Compact>> = (props) => <_Space.Compact {...props} />;
export { Space, SpaceCompact };

/**
 * Anchor 锚点
 */
import _Anchor from 'antd/es/anchor';
const Anchor: FC<CP<typeof _Anchor>> = (props) => <_Anchor {...props} />;
export { Anchor };

/**
 * Breadcrumb 面包屑
 */
import _Breadcrumb from 'antd/es/breadcrumb';
const Breadcrumb: FC<CP<typeof _Breadcrumb>> = (props) => <_Breadcrumb {...props} />;
export { Breadcrumb };

/**
 * Dropdown 下拉菜单
 */
import _Dropdown from 'antd/es/dropdown';
const Dropdown: FC<CP<typeof _Dropdown>> = (props) => <_Dropdown {...props} />;
const DropdownButton: FC<CP<typeof _Dropdown.Button>> = (props) => <_Dropdown.Button {...props} />;
export { Dropdown, DropdownButton };

/**
 * 导航菜单 Menu
 */
import _Menu from 'antd/es/menu';
const Menu: FC<CP<typeof _Menu>> = (props) => <_Menu {...props} />;
export { Menu };

/**
 * Pagination 分页
 */
import _Pagination from 'antd/es/pagination';
const Pagination: FC<CP<typeof _Pagination>> = (props) => <_Pagination {...props} />;
export { Pagination };

/**
 * Steps 步骤条
 */
import _Steps from 'antd/es/steps';
const Steps: FC<CP<typeof _Steps>> = (props) => <_Steps {...props} />;
export { Steps };

/**
 * AutoComplete 自动完成
 */
import _AutoComplete from 'antd/es/auto-complete';
const AutoComplete: FC<CP<typeof _AutoComplete>> = ({ children, ...props }) => <_AutoComplete {...props} />;
export { AutoComplete };

/**
 * Cascader 级联选择
 */
import _Cascader from 'antd/es/cascader';
const Cascader: FC<CP<typeof _Cascader>> = ({ children, ...props }) => <_Cascader {...props} />;
export { Cascader };

/**
 * Checkbox 多选框
 */
import _Checkbox from 'antd/es/checkbox';
const Checkbox: FC<CP<typeof _Checkbox>> = (props) => <_Checkbox {...props} />;
const CheckboxGroup: FC<CP<typeof _Checkbox.Group>> = ({ children, ...props }) => <_Checkbox.Group {...props} />;
export { Checkbox, CheckboxGroup };

/**
 * ColorPicker 颜色选择器
 */
import _ColorPicker from 'antd/es/color-picker';
const ColorPicker: FC<CP<typeof _ColorPicker>> = ({ children, ...props }) => <_ColorPicker {...props} />;
export { ColorPicker };

/**
 * DatePicker 日期选择框
 */
import _DatePicker from 'antd/es/date-picker';
const DatePicker: FC<CP<typeof _DatePicker>> = (props) => <_DatePicker {...props} />;
const DateRangePicker: FC<CP<typeof _DatePicker.RangePicker>> = (props) => <_DatePicker.RangePicker {...props} />;
export { DatePicker, DateRangePicker };

/**
 * Form 表单
 */
import _Form, { FormInstance } from 'antd/es/form';
class Form extends Component<CP<typeof _Form>> {
  ref = createRef<FormInstance>();
  render = () => <_Form ref={this.ref} {...this.props} />;
}
const FormErrorList: FC<CP<typeof _Form.ErrorList>> = (props) => <_Form.ErrorList {...props} />;
const FormItem: FC<CP<typeof _Form.Item>> = (props) => <_Form.Item {...props} />;
const FormList: FC<CP<typeof _Form.List> & { content: any }> = ({ children, content, ...props }) => <_Form.List {...props} children={content} />;
const FormProvider: FC<CP<typeof _Form.Provider>> = (props) => <_Form.Provider {...props} />;
export { Form, FormErrorList, FormItem, FormList, FormProvider };

/**
 * Input 输入框
 */
import _Input from 'antd/es/input';
const Input: FC<CP<typeof _Input>> = ({ children, ...props }) => <_Input {...props} />;
const InputTextArea: FC<CP<typeof _Input.TextArea>> = ({ children, ...props }) => <_Input.TextArea {...props} />;
export { Input, InputTextArea };

/**
 * InputNumber 数字输入框
 */
import _InputNumber from 'antd/es/input-number';
const InputNumber: FC<CP<typeof _InputNumber>> = ({ children, ...props }) => <_InputNumber {...props} />;
export { InputNumber };

/**
 * Mentions 提及
 */
import _Mentions from 'antd/es/mentions';
const Mentions: FC<CP<typeof _Mentions>> = ({ children, ...props }) => <_Mentions {...props} />;
export { Mentions };

/**
 * Radio 单选框
 */
import _Radio from 'antd/es/radio';
const Radio: FC<CP<typeof _Radio>> = (props) => <_Radio {...props} />;
const RadioButton: FC<CP<typeof _Radio.Button>> = (props) => <_Radio.Button {...props} />;
const RadioGroup: FC<CP<typeof _Radio.Group>> = (props) => <_Radio.Group {...props} />;
export { Radio, RadioButton, RadioGroup };

/**
 * Rate 评分
 */
import _Rate from 'antd/es/rate';
const Rate: FC<CP<typeof _Rate>> = (props) => <_Rate {...props} />;
export { Rate };

/**
 * Select 选择器
 */
import _Select from 'antd/es/select';
const Select: FC<CP<typeof _Select>> = (props) => <_Select {...props} />;
export { Select };

/**
 * Slider 滑动输入条
 */
import _Slider from 'antd/es/slider';
const Slider: FC<CP<typeof _Slider>> = (props) => <_Slider {...props} />;
export { Slider };

/**
 * Switch 开关
 */
import _Switch from 'antd/es/switch';
const Switch: FC<CP<typeof _Switch>> = (props) => <_Switch {...props} />;
export { Switch };

/**
 * TimePicker 时间选择框
 */
import _TimePicker from 'antd/es/time-picker';
const TimePicker: FC<CP<typeof _TimePicker>> = (props) => <_TimePicker {...props} />;
const TimeRangePicker: FC<CP<typeof _TimePicker.RangePicker>> = (props) => <_TimePicker.RangePicker {...props} />;
export { TimePicker, TimeRangePicker };

/**
 * Transfer 穿梭框
 */
import _Transfer, { TransferProps } from 'antd/es/transfer';
const Transfer: FC<TransferProps<any>> = ({ children, ...props }) => <_Transfer {...props} />;
export { Transfer };

/**
 * TreeSelect 树选择
 */
import _TreeSelect from 'antd/es/tree-select';
const TreeSelect: FC<CP<typeof _TreeSelect>> = (props) => <_TreeSelect {...props} />;
export { TreeSelect };

/**
 * Upload 上传
 */
import _Upload from 'antd/es/upload';
const Upload: FC<CP<typeof _Upload>> = (props) => <_Upload {...props} />;
export { Upload };

/**
 * Avatar 头像
 */
import _Avatar from 'antd/es/avatar';
const Avatar: FC<CP<typeof _Avatar>> = (props) => <_Avatar {...props} />;
const AvatarGroup: FC<CP<typeof _Avatar.Group>> = (props) => <_Avatar.Group {...props} />;
export { Avatar, AvatarGroup };

/**
 * Badge 徽标数
 */
import _Badge from 'antd/es/badge';
const Badge: FC<CP<typeof _Badge>> = (props) => <_Badge {...props} />;
const BadgeRibbon: FC<CP<typeof _Badge.Ribbon>> = (props) => <_Badge.Ribbon {...props} />;
export { Badge, BadgeRibbon };

/**
 * Calendar 日历
 */
import _Calendar from 'antd/es/calendar';
const Calendar: FC<CP<typeof _Calendar>> = (props) => <_Calendar {...props} />;
export { Calendar };

/**
 * Card 卡片
 */
import _Card from 'antd/es/card';
const Card: FC<CP<typeof _Card>> = (props) => {
  const [className, setClassName] = useState(null);
  /**
   * 处理网格型内嵌卡片
   * @see https://github.com/ant-design/ant-design/blob/91f77ee6b7c329259e8282fe3b6e78a9715f6da2/components/card/Card.tsx#L90
   */
  useEffect(() => {
    const isGridMode = (props.children as any[]).find((c) => c.props._componentName === 'CardGrid');
    setClassName(isGridMode ? (props.className ? `${props.className} ant-card-contain-grid` : 'ant-card-contain-grid') : props.className);
  }, [props.children]);
  return <_Card {...props} className={className} />;
};
const CardGrid: FC<CP<typeof _Card.Grid>> = (props) => <_Card.Grid {...props} />;
const CardMeta: FC<CP<typeof _Card.Meta>> = (props) => <_Card.Meta {...props} />;
export { Card, CardGrid, CardMeta };

/**
 * Carousel 走马灯
 */
import _Carousel from 'antd/es/carousel';
const Carousel: FC<CP<typeof _Carousel>> = (props) => <_Carousel {...props} />;
export { Carousel };

/**
 * Collapse 折叠面板
 */
import _Collapse from 'antd/es/collapse';
const Collapse: FC<CP<typeof _Collapse>> = (props) => <_Collapse {...props} />;
export { Collapse };

/**
 * Descriptions 描述列表
 */
import _Descriptions from 'antd/es/descriptions';
const Descriptions: FC<CP<typeof _Descriptions>> = (props) => <_Descriptions {...props} />;
export { Descriptions };

/**
 * Empty 空状态
 */
import _Empty from 'antd/es/empty';
const Empty: FC<CP<typeof _Empty>> = (props) => <_Empty {...props} />;
export { Empty };

/**
 * Image 图片
 */
import _Image from 'antd/es/image';
const Image: FC<CP<typeof _Image>> = (props) => <_Image {...props} />;
const ImagePreviewGroup: FC<CP<typeof _Image.PreviewGroup>> = (props) => <_Image.PreviewGroup {...props} />;
export { Image, ImagePreviewGroup };

/**
 * List 列表
 */
import _List from 'antd/es/list';
const List: FC<CP<typeof _List>> = (props) => <_List {...props} />;
const ListItem: FC<CP<typeof _List.Item>> = (props) => <_List.Item {...props} />;
const ListItemMeta: FC<CP<typeof _List.Item.Meta>> = (props) => <_List.Item.Meta {...props} />;
export { List, ListItem, ListItemMeta };

/**
 * Popover 气泡卡片
 */
import _Popover from 'antd/es/empty';
const Popover: FC<CP<typeof _Popover>> = (props) => <_Popover {...props} />;
export { Popover };

/**
 * QRCode 二维码
 */
import _QRCode from 'antd/es/qr-code';
const QRCode: FC<CP<typeof _QRCode>> = (props) => <_QRCode {...props} />;
export { QRCode };

/**
 * Segmented 分段控制器
 */
import _Segmented from 'antd/es/segmented';
const Segmented: FC<CP<typeof _Segmented>> = (props) => <_Segmented {...props} />;
export { Segmented };

/**
 * Statistic 统计数值
 */
import _Statistic from 'antd/es/statistic';
const Statistic: FC<CP<typeof _Statistic>> = (props) => <_Statistic {...props} />;
const StatisticCountdown: FC<CP<typeof _Statistic.Countdown>> = (props) => <_Statistic.Countdown {...props} />;
export { Statistic, StatisticCountdown };

/**
 * Table 表格
 */
import _Table, { TableRef } from 'antd/es/table';
class Table extends Component<CP<typeof _Table>> {
  ref = createRef<TableRef>();
  render = () => <_Table ref={this.ref} {...this.props} />;
}

export { Table };

/**
 * Tabs 标签页
 */
import _Tabs from 'antd/es/tabs';
const Tabs: FC<CP<typeof _Tabs>> = (props) => <_Tabs {...props} />;
export { Tabs };

/**
 * Tag 标签
 */
import _Tag from 'antd/es/tag';
const Tag: FC<CP<typeof _Tag>> = (props) => <_Tag {...props} />;
const TagCheckableTag: FC<CP<typeof _Tag.CheckableTag>> = (props) => <_Tag.CheckableTag {...props} />;
export { Tag, TagCheckableTag };

/**
 * Timeline 时间轴
 */
import _Timeline from 'antd/es/timeline';
const Timeline: FC<CP<typeof _Timeline>> = (props) => <_Timeline {...props} />;
export { Timeline };

/**
 * Tooltip 文字提示
 */
import _Tooltip from 'antd/es/tooltip';
const Tooltip: FC<CP<typeof _Tooltip>> = (props) => <_Tooltip {...props} />;
export { Tooltip };

/**
 * Tour 漫游式引导
 */
import _Tour from 'antd/es/tour';
const Tour: FC<CP<typeof _Tour>> = (props) => <_Tour {...props} />;
export { Tour };

/**
 * Tree 树形控件
 */
import _Tree from 'antd/es/tree';
const Tree: FC<CP<typeof _Tree>> = (props) => <_Tree {...props} />;
const TreeDirectoryTree: FC<CP<typeof _Tree.DirectoryTree>> = (props) => <_Tree.DirectoryTree {...props} />;
export { Tree, TreeDirectoryTree };

/**
 * Alert 警告提示
 */
import _Alert from 'antd/es/alert';
const Alert: FC<CP<typeof _Alert>> = (props) => <_Alert {...props} />;
const AlertErrorBoundary: FC<CP<typeof _Alert.ErrorBoundary>> = (props) => <_Alert.ErrorBoundary {...props} />;
export { Alert, AlertErrorBoundary };

/**
 * Drawer 抽屉
 */
import _Drawer from 'antd/es/drawer';
const Drawer: FC<CP<typeof _Drawer>> = (props) => <_Drawer {...props} />;
export { Drawer };

/**
 * Message 全局提示
 */

/**
 * Modal 对话框
 */
import _Modal from 'antd/es/modal';
const Modal: FC<CP<typeof _Modal>> = (props) => <_Modal {...props} />;
export { Modal };

/**
 * Notification 通知提醒框
 */

/**
 * Popconfirm 气泡确认框
 */
import _Popconfirm from 'antd/es/popconfirm';
const Popconfirm: FC<CP<typeof _Popconfirm>> = (props) => <_Popconfirm {...props} />;
export { Popconfirm };

/**
 * Progress 进度条
 */
import _Progress from 'antd/es/progress';
const Progress: FC<CP<typeof _Progress>> = (props) => <_Progress {...props} />;
export { Progress };

/**
 * Result 结果
 */
import _Result from 'antd/es/result';
const Result: FC<CP<typeof _Result>> = (props) => <_Result {...props} />;
export { Result };

/**
 * Skeleton 骨架屏
 */
import _Skeleton from 'antd/es/skeleton';
const Skeleton: FC<CP<typeof _Skeleton>> = (props) => <_Skeleton {...props} />;
const SkeletonAvatar: FC<CP<typeof _Skeleton.Avatar>> = (props) => <_Skeleton.Avatar {...props} />;
const SkeletonButton: FC<CP<typeof _Skeleton.Button>> = (props) => <_Skeleton.Button {...props} />;
const SkeletonImage: FC<CP<typeof _Skeleton.Image>> = (props) => <_Skeleton.Image {...props} />;
const SkeletonInput: FC<CP<typeof _Skeleton.Input>> = (props) => <_Skeleton.Input {...props} />;
const SkeletonNode: FC<CP<typeof _Skeleton.Node>> = (props) => <_Skeleton.Node {...props} />;
export { Skeleton, SkeletonAvatar, SkeletonButton, SkeletonImage, SkeletonInput, SkeletonNode };

/**
 * Spin 加载中
 */
import _Spin from 'antd/es/spin';
const Spin: FC<CP<typeof _Spin>> = (props) => <_Spin {...props} />;
export { Spin };

/**
 * Watermark 水印
 */
import _Watermark from 'antd/es/watermark';
const Watermark: FC<CP<typeof _Watermark>> = (props) => <_Watermark {...props} />;
export { Watermark };

/**
 * Affix 固钉
 */
import _Affix from 'antd/es/affix';
const Affix: FC<CP<typeof _Affix>> = (props) => <_Affix {...props} />;
export { Affix };

/**
 * App 包裹组件
 */
import _App from 'antd/es/app';
import _Message from 'antd/es/message';
import _Notification from 'antd/es/notification';

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

/**
 * ConfigProvider 全局化配置
 */
import _ConfigProvider from 'antd/es/config-provider';
import zhCN from 'antd/locale/zh_CN';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/zh-cn';
const ConfigProvider: FC<CP<typeof _ConfigProvider>> = (props) => {
  const { locale, ...restProps } = props;
  if ('dayjs' in window) (window.dayjs as Dayjs).locale('zh-cn');
  return <_ConfigProvider locale={{ ...zhCN, ...locale }} {...restProps} />;
};
export { ConfigProvider };
