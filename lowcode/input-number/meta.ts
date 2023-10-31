import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const InputNumberMeta: IPublicTypeComponentMetadata = {
  componentName: 'InputNumber',
  title: '数字输入框',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'InputNumber',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'accept',
            'zh-CN': 'accept'
          }
        },
        name: 'accept',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'addonAfter',
            'zh-CN': 'addonAfter'
          }
        },
        name: 'addonAfter',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'addonBefore',
            'zh-CN': 'addonBefore'
          }
        },
        name: 'addonBefore',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'alt',
            'zh-CN': 'alt'
          }
        },
        name: 'alt',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoComplete',
            'zh-CN': 'autoComplete'
          }
        },
        name: 'autoComplete',
        setter: 'StringSetter'
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
            'en-US': 'capture',
            'zh-CN': 'capture'
          }
        },
        name: 'capture',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'BoolSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'checked',
            'zh-CN': 'checked'
          }
        },
        name: 'checked',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'classNames',
            'zh-CN': 'classNames'
          }
        },
        name: 'classNames',
        setter: {
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'affixWrapper',
                      'zh-CN': 'affixWrapper'
                    }
                  },
                  name: 'affixWrapper',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'group',
                      'zh-CN': 'group'
                    }
                  },
                  name: 'group',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'wrapper',
                      'zh-CN': 'wrapper'
                    }
                  },
                  name: 'wrapper',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'input',
                      'zh-CN': 'input'
                    }
                  },
                  name: 'input',
                  setter: 'StringSetter'
                }
              ]
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'classes',
            'zh-CN': 'classes'
          }
        },
        name: 'classes',
        setter: {
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'affixWrapper',
                      'zh-CN': 'affixWrapper'
                    }
                  },
                  name: 'affixWrapper',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'group',
                      'zh-CN': 'group'
                    }
                  },
                  name: 'group',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'wrapper',
                      'zh-CN': 'wrapper'
                    }
                  },
                  name: 'wrapper',
                  setter: 'StringSetter'
                }
              ]
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'controls',
            'zh-CN': 'controls'
          }
        },
        name: 'controls',
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
                            'en-US': 'upIcon',
                            'zh-CN': 'upIcon'
                          }
                        },
                        name: 'upIcon',
                        setter: 'SlotSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'downIcon',
                            'zh-CN': 'downIcon'
                          }
                        },
                        name: 'downIcon',
                        setter: 'SlotSetter'
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
            'en-US': 'decimalSeparator',
            'zh-CN': 'decimalSeparator'
          }
        },
        name: 'decimalSeparator',
        setter: 'StringSetter'
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
            setters: ['StringSetter', 'NumberSetter']
          }
        }
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
            'en-US': 'downHandler',
            'zh-CN': 'downHandler'
          }
        },
        name: 'downHandler',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'form',
            'zh-CN': 'form'
          }
        },
        name: 'form',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'formAction',
            'zh-CN': 'formAction'
          }
        },
        name: 'formAction',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'formEncType',
            'zh-CN': 'formEncType'
          }
        },
        name: 'formEncType',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'formMethod',
            'zh-CN': 'formMethod'
          }
        },
        name: 'formMethod',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'formNoValidate',
            'zh-CN': 'formNoValidate'
          }
        },
        name: 'formNoValidate',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'formTarget',
            'zh-CN': 'formTarget'
          }
        },
        name: 'formTarget',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'formatter',
            'zh-CN': 'formatter'
          }
        },
        name: 'formatter',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'height',
            'zh-CN': 'height'
          }
        },
        name: 'height',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'keyboard',
            'zh-CN': 'keyboard'
          }
        },
        name: 'keyboard',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'list',
            'zh-CN': 'list'
          }
        },
        name: 'list',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'max',
            'zh-CN': 'max'
          }
        },
        name: 'max',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxLength',
            'zh-CN': 'maxLength'
          }
        },
        name: 'maxLength',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'min',
            'zh-CN': 'min'
          }
        },
        name: 'min',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'minLength',
            'zh-CN': 'minLength'
          }
        },
        name: 'minLength',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'multiple',
            'zh-CN': 'multiple'
          }
        },
        name: 'multiple',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'name',
            'zh-CN': 'name'
          }
        },
        name: 'name',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onInput',
            'zh-CN': 'onInput'
          }
        },
        name: 'onInput',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onPressEnter',
            'zh-CN': 'onPressEnter'
          }
        },
        name: 'onPressEnter',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'parser',
            'zh-CN': 'parser'
          }
        },
        name: 'parser',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pattern',
            'zh-CN': 'pattern'
          }
        },
        name: 'pattern',
        setter: 'StringSetter'
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
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'precision',
            'zh-CN': 'precision'
          }
        },
        name: 'precision',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'prefix',
            'zh-CN': 'prefix'
          }
        },
        name: 'prefix',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'readOnly',
            'zh-CN': 'readOnly'
          }
        },
        name: 'readOnly',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'required',
            'zh-CN': 'required'
          }
        },
        name: 'required',
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
            'en-US': 'src',
            'zh-CN': 'src'
          }
        },
        name: 'src',
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
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '',
                value: ''
              },
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
                label: '',
                value: ''
              },
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
            'en-US': 'step',
            'zh-CN': 'step'
          }
        },
        name: 'step',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'stringMode',
            'zh-CN': 'stringMode'
          }
        },
        name: 'stringMode',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'suffix',
            'zh-CN': 'suffix'
          }
        },
        name: 'suffix',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'type',
            'zh-CN': 'type'
          }
        },
        name: 'type',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'ObjectSetter',
                condition: () => false,
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'MixedSetter',
                      props: {}
                    }
                  }
                }
              },
              {
                componentName: 'SelectSetter',
                props: {
                  dataSource: [
                    {
                      label: 'number',
                      value: 'number'
                    },
                    {
                      label: 'submit',
                      value: 'submit'
                    },
                    {
                      label: 'reset',
                      value: 'reset'
                    },
                    {
                      label: 'button',
                      value: 'button'
                    },
                    {
                      label: 'text',
                      value: 'text'
                    },
                    {
                      label: 'color',
                      value: 'color'
                    },
                    {
                      label: 'time',
                      value: 'time'
                    },
                    {
                      label: 'image',
                      value: 'image'
                    },
                    {
                      label: 'hidden',
                      value: 'hidden'
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
                      label: 'checkbox',
                      value: 'checkbox'
                    },
                    {
                      label: 'datetime-local',
                      value: 'datetime-local'
                    },
                    {
                      label: 'email',
                      value: 'email'
                    },
                    {
                      label: 'file',
                      value: 'file'
                    },
                    {
                      label: 'password',
                      value: 'password'
                    },
                    {
                      label: 'radio',
                      value: 'radio'
                    },
                    {
                      label: 'range',
                      value: 'range'
                    },
                    {
                      label: 'search',
                      value: 'search'
                    },
                    {
                      label: 'tel',
                      value: 'tel'
                    },
                    {
                      label: 'url',
                      value: 'url'
                    }
                  ],
                  options: [
                    {
                      label: 'number',
                      value: 'number'
                    },
                    {
                      label: 'submit',
                      value: 'submit'
                    },
                    {
                      label: 'reset',
                      value: 'reset'
                    },
                    {
                      label: 'button',
                      value: 'button'
                    },
                    {
                      label: 'text',
                      value: 'text'
                    },
                    {
                      label: 'color',
                      value: 'color'
                    },
                    {
                      label: 'time',
                      value: 'time'
                    },
                    {
                      label: 'image',
                      value: 'image'
                    },
                    {
                      label: 'hidden',
                      value: 'hidden'
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
                      label: 'checkbox',
                      value: 'checkbox'
                    },
                    {
                      label: 'datetime-local',
                      value: 'datetime-local'
                    },
                    {
                      label: 'email',
                      value: 'email'
                    },
                    {
                      label: 'file',
                      value: 'file'
                    },
                    {
                      label: 'password',
                      value: 'password'
                    },
                    {
                      label: 'radio',
                      value: 'radio'
                    },
                    {
                      label: 'range',
                      value: 'range'
                    },
                    {
                      label: 'search',
                      value: 'search'
                    },
                    {
                      label: 'tel',
                      value: 'tel'
                    },
                    {
                      label: 'url',
                      value: 'url'
                    }
                  ]
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
            'en-US': 'upHandler',
            'zh-CN': 'upHandler'
          }
        },
        name: 'upHandler',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': 'value'
          }
        },
        name: 'value',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'width',
            'zh-CN': 'width'
          }
        },
        name: 'width',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      }
    ],
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onChange'
        },
        {
          name: 'onStep'
        }
      ]
    },
    component: {
      isContainer: true
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '数字输入框',
    screenshot: '',
    schema: {
      componentName: 'InputNumber',
      props: {}
    }
  }
];

export default {
  ...InputNumberMeta,
  snippets
};
