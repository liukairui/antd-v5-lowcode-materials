import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TableSummaryMeta: IPublicTypeComponentMetadata = {
  componentName: 'TableSummary',
  title: '表格总结栏',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.12',
    exportName: 'TableSummary',
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
            'en-US': 'fixed',
            'zh-CN': 'fixed'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fixed',
            'zh-CN': 'fixed'
          }
        },
        name: 'fixed',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'BoolSetter',
              {
                componentName: 'RadioGroupSetter',
                props: {
                  dataSource: [
                    {
                      label: 'top',
                      value: 'top'
                    },
                    {
                      label: 'bottom',
                      value: 'bottom'
                    }
                  ],
                  options: [
                    {
                      label: 'top',
                      value: 'top'
                    },
                    {
                      label: 'bottom',
                      value: 'bottom'
                    }
                  ]
                }
              }
            ]
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
    title: '表格总结栏',
    screenshot: '',
    schema: {
      componentName: 'TableSummary',
      props: {}
    }
  }
];

export default {
  ...TableSummaryMeta,
  snippets
};
