import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TypographyMeta: IPublicTypeComponentMetadata = {
  componentName: 'Typography',
  title: '排版',
  group: '原子组件',
  category: '通用 General',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Typography',
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
            'en-US': 'direction',
            'zh-CN': 'direction'
          },
          tip: {
            type: 'i18n',
            'en-US': 'direction',
            'zh-CN': 'direction'
          }
        },
        name: 'direction',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'ltr',
                value: 'ltr'
              },
              {
                label: 'rtl',
                value: 'rtl'
              }
            ],
            options: [
              {
                label: 'ltr',
                value: 'ltr'
              },
              {
                label: 'rtl',
                value: 'rtl'
              }
            ]
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'id',
            'zh-CN': 'id'
          },
          tip: {
            type: 'i18n',
            'en-US': 'id',
            'zh-CN': 'id'
          }
        },
        name: 'id',
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
    title: '排版',
    screenshot: '',
    schema: {
      componentName: 'Typography',
      props: {}
    }
  }
];

export default {
  ...TypographyMeta,
  snippets
};
