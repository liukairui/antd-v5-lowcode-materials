import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PopconfirmMeta: IPublicTypeComponentMetadata = {
  componentName: 'Popconfirm',
  title: '气泡确认框',
  group: '原子组件',
  category: '反馈 Feedback',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Popconfirm',
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
            'en-US': 'align',
            'zh-CN': 'align'
          },
          tip: {
            type: 'i18n',
            'en-US': 'align',
            'zh-CN': 'align'
          }
        },
        name: 'align',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'points',
                      'zh-CN': 'points'
                    }
                  },
                  name: 'points',
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
                        componentName: 'MixedSetter',
                        props: {}
                      }
                    },
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': '_experimental',
                      'zh-CN': '_experimental'
                    }
                  },
                  name: '_experimental',
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
                      'en-US': 'offset',
                      'zh-CN': 'offset'
                    }
                  },
                  name: 'offset',
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
                        componentName: 'MixedSetter',
                        props: {}
                      }
                    },
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'targetOffset',
                      'zh-CN': 'targetOffset'
                    }
                  },
                  name: 'targetOffset',
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
                        componentName: 'MixedSetter',
                        props: {}
                      }
                    },
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'overflow',
                      'zh-CN': 'overflow'
                    }
                  },
                  name: 'overflow',
                  setter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'adjustX',
                                'zh-CN': 'adjustX'
                              }
                            },
                            name: 'adjustX',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'NumberSetter',
                                    initialValue: undefined
                                  },
                                  {
                                    componentName: 'BoolSetter',
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
                                'en-US': 'adjustY',
                                'zh-CN': 'adjustY'
                              }
                            },
                            name: 'adjustY',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'NumberSetter',
                                    initialValue: undefined
                                  },
                                  {
                                    componentName: 'BoolSetter',
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
                                'en-US': 'shiftX',
                                'zh-CN': 'shiftX'
                              }
                            },
                            name: 'shiftX',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'NumberSetter',
                                    initialValue: undefined
                                  },
                                  {
                                    componentName: 'BoolSetter',
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
                                'en-US': 'shiftY',
                                'zh-CN': 'shiftY'
                              }
                            },
                            name: 'shiftY',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'NumberSetter',
                                    initialValue: undefined
                                  },
                                  {
                                    componentName: 'BoolSetter',
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
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'autoArrow',
                      'zh-CN': 'autoArrow'
                    }
                  },
                  name: 'autoArrow',
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'htmlRegion',
                      'zh-CN': 'htmlRegion'
                    }
                  },
                  name: 'htmlRegion',
                  setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                      dataSource: [
                        {
                          label: 'visible',
                          value: 'visible'
                        },
                        {
                          label: 'scroll',
                          value: 'scroll'
                        },
                        {
                          label: 'visibleFirst',
                          value: 'visibleFirst'
                        }
                      ],
                      options: [
                        {
                          label: 'visible',
                          value: 'visible'
                        },
                        {
                          label: 'scroll',
                          value: 'scroll'
                        },
                        {
                          label: 'visibleFirst',
                          value: 'visibleFirst'
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
                      'en-US': 'dynamicInset',
                      'zh-CN': 'dynamicInset'
                    }
                  },
                  name: 'dynamicInset',
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'useCssRight',
                      'zh-CN': 'useCssRight'
                    }
                  },
                  name: 'useCssRight',
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'useCssBottom',
                      'zh-CN': 'useCssBottom'
                    }
                  },
                  name: 'useCssBottom',
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'useCssTransform',
                      'zh-CN': 'useCssTransform'
                    }
                  },
                  name: 'useCssTransform',
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'ignoreShake',
                      'zh-CN': 'ignoreShake'
                    }
                  },
                  name: 'ignoreShake',
                  setter: {
                    componentName: 'BoolSetter',
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
            'en-US': 'arrow',
            'zh-CN': 'arrow'
          },
          tip: {
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
                            'en-US': 'arrowPointAtCenter',
                            'zh-CN': 'arrowPointAtCenter'
                          }
                        },
                        name: 'arrowPointAtCenter',
                        setter: {
                          componentName: 'BoolSetter',
                          initialValue: undefined
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'pointAtCenter',
                            'zh-CN': 'pointAtCenter'
                          }
                        },
                        name: 'pointAtCenter',
                        setter: {
                          componentName: 'BoolSetter',
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
            'en-US': 'arrowContent',
            'zh-CN': 'arrowContent'
          },
          tip: {
            type: 'i18n',
            'en-US': 'arrowContent',
            'zh-CN': 'arrowContent'
          }
        },
        name: 'arrowContent',
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
            'en-US': 'autoAdjustOverflow',
            'zh-CN': 'autoAdjustOverflow'
          },
          tip: {
            type: 'i18n',
            'en-US': 'autoAdjustOverflow',
            'zh-CN': 'autoAdjustOverflow'
          }
        },
        name: 'autoAdjustOverflow',
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
                            'en-US': 'adjustX',
                            'zh-CN': 'adjustX'
                          }
                        },
                        name: 'adjustX',
                        setter: {
                          componentName: 'RadioGroupSetter',
                          props: {
                            dataSource: [
                              {
                                label: '0',
                                value: 0
                              },
                              {
                                label: '1',
                                value: 1
                              }
                            ],
                            options: [
                              {
                                label: '0',
                                value: 0
                              },
                              {
                                label: '1',
                                value: 1
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
                            'en-US': 'adjustY',
                            'zh-CN': 'adjustY'
                          }
                        },
                        name: 'adjustY',
                        setter: {
                          componentName: 'RadioGroupSetter',
                          props: {
                            dataSource: [
                              {
                                label: '0',
                                value: 0
                              },
                              {
                                label: '1',
                                value: 1
                              }
                            ],
                            options: [
                              {
                                label: '0',
                                value: 0
                              },
                              {
                                label: '1',
                                value: 1
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
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'builtinPlacements',
            'zh-CN': 'builtinPlacements'
          },
          tip: {
            type: 'i18n',
            'en-US': 'builtinPlacements',
            'zh-CN': 'builtinPlacements'
          }
        },
        name: 'builtinPlacements',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              extraSetter: {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [],
                    extraSetter: {
                      componentName: 'MixedSetter',
                      props: {}
                    }
                  }
                }
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
            'en-US': 'color',
            'zh-CN': 'color'
          },
          tip: {
            type: 'i18n',
            'en-US': 'color',
            'zh-CN': 'color'
          }
        },
        name: 'color',
        setter: {
          componentName: 'MixedSetter',
          props: {}
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultOpen',
            'zh-CN': 'defaultOpen'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultOpen',
            'zh-CN': 'defaultOpen'
          }
        },
        name: 'defaultOpen',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'description',
            'zh-CN': 'description'
          },
          tip: {
            type: 'i18n',
            'en-US': 'description',
            'zh-CN': 'description'
          }
        },
        name: 'description',
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
            'en-US': 'destroyTooltipOnHide',
            'zh-CN': 'destroyTooltipOnHide'
          },
          tip: {
            type: 'i18n',
            'en-US': 'destroyTooltipOnHide',
            'zh-CN': 'destroyTooltipOnHide'
          }
        },
        name: 'destroyTooltipOnHide',
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
                            'en-US': 'keepParent',
                            'zh-CN': 'keepParent'
                          }
                        },
                        name: 'keepParent',
                        setter: {
                          componentName: 'BoolSetter',
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
            'en-US': 'disabled',
            'zh-CN': 'disabled'
          },
          tip: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': 'disabled'
          }
        },
        name: 'disabled',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fresh',
            'zh-CN': 'fresh'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fresh',
            'zh-CN': 'fresh'
          }
        },
        name: 'fresh',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getPopupContainer',
            'zh-CN': 'getPopupContainer'
          },
          tip: {
            type: 'i18n',
            'en-US': 'getPopupContainer',
            'zh-CN': 'getPopupContainer'
          }
        },
        name: 'getPopupContainer',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getTooltipContainer',
            'zh-CN': 'getTooltipContainer'
          },
          tip: {
            type: 'i18n',
            'en-US': 'getTooltipContainer',
            'zh-CN': 'getTooltipContainer'
          }
        },
        name: 'getTooltipContainer',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'icon',
            'zh-CN': 'icon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'icon',
            'zh-CN': 'icon'
          }
        },
        name: 'icon',
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
            'en-US': 'mouseEnterDelay',
            'zh-CN': 'mouseEnterDelay'
          },
          tip: {
            type: 'i18n',
            'en-US': 'mouseEnterDelay',
            'zh-CN': 'mouseEnterDelay'
          }
        },
        name: 'mouseEnterDelay',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mouseLeaveDelay',
            'zh-CN': 'mouseLeaveDelay'
          },
          tip: {
            type: 'i18n',
            'en-US': 'mouseLeaveDelay',
            'zh-CN': 'mouseLeaveDelay'
          }
        },
        name: 'mouseLeaveDelay',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
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
            'en-US': 'onConfirm',
            'zh-CN': 'onConfirm'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onConfirm',
            'zh-CN': 'onConfirm'
          }
        },
        name: 'onConfirm',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onOpenChange',
            'zh-CN': 'onOpenChange'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onOpenChange',
            'zh-CN': 'onOpenChange'
          }
        },
        name: 'onOpenChange',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onPopupAlign',
            'zh-CN': 'onPopupAlign'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onPopupAlign',
            'zh-CN': 'onPopupAlign'
          }
        },
        name: 'onPopupAlign',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onPopupClick',
            'zh-CN': 'onPopupClick'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onPopupClick',
            'zh-CN': 'onPopupClick'
          }
        },
        name: 'onPopupClick',
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
            'en-US': 'openClassName',
            'zh-CN': 'openClassName'
          },
          tip: {
            type: 'i18n',
            'en-US': 'openClassName',
            'zh-CN': 'openClassName'
          }
        },
        name: 'openClassName',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'overlay',
            'zh-CN': 'overlay'
          },
          tip: {
            type: 'i18n',
            'en-US': 'overlay',
            'zh-CN': 'overlay'
          }
        },
        name: 'overlay',
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
            'en-US': 'overlayClassName',
            'zh-CN': 'overlayClassName'
          },
          tip: {
            type: 'i18n',
            'en-US': 'overlayClassName',
            'zh-CN': 'overlayClassName'
          }
        },
        name: 'overlayClassName',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'overlayInnerStyle',
            'zh-CN': 'overlayInnerStyle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'overlayInnerStyle',
            'zh-CN': 'overlayInnerStyle'
          }
        },
        name: 'overlayInnerStyle',
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
            'en-US': 'overlayStyle',
            'zh-CN': 'overlayStyle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'overlayStyle',
            'zh-CN': 'overlayStyle'
          }
        },
        name: 'overlayStyle',
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
                label: 'bottomLeft',
                value: 'bottomLeft'
              },
              {
                label: 'bottomRight',
                value: 'bottomRight'
              },
              {
                label: 'leftTop',
                value: 'leftTop'
              },
              {
                label: 'leftBottom',
                value: 'leftBottom'
              },
              {
                label: 'rightTop',
                value: 'rightTop'
              },
              {
                label: 'rightBottom',
                value: 'rightBottom'
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
                label: 'bottomLeft',
                value: 'bottomLeft'
              },
              {
                label: 'bottomRight',
                value: 'bottomRight'
              },
              {
                label: 'leftTop',
                value: 'leftTop'
              },
              {
                label: 'leftBottom',
                value: 'leftBottom'
              },
              {
                label: 'rightTop',
                value: 'rightTop'
              },
              {
                label: 'rightBottom',
                value: 'rightBottom'
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
            'en-US': 'showArrow',
            'zh-CN': 'showArrow'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showArrow',
            'zh-CN': 'showArrow'
          }
        },
        name: 'showArrow',
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
                            'en-US': 'className',
                            'zh-CN': 'className'
                          }
                        },
                        name: 'className',
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
                          componentName: 'SlotSetter',
                          props: {
                            mode: 'node'
                          },
                          initialValue: {
                            type: 'JSSlot',
                            value: []
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
            'en-US': 'showCancel',
            'zh-CN': 'showCancel'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showCancel',
            'zh-CN': 'showCancel'
          }
        },
        name: 'showCancel',
        setter: {
          componentName: 'BoolSetter',
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
            'en-US': 'trigger',
            'zh-CN': 'trigger'
          },
          tip: {
            type: 'i18n',
            'en-US': 'trigger',
            'zh-CN': 'trigger'
          }
        },
        name: 'trigger',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'SelectSetter',
                    props: {
                      dataSource: [
                        {
                          label: 'click',
                          value: 'click'
                        },
                        {
                          label: 'hover',
                          value: 'hover'
                        },
                        {
                          label: 'contextMenu',
                          value: 'contextMenu'
                        },
                        {
                          label: 'focus',
                          value: 'focus'
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
                        },
                        {
                          label: 'contextMenu',
                          value: 'contextMenu'
                        },
                        {
                          label: 'focus',
                          value: 'focus'
                        }
                      ]
                    },
                    initialValue: undefined
                  }
                },
                initialValue: undefined
              },
              {
                componentName: 'SelectSetter',
                props: {
                  dataSource: [
                    {
                      label: 'click',
                      value: 'click'
                    },
                    {
                      label: 'hover',
                      value: 'hover'
                    },
                    {
                      label: 'contextMenu',
                      value: 'contextMenu'
                    },
                    {
                      label: 'focus',
                      value: 'focus'
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
                    },
                    {
                      label: 'contextMenu',
                      value: 'contextMenu'
                    },
                    {
                      label: 'focus',
                      value: 'focus'
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
    title: '气泡确认框',
    screenshot: '',
    schema: {
      componentName: 'Popconfirm',
      props: {}
    }
  }
];

export default {
  ...PopconfirmMeta,
  snippets
};
