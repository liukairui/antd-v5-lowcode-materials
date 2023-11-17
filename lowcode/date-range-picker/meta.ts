import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DateRangePickerMeta: IPublicTypeComponentMetadata = {
  componentName: 'DateRangePicker',
  title: '日期范围选择框',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'DateRangePicker',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'allowClear',
            'zh-CN': 'allowClear'
          }
        },
        name: 'allowClear',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'BoolSetter',
              {
                componentName: 'ObjectSetter',
                condition: () => false,
                props: {
                  config: {
                    items: [
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'clearIcon',
                            'zh-CN': 'clearIcon'
                          }
                        },
                        name: 'clearIcon',
                        setter: {
                          componentName: 'MixedSetter',
                          props: {
                            setters: ['StringSetter', 'SlotSetter']
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'allowEmpty',
            'zh-CN': 'allowEmpty'
          }
        },
        name: 'allowEmpty',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: 'BoolSetter'
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoFocus',
            'zh-CN': 'autoFocus'
          }
        },
        name: 'autoFocus',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'bordered',
            'zh-CN': 'bordered'
          }
        },
        name: 'bordered',
        setter: 'BoolSetter'
      },
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
            params: ['current', 'info']
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
            'en-US': 'disabled',
            'zh-CN': 'disabled'
          }
        },
        name: 'disabled',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: 'BoolSetter'
          }
        }
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
            'en-US': 'disabledTime',
            'zh-CN': 'disabledTime'
          }
        },
        name: 'disabledTime',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'format',
            'zh-CN': 'format'
          }
        },
        name: 'format',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'FunctionSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getPopupContainer',
            'zh-CN': 'getPopupContainer'
          }
        },
        name: 'getPopupContainer',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'inputReadOnly',
            'zh-CN': 'inputReadOnly'
          }
        },
        name: 'inputReadOnly',
        setter: 'BoolSetter'
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
            'en-US': 'nextIcon',
            'zh-CN': 'nextIcon'
          }
        },
        name: 'nextIcon',
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
            'en-US': 'onCalendarChange',
            'zh-CN': 'onCalendarChange'
          }
        },
        name: 'onCalendarChange',
        setter: 'FunctionSetter'
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
            'en-US': 'onOpenChange',
            'zh-CN': 'onOpenChange'
          }
        },
        name: 'onOpenChange',
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
            'en-US': 'open',
            'zh-CN': 'open'
          }
        },
        name: 'open',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'order',
            'zh-CN': 'order'
          }
        },
        name: 'order',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'panelRender',
            'zh-CN': 'panelRender'
          }
        },
        name: 'panelRender',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['panelNode']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'picker',
            'zh-CN': 'picker'
          }
        },
        name: 'picker',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'time',
                value: 'time'
              },
              {
                label: 'date',
                value: 'date'
              },
              {
                label: 'week',
                value: 'week'
              },
              {
                label: 'month',
                value: 'month'
              },
              {
                label: 'quarter',
                value: 'quarter'
              },
              {
                label: 'year',
                value: 'year'
              }
            ],
            options: [
              {
                label: 'time',
                value: 'time'
              },
              {
                label: 'date',
                value: 'date'
              },
              {
                label: 'week',
                value: 'week'
              },
              {
                label: 'month',
                value: 'month'
              },
              {
                label: 'quarter',
                value: 'quarter'
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
            'en-US': 'placeholder',
            'zh-CN': 'placeholder'
          }
        },
        name: 'placeholder',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'StringSetter',
              {
                componentName: 'ArraySetter',
                condition: () => false,
                props: {
                  itemSetter: 'StringSetter'
                }
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placement',
            'zh-CN': 'placement'
          }
        },
        name: 'placement',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'topLeft',
                value: 'topLeft'
              },
              {
                label: 'topRight',
                value: 'topRight'
              },
              {
                label: 'bottomLeft',
                value: 'bottomLeft'
              },
              {
                label: 'bottomRight',
                value: 'bottomRight'
              }
            ],
            options: [
              {
                label: 'topLeft',
                value: 'topLeft'
              },
              {
                label: 'topRight',
                value: 'topRight'
              },
              {
                label: 'bottomLeft',
                value: 'bottomLeft'
              },
              {
                label: 'bottomRight',
                value: 'bottomRight'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'popupClassName',
            'zh-CN': 'popupClassName'
          }
        },
        name: 'popupClassName',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'popupStyle',
            'zh-CN': 'popupStyle'
          }
        },
        name: 'popupStyle',
        setter: 'StyleSetter',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'presets',
            'zh-CN': 'presets'
          }
        },
        name: 'presets'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'prevIcon',
            'zh-CN': 'prevIcon'
          }
        },
        name: 'prevIcon',
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
            'en-US': 'renderExtraFooter',
            'zh-CN': 'renderExtraFooter'
          }
        },
        name: 'renderExtraFooter',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['__placeholder__']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'separator',
            'zh-CN': 'separator'
          }
        },
        name: 'separator',
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
            'en-US': 'showTime',
            'zh-CN': 'showTime'
          }
        },
        description: '@todo 待增加 TimePicker Options',
        name: 'showTime',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'size',
            'zh-CN': 'size'
          }
        },
        name: 'size',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'small',
                value: 'small'
              },
              {
                label: 'middle',
                value: 'middle'
              },
              {
                label: 'large',
                value: 'large'
              }
            ],
            options: [
              {
                label: 'small',
                value: 'small'
              },
              {
                label: 'middle',
                value: 'middle'
              },
              {
                label: 'large',
                value: 'large'
              }
            ]
          }
        }
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
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'warning',
                value: 'warning'
              },
              {
                label: 'error',
                value: 'error'
              }
            ],
            options: [
              {
                label: 'warning',
                value: 'warning'
              },
              {
                label: 'error',
                value: 'error'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'suffixIcon',
            'zh-CN': 'suffixIcon'
          }
        },
        name: 'suffixIcon',
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
            'en-US': 'superNextIcon',
            'zh-CN': 'superNextIcon'
          }
        },
        name: 'superNextIcon',
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
            'en-US': 'superPrevIcon',
            'zh-CN': 'superPrevIcon'
          }
        },
        name: 'superPrevIcon',
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
    title: '日期范围选择框',
    screenshot: '',
    schema: {
      componentName: 'DateRangePicker',
      props: {}
    }
  }
];

export default {
  ...DateRangePickerMeta,
  snippets
};
