import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SkeletonNodeMeta: IPublicTypeComponentMetadata = {
  componentName: 'SkeletonNode',
  title: '节点骨架屏',
  group: '原子组件',
  category: '反馈 Feedback',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'SkeletonNode',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'active',
            'zh-CN': 'active'
          }
        },
        name: 'active',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fullSize',
            'zh-CN': 'fullSize'
          }
        },
        name: 'fullSize',
        setter: 'BoolSetter'
      }
    ],
    supports: {
      className: true,
      style: true
    },
    component: {
      isContainer: true
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '节点骨架屏',
    screenshot: '',
    schema: {
      componentName: 'SkeletonNode',
      props: {}
    }
  }
];

export default {
  ...SkeletonNodeMeta,
  snippets
};
