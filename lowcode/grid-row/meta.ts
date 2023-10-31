import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const GridRowMeta: IPublicTypeComponentMetadata = {
  componentName: 'GridRow',
  title: '栅格行',
  group: '原子组件',
  category: '布局 Layout',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'GridRow',
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
          }
        },
        name: 'align',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'SelectSetter',
                props: {
                  dataSource: [
                    {
                      label: 'top',
                      value: 'top'
                    },
                    {
                      label: 'middle',
                      value: 'middle'
                    },
                    {
                      label: 'bottom',
                      value: 'bottom'
                    },
                    {
                      label: 'stretch',
                      value: 'stretch'
                    }
                  ],
                  options: [
                    {
                      label: 'top',
                      value: 'top'
                    },
                    {
                      label: 'middle',
                      value: 'middle'
                    },
                    {
                      label: 'bottom',
                      value: 'bottom'
                    },
                    {
                      label: 'stretch',
                      value: 'stretch'
                    }
                  ]
                }
              },
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
                            'en-US': 'xs',
                            'zh-CN': 'xs'
                          }
                        },
                        name: 'xs',
                        setter: {
                          componentName: 'SelectSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'top',
                                value: 'top'
                              },
                              {
                                label: 'middle',
                                value: 'middle'
                              },
                              {
                                label: 'bottom',
                                value: 'bottom'
                              },
                              {
                                label: 'stretch',
                                value: 'stretch'
                              }
                            ],
                            options: [
                              {
                                label: 'top',
                                value: 'top'
                              },
                              {
                                label: 'middle',
                                value: 'middle'
                              },
                              {
                                label: 'bottom',
                                value: 'bottom'
                              },
                              {
                                label: 'stretch',
                                value: 'stretch'
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
                          componentName: 'SelectSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'top',
                                value: 'top'
                              },
                              {
                                label: 'middle',
                                value: 'middle'
                              },
                              {
                                label: 'bottom',
                                value: 'bottom'
                              },
                              {
                                label: 'stretch',
                                value: 'stretch'
                              }
                            ],
                            options: [
                              {
                                label: 'top',
                                value: 'top'
                              },
                              {
                                label: 'middle',
                                value: 'middle'
                              },
                              {
                                label: 'bottom',
                                value: 'bottom'
                              },
                              {
                                label: 'stretch',
                                value: 'stretch'
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
                          componentName: 'SelectSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'top',
                                value: 'top'
                              },
                              {
                                label: 'middle',
                                value: 'middle'
                              },
                              {
                                label: 'bottom',
                                value: 'bottom'
                              },
                              {
                                label: 'stretch',
                                value: 'stretch'
                              }
                            ],
                            options: [
                              {
                                label: 'top',
                                value: 'top'
                              },
                              {
                                label: 'middle',
                                value: 'middle'
                              },
                              {
                                label: 'bottom',
                                value: 'bottom'
                              },
                              {
                                label: 'stretch',
                                value: 'stretch'
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
                          componentName: 'SelectSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'top',
                                value: 'top'
                              },
                              {
                                label: 'middle',
                                value: 'middle'
                              },
                              {
                                label: 'bottom',
                                value: 'bottom'
                              },
                              {
                                label: 'stretch',
                                value: 'stretch'
                              }
                            ],
                            options: [
                              {
                                label: 'top',
                                value: 'top'
                              },
                              {
                                label: 'middle',
                                value: 'middle'
                              },
                              {
                                label: 'bottom',
                                value: 'bottom'
                              },
                              {
                                label: 'stretch',
                                value: 'stretch'
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
                          componentName: 'SelectSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'top',
                                value: 'top'
                              },
                              {
                                label: 'middle',
                                value: 'middle'
                              },
                              {
                                label: 'bottom',
                                value: 'bottom'
                              },
                              {
                                label: 'stretch',
                                value: 'stretch'
                              }
                            ],
                            options: [
                              {
                                label: 'top',
                                value: 'top'
                              },
                              {
                                label: 'middle',
                                value: 'middle'
                              },
                              {
                                label: 'bottom',
                                value: 'bottom'
                              },
                              {
                                label: 'stretch',
                                value: 'stretch'
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
                          componentName: 'SelectSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'top',
                                value: 'top'
                              },
                              {
                                label: 'middle',
                                value: 'middle'
                              },
                              {
                                label: 'bottom',
                                value: 'bottom'
                              },
                              {
                                label: 'stretch',
                                value: 'stretch'
                              }
                            ],
                            options: [
                              {
                                label: 'top',
                                value: 'top'
                              },
                              {
                                label: 'middle',
                                value: 'middle'
                              },
                              {
                                label: 'bottom',
                                value: 'bottom'
                              },
                              {
                                label: 'stretch',
                                value: 'stretch'
                              }
                            ]
                          }
                        }
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
            'en-US': 'gutter',
            'zh-CN': 'gutter'
          }
        },
        name: 'gutter',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'NumberSetter',
              {
                componentName: 'ArraySetter',
                condition: () => false,
                props: {
                  itemSetter: 'NumberSetter'
                }
              },
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
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'justify',
            'zh-CN': 'justify'
          }
        },
        name: 'justify',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'SelectSetter',
                props: {
                  dataSource: [
                    {
                      label: 'center',
                      value: 'center'
                    },
                    {
                      label: 'start',
                      value: 'start'
                    },
                    {
                      label: 'end',
                      value: 'end'
                    },
                    {
                      label: 'space-around',
                      value: 'space-around'
                    },
                    {
                      label: 'space-between',
                      value: 'space-between'
                    },
                    {
                      label: 'space-evenly',
                      value: 'space-evenly'
                    }
                  ],
                  options: [
                    {
                      label: 'center',
                      value: 'center'
                    },
                    {
                      label: 'start',
                      value: 'start'
                    },
                    {
                      label: 'end',
                      value: 'end'
                    },
                    {
                      label: 'space-around',
                      value: 'space-around'
                    },
                    {
                      label: 'space-between',
                      value: 'space-between'
                    },
                    {
                      label: 'space-evenly',
                      value: 'space-evenly'
                    }
                  ]
                }
              },
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
                            'en-US': 'xs',
                            'zh-CN': 'xs'
                          }
                        },
                        name: 'xs',
                        setter: {
                          componentName: 'SelectSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'center',
                                value: 'center'
                              },
                              {
                                label: 'start',
                                value: 'start'
                              },
                              {
                                label: 'end',
                                value: 'end'
                              },
                              {
                                label: 'space-around',
                                value: 'space-around'
                              },
                              {
                                label: 'space-between',
                                value: 'space-between'
                              },
                              {
                                label: 'space-evenly',
                                value: 'space-evenly'
                              }
                            ],
                            options: [
                              {
                                label: 'center',
                                value: 'center'
                              },
                              {
                                label: 'start',
                                value: 'start'
                              },
                              {
                                label: 'end',
                                value: 'end'
                              },
                              {
                                label: 'space-around',
                                value: 'space-around'
                              },
                              {
                                label: 'space-between',
                                value: 'space-between'
                              },
                              {
                                label: 'space-evenly',
                                value: 'space-evenly'
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
                          componentName: 'SelectSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'center',
                                value: 'center'
                              },
                              {
                                label: 'start',
                                value: 'start'
                              },
                              {
                                label: 'end',
                                value: 'end'
                              },
                              {
                                label: 'space-around',
                                value: 'space-around'
                              },
                              {
                                label: 'space-between',
                                value: 'space-between'
                              },
                              {
                                label: 'space-evenly',
                                value: 'space-evenly'
                              }
                            ],
                            options: [
                              {
                                label: 'center',
                                value: 'center'
                              },
                              {
                                label: 'start',
                                value: 'start'
                              },
                              {
                                label: 'end',
                                value: 'end'
                              },
                              {
                                label: 'space-around',
                                value: 'space-around'
                              },
                              {
                                label: 'space-between',
                                value: 'space-between'
                              },
                              {
                                label: 'space-evenly',
                                value: 'space-evenly'
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
                          componentName: 'SelectSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'center',
                                value: 'center'
                              },
                              {
                                label: 'start',
                                value: 'start'
                              },
                              {
                                label: 'end',
                                value: 'end'
                              },
                              {
                                label: 'space-around',
                                value: 'space-around'
                              },
                              {
                                label: 'space-between',
                                value: 'space-between'
                              },
                              {
                                label: 'space-evenly',
                                value: 'space-evenly'
                              }
                            ],
                            options: [
                              {
                                label: 'center',
                                value: 'center'
                              },
                              {
                                label: 'start',
                                value: 'start'
                              },
                              {
                                label: 'end',
                                value: 'end'
                              },
                              {
                                label: 'space-around',
                                value: 'space-around'
                              },
                              {
                                label: 'space-between',
                                value: 'space-between'
                              },
                              {
                                label: 'space-evenly',
                                value: 'space-evenly'
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
                          componentName: 'SelectSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'center',
                                value: 'center'
                              },
                              {
                                label: 'start',
                                value: 'start'
                              },
                              {
                                label: 'end',
                                value: 'end'
                              },
                              {
                                label: 'space-around',
                                value: 'space-around'
                              },
                              {
                                label: 'space-between',
                                value: 'space-between'
                              },
                              {
                                label: 'space-evenly',
                                value: 'space-evenly'
                              }
                            ],
                            options: [
                              {
                                label: 'center',
                                value: 'center'
                              },
                              {
                                label: 'start',
                                value: 'start'
                              },
                              {
                                label: 'end',
                                value: 'end'
                              },
                              {
                                label: 'space-around',
                                value: 'space-around'
                              },
                              {
                                label: 'space-between',
                                value: 'space-between'
                              },
                              {
                                label: 'space-evenly',
                                value: 'space-evenly'
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
                          componentName: 'SelectSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'center',
                                value: 'center'
                              },
                              {
                                label: 'start',
                                value: 'start'
                              },
                              {
                                label: 'end',
                                value: 'end'
                              },
                              {
                                label: 'space-around',
                                value: 'space-around'
                              },
                              {
                                label: 'space-between',
                                value: 'space-between'
                              },
                              {
                                label: 'space-evenly',
                                value: 'space-evenly'
                              }
                            ],
                            options: [
                              {
                                label: 'center',
                                value: 'center'
                              },
                              {
                                label: 'start',
                                value: 'start'
                              },
                              {
                                label: 'end',
                                value: 'end'
                              },
                              {
                                label: 'space-around',
                                value: 'space-around'
                              },
                              {
                                label: 'space-between',
                                value: 'space-between'
                              },
                              {
                                label: 'space-evenly',
                                value: 'space-evenly'
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
                          componentName: 'SelectSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'center',
                                value: 'center'
                              },
                              {
                                label: 'start',
                                value: 'start'
                              },
                              {
                                label: 'end',
                                value: 'end'
                              },
                              {
                                label: 'space-around',
                                value: 'space-around'
                              },
                              {
                                label: 'space-between',
                                value: 'space-between'
                              },
                              {
                                label: 'space-evenly',
                                value: 'space-evenly'
                              }
                            ],
                            options: [
                              {
                                label: 'center',
                                value: 'center'
                              },
                              {
                                label: 'start',
                                value: 'start'
                              },
                              {
                                label: 'end',
                                value: 'end'
                              },
                              {
                                label: 'space-around',
                                value: 'space-around'
                              },
                              {
                                label: 'space-between',
                                value: 'space-between'
                              },
                              {
                                label: 'space-evenly',
                                value: 'space-evenly'
                              }
                            ]
                          }
                        }
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
            'en-US': 'wrap',
            'zh-CN': 'wrap'
          }
        },
        name: 'wrap',
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
    title: '栅格行',
    screenshot: '',
    schema: {
      componentName: 'GridRow',
      props: {}
    }
  }
];

export default {
  ...GridRowMeta,
  snippets
};
