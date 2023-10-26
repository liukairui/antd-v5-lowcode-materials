import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AnchorMeta: IPublicTypeComponentMetadata = {
  componentName: 'Anchor',
  title: '锚点',
  group: '原子组件',
  category: '导航 Navigation',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Anchor',
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
            'en-US': 'affix',
            'zh-CN': 'affix'
          },
          tip: {
            type: 'i18n',
            'en-US': 'affix',
            'zh-CN': 'affix'
          }
        },
        name: 'affix',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'bounds',
            'zh-CN': 'bounds'
          },
          tip: {
            type: 'i18n',
            'en-US': 'bounds',
            'zh-CN': 'bounds'
          }
        },
        name: 'bounds',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
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
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getCurrentAnchor',
            'zh-CN': 'getCurrentAnchor'
          },
          tip: {
            type: 'i18n',
            'en-US': 'getCurrentAnchor',
            'zh-CN': 'getCurrentAnchor'
          }
        },
        name: 'getCurrentAnchor',
        setter: {
          componentName: 'FunctionSetter'
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
            'en-US': 'offsetTop',
            'zh-CN': 'offsetTop'
          },
          tip: {
            type: 'i18n',
            'en-US': 'offsetTop',
            'zh-CN': 'offsetTop'
          }
        },
        name: 'offsetTop',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
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
          componentName: 'FunctionSetter'
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
            'en-US': 'replace',
            'zh-CN': 'replace'
          },
          tip: {
            type: 'i18n',
            'en-US': 'replace',
            'zh-CN': 'replace'
          }
        },
        name: 'replace',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showInkInFixed',
            'zh-CN': 'showInkInFixed'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showInkInFixed',
            'zh-CN': 'showInkInFixed'
          }
        },
        name: 'showInkInFixed',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'targetOffset',
            'zh-CN': 'targetOffset'
          },
          tip: {
            type: 'i18n',
            'en-US': 'targetOffset',
            'zh-CN': 'targetOffset'
          }
        },
        name: 'targetOffset',
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
    title: '锚点',
    screenshot: '',
    schema: {
      componentName: 'Anchor',
      props: {}
    }
  }
];

export default {
  ...AnchorMeta,
  snippets
};
