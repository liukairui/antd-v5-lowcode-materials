import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PlainTextMeta: IPublicTypeComponentMetadata = {
  componentName: 'PlainText',
  title: '纯文本',
  group: '原子组件',
  category: '通用 General',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'PlainText',
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
            'en-US': 'content',
            'zh-CN': 'content'
          },
          tip: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': 'content'
          }
        },
        name: 'content',
        setter: {
          componentName: 'StringSetter',
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
    title: '纯文本',
    screenshot: '',
    schema: {
      componentName: 'PlainText',
      props: {
        content: '文本'
      }
    }
  }
];

export default {
  ...PlainTextMeta,
  snippets
};
