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
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Descriptions',
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
            'en-US': 'colon',
            'zh-CN': 'colon'
          }
        },
        name: 'colon',
        setter: 'BoolSetter'
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
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'NumberSetter',
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
            'en-US': 'contentStyle',
            'zh-CN': 'contentStyle'
          }
        },
        name: 'contentStyle',
        setter: 'StyleSetter',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
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
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'SlotSetter']
          }
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
          condition: () => false,
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              condition: () => false,
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'children',
                          'zh-CN': 'children'
                        }
                      },
                      name: 'children',
                      isRequired: true,
                      setter: {
                        componentName: 'MixedSetter',
                        props: {
                          setters: ['StringSetter', 'SlotSetter']
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'contentStyle',
                          'zh-CN': 'contentStyle'
                        }
                      },
                      name: 'contentStyle',
                      setter: 'StyleSetter',
                      extraProps: {
                        display: 'accordion',
                        defaultCollapsed: true
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'label',
                          'zh-CN': 'label'
                        }
                      },
                      name: 'label',
                      isRequired: true,
                      setter: {
                        componentName: 'MixedSetter',
                        props: {
                          setters: ['StringSetter', 'SlotSetter']
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'labelStyle',
                          'zh-CN': 'labelStyle'
                        }
                      },
                      name: 'labelStyle',
                      setter: 'StyleSetter',
                      extraProps: {
                        display: 'accordion',
                        defaultCollapsed: true
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
                            'NumberSetter',
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
                    }
                  ]
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
            'en-US': 'labelStyle',
            'zh-CN': 'labelStyle'
          }
        },
        name: 'labelStyle',
        setter: 'StyleSetter',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'layout',
            'zh-CN': 'layout'
          }
        },
        name: 'layout',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
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
            'en-US': 'size',
            'zh-CN': 'size'
          }
        },
        name: 'size',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
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
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'SlotSetter']
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
