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
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'SkeletonNode',
    main: 'src/index.tsx',
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
          },
          tip: {
            type: 'i18n',
            'en-US': 'active',
            'zh-CN': 'active'
          }
        },
        name: 'active',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fullSize',
            'zh-CN': 'fullSize'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fullSize',
            'zh-CN': 'fullSize'
          }
        },
        name: 'fullSize',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
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
