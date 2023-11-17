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
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Modal',
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
          }
        },
        name: 'afterOpenChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'cancelButtonProps',
            'zh-CN': 'cancelButtonProps'
          }
        },
        name: 'cancelButtonProps',
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
            'en-US': 'cancelText',
            'zh-CN': 'cancelText'
          }
        },
        name: 'cancelText',
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
            'en-US': 'centered',
            'zh-CN': 'centered'
          }
        },
        name: 'centered',
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
            'en-US': 'closable',
            'zh-CN': 'closable'
          }
        },
        name: 'closable',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'closeIcon',
            'zh-CN': 'closeIcon'
          }
        },
        name: 'closeIcon',
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
            'en-US': 'confirmLoading',
            'zh-CN': 'confirmLoading'
          }
        },
        name: 'confirmLoading',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'destroyOnClose',
            'zh-CN': 'destroyOnClose'
          }
        },
        name: 'destroyOnClose',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'focusTriggerAfterClose',
            'zh-CN': 'focusTriggerAfterClose'
          }
        },
        name: 'focusTriggerAfterClose',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
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
              'StringSetter',
              'NumberSetter',
              'BoolSetter',
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
              'FunctionSetter'
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
          }
        },
        name: 'forceRender',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
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
              'StringSetter',
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
              'FunctionSetter',
              {
                componentName: 'RadioGroupSetter',
                condition: () => false,
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
            'en-US': 'mask',
            'zh-CN': 'mask'
          }
        },
        name: 'mask',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maskClosable',
            'zh-CN': 'maskClosable'
          }
        },
        name: 'maskClosable',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maskTransitionName',
            'zh-CN': 'maskTransitionName'
          }
        },
        name: 'maskTransitionName',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'modalRender',
            'zh-CN': 'modalRender'
          }
        },
        name: 'modalRender',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mousePosition',
            'zh-CN': 'mousePosition'
          }
        },
        name: 'mousePosition',
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
                      'en-US': 'x',
                      'zh-CN': 'x'
                    }
                  },
                  name: 'x',
                  setter: 'NumberSetter'
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
                  setter: 'NumberSetter'
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
            'en-US': 'okButtonProps',
            'zh-CN': 'okButtonProps'
          }
        },
        name: 'okButtonProps',
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
            'en-US': 'okText',
            'zh-CN': 'okText'
          }
        },
        name: 'okText',
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
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onCancel',
            'zh-CN': 'onCancel'
          }
        },
        name: 'onCancel',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onOk',
            'zh-CN': 'onOk'
          }
        },
        name: 'onOk',
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
            'en-US': 'styles',
            'zh-CN': 'styles'
          }
        },
        name: 'styles',
        setter: {
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
        }
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
            'en-US': 'transitionName',
            'zh-CN': 'transitionName'
          }
        },
        name: 'transitionName',
        setter: 'StringSetter'
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'wrapClassName',
            'zh-CN': 'wrapClassName'
          }
        },
        name: 'wrapClassName',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
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
          }
        },
        name: 'zIndex',
        setter: 'NumberSetter'
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
