import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FormItemMeta: IPublicTypeComponentMetadata = {
  componentName: 'FormItem',
  title: '表单项',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'FormItem',
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
            'en-US': 'colon',
            'zh-CN': 'colon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'colon',
            'zh-CN': 'colon'
          }
        },
        name: 'colon',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dependencies',
            'zh-CN': 'dependencies'
          },
          tip: {
            type: 'i18n',
            'en-US': 'dependencies',
            'zh-CN': 'dependencies'
          }
        },
        name: 'dependencies',
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
            'en-US': 'fieldId',
            'zh-CN': 'fieldId'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fieldId',
            'zh-CN': 'fieldId'
          }
        },
        name: 'fieldId',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getValueFromEvent',
            'zh-CN': 'getValueFromEvent'
          },
          tip: {
            type: 'i18n',
            'en-US': 'getValueFromEvent',
            'zh-CN': 'getValueFromEvent'
          }
        },
        name: 'getValueFromEvent',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getValueProps',
            'zh-CN': 'getValueProps'
          },
          tip: {
            type: 'i18n',
            'en-US': 'getValueProps',
            'zh-CN': 'getValueProps'
          }
        },
        name: 'getValueProps',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'hasFeedback',
            'zh-CN': 'hasFeedback'
          },
          tip: {
            type: 'i18n',
            'en-US': 'hasFeedback',
            'zh-CN': 'hasFeedback'
          }
        },
        name: 'hasFeedback',
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
                            'en-US': 'icons',
                            'zh-CN': 'icons'
                          }
                        },
                        name: 'icons',
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
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'help',
            'zh-CN': 'help'
          },
          tip: {
            type: 'i18n',
            'en-US': 'help',
            'zh-CN': 'help'
          }
        },
        name: 'help',
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
            'en-US': 'hidden',
            'zh-CN': 'hidden'
          },
          tip: {
            type: 'i18n',
            'en-US': 'hidden',
            'zh-CN': 'hidden'
          }
        },
        name: 'hidden',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'htmlFor',
            'zh-CN': 'htmlFor'
          },
          tip: {
            type: 'i18n',
            'en-US': 'htmlFor',
            'zh-CN': 'htmlFor'
          }
        },
        name: 'htmlFor',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
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
            'en-US': 'initialValue',
            'zh-CN': 'initialValue'
          },
          tip: {
            type: 'i18n',
            'en-US': 'initialValue',
            'zh-CN': 'initialValue'
          }
        },
        name: 'initialValue',
        setter: {
          componentName: 'MixedSetter',
          props: {}
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'isList',
            'zh-CN': 'isList'
          },
          tip: {
            type: 'i18n',
            'en-US': 'isList',
            'zh-CN': 'isList'
          }
        },
        name: 'isList',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'isListField',
            'zh-CN': 'isListField'
          },
          tip: {
            type: 'i18n',
            'en-US': 'isListField',
            'zh-CN': 'isListField'
          }
        },
        name: 'isListField',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'label',
            'zh-CN': 'label'
          },
          tip: {
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
            'en-US': 'labelAlign',
            'zh-CN': 'labelAlign'
          },
          tip: {
            type: 'i18n',
            'en-US': 'labelAlign',
            'zh-CN': 'labelAlign'
          }
        },
        name: 'labelAlign',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'left',
                value: 'left'
              },
              {
                label: 'right',
                value: 'right'
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
            'en-US': 'labelCol',
            'zh-CN': 'labelCol'
          },
          tip: {
            type: 'i18n',
            'en-US': 'labelCol',
            'zh-CN': 'labelCol'
          }
        },
        name: 'labelCol',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'flex',
                      'zh-CN': 'flex'
                    }
                  },
                  name: 'flex',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
                        {
                          componentName: 'NumberSetter',
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
                          componentName: 'RadioGroupSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'auto',
                                value: 'auto'
                              },
                              {
                                label: 'none',
                                value: 'none'
                              }
                            ],
                            options: [
                              {
                                label: 'auto',
                                value: 'auto'
                              },
                              {
                                label: 'none',
                                value: 'none'
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
                      'en-US': 'span',
                      'zh-CN': 'span'
                    }
                  },
                  name: 'span',
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
                      'en-US': 'order',
                      'zh-CN': 'order'
                    }
                  },
                  name: 'order',
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
                      'en-US': 'offset',
                      'zh-CN': 'offset'
                    }
                  },
                  name: 'offset',
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
                      'en-US': 'pull',
                      'zh-CN': 'pull'
                    }
                  },
                  name: 'pull',
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
                      'en-US': 'xs',
                      'zh-CN': 'xs'
                    }
                  },
                  name: 'xs',
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
                          componentName: 'ObjectSetter',
                          props: {
                            config: {
                              items: [
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'flex',
                                      'zh-CN': 'flex'
                                    }
                                  },
                                  name: 'flex',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
                                        {
                                          componentName: 'NumberSetter',
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
                                          componentName: 'RadioGroupSetter',
                                          props: {
                                            dataSource: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
                                              }
                                            ],
                                            options: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
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
                                      'en-US': 'span',
                                      'zh-CN': 'span'
                                    }
                                  },
                                  name: 'span',
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
                                      'en-US': 'order',
                                      'zh-CN': 'order'
                                    }
                                  },
                                  name: 'order',
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
                                      'en-US': 'offset',
                                      'zh-CN': 'offset'
                                    }
                                  },
                                  name: 'offset',
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
                                      'en-US': 'pull',
                                      'zh-CN': 'pull'
                                    }
                                  },
                                  name: 'pull',
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
                      'en-US': 'sm',
                      'zh-CN': 'sm'
                    }
                  },
                  name: 'sm',
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
                          componentName: 'ObjectSetter',
                          props: {
                            config: {
                              items: [
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'flex',
                                      'zh-CN': 'flex'
                                    }
                                  },
                                  name: 'flex',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
                                        {
                                          componentName: 'NumberSetter',
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
                                          componentName: 'RadioGroupSetter',
                                          props: {
                                            dataSource: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
                                              }
                                            ],
                                            options: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
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
                                      'en-US': 'span',
                                      'zh-CN': 'span'
                                    }
                                  },
                                  name: 'span',
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
                                      'en-US': 'order',
                                      'zh-CN': 'order'
                                    }
                                  },
                                  name: 'order',
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
                                      'en-US': 'offset',
                                      'zh-CN': 'offset'
                                    }
                                  },
                                  name: 'offset',
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
                                      'en-US': 'pull',
                                      'zh-CN': 'pull'
                                    }
                                  },
                                  name: 'pull',
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
                      'en-US': 'md',
                      'zh-CN': 'md'
                    }
                  },
                  name: 'md',
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
                          componentName: 'ObjectSetter',
                          props: {
                            config: {
                              items: [
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'flex',
                                      'zh-CN': 'flex'
                                    }
                                  },
                                  name: 'flex',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
                                        {
                                          componentName: 'NumberSetter',
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
                                          componentName: 'RadioGroupSetter',
                                          props: {
                                            dataSource: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
                                              }
                                            ],
                                            options: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
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
                                      'en-US': 'span',
                                      'zh-CN': 'span'
                                    }
                                  },
                                  name: 'span',
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
                                      'en-US': 'order',
                                      'zh-CN': 'order'
                                    }
                                  },
                                  name: 'order',
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
                                      'en-US': 'offset',
                                      'zh-CN': 'offset'
                                    }
                                  },
                                  name: 'offset',
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
                                      'en-US': 'pull',
                                      'zh-CN': 'pull'
                                    }
                                  },
                                  name: 'pull',
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
                      'en-US': 'lg',
                      'zh-CN': 'lg'
                    }
                  },
                  name: 'lg',
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
                          componentName: 'ObjectSetter',
                          props: {
                            config: {
                              items: [
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'flex',
                                      'zh-CN': 'flex'
                                    }
                                  },
                                  name: 'flex',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
                                        {
                                          componentName: 'NumberSetter',
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
                                          componentName: 'RadioGroupSetter',
                                          props: {
                                            dataSource: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
                                              }
                                            ],
                                            options: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
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
                                      'en-US': 'span',
                                      'zh-CN': 'span'
                                    }
                                  },
                                  name: 'span',
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
                                      'en-US': 'order',
                                      'zh-CN': 'order'
                                    }
                                  },
                                  name: 'order',
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
                                      'en-US': 'offset',
                                      'zh-CN': 'offset'
                                    }
                                  },
                                  name: 'offset',
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
                                      'en-US': 'pull',
                                      'zh-CN': 'pull'
                                    }
                                  },
                                  name: 'pull',
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
                      'en-US': 'xl',
                      'zh-CN': 'xl'
                    }
                  },
                  name: 'xl',
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
                          componentName: 'ObjectSetter',
                          props: {
                            config: {
                              items: [
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'flex',
                                      'zh-CN': 'flex'
                                    }
                                  },
                                  name: 'flex',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
                                        {
                                          componentName: 'NumberSetter',
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
                                          componentName: 'RadioGroupSetter',
                                          props: {
                                            dataSource: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
                                              }
                                            ],
                                            options: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
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
                                      'en-US': 'span',
                                      'zh-CN': 'span'
                                    }
                                  },
                                  name: 'span',
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
                                      'en-US': 'order',
                                      'zh-CN': 'order'
                                    }
                                  },
                                  name: 'order',
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
                                      'en-US': 'offset',
                                      'zh-CN': 'offset'
                                    }
                                  },
                                  name: 'offset',
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
                                      'en-US': 'pull',
                                      'zh-CN': 'pull'
                                    }
                                  },
                                  name: 'pull',
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
                      'en-US': 'xxl',
                      'zh-CN': 'xxl'
                    }
                  },
                  name: 'xxl',
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
                          componentName: 'ObjectSetter',
                          props: {
                            config: {
                              items: [
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'flex',
                                      'zh-CN': 'flex'
                                    }
                                  },
                                  name: 'flex',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
                                        {
                                          componentName: 'NumberSetter',
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
                                          componentName: 'RadioGroupSetter',
                                          props: {
                                            dataSource: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
                                              }
                                            ],
                                            options: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
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
                                      'en-US': 'span',
                                      'zh-CN': 'span'
                                    }
                                  },
                                  name: 'span',
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
                                      'en-US': 'order',
                                      'zh-CN': 'order'
                                    }
                                  },
                                  name: 'order',
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
                                      'en-US': 'offset',
                                      'zh-CN': 'offset'
                                    }
                                  },
                                  name: 'offset',
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
                                      'en-US': 'pull',
                                      'zh-CN': 'pull'
                                    }
                                  },
                                  name: 'pull',
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
                      'en-US': 'prefixCls',
                      'zh-CN': 'prefixCls'
                    }
                  },
                  name: 'prefixCls',
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
            'en-US': 'messageVariables',
            'zh-CN': 'messageVariables'
          },
          tip: {
            type: 'i18n',
            'en-US': 'messageVariables',
            'zh-CN': 'messageVariables'
          }
        },
        name: 'messageVariables',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              extraSetter: {
                componentName: 'StringSetter',
                initialValue: undefined
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
            'en-US': 'name',
            'zh-CN': 'name'
          },
          tip: {
            type: 'i18n',
            'en-US': 'name',
            'zh-CN': 'name'
          }
        },
        name: 'name',
        setter: {
          componentName: 'MixedSetter',
          props: {}
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'noStyle',
            'zh-CN': 'noStyle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'noStyle',
            'zh-CN': 'noStyle'
          }
        },
        name: 'noStyle',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'normalize',
            'zh-CN': 'normalize'
          },
          tip: {
            type: 'i18n',
            'en-US': 'normalize',
            'zh-CN': 'normalize'
          }
        },
        name: 'normalize',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onMetaChange',
            'zh-CN': 'onMetaChange'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onMetaChange',
            'zh-CN': 'onMetaChange'
          }
        },
        name: 'onMetaChange',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'preserve',
            'zh-CN': 'preserve'
          },
          tip: {
            type: 'i18n',
            'en-US': 'preserve',
            'zh-CN': 'preserve'
          }
        },
        name: 'preserve',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'required',
            'zh-CN': 'required'
          },
          tip: {
            type: 'i18n',
            'en-US': 'required',
            'zh-CN': 'required'
          }
        },
        name: 'required',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rules',
            'zh-CN': 'rules'
          },
          tip: {
            type: 'i18n',
            'en-US': 'rules',
            'zh-CN': 'rules'
          }
        },
        name: 'rules',
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
                                'en-US': 'type',
                                'zh-CN': 'type'
                              }
                            },
                            name: 'type',
                            setter: {
                              componentName: 'RadioGroupSetter',
                              props: {
                                dataSource: [
                                  {
                                    label: 'array',
                                    value: 'array'
                                  }
                                ],
                                options: [
                                  {
                                    label: 'array',
                                    value: 'array'
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
                                'en-US': 'defaultField',
                                'zh-CN': 'defaultField'
                              }
                            },
                            name: 'defaultField',
                            setter: {
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
                    componentName: 'FunctionSetter'
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
            'en-US': 'shouldUpdate',
            'zh-CN': 'shouldUpdate'
          },
          tip: {
            type: 'i18n',
            'en-US': 'shouldUpdate',
            'zh-CN': 'shouldUpdate'
          }
        },
        name: 'shouldUpdate',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'BoolSetter',
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
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '',
                value: ''
              },
              {
                label: 'success',
                value: 'success'
              },
              {
                label: 'warning',
                value: 'warning'
              },
              {
                label: 'error',
                value: 'error'
              },
              {
                label: 'validating',
                value: 'validating'
              }
            ],
            options: [
              {
                label: '',
                value: ''
              },
              {
                label: 'success',
                value: 'success'
              },
              {
                label: 'warning',
                value: 'warning'
              },
              {
                label: 'error',
                value: 'error'
              },
              {
                label: 'validating',
                value: 'validating'
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
            'en-US': 'tooltip',
            'zh-CN': 'tooltip'
          },
          tip: {
            type: 'i18n',
            'en-US': 'tooltip',
            'zh-CN': 'tooltip'
          }
        },
        name: 'tooltip',
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
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'validateDebounce',
            'zh-CN': 'validateDebounce'
          },
          tip: {
            type: 'i18n',
            'en-US': 'validateDebounce',
            'zh-CN': 'validateDebounce'
          }
        },
        name: 'validateDebounce',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'validateFirst',
            'zh-CN': 'validateFirst'
          },
          tip: {
            type: 'i18n',
            'en-US': 'validateFirst',
            'zh-CN': 'validateFirst'
          }
        },
        name: 'validateFirst',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'BoolSetter',
                initialValue: undefined
              },
              {
                componentName: 'RadioGroupSetter',
                props: {
                  dataSource: [
                    {
                      label: 'parallel',
                      value: 'parallel'
                    }
                  ],
                  options: [
                    {
                      label: 'parallel',
                      value: 'parallel'
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
            'en-US': 'validateStatus',
            'zh-CN': 'validateStatus'
          },
          tip: {
            type: 'i18n',
            'en-US': 'validateStatus',
            'zh-CN': 'validateStatus'
          }
        },
        name: 'validateStatus',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '',
                value: ''
              },
              {
                label: 'success',
                value: 'success'
              },
              {
                label: 'warning',
                value: 'warning'
              },
              {
                label: 'error',
                value: 'error'
              },
              {
                label: 'validating',
                value: 'validating'
              }
            ],
            options: [
              {
                label: '',
                value: ''
              },
              {
                label: 'success',
                value: 'success'
              },
              {
                label: 'warning',
                value: 'warning'
              },
              {
                label: 'error',
                value: 'error'
              },
              {
                label: 'validating',
                value: 'validating'
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
            'en-US': 'validateTrigger',
            'zh-CN': 'validateTrigger'
          },
          tip: {
            type: 'i18n',
            'en-US': 'validateTrigger',
            'zh-CN': 'validateTrigger'
          }
        },
        name: 'validateTrigger',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: undefined
              },
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'valuePropName',
            'zh-CN': 'valuePropName'
          },
          tip: {
            type: 'i18n',
            'en-US': 'valuePropName',
            'zh-CN': 'valuePropName'
          }
        },
        name: 'valuePropName',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'wrapperCol',
            'zh-CN': 'wrapperCol'
          },
          tip: {
            type: 'i18n',
            'en-US': 'wrapperCol',
            'zh-CN': 'wrapperCol'
          }
        },
        name: 'wrapperCol',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'flex',
                      'zh-CN': 'flex'
                    }
                  },
                  name: 'flex',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
                        {
                          componentName: 'NumberSetter',
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
                          componentName: 'RadioGroupSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'auto',
                                value: 'auto'
                              },
                              {
                                label: 'none',
                                value: 'none'
                              }
                            ],
                            options: [
                              {
                                label: 'auto',
                                value: 'auto'
                              },
                              {
                                label: 'none',
                                value: 'none'
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
                      'en-US': 'span',
                      'zh-CN': 'span'
                    }
                  },
                  name: 'span',
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
                      'en-US': 'order',
                      'zh-CN': 'order'
                    }
                  },
                  name: 'order',
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
                      'en-US': 'offset',
                      'zh-CN': 'offset'
                    }
                  },
                  name: 'offset',
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
                      'en-US': 'pull',
                      'zh-CN': 'pull'
                    }
                  },
                  name: 'pull',
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
                      'en-US': 'xs',
                      'zh-CN': 'xs'
                    }
                  },
                  name: 'xs',
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
                          componentName: 'ObjectSetter',
                          props: {
                            config: {
                              items: [
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'flex',
                                      'zh-CN': 'flex'
                                    }
                                  },
                                  name: 'flex',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
                                        {
                                          componentName: 'NumberSetter',
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
                                          componentName: 'RadioGroupSetter',
                                          props: {
                                            dataSource: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
                                              }
                                            ],
                                            options: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
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
                                      'en-US': 'span',
                                      'zh-CN': 'span'
                                    }
                                  },
                                  name: 'span',
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
                                      'en-US': 'order',
                                      'zh-CN': 'order'
                                    }
                                  },
                                  name: 'order',
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
                                      'en-US': 'offset',
                                      'zh-CN': 'offset'
                                    }
                                  },
                                  name: 'offset',
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
                                      'en-US': 'pull',
                                      'zh-CN': 'pull'
                                    }
                                  },
                                  name: 'pull',
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
                      'en-US': 'sm',
                      'zh-CN': 'sm'
                    }
                  },
                  name: 'sm',
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
                          componentName: 'ObjectSetter',
                          props: {
                            config: {
                              items: [
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'flex',
                                      'zh-CN': 'flex'
                                    }
                                  },
                                  name: 'flex',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
                                        {
                                          componentName: 'NumberSetter',
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
                                          componentName: 'RadioGroupSetter',
                                          props: {
                                            dataSource: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
                                              }
                                            ],
                                            options: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
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
                                      'en-US': 'span',
                                      'zh-CN': 'span'
                                    }
                                  },
                                  name: 'span',
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
                                      'en-US': 'order',
                                      'zh-CN': 'order'
                                    }
                                  },
                                  name: 'order',
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
                                      'en-US': 'offset',
                                      'zh-CN': 'offset'
                                    }
                                  },
                                  name: 'offset',
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
                                      'en-US': 'pull',
                                      'zh-CN': 'pull'
                                    }
                                  },
                                  name: 'pull',
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
                      'en-US': 'md',
                      'zh-CN': 'md'
                    }
                  },
                  name: 'md',
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
                          componentName: 'ObjectSetter',
                          props: {
                            config: {
                              items: [
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'flex',
                                      'zh-CN': 'flex'
                                    }
                                  },
                                  name: 'flex',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
                                        {
                                          componentName: 'NumberSetter',
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
                                          componentName: 'RadioGroupSetter',
                                          props: {
                                            dataSource: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
                                              }
                                            ],
                                            options: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
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
                                      'en-US': 'span',
                                      'zh-CN': 'span'
                                    }
                                  },
                                  name: 'span',
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
                                      'en-US': 'order',
                                      'zh-CN': 'order'
                                    }
                                  },
                                  name: 'order',
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
                                      'en-US': 'offset',
                                      'zh-CN': 'offset'
                                    }
                                  },
                                  name: 'offset',
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
                                      'en-US': 'pull',
                                      'zh-CN': 'pull'
                                    }
                                  },
                                  name: 'pull',
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
                      'en-US': 'lg',
                      'zh-CN': 'lg'
                    }
                  },
                  name: 'lg',
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
                          componentName: 'ObjectSetter',
                          props: {
                            config: {
                              items: [
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'flex',
                                      'zh-CN': 'flex'
                                    }
                                  },
                                  name: 'flex',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
                                        {
                                          componentName: 'NumberSetter',
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
                                          componentName: 'RadioGroupSetter',
                                          props: {
                                            dataSource: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
                                              }
                                            ],
                                            options: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
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
                                      'en-US': 'span',
                                      'zh-CN': 'span'
                                    }
                                  },
                                  name: 'span',
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
                                      'en-US': 'order',
                                      'zh-CN': 'order'
                                    }
                                  },
                                  name: 'order',
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
                                      'en-US': 'offset',
                                      'zh-CN': 'offset'
                                    }
                                  },
                                  name: 'offset',
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
                                      'en-US': 'pull',
                                      'zh-CN': 'pull'
                                    }
                                  },
                                  name: 'pull',
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
                      'en-US': 'xl',
                      'zh-CN': 'xl'
                    }
                  },
                  name: 'xl',
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
                          componentName: 'ObjectSetter',
                          props: {
                            config: {
                              items: [
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'flex',
                                      'zh-CN': 'flex'
                                    }
                                  },
                                  name: 'flex',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
                                        {
                                          componentName: 'NumberSetter',
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
                                          componentName: 'RadioGroupSetter',
                                          props: {
                                            dataSource: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
                                              }
                                            ],
                                            options: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
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
                                      'en-US': 'span',
                                      'zh-CN': 'span'
                                    }
                                  },
                                  name: 'span',
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
                                      'en-US': 'order',
                                      'zh-CN': 'order'
                                    }
                                  },
                                  name: 'order',
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
                                      'en-US': 'offset',
                                      'zh-CN': 'offset'
                                    }
                                  },
                                  name: 'offset',
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
                                      'en-US': 'pull',
                                      'zh-CN': 'pull'
                                    }
                                  },
                                  name: 'pull',
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
                      'en-US': 'xxl',
                      'zh-CN': 'xxl'
                    }
                  },
                  name: 'xxl',
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
                          componentName: 'ObjectSetter',
                          props: {
                            config: {
                              items: [
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'flex',
                                      'zh-CN': 'flex'
                                    }
                                  },
                                  name: 'flex',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
                                        {
                                          componentName: 'NumberSetter',
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
                                          componentName: 'RadioGroupSetter',
                                          props: {
                                            dataSource: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
                                              }
                                            ],
                                            options: [
                                              {
                                                label: 'auto',
                                                value: 'auto'
                                              },
                                              {
                                                label: 'none',
                                                value: 'none'
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
                                      'en-US': 'span',
                                      'zh-CN': 'span'
                                    }
                                  },
                                  name: 'span',
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
                                      'en-US': 'order',
                                      'zh-CN': 'order'
                                    }
                                  },
                                  name: 'order',
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
                                      'en-US': 'offset',
                                      'zh-CN': 'offset'
                                    }
                                  },
                                  name: 'offset',
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
                                      'en-US': 'pull',
                                      'zh-CN': 'pull'
                                    }
                                  },
                                  name: 'pull',
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
                      'en-US': 'prefixCls',
                      'zh-CN': 'prefixCls'
                    }
                  },
                  name: 'prefixCls',
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
      }
    ],
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onReset'
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
    title: '表单项',
    screenshot: '',
    schema: {
      componentName: 'FormItem',
      props: {}
    }
  }
];

export default {
  ...FormItemMeta,
  snippets
};
