import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ModalMeta: IPublicTypeComponentMetadata = {
  componentName: 'Modal',
  title: '对话框',
  group: '原子组件',
  category: '反馈 Feedback',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Modal',
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
            'en-US': 'afterOpenChange',
            'zh-CN': 'afterOpenChange'
          },
          tip: {
            type: 'i18n',
            'en-US': 'afterOpenChange',
            'zh-CN': 'afterOpenChange'
          }
        },
        name: 'afterOpenChange',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'cancelButtonProps',
            'zh-CN': 'cancelButtonProps'
          },
          tip: {
            type: 'i18n',
            'en-US': 'cancelButtonProps',
            'zh-CN': 'cancelButtonProps'
          }
        },
        name: 'cancelButtonProps',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'href',
                      'zh-CN': 'href'
                    }
                  },
                  name: 'href',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
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
                    },
                    initialValue: undefined
                  }
                }
              ],
              extraSetter: {
                componentName: 'MixedSetter',
                props: {}
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'cancelText',
            'zh-CN': 'cancelText'
          },
          tip: {
            type: 'i18n',
            'en-US': 'cancelText',
            'zh-CN': 'cancelText'
          }
        },
        name: 'cancelText',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node'
          },
          initialValue: {
            type: 'JSSlot',
            value: []
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'centered',
            'zh-CN': 'centered'
          },
          tip: {
            type: 'i18n',
            'en-US': 'centered',
            'zh-CN': 'centered'
          }
        },
        name: 'centered',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'classNames',
            'zh-CN': 'classNames'
          },
          tip: {
            type: 'i18n',
            'en-US': 'classNames',
            'zh-CN': 'classNames'
          }
        },
        name: 'classNames',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              extraSetter: {
                componentName: 'MixedSetter',
                props: {}
              }
            }
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'closable',
            'zh-CN': 'closable'
          },
          tip: {
            type: 'i18n',
            'en-US': 'closable',
            'zh-CN': 'closable'
          }
        },
        name: 'closable',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'closeIcon',
            'zh-CN': 'closeIcon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'closeIcon',
            'zh-CN': 'closeIcon'
          }
        },
        name: 'closeIcon',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node'
          },
          initialValue: {
            type: 'JSSlot',
            value: []
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'confirmLoading',
            'zh-CN': 'confirmLoading'
          },
          tip: {
            type: 'i18n',
            'en-US': 'confirmLoading',
            'zh-CN': 'confirmLoading'
          }
        },
        name: 'confirmLoading',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'destroyOnClose',
            'zh-CN': 'destroyOnClose'
          },
          tip: {
            type: 'i18n',
            'en-US': 'destroyOnClose',
            'zh-CN': 'destroyOnClose'
          }
        },
        name: 'destroyOnClose',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'focusTriggerAfterClose',
            'zh-CN': 'focusTriggerAfterClose'
          },
          tip: {
            type: 'i18n',
            'en-US': 'focusTriggerAfterClose',
            'zh-CN': 'focusTriggerAfterClose'
          }
        },
        name: 'focusTriggerAfterClose',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'footer',
            'zh-CN': 'footer'
          },
          tip: {
            type: 'i18n',
            'en-US': 'footer',
            'zh-CN': 'footer'
          }
        },
        name: 'footer',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: undefined
              },
              {
                componentName: 'NumberSetter',
                initialValue: undefined
              },
              {
                componentName: 'BoolSetter',
                initialValue: undefined
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'MixedSetter',
                      props: {}
                    }
                  }
                },
                initialValue: undefined
              },
              {
                componentName: 'FunctionSetter'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'forceRender',
            'zh-CN': 'forceRender'
          },
          tip: {
            type: 'i18n',
            'en-US': 'forceRender',
            'zh-CN': 'forceRender'
          }
        },
        name: 'forceRender',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getContainer',
            'zh-CN': 'getContainer'
          },
          tip: {
            type: 'i18n',
            'en-US': 'getContainer',
            'zh-CN': 'getContainer'
          }
        },
        name: 'getContainer',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: undefined
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'MixedSetter',
                      props: {}
                    }
                  }
                },
                initialValue: undefined
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'RadioGroupSetter',
                props: {
                  dataSource: [
                    {
                      label: 'false',
                      value: false
                    }
                  ],
                  options: [
                    {
                      label: 'false',
                      value: false
                    }
                  ]
                },
                initialValue: undefined
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'keyboard',
            'zh-CN': 'keyboard'
          },
          tip: {
            type: 'i18n',
            'en-US': 'keyboard',
            'zh-CN': 'keyboard'
          }
        },
        name: 'keyboard',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mask',
            'zh-CN': 'mask'
          },
          tip: {
            type: 'i18n',
            'en-US': 'mask',
            'zh-CN': 'mask'
          }
        },
        name: 'mask',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maskClosable',
            'zh-CN': 'maskClosable'
          },
          tip: {
            type: 'i18n',
            'en-US': 'maskClosable',
            'zh-CN': 'maskClosable'
          }
        },
        name: 'maskClosable',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maskTransitionName',
            'zh-CN': 'maskTransitionName'
          },
          tip: {
            type: 'i18n',
            'en-US': 'maskTransitionName',
            'zh-CN': 'maskTransitionName'
          }
        },
        name: 'maskTransitionName',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'modalRender',
            'zh-CN': 'modalRender'
          },
          tip: {
            type: 'i18n',
            'en-US': 'modalRender',
            'zh-CN': 'modalRender'
          }
        },
        name: 'modalRender',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mousePosition',
            'zh-CN': 'mousePosition'
          },
          tip: {
            type: 'i18n',
            'en-US': 'mousePosition',
            'zh-CN': 'mousePosition'
          }
        },
        name: 'mousePosition',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'x',
                      'zh-CN': 'x'
                    }
                  },
                  name: 'x',
                  setter: {
                    componentName: 'NumberSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'y',
                      'zh-CN': 'y'
                    }
                  },
                  name: 'y',
                  setter: {
                    componentName: 'NumberSetter',
                    initialValue: undefined
                  }
                }
              ],
              extraSetter: {
                componentName: 'MixedSetter',
                props: {}
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'okButtonProps',
            'zh-CN': 'okButtonProps'
          },
          tip: {
            type: 'i18n',
            'en-US': 'okButtonProps',
            'zh-CN': 'okButtonProps'
          }
        },
        name: 'okButtonProps',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'href',
                      'zh-CN': 'href'
                    }
                  },
                  name: 'href',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
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
                    },
                    initialValue: undefined
                  }
                }
              ],
              extraSetter: {
                componentName: 'MixedSetter',
                props: {}
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'okText',
            'zh-CN': 'okText'
          },
          tip: {
            type: 'i18n',
            'en-US': 'okText',
            'zh-CN': 'okText'
          }
        },
        name: 'okText',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node'
          },
          initialValue: {
            type: 'JSSlot',
            value: []
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'okType',
            'zh-CN': 'okType'
          },
          tip: {
            type: 'i18n',
            'en-US': 'okType',
            'zh-CN': 'okType'
          }
        },
        name: 'okType',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'danger',
                value: 'danger'
              },
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
                label: 'danger',
                value: 'danger'
              },
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
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onCancel',
            'zh-CN': 'onCancel'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onCancel',
            'zh-CN': 'onCancel'
          }
        },
        name: 'onCancel',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onOk',
            'zh-CN': 'onOk'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onOk',
            'zh-CN': 'onOk'
          }
        },
        name: 'onOk',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'open',
            'zh-CN': 'open'
          },
          tip: {
            type: 'i18n',
            'en-US': 'open',
            'zh-CN': 'open'
          }
        },
        name: 'open',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'styles',
            'zh-CN': 'styles'
          },
          tip: {
            type: 'i18n',
            'en-US': 'styles',
            'zh-CN': 'styles'
          }
        },
        name: 'styles',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              extraSetter: {
                componentName: 'MixedSetter',
                props: {}
              }
            }
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': 'title'
          },
          tip: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': 'title'
          }
        },
        name: 'title',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node'
          },
          initialValue: {
            type: 'JSSlot',
            value: []
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'transitionName',
            'zh-CN': 'transitionName'
          },
          tip: {
            type: 'i18n',
            'en-US': 'transitionName',
            'zh-CN': 'transitionName'
          }
        },
        name: 'transitionName',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'width',
            'zh-CN': 'width'
          },
          tip: {
            type: 'i18n',
            'en-US': 'width',
            'zh-CN': 'width'
          }
        },
        name: 'width',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: undefined
              },
              {
                componentName: 'NumberSetter',
                initialValue: undefined
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'wrapClassName',
            'zh-CN': 'wrapClassName'
          },
          tip: {
            type: 'i18n',
            'en-US': 'wrapClassName',
            'zh-CN': 'wrapClassName'
          }
        },
        name: 'wrapClassName',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'wrapProps',
            'zh-CN': 'wrapProps'
          },
          tip: {
            type: 'i18n',
            'en-US': 'wrapProps',
            'zh-CN': 'wrapProps'
          }
        },
        name: 'wrapProps',
        setter: {
          componentName: 'MixedSetter',
          props: {}
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'zIndex',
            'zh-CN': 'zIndex'
          },
          tip: {
            type: 'i18n',
            'en-US': 'zIndex',
            'zh-CN': 'zIndex'
          }
        },
        name: 'zIndex',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      }
    ],
    supports: {
      events: [
        {
          name: 'afterClose'
        }
      ],
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
    title: '对话框',
    screenshot: '',
    schema: {
      componentName: 'Modal',
      props: {}
    }
  }
];

export default {
  ...ModalMeta,
  snippets
};
