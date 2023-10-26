import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DropdownMeta: IPublicTypeComponentMetadata = {
  componentName: 'Dropdown',
  title: '下拉菜单',
  group: '原子组件',
  category: '导航 Navigation',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Dropdown',
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
            'en-US': 'destroyPopupOnHide',
            'zh-CN': 'destroyPopupOnHide'
          },
          tip: {
            type: 'i18n',
            'en-US': 'destroyPopupOnHide',
            'zh-CN': 'destroyPopupOnHide'
          }
        },
        name: 'destroyPopupOnHide',
        setter: {
          componentName: 'BoolSetter',
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
            'en-US': 'menu',
            'zh-CN': 'menu'
          },
          tip: {
            type: 'i18n',
            'en-US': 'menu',
            'zh-CN': 'menu'
          }
        },
        name: 'menu',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'theme',
                      'zh-CN': 'theme'
                    }
                  },
                  name: 'theme',
                  setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                      dataSource: [
                        {
                          label: 'light',
                          value: 'light'
                        },
                        {
                          label: 'dark',
                          value: 'dark'
                        }
                      ],
                      options: [
                        {
                          label: 'light',
                          value: 'light'
                        },
                        {
                          label: 'dark',
                          value: 'dark'
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
                      'en-US': 'inlineIndent',
                      'zh-CN': 'inlineIndent'
                    }
                  },
                  name: 'inlineIndent',
                  setter: {
                    componentName: 'NumberSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': '_internalDisableMenuItemTitleTooltip',
                      'zh-CN': '_internalDisableMenuItemTitleTooltip'
                    }
                  },
                  name: '_internalDisableMenuItemTitleTooltip',
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'items',
                      'zh-CN': 'items'
                    }
                  },
                  name: 'items',
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
                                          'en-US': 'dashed',
                                          'zh-CN': 'dashed'
                                        }
                                      },
                                      name: 'dashed',
                                      setter: {
                                        componentName: 'BoolSetter',
                                        initialValue: undefined
                                      }
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'key',
                                          'zh-CN': 'key'
                                        }
                                      },
                                      name: 'key',
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
                                          'en-US': 'danger',
                                          'zh-CN': 'danger'
                                        }
                                      },
                                      name: 'danger',
                                      setter: {
                                        componentName: 'BoolSetter',
                                        initialValue: undefined
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
                                          'en-US': 'title',
                                          'zh-CN': 'title'
                                        }
                                      },
                                      name: 'title',
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
                                          'en-US': 'T',
                                          'zh-CN': 'T'
                                        }
                                      },
                                      name: 'T',
                                      setter: {
                                        componentName: 'MixedSetter',
                                        props: {}
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
                                          'en-US': 'theme',
                                          'zh-CN': 'theme'
                                        }
                                      },
                                      name: 'theme',
                                      setter: {
                                        componentName: 'RadioGroupSetter',
                                        props: {
                                          dataSource: [
                                            {
                                              label: 'light',
                                              value: 'light'
                                            },
                                            {
                                              label: 'dark',
                                              value: 'dark'
                                            }
                                          ],
                                          options: [
                                            {
                                              label: 'light',
                                              value: 'light'
                                            },
                                            {
                                              label: 'dark',
                                              value: 'dark'
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
                                          'en-US': 'children',
                                          'zh-CN': 'children'
                                        }
                                      },
                                      name: 'children',
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
                                                              'en-US': 'dashed',
                                                              'zh-CN': 'dashed'
                                                            }
                                                          },
                                                          name: 'dashed',
                                                          setter: {
                                                            componentName: 'BoolSetter',
                                                            initialValue: undefined
                                                          }
                                                        },
                                                        {
                                                          title: {
                                                            label: {
                                                              type: 'i18n',
                                                              'en-US': 'key',
                                                              'zh-CN': 'key'
                                                            }
                                                          },
                                                          name: 'key',
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
                                                              'en-US': 'T',
                                                              'zh-CN': 'T'
                                                            }
                                                          },
                                                          name: 'T',
                                                          setter: {
                                                            componentName: 'MixedSetter',
                                                            props: {}
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
                                                                componentName: 'MixedSetter',
                                                                props: {
                                                                  setters: [
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
                                                                                  'en-US': 'dashed',
                                                                                  'zh-CN': 'dashed'
                                                                                }
                                                                              },
                                                                              name: 'dashed',
                                                                              setter: {
                                                                                componentName: 'BoolSetter',
                                                                                initialValue: undefined
                                                                              }
                                                                            },
                                                                            {
                                                                              title: {
                                                                                label: {
                                                                                  type: 'i18n',
                                                                                  'en-US': 'key',
                                                                                  'zh-CN': 'key'
                                                                                }
                                                                              },
                                                                              name: 'key',
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
                                                            initialValue: undefined
                                                          }
                                                        },
                                                        {
                                                          title: {
                                                            label: {
                                                              type: 'i18n',
                                                              'en-US': 'key',
                                                              'zh-CN': 'key'
                                                            }
                                                          },
                                                          name: 'key',
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
                                          'en-US': 'T',
                                          'zh-CN': 'T'
                                        }
                                      },
                                      name: 'T',
                                      setter: {
                                        componentName: 'MixedSetter',
                                        props: {}
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
                                            componentName: 'MixedSetter',
                                            props: {
                                              setters: [
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
                                                              'en-US': 'dashed',
                                                              'zh-CN': 'dashed'
                                                            }
                                                          },
                                                          name: 'dashed',
                                                          setter: {
                                                            componentName: 'BoolSetter',
                                                            initialValue: undefined
                                                          }
                                                        },
                                                        {
                                                          title: {
                                                            label: {
                                                              type: 'i18n',
                                                              'en-US': 'key',
                                                              'zh-CN': 'key'
                                                            }
                                                          },
                                                          name: 'key',
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
                                                              'en-US': 'T',
                                                              'zh-CN': 'T'
                                                            }
                                                          },
                                                          name: 'T',
                                                          setter: {
                                                            componentName: 'MixedSetter',
                                                            props: {}
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
                                                              'en-US': 'theme',
                                                              'zh-CN': 'theme'
                                                            }
                                                          },
                                                          name: 'theme',
                                                          setter: {
                                                            componentName: 'RadioGroupSetter',
                                                            props: {
                                                              dataSource: [
                                                                {
                                                                  label: 'light',
                                                                  value: 'light'
                                                                },
                                                                {
                                                                  label: 'dark',
                                                                  value: 'dark'
                                                                }
                                                              ],
                                                              options: [
                                                                {
                                                                  label: 'light',
                                                                  value: 'light'
                                                                },
                                                                {
                                                                  label: 'dark',
                                                                  value: 'dark'
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
                                                              'en-US': 'children',
                                                              'zh-CN': 'children'
                                                            }
                                                          },
                                                          name: 'children',
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
                                                                                  'en-US': 'dashed',
                                                                                  'zh-CN': 'dashed'
                                                                                }
                                                                              },
                                                                              name: 'dashed',
                                                                              setter: {
                                                                                componentName: 'BoolSetter',
                                                                                initialValue: undefined
                                                                              }
                                                                            },
                                                                            {
                                                                              title: {
                                                                                label: {
                                                                                  type: 'i18n',
                                                                                  'en-US': 'key',
                                                                                  'zh-CN': 'key'
                                                                                }
                                                                              },
                                                                              name: 'key',
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
                                          'en-US': 'key',
                                          'zh-CN': 'key'
                                        }
                                      },
                                      name: 'key',
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
                label: 'topCenter',
                value: 'topCenter'
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
                label: 'bottomCenter',
                value: 'bottomCenter'
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
                label: 'bottom',
                value: 'bottom'
              },
              {
                label: 'topLeft',
                value: 'topLeft'
              },
              {
                label: 'topCenter',
                value: 'topCenter'
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
                label: 'bottomCenter',
                value: 'bottomCenter'
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
                    label: 'hover',
                    value: 'hover'
                  },
                  {
                    label: 'contextMenu',
                    value: 'contextMenu'
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
                  }
                ]
              },
              initialValue: undefined
            }
          },
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
    title: '下拉菜单',
    screenshot: '',
    schema: {
      componentName: 'Dropdown',
      props: {}
    }
  }
];

export default {
  ...DropdownMeta,
  snippets
};
