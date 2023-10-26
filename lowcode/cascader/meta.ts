import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CascaderMeta: IPublicTypeComponentMetadata = {
  componentName: 'Cascader',
  title: '级联选择',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Cascader',
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
            'en-US': 'allowClear',
            'zh-CN': 'allowClear'
          },
          tip: {
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
                            'en-US': 'clearIcon',
                            'zh-CN': 'clearIcon'
                          }
                        },
                        name: 'clearIcon',
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
            'en-US': 'animation',
            'zh-CN': 'animation'
          },
          tip: {
            type: 'i18n',
            'en-US': 'animation',
            'zh-CN': 'animation'
          }
        },
        name: 'animation',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoClearSearchValue',
            'zh-CN': 'autoClearSearchValue'
          },
          tip: {
            type: 'i18n',
            'en-US': 'autoClearSearchValue',
            'zh-CN': 'autoClearSearchValue'
          }
        },
        name: 'autoClearSearchValue',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
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
            'en-US': 'bordered',
            'zh-CN': 'bordered'
          },
          tip: {
            type: 'i18n',
            'en-US': 'bordered',
            'zh-CN': 'bordered'
          }
        },
        name: 'bordered',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
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
            'en-US': 'changeOnSelect',
            'zh-CN': 'changeOnSelect'
          },
          tip: {
            type: 'i18n',
            'en-US': 'changeOnSelect',
            'zh-CN': 'changeOnSelect'
          }
        },
        name: 'changeOnSelect',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'choiceTransitionName',
            'zh-CN': 'choiceTransitionName'
          },
          tip: {
            type: 'i18n',
            'en-US': 'choiceTransitionName',
            'zh-CN': 'choiceTransitionName'
          }
        },
        name: 'choiceTransitionName',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'clearIcon',
            'zh-CN': 'clearIcon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'clearIcon',
            'zh-CN': 'clearIcon'
          }
        },
        name: 'clearIcon',
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
            'en-US': 'defaultValue',
            'zh-CN': 'defaultValue'
          },
          tip: {
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
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
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
                initialValue: undefined
              },
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
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
                    initialValue: undefined
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
            'en-US': 'direction',
            'zh-CN': 'direction'
          },
          tip: {
            type: 'i18n',
            'en-US': 'direction',
            'zh-CN': 'direction'
          }
        },
        name: 'direction',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'ltr',
                value: 'ltr'
              },
              {
                label: 'rtl',
                value: 'rtl'
              }
            ],
            options: [
              {
                label: 'ltr',
                value: 'ltr'
              },
              {
                label: 'rtl',
                value: 'rtl'
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
            'en-US': 'displayRender',
            'zh-CN': 'displayRender'
          },
          tip: {
            type: 'i18n',
            'en-US': 'displayRender',
            'zh-CN': 'displayRender'
          }
        },
        name: 'displayRender',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dropdownAlign',
            'zh-CN': 'dropdownAlign'
          },
          tip: {
            type: 'i18n',
            'en-US': 'dropdownAlign',
            'zh-CN': 'dropdownAlign'
          }
        },
        name: 'dropdownAlign',
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
            'en-US': 'dropdownMatchSelectWidth',
            'zh-CN': 'dropdownMatchSelectWidth'
          },
          tip: {
            type: 'i18n',
            'en-US': 'dropdownMatchSelectWidth',
            'zh-CN': 'dropdownMatchSelectWidth'
          }
        },
        name: 'dropdownMatchSelectWidth',
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
            'en-US': 'dropdownMenuColumnStyle',
            'zh-CN': 'dropdownMenuColumnStyle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'dropdownMenuColumnStyle',
            'zh-CN': 'dropdownMenuColumnStyle'
          }
        },
        name: 'dropdownMenuColumnStyle',
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
            'en-US': 'dropdownPrefixCls',
            'zh-CN': 'dropdownPrefixCls'
          },
          tip: {
            type: 'i18n',
            'en-US': 'dropdownPrefixCls',
            'zh-CN': 'dropdownPrefixCls'
          }
        },
        name: 'dropdownPrefixCls',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dropdownRender',
            'zh-CN': 'dropdownRender'
          },
          tip: {
            type: 'i18n',
            'en-US': 'dropdownRender',
            'zh-CN': 'dropdownRender'
          }
        },
        name: 'dropdownRender',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dropdownStyle',
            'zh-CN': 'dropdownStyle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'dropdownStyle',
            'zh-CN': 'dropdownStyle'
          }
        },
        name: 'dropdownStyle',
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
            'en-US': 'expandIcon',
            'zh-CN': 'expandIcon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'expandIcon',
            'zh-CN': 'expandIcon'
          }
        },
        name: 'expandIcon',
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
            'en-US': 'expandTrigger',
            'zh-CN': 'expandTrigger'
          },
          tip: {
            type: 'i18n',
            'en-US': 'expandTrigger',
            'zh-CN': 'expandTrigger'
          }
        },
        name: 'expandTrigger',
        setter: {
          componentName: 'RadioGroupSetter',
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
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fieldNames',
            'zh-CN': 'fieldNames'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fieldNames',
            'zh-CN': 'fieldNames'
          }
        },
        name: 'fieldNames',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'label',
                      'zh-CN': 'label'
                    }
                  },
                  name: 'label',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
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
                  name: 'value',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
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
            'en-US': 'getInputElement',
            'zh-CN': 'getInputElement'
          },
          tip: {
            type: 'i18n',
            'en-US': 'getInputElement',
            'zh-CN': 'getInputElement'
          }
        },
        name: 'getInputElement',
        setter: {
          componentName: 'FunctionSetter'
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
            'en-US': 'getRawInputElement',
            'zh-CN': 'getRawInputElement'
          },
          tip: {
            type: 'i18n',
            'en-US': 'getRawInputElement',
            'zh-CN': 'getRawInputElement'
          }
        },
        name: 'getRawInputElement',
        setter: {
          componentName: 'FunctionSetter'
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
            'en-US': 'loadData',
            'zh-CN': 'loadData'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loadData',
            'zh-CN': 'loadData'
          }
        },
        name: 'loadData',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': 'loading'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': 'loading'
          }
        },
        name: 'loading',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loadingIcon',
            'zh-CN': 'loadingIcon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loadingIcon',
            'zh-CN': 'loadingIcon'
          }
        },
        name: 'loadingIcon',
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
            'en-US': 'maxLength',
            'zh-CN': 'maxLength'
          },
          tip: {
            type: 'i18n',
            'en-US': 'maxLength',
            'zh-CN': 'maxLength'
          }
        },
        name: 'maxLength',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxTagCount',
            'zh-CN': 'maxTagCount'
          },
          tip: {
            type: 'i18n',
            'en-US': 'maxTagCount',
            'zh-CN': 'maxTagCount'
          }
        },
        name: 'maxTagCount',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'NumberSetter',
                initialValue: undefined
              },
              {
                componentName: 'RadioGroupSetter',
                props: {
                  dataSource: [
                    {
                      label: 'responsive',
                      value: 'responsive'
                    }
                  ],
                  options: [
                    {
                      label: 'responsive',
                      value: 'responsive'
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
            'en-US': 'maxTagPlaceholder',
            'zh-CN': 'maxTagPlaceholder'
          },
          tip: {
            type: 'i18n',
            'en-US': 'maxTagPlaceholder',
            'zh-CN': 'maxTagPlaceholder'
          }
        },
        name: 'maxTagPlaceholder',
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
            'en-US': 'maxTagTextLength',
            'zh-CN': 'maxTagTextLength'
          },
          tip: {
            type: 'i18n',
            'en-US': 'maxTagTextLength',
            'zh-CN': 'maxTagTextLength'
          }
        },
        name: 'maxTagTextLength',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'multiple',
            'zh-CN': 'multiple'
          },
          tip: {
            type: 'i18n',
            'en-US': 'multiple',
            'zh-CN': 'multiple'
          }
        },
        name: 'multiple',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'notFoundContent',
            'zh-CN': 'notFoundContent'
          },
          tip: {
            type: 'i18n',
            'en-US': 'notFoundContent',
            'zh-CN': 'notFoundContent'
          }
        },
        name: 'notFoundContent',
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
            'en-US': 'onBlur',
            'zh-CN': 'onBlur'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onBlur',
            'zh-CN': 'onBlur'
          }
        },
        name: 'onBlur',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange'
          }
        },
        name: 'onChange',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
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
            'en-US': 'onDropdownVisibleChange',
            'zh-CN': 'onDropdownVisibleChange'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onDropdownVisibleChange',
            'zh-CN': 'onDropdownVisibleChange'
          }
        },
        name: 'onDropdownVisibleChange',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onFocus',
            'zh-CN': 'onFocus'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onFocus',
            'zh-CN': 'onFocus'
          }
        },
        name: 'onFocus',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onInputKeyDown',
            'zh-CN': 'onInputKeyDown'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onInputKeyDown',
            'zh-CN': 'onInputKeyDown'
          }
        },
        name: 'onInputKeyDown',
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
            'en-US': 'onMouseDown',
            'zh-CN': 'onMouseDown'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onMouseDown',
            'zh-CN': 'onMouseDown'
          }
        },
        name: 'onMouseDown',
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
            'en-US': 'onPopupScroll',
            'zh-CN': 'onPopupScroll'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onPopupScroll',
            'zh-CN': 'onPopupScroll'
          }
        },
        name: 'onPopupScroll',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onSearch',
            'zh-CN': 'onSearch'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onSearch',
            'zh-CN': 'onSearch'
          }
        },
        name: 'onSearch',
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
            'en-US': 'options',
            'zh-CN': 'options'
          },
          tip: {
            type: 'i18n',
            'en-US': 'options',
            'zh-CN': 'options'
          }
        },
        name: 'options',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
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
                                'en-US': 'label',
                                'zh-CN': 'label'
                              }
                            },
                            name: 'label',
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
                                'en-US': 'value',
                                'zh-CN': 'value'
                              }
                            },
                            name: 'value',
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
                                'en-US': 'children',
                                'zh-CN': 'children'
                              }
                            },
                            name: 'children',
                            setter: {
                              componentName: 'ArraySetter',
                              props: {
                                itemSetter: {
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
                              initialValue: undefined
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'disableCheckbox',
                                'zh-CN': 'disableCheckbox'
                              }
                            },
                            name: 'disableCheckbox',
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
                                'en-US': 'disabled',
                                'zh-CN': 'disabled'
                              }
                            },
                            name: 'disabled',
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
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': 'placeholder'
          },
          tip: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': 'placeholder'
          }
        },
        name: 'placeholder',
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
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'removeIcon',
            'zh-CN': 'removeIcon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'removeIcon',
            'zh-CN': 'removeIcon'
          }
        },
        name: 'removeIcon',
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
            'en-US': 'searchValue',
            'zh-CN': 'searchValue'
          },
          tip: {
            type: 'i18n',
            'en-US': 'searchValue',
            'zh-CN': 'searchValue'
          }
        },
        name: 'searchValue',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showAction',
            'zh-CN': 'showAction'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showAction',
            'zh-CN': 'showAction'
          }
        },
        name: 'showAction',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'RadioGroupSetter',
              props: {
                dataSource: [
                  {
                    label: 'click',
                    value: 'click'
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
                    label: 'focus',
                    value: 'focus'
                  }
                ]
              },
              initialValue: undefined
            }
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showCheckedStrategy',
            'zh-CN': 'showCheckedStrategy'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showCheckedStrategy',
            'zh-CN': 'showCheckedStrategy'
          }
        },
        name: 'showCheckedStrategy',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'SHOW_PARENT',
                value: 'SHOW_PARENT'
              },
              {
                label: 'SHOW_CHILD',
                value: 'SHOW_CHILD'
              }
            ],
            options: [
              {
                label: 'SHOW_PARENT',
                value: 'SHOW_PARENT'
              },
              {
                label: 'SHOW_CHILD',
                value: 'SHOW_CHILD'
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
            'en-US': 'showSearch',
            'zh-CN': 'showSearch'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showSearch',
            'zh-CN': 'showSearch'
          }
        },
        name: 'showSearch',
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
                            'en-US': 'OptionType',
                            'zh-CN': 'OptionType'
                          }
                        },
                        name: 'OptionType',
                        setter: {
                          componentName: 'MixedSetter',
                          props: {}
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'filter',
                            'zh-CN': 'filter'
                          }
                        },
                        name: 'filter',
                        setter: {
                          componentName: 'FunctionSetter'
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'render',
                            'zh-CN': 'render'
                          }
                        },
                        name: 'render',
                        setter: {
                          componentName: 'FunctionSetter'
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'sort',
                            'zh-CN': 'sort'
                          }
                        },
                        name: 'sort',
                        setter: {
                          componentName: 'FunctionSetter'
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'matchInputWidth',
                            'zh-CN': 'matchInputWidth'
                          }
                        },
                        name: 'matchInputWidth',
                        setter: {
                          componentName: 'BoolSetter',
                          initialValue: undefined
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'limit',
                            'zh-CN': 'limit'
                          }
                        },
                        name: 'limit',
                        setter: {
                          componentName: 'MixedSetter',
                          props: {
                            setters: [
                              {
                                componentName: 'NumberSetter',
                                initialValue: undefined
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
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'status',
            'zh-CN': 'status'
          },
          tip: {
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
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'suffixIcon',
            'zh-CN': 'suffixIcon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'suffixIcon',
            'zh-CN': 'suffixIcon'
          }
        },
        name: 'suffixIcon',
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
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'MixedSetter',
                props: {}
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'MixedSetter',
                props: {}
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'MixedSetter',
                props: {}
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'MixedSetter',
                props: {}
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'MixedSetter',
                props: {}
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'MixedSetter',
                props: {}
              },
              {
                componentName: 'MixedSetter',
                props: {}
              },
              {
                componentName: 'MixedSetter',
                props: {}
              },
              {
                componentName: 'MixedSetter',
                props: {}
              },
              {
                componentName: 'MixedSetter',
                props: {}
              },
              {
                componentName: 'MixedSetter',
                props: {}
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'MixedSetter',
                props: {}
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'MixedSetter',
                props: {}
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
            'en-US': 'tabIndex',
            'zh-CN': 'tabIndex'
          },
          tip: {
            type: 'i18n',
            'en-US': 'tabIndex',
            'zh-CN': 'tabIndex'
          }
        },
        name: 'tabIndex',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tagRender',
            'zh-CN': 'tagRender'
          },
          tip: {
            type: 'i18n',
            'en-US': 'tagRender',
            'zh-CN': 'tagRender'
          }
        },
        name: 'tagRender',
        setter: {
          componentName: 'FunctionSetter'
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
          componentName: 'StringSetter',
          initialValue: undefined
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
            'en-US': 'value',
            'zh-CN': 'value'
          },
          tip: {
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
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
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
                initialValue: undefined
              },
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
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
                    initialValue: undefined
                  }
                },
                initialValue: undefined
              }
            ]
          }
        }
      }
    ],
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onClear'
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
    title: '级联选择',
    screenshot: '',
    schema: {
      componentName: 'Cascader',
      props: {}
    }
  }
];

export default {
  ...CascaderMeta,
  snippets
};
