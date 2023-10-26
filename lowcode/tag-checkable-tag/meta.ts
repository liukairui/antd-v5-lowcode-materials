import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TagCheckableTagMeta: IPublicTypeComponentMetadata = {
  componentName: 'TagCheckableTag',
  title: '可选择标签',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'TagCheckableTag',
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
            'en-US': 'checked',
            'zh-CN': 'checked'
          },
          tip: {
            type: 'i18n',
            'en-US': 'checked',
            'zh-CN': 'checked'
          }
        },
        name: 'checked',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange'
          }
        },
        name: 'onChange',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onClick',
            'zh-CN': 'onClick'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onClick',
            'zh-CN': 'onClick'
          }
        },
        name: 'onClick',
        setter: {
          componentName: 'FunctionSetter'
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
    title: '可选择标签',
    screenshot: '',
    schema: {
      componentName: 'TagCheckableTag',
      props: {}
    }
  }
];

export default {
  ...TagCheckableTagMeta,
  snippets
};
