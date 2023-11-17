import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AlertErrorBoundaryMeta: IPublicTypeComponentMetadata = {
  componentName: 'AlertErrorBoundary',
  title: '错误边界',
  group: '原子组件',
  category: '反馈 Feedback',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'AlertErrorBoundary',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'description',
            'zh-CN': 'description'
          }
        },
        name: 'description',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'SlotSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'message',
            'zh-CN': 'message'
          }
        },
        name: 'message',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'SlotSetter']
          }
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
    title: '错误边界',
    screenshot: '',
    schema: {
      componentName: 'AlertErrorBoundary',
      props: {}
    }
  }
];

export default {
  ...AlertErrorBoundaryMeta,
  snippets
};
