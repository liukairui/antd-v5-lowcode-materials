import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const WatermarkMeta: IPublicTypeComponentMetadata = {
  componentName: 'Watermark',
  title: '水印',
  group: '原子组件',
  category: '反馈 Feedback',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Watermark',
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
            'en-US': 'content',
            'zh-CN': 'content'
          },
          tip: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': 'content'
          }
        },
        name: 'content',
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
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'font',
            'zh-CN': 'font'
          },
          tip: {
            type: 'i18n',
            'en-US': 'font',
            'zh-CN': 'font'
          }
        },
        name: 'font',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'color',
                      'zh-CN': 'color'
                    }
                  },
                  name: 'color',
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
                                      'en-US': 'addColorStop',
                                      'zh-CN': 'addColorStop'
                                    }
                                  },
                                  name: 'addColorStop',
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
                          componentName: 'ObjectSetter',
                          props: {
                            config: {
                              items: [
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'setTransform',
                                      'zh-CN': 'setTransform'
                                    }
                                  },
                                  name: 'setTransform',
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
                      'en-US': 'fontSize',
                      'zh-CN': 'fontSize'
                    }
                  },
                  name: 'fontSize',
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
                      'en-US': 'fontWeight',
                      'zh-CN': 'fontWeight'
                    }
                  },
                  name: 'fontWeight',
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
                                label: 'normal',
                                value: 'normal'
                              },
                              {
                                label: 'light',
                                value: 'light'
                              },
                              {
                                label: 'weight',
                                value: 'weight'
                              }
                            ],
                            options: [
                              {
                                label: 'normal',
                                value: 'normal'
                              },
                              {
                                label: 'light',
                                value: 'light'
                              },
                              {
                                label: 'weight',
                                value: 'weight'
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
                      'en-US': 'fontStyle',
                      'zh-CN': 'fontStyle'
                    }
                  },
                  name: 'fontStyle',
                  setter: {
                    componentName: 'SelectSetter',
                    props: {
                      dataSource: [
                        {
                          label: 'italic',
                          value: 'italic'
                        },
                        {
                          label: 'normal',
                          value: 'normal'
                        },
                        {
                          label: 'none',
                          value: 'none'
                        },
                        {
                          label: 'oblique',
                          value: 'oblique'
                        }
                      ],
                      options: [
                        {
                          label: 'italic',
                          value: 'italic'
                        },
                        {
                          label: 'normal',
                          value: 'normal'
                        },
                        {
                          label: 'none',
                          value: 'none'
                        },
                        {
                          label: 'oblique',
                          value: 'oblique'
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
                      'en-US': 'fontFamily',
                      'zh-CN': 'fontFamily'
                    }
                  },
                  name: 'fontFamily',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'textAlign',
                      'zh-CN': 'textAlign'
                    }
                  },
                  name: 'textAlign',
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
                          label: 'center',
                          value: 'center'
                        },
                        {
                          label: 'end',
                          value: 'end'
                        },
                        {
                          label: 'start',
                          value: 'start'
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
                          label: 'center',
                          value: 'center'
                        },
                        {
                          label: 'end',
                          value: 'end'
                        },
                        {
                          label: 'start',
                          value: 'start'
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
            'en-US': 'gap',
            'zh-CN': 'gap'
          },
          tip: {
            type: 'i18n',
            'en-US': 'gap',
            'zh-CN': 'gap'
          }
        },
        name: 'gap',
        setter: {
          componentName: 'MixedSetter',
          props: {}
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
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'image',
            'zh-CN': 'image'
          },
          tip: {
            type: 'i18n',
            'en-US': 'image',
            'zh-CN': 'image'
          }
        },
        name: 'image',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
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
          props: {}
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rotate',
            'zh-CN': 'rotate'
          },
          tip: {
            type: 'i18n',
            'en-US': 'rotate',
            'zh-CN': 'rotate'
          }
        },
        name: 'rotate',
        setter: {
          componentName: 'NumberSetter',
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
          componentName: 'NumberSetter',
          initialValue: undefined
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
    title: '水印',
    screenshot: '',
    schema: {
      componentName: 'Watermark',
      props: {}
    }
  }
];

export default {
  ...WatermarkMeta,
  snippets
};
