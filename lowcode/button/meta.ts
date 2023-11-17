import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ButtonMeta: IPublicTypeComponentMetadata = {
  componentName: 'Button',
  title: '按钮',
  group: '原子组件',
  category: '通用 General',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Button',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'block',
            'zh-CN': 'block'
          }
        },
        name: 'block',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'danger',
            'zh-CN': 'danger'
          }
        },
        name: 'danger',
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
            'en-US': 'ghost',
            'zh-CN': 'ghost'
          }
        },
        name: 'ghost',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'href',
            'zh-CN': 'href'
          }
        },
        name: 'href',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'htmlType',
            'zh-CN': 'htmlType'
          }
        },
        name: 'htmlType',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
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
              }
            ],
            options: [
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
              }
            ]
          }
        }
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
            'en-US': 'loading',
            'zh-CN': 'loading'
          }
        },
        name: 'loading',
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
                            'en-US': 'delay',
                            'zh-CN': 'delay'
                          }
                        },
                        name: 'delay',
                        setter: 'NumberSetter'
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
            'en-US': 'shape',
            'zh-CN': 'shape'
          }
        },
        name: 'shape',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'default',
                value: 'default'
              },
              {
                label: 'circle',
                value: 'circle'
              },
              {
                label: 'round',
                value: 'round'
              }
            ],
            options: [
              {
                label: 'default',
                value: 'default'
              },
              {
                label: 'circle',
                value: 'circle'
              },
              {
                label: 'round',
                value: 'round'
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
            'en-US': 'target',
            'zh-CN': 'target'
          }
        },
        name: 'target',
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
                      label: '_self',
                      value: '_self'
                    },
                    {
                      label: '_blank',
                      value: '_blank'
                    },
                    {
                      label: '_parent',
                      value: '_parent'
                    },
                    {
                      label: '_top',
                      value: '_top'
                    }
                  ],
                  options: [
                    {
                      label: '_self',
                      value: '_self'
                    },
                    {
                      label: '_blank',
                      value: '_blank'
                    },
                    {
                      label: '_parent',
                      value: '_parent'
                    },
                    {
                      label: '_top',
                      value: '_top'
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
            'en-US': 'type',
            'zh-CN': 'type'
          }
        },
        name: 'type',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'default',
                value: 'default'
              },
              {
                label: 'primary',
                value: 'primary'
              },
              {
                label: 'dashed',
                value: 'dashed'
              },
              {
                label: 'link',
                value: 'link'
              },
              {
                label: 'text',
                value: 'text'
              }
            ],
            options: [
              {
                label: 'default',
                value: 'default'
              },
              {
                label: 'primary',
                value: 'primary'
              },
              {
                label: 'dashed',
                value: 'dashed'
              },
              {
                label: 'link',
                value: 'link'
              },
              {
                label: 'text',
                value: 'text'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onClick',
            'zh-CN': 'onClick'
          }
        },
        name: 'onClick',
        setter: 'FunctionSetter'
      },
      {
        title: '原生 a 标签属性',
        type: 'group',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
        items: [
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'download',
                'zh-CN': 'download'
              }
            },
            name: 'download',
            setter: {
              componentName: 'MixedSetter',
              props: {
                setters: ['BoolSetter', 'StringSetter']
              }
            }
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'hrefLang',
                'zh-CN': 'hrefLang'
              }
            },
            name: 'hrefLang',
            setter: 'StringSetter'
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'ping',
                'zh-CN': 'ping'
              }
            },
            name: 'ping',
            setter: 'StringSetter'
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'referrerPolicy',
                'zh-CN': 'referrerPolicy'
              }
            },
            name: 'referrerPolicy',
            setter: {
              componentName: 'SelectSetter',
              props: {
                dataSource: [
                  {
                    label: '',
                    value: ''
                  },
                  {
                    label: 'no-referrer',
                    value: 'no-referrer'
                  },
                  {
                    label: 'no-referrer-when-downgrade',
                    value: 'no-referrer-when-downgrade'
                  },
                  {
                    label: 'origin',
                    value: 'origin'
                  },
                  {
                    label: 'origin-when-cross-origin',
                    value: 'origin-when-cross-origin'
                  },
                  {
                    label: 'same-origin',
                    value: 'same-origin'
                  },
                  {
                    label: 'strict-origin',
                    value: 'strict-origin'
                  },
                  {
                    label: 'strict-origin-when-cross-origin',
                    value: 'strict-origin-when-cross-origin'
                  },
                  {
                    label: 'unsafe-url',
                    value: 'unsafe-url'
                  }
                ],
                options: [
                  {
                    label: '',
                    value: ''
                  },
                  {
                    label: 'no-referrer',
                    value: 'no-referrer'
                  },
                  {
                    label: 'no-referrer-when-downgrade',
                    value: 'no-referrer-when-downgrade'
                  },
                  {
                    label: 'origin',
                    value: 'origin'
                  },
                  {
                    label: 'origin-when-cross-origin',
                    value: 'origin-when-cross-origin'
                  },
                  {
                    label: 'same-origin',
                    value: 'same-origin'
                  },
                  {
                    label: 'strict-origin',
                    value: 'strict-origin'
                  },
                  {
                    label: 'strict-origin-when-cross-origin',
                    value: 'strict-origin-when-cross-origin'
                  },
                  {
                    label: 'unsafe-url',
                    value: 'unsafe-url'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        title: '原生 button 标签属性',
        type: 'group',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
        items: [
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
                'en-US': 'value',
                'zh-CN': 'value'
              }
            },
            name: 'value',
            setter: {
              componentName: 'MixedSetter',
              props: {
                setters: [
                  'StringSetter',
                  'NumberSetter',
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
          }
        ]
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
    title: '按钮',
    screenshot: '',
    schema: {
      componentName: 'Button',
      props: {}
    }
  }
];

export default {
  ...ButtonMeta,
  snippets
};
