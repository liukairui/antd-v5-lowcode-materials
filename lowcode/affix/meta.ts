import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AffixMeta: IPublicTypeComponentMetadata = {
  componentName: 'Affix',
  title: '固钉',
  group: '原子组件',
  category: '其他 Other',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Affix',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'offsetBottom',
            'zh-CN': 'offsetBottom'
          }
        },
        name: 'offsetBottom',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'offsetTop',
            'zh-CN': 'offsetTop'
          }
        },
        name: 'offsetTop',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange'
          }
        },
        name: 'onChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'target',
            'zh-CN': 'target'
          }
        },
        name: 'target',
        setter: 'FunctionSetter'
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
    title: '固钉',
    screenshot: '',
    schema: {
      componentName: 'Affix',
      props: {}
    }
  }
];

export default {
  ...AffixMeta,
  snippets
};
