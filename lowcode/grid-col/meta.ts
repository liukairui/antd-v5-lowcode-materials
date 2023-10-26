import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const GridColMeta: IPublicTypeComponentMetadata = {
  componentName: 'GridCol',
  title: '栅格-列',
  group: '原子组件',
  category: '布局 Layout',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'GridCol',
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
            'en-US': 'flex',
            'zh-CN': 'flex'
          },
          tip: {
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
            'en-US': 'lg',
            'zh-CN': 'lg'
          },
          tip: {
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
            'en-US': 'md',
            'zh-CN': 'md'
          },
          tip: {
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
            'en-US': 'offset',
            'zh-CN': 'offset'
          },
          tip: {
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
            'en-US': 'order',
            'zh-CN': 'order'
          },
          tip: {
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
            'en-US': 'pull',
            'zh-CN': 'pull'
          },
          tip: {
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
            'en-US': 'sm',
            'zh-CN': 'sm'
          },
          tip: {
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
            'en-US': 'span',
            'zh-CN': 'span'
          },
          tip: {
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
            'en-US': 'xl',
            'zh-CN': 'xl'
          },
          tip: {
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
            'en-US': 'xs',
            'zh-CN': 'xs'
          },
          tip: {
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
            'en-US': 'xxl',
            'zh-CN': 'xxl'
          },
          tip: {
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
    title: '栅格列',
    screenshot: '',
    schema: {
      componentName: 'GridCol',
      props: {}
    }
  }
];

export default {
  ...GridColMeta,
  snippets
};
