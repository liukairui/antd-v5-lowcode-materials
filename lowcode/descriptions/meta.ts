import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DescriptionsMeta: IPublicTypeComponentMetadata = {
  componentName: 'Descriptions',
  title: '描述列表',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Descriptions',
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
            'en-US': 'column',
            'zh-CN': 'column'
          },
          tip: {
            type: 'i18n',
            'en-US': 'column',
            'zh-CN': 'column'
          }
        },
        name: 'column',
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
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'contentStyle',
            'zh-CN': 'contentStyle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'contentStyle',
            'zh-CN': 'contentStyle'
          }
        },
        name: 'contentStyle',
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
            'en-US': 'items',
            'zh-CN': 'items'
          },
          tip: {
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
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
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
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'labelStyle',
            'zh-CN': 'labelStyle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'labelStyle',
            'zh-CN': 'labelStyle'
          }
        },
        name: 'labelStyle',
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
                label: 'small',
                value: 'small'
              },
              {
                label: 'middle',
                value: 'middle'
              }
            ],
            options: [
              {
                label: 'default',
                value: 'default'
              },
              {
                label: 'small',
                value: 'small'
              },
              {
                label: 'middle',
                value: 'middle'
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
    title: '描述列表',
    screenshot: '',
    schema: {
      componentName: 'Descriptions',
      props: {}
    }
  }
];

export default {
  ...DescriptionsMeta,
  snippets
};
