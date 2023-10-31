import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ListMeta: IPublicTypeComponentMetadata = {
  componentName: 'List',
  title: '列表',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'List',
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
          }
        },
        name: 'bordered',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dataSource',
            'zh-CN': 'dataSource'
          }
        },
        name: 'dataSource',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              condition: () => false,
              props: {
                config: {
                  extraSetter: {
                    componentName: 'MixedSetter',
                    props: {}
                  }
                }
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'extra',
            'zh-CN': 'extra'
          }
        },
        name: 'extra',
        setter: 'SlotSetter'
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
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'grid',
            'zh-CN': 'grid'
          }
        },
        name: 'grid',
        setter: {
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'gutter',
                      'zh-CN': 'gutter'
                    }
                  },
                  name: 'gutter',
                  setter: 'NumberSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'column',
                      'zh-CN': 'column'
                    }
                  },
                  name: 'column',
                  setter: 'NumberSetter'
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
                  setter: 'NumberSetter'
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
                  setter: 'NumberSetter'
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
                  setter: 'NumberSetter'
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
                  setter: 'NumberSetter'
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
                  setter: 'NumberSetter'
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
                  setter: 'NumberSetter'
                }
              ]
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'header',
            'zh-CN': 'header'
          }
        },
        name: 'header',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'itemLayout',
            'zh-CN': 'itemLayout'
          }
        },
        name: 'itemLayout',
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
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loadMore',
            'zh-CN': 'loadMore'
          }
        },
        name: 'loadMore',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': 'loading'
          }
        },
        name: 'loading',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'BoolSetter',
              {
                componentName: 'ObjectSetter',
                condition: () => false,
                props: {
                  config: {
                    items: [
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'prefixCls',
                            'zh-CN': 'prefixCls'
                          }
                        },
                        name: 'prefixCls',
                        setter: 'StringSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'className',
                            'zh-CN': 'className'
                          }
                        },
                        name: 'className',
                        setter: 'StringSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'spinning',
                            'zh-CN': 'spinning'
                          }
                        },
                        name: 'spinning',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'style',
                            'zh-CN': 'style'
                          }
                        },
                        name: 'style',
                        setter: {
                          componentName: 'ObjectSetter',
                          condition: () => false,
                          props: {
                            config: {
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
                                label: 'small',
                                value: 'small'
                              },
                              {
                                label: 'large',
                                value: 'large'
                              }
                            ]
                          }
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'tip',
                            'zh-CN': 'tip'
                          }
                        },
                        name: 'tip',
                        setter: 'SlotSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'delay',
                            'zh-CN': 'delay'
                          }
                        },
                        name: 'delay',
                        setter: 'NumberSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'wrapperClassName',
                            'zh-CN': 'wrapperClassName'
                          }
                        },
                        name: 'wrapperClassName',
                        setter: 'StringSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'indicator',
                            'zh-CN': 'indicator'
                          }
                        },
                        name: 'indicator',
                        setter: {
                          componentName: 'ObjectSetter',
                          condition: () => false,
                          props: {
                            config: {
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
                            'en-US': 'children',
                            'zh-CN': 'children'
                          }
                        },
                        name: 'children',
                        setter: 'SlotSetter'
                      }
                    ]
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
            'en-US': 'locale',
            'zh-CN': 'locale'
          }
        },
        name: 'locale',
        setter: {
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'emptyText',
                      'zh-CN': 'emptyText'
                    }
                  },
                  name: 'emptyText',
                  setter: 'SlotSetter'
                }
              ]
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pagination',
            'zh-CN': 'pagination'
          }
        },
        name: 'pagination',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'ObjectSetter',
                condition: () => false,
                props: {
                  config: {
                    items: [
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'position',
                            'zh-CN': 'position'
                          }
                        },
                        name: 'position',
                        setter: {
                          componentName: 'RadioGroupSetter',
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
                                label: 'both',
                                value: 'both'
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
                                label: 'both',
                                value: 'both'
                              }
                            ]
                          }
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'align',
                            'zh-CN': 'align'
                          }
                        },
                        name: 'align',
                        setter: {
                          componentName: 'RadioGroupSetter',
                          props: {
                            dataSource: [
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
                          }
                        }
                      }
                    ]
                  }
                }
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
            'en-US': 'renderItem',
            'zh-CN': 'renderItem'
          }
        },
        name: 'renderItem',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rowKey',
            'zh-CN': 'rowKey'
          }
        },
        name: 'rowKey',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
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
                label: 'small',
                value: 'small'
              },
              {
                label: 'large',
                value: 'large'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'split',
            'zh-CN': 'split'
          }
        },
        name: 'split',
        setter: 'BoolSetter'
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
    title: '列表',
    screenshot: '',
    schema: {
      componentName: 'List',
      props: {}
    }
  }
];

export default {
  ...ListMeta,
  snippets
};
