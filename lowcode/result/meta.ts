import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ResultMeta: IPublicTypeComponentMetadata = {
  componentName: 'Result',
  title: '结果',
  group: '原子组件',
  category: '反馈 Feedback',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Result',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'extra',
            'zh-CN': 'extra'
          }
        },
        name: 'extra',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'icon',
            'zh-CN': 'icon'
          }
        },
        name: 'icon',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'prefixCls',
            'zh-CN': 'prefixCls'
          }
        },
        name: 'prefixCls',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'status',
            'zh-CN': 'status'
          }
        },
        name: 'status',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'success',
                value: 'success'
              },
              {
                label: 'warning',
                value: 'warning'
              },
              {
                label: 'error',
                value: 'error'
              },
              {
                label: 'info',
                value: 'info'
              },
              {
                label: '403',
                value: 403
              },
              {
                label: '404',
                value: 404
              },
              {
                label: '500',
                value: 500
              },
              {
                label: '403',
                value: '403'
              },
              {
                label: '404',
                value: '404'
              },
              {
                label: '500',
                value: '500'
              }
            ],
            options: [
              {
                label: 'success',
                value: 'success'
              },
              {
                label: 'warning',
                value: 'warning'
              },
              {
                label: 'error',
                value: 'error'
              },
              {
                label: 'info',
                value: 'info'
              },
              {
                label: '403',
                value: 403
              },
              {
                label: '404',
                value: 404
              },
              {
                label: '500',
                value: 500
              },
              {
                label: '403',
                value: '403'
              },
              {
                label: '404',
                value: '404'
              },
              {
                label: '500',
                value: '500'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'subTitle',
            'zh-CN': 'subTitle'
          }
        },
        name: 'subTitle',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': 'title'
          }
        },
        name: 'title',
        setter: 'SlotSetter'
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
    title: '结果',
    screenshot: '',
    schema: {
      componentName: 'Result',
      props: {}
    }
  }
];

export default {
  ...ResultMeta,
  snippets
};
