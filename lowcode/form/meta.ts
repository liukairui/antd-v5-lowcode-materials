import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FormMeta: IPublicTypeComponentMetadata = {
  componentName: 'Form',
  title: '表单',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Form',
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
            'en-US': 'acceptCharset',
            'zh-CN': 'acceptCharset'
          },
          tip: {
            type: 'i18n',
            'en-US': 'acceptCharset',
            'zh-CN': 'acceptCharset'
          }
        },
        name: 'acceptCharset',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'action',
            'zh-CN': 'action'
          },
          tip: {
            type: 'i18n',
            'en-US': 'action',
            'zh-CN': 'action'
          }
        },
        name: 'action',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoComplete',
            'zh-CN': 'autoComplete'
          },
          tip: {
            type: 'i18n',
            'en-US': 'autoComplete',
            'zh-CN': 'autoComplete'
          }
        },
        name: 'autoComplete',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
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
            'en-US': 'component',
            'zh-CN': 'component'
          },
          tip: {
            type: 'i18n',
            'en-US': 'component',
            'zh-CN': 'component'
          }
        },
        name: 'component',
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
            'en-US': 'encType',
            'zh-CN': 'encType'
          },
          tip: {
            type: 'i18n',
            'en-US': 'encType',
            'zh-CN': 'encType'
          }
        },
        name: 'encType',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'feedbackIcons',
            'zh-CN': 'feedbackIcons'
          },
          tip: {
            type: 'i18n',
            'en-US': 'feedbackIcons',
            'zh-CN': 'feedbackIcons'
          }
        },
        name: 'feedbackIcons',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fields',
            'zh-CN': 'fields'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fields',
            'zh-CN': 'fields'
          }
        },
        name: 'fields',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
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
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'form',
            'zh-CN': 'form'
          },
          tip: {
            type: 'i18n',
            'en-US': 'form',
            'zh-CN': 'form'
          }
        },
        name: 'form',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'Values',
                      'zh-CN': 'Values'
                    }
                  },
                  name: 'Values',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {}
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'scrollToField',
                      'zh-CN': 'scrollToField'
                    }
                  },
                  name: 'scrollToField',
                  setter: {
                    componentName: 'FunctionSetter'
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'getFieldInstance',
                      'zh-CN': 'getFieldInstance'
                    }
                  },
                  name: 'getFieldInstance',
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
            'en-US': 'initialValues',
            'zh-CN': 'initialValues'
          },
          tip: {
            type: 'i18n',
            'en-US': 'initialValues',
            'zh-CN': 'initialValues'
          }
        },
        name: 'initialValues',
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
            'en-US': 'labelWrap',
            'zh-CN': 'labelWrap'
          },
          tip: {
            type: 'i18n',
            'en-US': 'labelWrap',
            'zh-CN': 'labelWrap'
          }
        },
        name: 'labelWrap',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'layout',
            'zh-CN': 'layout'
          },
          tip: {
            type: 'i18n',
            'en-US': 'layout',
            'zh-CN': 'layout'
          }
        },
        name: 'layout',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'horizontal',
                value: 'horizontal'
              },
              {
                label: 'vertical',
                value: 'vertical'
              },
              {
                label: 'inline',
                value: 'inline'
              }
            ],
            options: [
              {
                label: 'horizontal',
                value: 'horizontal'
              },
              {
                label: 'vertical',
                value: 'vertical'
              },
              {
                label: 'inline',
                value: 'inline'
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
            'en-US': 'method',
            'zh-CN': 'method'
          },
          tip: {
            type: 'i18n',
            'en-US': 'method',
            'zh-CN': 'method'
          }
        },
        name: 'method',
        setter: {
          componentName: 'StringSetter',
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
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'noValidate',
            'zh-CN': 'noValidate'
          },
          tip: {
            type: 'i18n',
            'en-US': 'noValidate',
            'zh-CN': 'noValidate'
          }
        },
        name: 'noValidate',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onFieldsChange',
            'zh-CN': 'onFieldsChange'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onFieldsChange',
            'zh-CN': 'onFieldsChange'
          }
        },
        name: 'onFieldsChange',
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
            'en-US': 'requiredMark',
            'zh-CN': 'requiredMark'
          },
          tip: {
            type: 'i18n',
            'en-US': 'requiredMark',
            'zh-CN': 'requiredMark'
          }
        },
        name: 'requiredMark',
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
              },
              {
                componentName: 'RadioGroupSetter',
                props: {
                  dataSource: [
                    {
                      label: 'optional',
                      value: 'optional'
                    }
                  ],
                  options: [
                    {
                      label: 'optional',
                      value: 'optional'
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
            'en-US': 'scrollToFirstError',
            'zh-CN': 'scrollToFirstError'
          },
          tip: {
            type: 'i18n',
            'en-US': 'scrollToFirstError',
            'zh-CN': 'scrollToFirstError'
          }
        },
        name: 'scrollToFirstError',
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
                            'en-US': 'behavior',
                            'zh-CN': 'behavior'
                          }
                        },
                        name: 'behavior',
                        setter: {
                          componentName: 'RadioGroupSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'auto',
                                value: 'auto'
                              },
                              {
                                label: 'smooth',
                                value: 'smooth'
                              }
                            ],
                            options: [
                              {
                                label: 'auto',
                                value: 'auto'
                              },
                              {
                                label: 'smooth',
                                value: 'smooth'
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
                            'en-US': 'behavior',
                            'zh-CN': 'behavior'
                          }
                        },
                        name: 'behavior',
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
            'en-US': 'target',
            'zh-CN': 'target'
          },
          tip: {
            type: 'i18n',
            'en-US': 'target',
            'zh-CN': 'target'
          }
        },
        name: 'target',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'validateMessages',
            'zh-CN': 'validateMessages'
          },
          tip: {
            type: 'i18n',
            'en-US': 'validateMessages',
            'zh-CN': 'validateMessages'
          }
        },
        name: 'validateMessages',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'default',
                      'zh-CN': 'default'
                    }
                  },
                  name: 'default',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
                        {
                          componentName: 'StringSetter',
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
                      'en-US': 'required',
                      'zh-CN': 'required'
                    }
                  },
                  name: 'required',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
                        {
                          componentName: 'StringSetter',
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
                      'en-US': 'enum',
                      'zh-CN': 'enum'
                    }
                  },
                  name: 'enum',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
                        {
                          componentName: 'StringSetter',
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
                      'en-US': 'whitespace',
                      'zh-CN': 'whitespace'
                    }
                  },
                  name: 'whitespace',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
                        {
                          componentName: 'StringSetter',
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
                      'en-US': 'date',
                      'zh-CN': 'date'
                    }
                  },
                  name: 'date',
                  setter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'format',
                                'zh-CN': 'format'
                              }
                            },
                            name: 'format',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'parse',
                                'zh-CN': 'parse'
                              }
                            },
                            name: 'parse',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'invalid',
                                'zh-CN': 'invalid'
                              }
                            },
                            name: 'invalid',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'types',
                      'zh-CN': 'types'
                    }
                  },
                  name: 'types',
                  setter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'string',
                                'zh-CN': 'string'
                              }
                            },
                            name: 'string',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'method',
                                'zh-CN': 'method'
                              }
                            },
                            name: 'method',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'array',
                                'zh-CN': 'array'
                              }
                            },
                            name: 'array',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'object',
                                'zh-CN': 'object'
                              }
                            },
                            name: 'object',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'number',
                                'zh-CN': 'number'
                              }
                            },
                            name: 'number',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'date',
                                'zh-CN': 'date'
                              }
                            },
                            name: 'date',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'boolean',
                                'zh-CN': 'boolean'
                              }
                            },
                            name: 'boolean',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'integer',
                                'zh-CN': 'integer'
                              }
                            },
                            name: 'integer',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'float',
                                'zh-CN': 'float'
                              }
                            },
                            name: 'float',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'regexp',
                                'zh-CN': 'regexp'
                              }
                            },
                            name: 'regexp',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'email',
                                'zh-CN': 'email'
                              }
                            },
                            name: 'email',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'url',
                                'zh-CN': 'url'
                              }
                            },
                            name: 'url',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'hex',
                                'zh-CN': 'hex'
                              }
                            },
                            name: 'hex',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'string',
                      'zh-CN': 'string'
                    }
                  },
                  name: 'string',
                  setter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'len',
                                'zh-CN': 'len'
                              }
                            },
                            name: 'len',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'min',
                                'zh-CN': 'min'
                              }
                            },
                            name: 'min',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'max',
                                'zh-CN': 'max'
                              }
                            },
                            name: 'max',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'range',
                                'zh-CN': 'range'
                              }
                            },
                            name: 'range',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'number',
                      'zh-CN': 'number'
                    }
                  },
                  name: 'number',
                  setter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'len',
                                'zh-CN': 'len'
                              }
                            },
                            name: 'len',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'min',
                                'zh-CN': 'min'
                              }
                            },
                            name: 'min',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'max',
                                'zh-CN': 'max'
                              }
                            },
                            name: 'max',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'range',
                                'zh-CN': 'range'
                              }
                            },
                            name: 'range',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'array',
                      'zh-CN': 'array'
                    }
                  },
                  name: 'array',
                  setter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'len',
                                'zh-CN': 'len'
                              }
                            },
                            name: 'len',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'min',
                                'zh-CN': 'min'
                              }
                            },
                            name: 'min',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'max',
                                'zh-CN': 'max'
                              }
                            },
                            name: 'max',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                                'en-US': 'range',
                                'zh-CN': 'range'
                              }
                            },
                            name: 'range',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
                  setter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'mismatch',
                                'zh-CN': 'mismatch'
                              }
                            },
                            name: 'mismatch',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
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
          name: 'onValuesChange'
        },
        {
          name: 'onFinish'
        },
        {
          name: 'onFinishFailed'
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
    title: '表单',
    screenshot: '',
    schema: {
      componentName: 'Form',
      props: {}
    }
  }
];

export default {
  ...FormMeta,
  snippets
};
