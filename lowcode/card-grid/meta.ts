import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CardGridMeta: IPublicTypeComponentMetadata = {
  componentName: 'CardGrid',
  title: 'CardGrid',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'CardGrid',
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
            'en-US': 'hoverable',
            'zh-CN': 'hoverable'
          }
        },
        name: 'hoverable',
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
    title: 'CardGrid',
    screenshot: '',
    schema: {
      componentName: 'CardGrid',
      props: {}
    }
  }
];

export default {
  ...CardGridMeta,
  snippets
};
