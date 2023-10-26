import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SkeletonImageMeta: IPublicTypeComponentMetadata = {
  componentName: 'SkeletonImage',
  title: '骨架屏图片',
  group: '原子组件',
  category: '反馈 Feedback',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'SkeletonImage',
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
    title: '骨架屏图片',
    screenshot: '',
    schema: {
      componentName: 'SkeletonImage',
      props: {}
    }
  }
];

export default {
  ...SkeletonImageMeta,
  snippets
};
