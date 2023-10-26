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
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Drawer',
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
            'en-US': 'autoFocus',
            'zh-CN': 'autoFocus'
          },
          tip: {
            type: 'i18n',
            'en-US': 'autoFocus',
            'zh-CN': 'autoFocus'
          }
        },
        name: 'autoFocus',
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
                    componentName: 'StringSetter',
                    initialValue: undefined
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
                    componentName: 'StringSetter',
                    initialValue: undefined
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
                    componentName: 'StringSetter',
                    initialValue: undefined
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
                    componentName: 'StringSetter',
                    initialValue: undefined
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
                    componentName: 'StringSetter',
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
            'en-US': 'contentWrapperStyle',
            'zh-CN': 'contentWrapperStyle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'contentWrapperStyle',
            'zh-CN': 'contentWrapperStyle'
          }
        },
        name: 'contentWrapperStyle',
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
            'en-US': 'drawerStyle',
            'zh-CN': 'drawerStyle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'drawerStyle',
            'zh-CN': 'drawerStyle'
          }
        },
        name: 'drawerStyle',
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
            'en-US': 'extra',
            'zh-CN': 'extra'
          },
          tip: {
            type: 'i18n',
            'en-US': 'extra',
            'zh-CN': 'extra'
          }
        },
        name: 'extra',
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
                componentName: 'ObjectSetter',
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
                            'en-US': 'getElementById',
                            'zh-CN': 'getElementById'
                          }
                        },
                        name: 'getElementById',
                        setter: {
                          componentName: 'FunctionSetter'
                        }
                      }
                    ],
                    extraSetter: {
                      componentName: 'MixedSetter',
                      props: {}
                    }
                  }
                }
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
            'en-US': 'height',
            'zh-CN': 'height'
          },
          tip: {
            type: 'i18n',
            'en-US': 'height',
            'zh-CN': 'height'
          }
        },
        name: 'height',
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
            'en-US': 'id',
            'zh-CN': 'id'
          },
          tip: {
            type: 'i18n',
            'en-US': 'id',
            'zh-CN': 'id'
          }
        },
        name: 'id',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
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
            'en-US': 'maskClassName',
            'zh-CN': 'maskClassName'
          },
          tip: {
            type: 'i18n',
            'en-US': 'maskClassName',
            'zh-CN': 'maskClassName'
          }
        },
        name: 'maskClassName',
        setter: {
          componentName: 'StringSetter',
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
            'en-US': 'maskMotion',
            'zh-CN': 'maskMotion'
          },
          tip: {
            type: 'i18n',
            'en-US': 'maskMotion',
            'zh-CN': 'maskMotion'
          }
        },
        name: 'maskMotion',
        setter: {
          componentName: 'ObjectSetter',
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
                        {
                          componentName: 'StringSetter',
                          initialValue: undefined
                        },
                        {
                          componentName: 'ObjectSetter',
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
                                  setter: {
                                    componentName: 'StringSetter',
                                    initialValue: undefined
                                  }
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
                                  setter: {
                                    componentName: 'StringSetter',
                                    initialValue: undefined
                                  }
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
                                  setter: {
                                    componentName: 'StringSetter',
                                    initialValue: undefined
                                  }
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
                                  setter: {
                                    componentName: 'StringSetter',
                                    initialValue: undefined
                                  }
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
                                  setter: {
                                    componentName: 'StringSetter',
                                    initialValue: undefined
                                  }
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
                                  setter: {
                                    componentName: 'StringSetter',
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
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
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
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
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
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
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
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
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
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
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
                  setter: {
                    componentName: 'NumberSetter',
                    initialValue: undefined
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
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
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
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
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
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
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
                      'en-US': 'onAppearPrepare',
                      'zh-CN': 'onAppearPrepare'
                    }
                  },
                  name: 'onAppearPrepare',
                  setter: {
                    componentName: 'FunctionSetter'
                  }
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
                  setter: {
                    componentName: 'FunctionSetter'
                  }
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
                  setter: {
                    componentName: 'FunctionSetter'
                  }
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
                  setter: {
                    componentName: 'FunctionSetter'
                  }
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
                  setter: {
                    componentName: 'FunctionSetter'
                  }
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
                  setter: {
                    componentName: 'FunctionSetter'
                  }
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
                  setter: {
                    componentName: 'FunctionSetter'
                  }
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
                  setter: {
                    componentName: 'FunctionSetter'
                  }
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
                  setter: {
                    componentName: 'FunctionSetter'
                  }
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
                  setter: {
                    componentName: 'FunctionSetter'
                  }
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
                  setter: {
                    componentName: 'FunctionSetter'
                  }
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
                  setter: {
                    componentName: 'FunctionSetter'
                  }
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
                  setter: {
                    componentName: 'FunctionSetter'
                  }
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
                        {
                          componentName: 'FunctionSetter'
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
                  setter: {
                    componentName: 'FunctionSetter'
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
            'en-US': 'maskStyle',
            'zh-CN': 'maskStyle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'maskStyle',
            'zh-CN': 'maskStyle'
          }
        },
        name: 'maskStyle',
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
            'en-US': 'motion',
            'zh-CN': 'motion'
          },
          tip: {
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
                              {
                                componentName: 'StringSetter',
                                initialValue: undefined
                              },
                              {
                                componentName: 'ObjectSetter',
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
                                        setter: {
                                          componentName: 'StringSetter',
                                          initialValue: undefined
                                        }
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
                                        setter: {
                                          componentName: 'StringSetter',
                                          initialValue: undefined
                                        }
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
                                        setter: {
                                          componentName: 'StringSetter',
                                          initialValue: undefined
                                        }
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
                                        setter: {
                                          componentName: 'StringSetter',
                                          initialValue: undefined
                                        }
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
                                        setter: {
                                          componentName: 'StringSetter',
                                          initialValue: undefined
                                        }
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
                                        setter: {
                                          componentName: 'StringSetter',
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
                        setter: {
                          componentName: 'BoolSetter',
                          initialValue: undefined
                        }
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
                        setter: {
                          componentName: 'BoolSetter',
                          initialValue: undefined
                        }
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
                        setter: {
                          componentName: 'BoolSetter',
                          initialValue: undefined
                        }
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
                        setter: {
                          componentName: 'BoolSetter',
                          initialValue: undefined
                        }
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
                        setter: {
                          componentName: 'BoolSetter',
                          initialValue: undefined
                        }
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
                        setter: {
                          componentName: 'NumberSetter',
                          initialValue: undefined
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
                        setter: {
                          componentName: 'BoolSetter',
                          initialValue: undefined
                        }
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
                        setter: {
                          componentName: 'BoolSetter',
                          initialValue: undefined
                        }
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
                        setter: {
                          componentName: 'StringSetter',
                          initialValue: undefined
                        }
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
                            'en-US': 'onAppearPrepare',
                            'zh-CN': 'onAppearPrepare'
                          }
                        },
                        name: 'onAppearPrepare',
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                              {
                                componentName: 'FunctionSetter'
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
                      }
                    ],
                    extraSetter: {
                      componentName: 'MixedSetter',
                      props: {}
                    }
                  }
                }
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
            'en-US': 'onClick',
            'zh-CN': 'onClick'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onClick',
            'zh-CN': 'onClick'
          }
        },
        name: 'onClick',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onClose',
            'zh-CN': 'onClose'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onClose',
            'zh-CN': 'onClose'
          }
        },
        name: 'onClose',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onKeyDown',
            'zh-CN': 'onKeyDown'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onKeyDown',
            'zh-CN': 'onKeyDown'
          }
        },
        name: 'onKeyDown',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onKeyUp',
            'zh-CN': 'onKeyUp'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onKeyUp',
            'zh-CN': 'onKeyUp'
          }
        },
        name: 'onKeyUp',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onMouseEnter',
            'zh-CN': 'onMouseEnter'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onMouseEnter',
            'zh-CN': 'onMouseEnter'
          }
        },
        name: 'onMouseEnter',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onMouseLeave',
            'zh-CN': 'onMouseLeave'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onMouseLeave',
            'zh-CN': 'onMouseLeave'
          }
        },
        name: 'onMouseLeave',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onMouseOver',
            'zh-CN': 'onMouseOver'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onMouseOver',
            'zh-CN': 'onMouseOver'
          }
        },
        name: 'onMouseOver',
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
            'en-US': 'panelRef',
            'zh-CN': 'panelRef'
          },
          tip: {
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
              {
                componentName: 'FunctionSetter'
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
          },
          tip: {
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
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'push',
            'zh-CN': 'push'
          },
          tip: {
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
              {
                componentName: 'BoolSetter',
                initialValue: undefined
              },
              {
                componentName: 'ObjectSetter',
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
                      }
                    ],
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
            'en-US': 'rootStyle',
            'zh-CN': 'rootStyle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'rootStyle',
            'zh-CN': 'rootStyle'
          }
        },
        name: 'rootStyle',
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
            'en-US': 'size',
            'zh-CN': 'size'
          },
          tip: {
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
          },
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
                      'en-US': 'body',
                      'zh-CN': 'body'
                    }
                  },
                  name: 'body',
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
                      'en-US': 'footer',
                      'zh-CN': 'footer'
                    }
                  },
                  name: 'footer',
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
                      'en-US': 'mask',
                      'zh-CN': 'mask'
                    }
                  },
                  name: 'mask',
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
                      'en-US': 'content',
                      'zh-CN': 'content'
                    }
                  },
                  name: 'content',
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
