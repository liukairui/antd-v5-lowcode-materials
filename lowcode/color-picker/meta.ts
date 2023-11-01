import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ColorPickerMeta: IPublicTypeComponentMetadata = {
  componentName: 'ColorPicker',
  title: '颜色选择器',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'ColorPicker',
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
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'arrow',
            'zh-CN': 'arrow'
          }
        },
        name: 'arrow',
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
                            'en-US': 'pointAtCenter',
                            'zh-CN': 'pointAtCenter'
                          }
                        },
                        name: 'pointAtCenter',
                        setter: 'BoolSetter'
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
            'en-US': 'defaultFormat',
            'zh-CN': 'defaultFormat'
          }
        },
        name: 'defaultFormat',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'hex',
                value: 'hex'
              },
              {
                label: 'rgb',
                value: 'rgb'
              },
              {
                label: 'hsb',
                value: 'hsb'
              }
            ],
            options: [
              {
                label: 'hex',
                value: 'hex'
              },
              {
                label: 'rgb',
                value: 'rgb'
              },
              {
                label: 'hsb',
                value: 'hsb'
              }
            ]
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
        name: 'defaultValue',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'StringSetter',
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
                            'en-US': 'toHex',
                            'zh-CN': 'toHex'
                          }
                        },
                        name: 'toHex',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'toHexString',
                            'zh-CN': 'toHexString'
                          }
                        },
                        name: 'toHexString',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'toHsb',
                            'zh-CN': 'toHsb'
                          }
                        },
                        name: 'toHsb',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'toHsbString',
                            'zh-CN': 'toHsbString'
                          }
                        },
                        name: 'toHsbString',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'toRgb',
                            'zh-CN': 'toRgb'
                          }
                        },
                        name: 'toRgb',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'toRgbString',
                            'zh-CN': 'toRgbString'
                          }
                        },
                        name: 'toRgbString',
                        setter: 'FunctionSetter'
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
            'en-US': 'destroyTooltipOnHide',
            'zh-CN': 'destroyTooltipOnHide'
          }
        },
        name: 'destroyTooltipOnHide',
        setter: 'BoolSetter'
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
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabledAlpha',
            'zh-CN': 'disabledAlpha'
          }
        },
        name: 'disabledAlpha',
        setter: 'BoolSetter'
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
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'hex',
                value: 'hex'
              },
              {
                label: 'rgb',
                value: 'rgb'
              },
              {
                label: 'hsb',
                value: 'hsb'
              }
            ],
            options: [
              {
                label: 'hex',
                value: 'hex'
              },
              {
                label: 'rgb',
                value: 'rgb'
              },
              {
                label: 'hsb',
                value: 'hsb'
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
            'en-US': 'onChangeComplete',
            'zh-CN': 'onChangeComplete'
          }
        },
        name: 'onChangeComplete',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onClear',
            'zh-CN': 'onClear'
          }
        },
        name: 'onClear',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onFormatChange',
            'zh-CN': 'onFormatChange'
          }
        },
        name: 'onFormatChange',
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
            'en-US': 'panelRender',
            'zh-CN': 'panelRender'
          }
        },
        name: 'panelRender',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['panel', 'extra']
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
                label: 'top',
                value: 'top'
              },
              {
                label: 'topLeft',
                value: 'topLeft'
              },
              {
                label: 'topRight',
                value: 'topRight'
              },
              {
                label: 'bottom',
                value: 'bottom'
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
                label: 'top',
                value: 'top'
              },
              {
                label: 'topLeft',
                value: 'topLeft'
              },
              {
                label: 'topRight',
                value: 'topRight'
              },
              {
                label: 'bottom',
                value: 'bottom'
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
            'en-US': 'showText',
            'zh-CN': 'showText'
          }
        },
        name: 'showText',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'BoolSetter',
              {
                componentName: 'SlotSetter',
                initialValue: {
                  type: 'JSSlot',
                  params: ['color']
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
            'en-US': 'trigger',
            'zh-CN': 'trigger'
          }
        },
        name: 'trigger',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'click',
                value: 'click'
              },
              {
                label: 'hover',
                value: 'hover'
              }
            ],
            options: [
              {
                label: 'click',
                value: 'click'
              },
              {
                label: 'hover',
                value: 'hover'
              }
            ]
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
    title: '颜色选择器',
    screenshot: '',
    schema: {
      componentName: 'ColorPicker',
      props: {}
    }
  }
];

export default {
  ...ColorPickerMeta,
  snippets
};
