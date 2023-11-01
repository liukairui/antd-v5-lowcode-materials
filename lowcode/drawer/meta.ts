import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DrawerMeta: IPublicTypeComponentMetadata = {
  componentName: 'Drawer',
  title: '抽屉',
  group: '原子组件',
  category: '反馈 Feedback',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Drawer',
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
                      'en-US': 'header',
                      'zh-CN': 'header'
                    }
                  },
                  name: 'header',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'body',
                      'zh-CN': 'body'
                    }
                  },
                  name: 'body',
                  setter: 'StringSetter'
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
                  setter: 'StringSetter'
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
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'content',
                      'zh-CN': 'content'
                    }
                  },
                  name: 'content',
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
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'contentWrapperStyle',
            'zh-CN': 'contentWrapperStyle'
          }
        },
        name: 'contentWrapperStyle',
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
            'en-US': 'drawerStyle',
            'zh-CN': 'drawerStyle'
          }
        },
        name: 'drawerStyle',
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
            'en-US': 'footer',
            'zh-CN': 'footer'
          }
        },
        name: 'footer',
        setter: 'SlotSetter'
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
                            'en-US': 'ownerDocument',
                            'zh-CN': 'ownerDocument'
                          }
                        },
                        name: 'ownerDocument',
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
                            'en-US': 'getElementById',
                            'zh-CN': 'getElementById'
                          }
                        },
                        name: 'getElementById',
                        setter: 'FunctionSetter'
                      }
                    ]
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
            'en-US': 'maskClassName',
            'zh-CN': 'maskClassName'
          }
        },
        name: 'maskClassName',
        setter: 'StringSetter'
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
            'en-US': 'maskMotion',
            'zh-CN': 'maskMotion'
          }
        },
        name: 'maskMotion',
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
                      'en-US': 'motionName',
                      'zh-CN': 'motionName'
                    }
                  },
                  name: 'motionName',
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
                                      'en-US': 'appear',
                                      'zh-CN': 'appear'
                                    }
                                  },
                                  name: 'appear',
                                  setter: 'StringSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'enter',
                                      'zh-CN': 'enter'
                                    }
                                  },
                                  name: 'enter',
                                  setter: 'StringSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'leave',
                                      'zh-CN': 'leave'
                                    }
                                  },
                                  name: 'leave',
                                  setter: 'StringSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'appearActive',
                                      'zh-CN': 'appearActive'
                                    }
                                  },
                                  name: 'appearActive',
                                  setter: 'StringSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'enterActive',
                                      'zh-CN': 'enterActive'
                                    }
                                  },
                                  name: 'enterActive',
                                  setter: 'StringSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'leaveActive',
                                      'zh-CN': 'leaveActive'
                                    }
                                  },
                                  name: 'leaveActive',
                                  setter: 'StringSetter'
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
                      'en-US': 'visible',
                      'zh-CN': 'visible'
                    }
                  },
                  name: 'visible',
                  setter: 'BoolSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'motionAppear',
                      'zh-CN': 'motionAppear'
                    }
                  },
                  name: 'motionAppear',
                  setter: 'BoolSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'motionEnter',
                      'zh-CN': 'motionEnter'
                    }
                  },
                  name: 'motionEnter',
                  setter: 'BoolSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'motionLeave',
                      'zh-CN': 'motionLeave'
                    }
                  },
                  name: 'motionLeave',
                  setter: 'BoolSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'motionLeaveImmediately',
                      'zh-CN': 'motionLeaveImmediately'
                    }
                  },
                  name: 'motionLeaveImmediately',
                  setter: 'BoolSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'motionDeadline',
                      'zh-CN': 'motionDeadline'
                    }
                  },
                  name: 'motionDeadline',
                  setter: 'NumberSetter'
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
                      'en-US': 'removeOnLeave',
                      'zh-CN': 'removeOnLeave'
                    }
                  },
                  name: 'removeOnLeave',
                  setter: 'BoolSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'leavedClassName',
                      'zh-CN': 'leavedClassName'
                    }
                  },
                  name: 'leavedClassName',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'eventProps',
                      'zh-CN': 'eventProps'
                    }
                  },
                  name: 'eventProps',
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
                      'en-US': 'onAppearPrepare',
                      'zh-CN': 'onAppearPrepare'
                    }
                  },
                  name: 'onAppearPrepare',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onEnterPrepare',
                      'zh-CN': 'onEnterPrepare'
                    }
                  },
                  name: 'onEnterPrepare',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onLeavePrepare',
                      'zh-CN': 'onLeavePrepare'
                    }
                  },
                  name: 'onLeavePrepare',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onAppearStart',
                      'zh-CN': 'onAppearStart'
                    }
                  },
                  name: 'onAppearStart',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onEnterStart',
                      'zh-CN': 'onEnterStart'
                    }
                  },
                  name: 'onEnterStart',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onLeaveStart',
                      'zh-CN': 'onLeaveStart'
                    }
                  },
                  name: 'onLeaveStart',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onAppearActive',
                      'zh-CN': 'onAppearActive'
                    }
                  },
                  name: 'onAppearActive',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onEnterActive',
                      'zh-CN': 'onEnterActive'
                    }
                  },
                  name: 'onEnterActive',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onLeaveActive',
                      'zh-CN': 'onLeaveActive'
                    }
                  },
                  name: 'onLeaveActive',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onAppearEnd',
                      'zh-CN': 'onAppearEnd'
                    }
                  },
                  name: 'onAppearEnd',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onEnterEnd',
                      'zh-CN': 'onEnterEnd'
                    }
                  },
                  name: 'onEnterEnd',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onLeaveEnd',
                      'zh-CN': 'onLeaveEnd'
                    }
                  },
                  name: 'onLeaveEnd',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onVisibleChanged',
                      'zh-CN': 'onVisibleChanged'
                    }
                  },
                  name: 'onVisibleChanged',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'internalRef',
                      'zh-CN': 'internalRef'
                    }
                  },
                  name: 'internalRef',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
                        'FunctionSetter',
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
                        }
                      ]
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'children',
                      'zh-CN': 'children'
                    }
                  },
                  name: 'children',
                  setter: 'FunctionSetter'
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
            'en-US': 'maskStyle',
            'zh-CN': 'maskStyle'
          }
        },
        name: 'maskStyle',
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
            'en-US': 'motion',
            'zh-CN': 'motion'
          }
        },
        name: 'motion',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
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
                            'en-US': 'motionName',
                            'zh-CN': 'motionName'
                          }
                        },
                        name: 'motionName',
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
                                            'en-US': 'appear',
                                            'zh-CN': 'appear'
                                          }
                                        },
                                        name: 'appear',
                                        setter: 'StringSetter'
                                      },
                                      {
                                        title: {
                                          label: {
                                            type: 'i18n',
                                            'en-US': 'enter',
                                            'zh-CN': 'enter'
                                          }
                                        },
                                        name: 'enter',
                                        setter: 'StringSetter'
                                      },
                                      {
                                        title: {
                                          label: {
                                            type: 'i18n',
                                            'en-US': 'leave',
                                            'zh-CN': 'leave'
                                          }
                                        },
                                        name: 'leave',
                                        setter: 'StringSetter'
                                      },
                                      {
                                        title: {
                                          label: {
                                            type: 'i18n',
                                            'en-US': 'appearActive',
                                            'zh-CN': 'appearActive'
                                          }
                                        },
                                        name: 'appearActive',
                                        setter: 'StringSetter'
                                      },
                                      {
                                        title: {
                                          label: {
                                            type: 'i18n',
                                            'en-US': 'enterActive',
                                            'zh-CN': 'enterActive'
                                          }
                                        },
                                        name: 'enterActive',
                                        setter: 'StringSetter'
                                      },
                                      {
                                        title: {
                                          label: {
                                            type: 'i18n',
                                            'en-US': 'leaveActive',
                                            'zh-CN': 'leaveActive'
                                          }
                                        },
                                        name: 'leaveActive',
                                        setter: 'StringSetter'
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
                            'en-US': 'visible',
                            'zh-CN': 'visible'
                          }
                        },
                        name: 'visible',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'motionAppear',
                            'zh-CN': 'motionAppear'
                          }
                        },
                        name: 'motionAppear',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'motionEnter',
                            'zh-CN': 'motionEnter'
                          }
                        },
                        name: 'motionEnter',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'motionLeave',
                            'zh-CN': 'motionLeave'
                          }
                        },
                        name: 'motionLeave',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'motionLeaveImmediately',
                            'zh-CN': 'motionLeaveImmediately'
                          }
                        },
                        name: 'motionLeaveImmediately',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'motionDeadline',
                            'zh-CN': 'motionDeadline'
                          }
                        },
                        name: 'motionDeadline',
                        setter: 'NumberSetter'
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
                            'en-US': 'removeOnLeave',
                            'zh-CN': 'removeOnLeave'
                          }
                        },
                        name: 'removeOnLeave',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'leavedClassName',
                            'zh-CN': 'leavedClassName'
                          }
                        },
                        name: 'leavedClassName',
                        setter: 'StringSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'eventProps',
                            'zh-CN': 'eventProps'
                          }
                        },
                        name: 'eventProps',
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
                            'en-US': 'onAppearPrepare',
                            'zh-CN': 'onAppearPrepare'
                          }
                        },
                        name: 'onAppearPrepare',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onEnterPrepare',
                            'zh-CN': 'onEnterPrepare'
                          }
                        },
                        name: 'onEnterPrepare',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onLeavePrepare',
                            'zh-CN': 'onLeavePrepare'
                          }
                        },
                        name: 'onLeavePrepare',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onAppearStart',
                            'zh-CN': 'onAppearStart'
                          }
                        },
                        name: 'onAppearStart',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onEnterStart',
                            'zh-CN': 'onEnterStart'
                          }
                        },
                        name: 'onEnterStart',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onLeaveStart',
                            'zh-CN': 'onLeaveStart'
                          }
                        },
                        name: 'onLeaveStart',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onAppearActive',
                            'zh-CN': 'onAppearActive'
                          }
                        },
                        name: 'onAppearActive',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onEnterActive',
                            'zh-CN': 'onEnterActive'
                          }
                        },
                        name: 'onEnterActive',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onLeaveActive',
                            'zh-CN': 'onLeaveActive'
                          }
                        },
                        name: 'onLeaveActive',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onAppearEnd',
                            'zh-CN': 'onAppearEnd'
                          }
                        },
                        name: 'onAppearEnd',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onEnterEnd',
                            'zh-CN': 'onEnterEnd'
                          }
                        },
                        name: 'onEnterEnd',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onLeaveEnd',
                            'zh-CN': 'onLeaveEnd'
                          }
                        },
                        name: 'onLeaveEnd',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onVisibleChanged',
                            'zh-CN': 'onVisibleChanged'
                          }
                        },
                        name: 'onVisibleChanged',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'internalRef',
                            'zh-CN': 'internalRef'
                          }
                        },
                        name: 'internalRef',
                        setter: {
                          componentName: 'MixedSetter',
                          props: {
                            setters: [
                              'FunctionSetter',
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
                              }
                            ]
                          }
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'children',
                            'zh-CN': 'children'
                          }
                        },
                        name: 'children',
                        setter: 'FunctionSetter'
                      }
                    ]
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
            'en-US': 'onClick',
            'zh-CN': 'onClick'
          }
        },
        name: 'onClick',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onClose',
            'zh-CN': 'onClose'
          }
        },
        name: 'onClose',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onKeyDown',
            'zh-CN': 'onKeyDown'
          }
        },
        name: 'onKeyDown',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onKeyUp',
            'zh-CN': 'onKeyUp'
          }
        },
        name: 'onKeyUp',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onMouseEnter',
            'zh-CN': 'onMouseEnter'
          }
        },
        name: 'onMouseEnter',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onMouseLeave',
            'zh-CN': 'onMouseLeave'
          }
        },
        name: 'onMouseLeave',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onMouseOver',
            'zh-CN': 'onMouseOver'
          }
        },
        name: 'onMouseOver',
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
            'en-US': 'panelRef',
            'zh-CN': 'panelRef'
          }
        },
        name: 'panelRef',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'FunctionSetter',
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
                label: 'left',
                value: 'left'
              },
              {
                label: 'right',
                value: 'right'
              },
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
                label: 'left',
                value: 'left'
              },
              {
                label: 'right',
                value: 'right'
              },
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'push',
            'zh-CN': 'push'
          }
        },
        name: 'push',
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
                            'en-US': 'distance',
                            'zh-CN': 'distance'
                          }
                        },
                        name: 'distance',
                        setter: {
                          componentName: 'MixedSetter',
                          props: {
                            setters: ['StringSetter', 'NumberSetter']
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
            'en-US': 'rootStyle',
            'zh-CN': 'rootStyle'
          }
        },
        name: 'rootStyle',
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
                label: 'default',
                value: 'default'
              },
              {
                label: 'large',
                value: 'large'
              }
            ],
            options: [
              {
                label: 'default',
                value: 'default'
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
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'header',
                      'zh-CN': 'header'
                    }
                  },
                  name: 'header',
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
                      'en-US': 'body',
                      'zh-CN': 'body'
                    }
                  },
                  name: 'body',
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
                      'en-US': 'footer',
                      'zh-CN': 'footer'
                    }
                  },
                  name: 'footer',
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
                      'en-US': 'mask',
                      'zh-CN': 'mask'
                    }
                  },
                  name: 'mask',
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
                      'en-US': 'content',
                      'zh-CN': 'content'
                    }
                  },
                  name: 'content',
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
            'en-US': 'title',
            'zh-CN': 'title'
          }
        },
        name: 'title',
        setter: 'SlotSetter'
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
            'en-US': 'zIndex',
            'zh-CN': 'zIndex'
          }
        },
        name: 'zIndex',
        setter: 'NumberSetter'
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
    title: '抽屉',
    screenshot: '',
    schema: {
      componentName: 'Drawer',
      props: {}
    }
  }
];

export default {
  ...DrawerMeta,
  snippets
};
