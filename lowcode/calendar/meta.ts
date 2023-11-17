import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CalendarMeta: IPublicTypeComponentMetadata = {
  componentName: 'Calendar',
  title: '日历',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Calendar',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'cellRender',
            'zh-CN': 'cellRender'
          }
        },
        name: 'cellRender',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['current', 'today', 'info']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultValue',
            'zh-CN': 'defaultValue'
          }
        },
        name: 'defaultValue'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabledDate',
            'zh-CN': 'disabledDate'
          }
        },
        name: 'disabledDate',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fullCellRender',
            'zh-CN': 'fullCellRender'
          }
        },
        name: 'fullCellRender',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['current', 'today', 'info']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fullscreen',
            'zh-CN': 'fullscreen'
          }
        },
        name: 'fullscreen',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'headerRender',
            'zh-CN': 'headerRender'
          }
        },
        name: 'headerRender',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['object']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'locale',
            'zh-CN': 'locale'
          }
        },
        name: 'locale'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mode',
            'zh-CN': 'mode'
          }
        },
        name: 'mode',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'month',
                value: 'month'
              },
              {
                label: 'year',
                value: 'year'
              }
            ],
            options: [
              {
                label: 'month',
                value: 'month'
              },
              {
                label: 'year',
                value: 'year'
              }
            ]
          }
        }
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
            'en-US': 'onPanelChange',
            'zh-CN': 'onPanelChange'
          }
        },
        name: 'onPanelChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onSelect',
            'zh-CN': 'onSelect'
          }
        },
        name: 'onSelect',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'validRange',
            'zh-CN': 'validRange'
          }
        },
        name: 'validRange'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': 'value'
          }
        },
        name: 'value'
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
    title: '日历',
    screenshot: '',
    schema: {
      componentName: 'Calendar',
      props: {}
    }
  }
];

export default {
  ...CalendarMeta,
  snippets
};
