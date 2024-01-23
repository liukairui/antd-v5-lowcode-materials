import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TableSummaryCellMeta: IPublicTypeComponentMetadata = {
  componentName: 'TableSummaryCell',
  title: '表格总结单元格',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.12',
    exportName: 'TableSummaryCell',
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
            'en-US': 'index',
            'zh-CN': 'index'
          }
        },
        name: 'index',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'colSpan',
            'zh-CN': 'colSpan'
          }
        },
        name: 'colSpan',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rowSpan',
            'zh-CN': 'rowSpan'
          }
        },
        name: 'rowSpan',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'align',
            'zh-CN': 'align'
          }
        },
        name: 'align',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'left',
                value: 'left'
              },
              {
                label: 'right',
                value: 'right'
              },
              {
                label: 'center',
                value: 'center'
              },
              {
                label: 'justify',
                value: 'justify'
              },
              {
                label: 'end',
                value: 'end'
              },
              {
                label: 'start',
                value: 'start'
              },
              {
                label: 'match-parent',
                value: 'match-parent'
              }
            ],
            options: [
              {
                label: 'left',
                value: 'left'
              },
              {
                label: 'right',
                value: 'right'
              },
              {
                label: 'center',
                value: 'center'
              },
              {
                label: 'justify',
                value: 'justify'
              },
              {
                label: 'end',
                value: 'end'
              },
              {
                label: 'start',
                value: 'start'
              },
              {
                label: 'match-parent',
                value: 'match-parent'
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
    title: '表格总结单元格',
    screenshot: '',
    schema: {
      componentName: 'TableSummaryCell',
      props: {}
    }
  }
];

export default {
  ...TableSummaryCellMeta,
  snippets
};
