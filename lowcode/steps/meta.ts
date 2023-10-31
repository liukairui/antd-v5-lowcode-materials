import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const StepsMeta: IPublicTypeComponentMetadata = {
  componentName: 'Steps',
  title: '步骤条',
  group: '原子组件',
  category: '导航 Navigation',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Steps',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'current',
            'zh-CN': 'current'
          }
        },
        name: 'current',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
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
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'initial',
            'zh-CN': 'initial'
          }
        },
        name: 'initial',
        setter: 'NumberSetter'
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
                          'en-US': 'description',
                          'zh-CN': 'description'
                        }
                      },
                      name: 'description',
                      setter: 'SlotSetter'
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
                      setter: 'SlotSetter'
                    },
                    {
                      title: {
                        label: {
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
                              label: 'process',
                              value: 'process'
                            },
                            {
                              label: 'wait',
                              value: 'wait'
                            },
                            {
                              label: 'finish',
                              value: 'finish'
                            },
                            {
                              label: 'error',
                              value: 'error'
                            }
                          ],
                          options: [
                            {
                              label: 'process',
                              value: 'process'
                            },
                            {
                              label: 'wait',
                              value: 'wait'
                            },
                            {
                              label: 'finish',
                              value: 'finish'
                            },
                            {
                              label: 'error',
                              value: 'error'
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
                        }
                      },
                      name: 'disabled',
                      setter: 'BoolSetter'
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
                      setter: 'SlotSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'subTitle',
                          'zh-CN': 'subTitle'
                        }
                      },
                      name: 'subTitle',
                      setter: 'SlotSetter'
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
                        componentName: 'StyleSetter'
                      },
                      display: 'accordion',
                      type: 'field'
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
            'en-US': 'labelPlacement',
            'zh-CN': 'labelPlacement'
          }
        },
        name: 'labelPlacement',
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
            'en-US': 'onChange',
            'zh-CN': 'onChange'
          }
        },
        name: 'onChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'percent',
            'zh-CN': 'percent'
          }
        },
        name: 'percent',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'progressDot',
            'zh-CN': 'progressDot'
          }
        },
        name: 'progressDot',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'FunctionSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'responsive',
            'zh-CN': 'responsive'
          }
        },
        name: 'responsive',
        setter: 'BoolSetter'
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
          }
        },
        name: 'status',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'process',
                value: 'process'
              },
              {
                label: 'wait',
                value: 'wait'
              },
              {
                label: 'finish',
                value: 'finish'
              },
              {
                label: 'error',
                value: 'error'
              }
            ],
            options: [
              {
                label: 'process',
                value: 'process'
              },
              {
                label: 'wait',
                value: 'wait'
              },
              {
                label: 'finish',
                value: 'finish'
              },
              {
                label: 'error',
                value: 'error'
              }
            ]
          }
        }
      },
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
                label: 'default',
                value: 'default'
              },
              {
                label: 'inline',
                value: 'inline'
              },
              {
                label: 'navigation',
                value: 'navigation'
              }
            ],
            options: [
              {
                label: 'default',
                value: 'default'
              },
              {
                label: 'inline',
                value: 'inline'
              },
              {
                label: 'navigation',
                value: 'navigation'
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
    title: '步骤条',
    screenshot: '',
    schema: {
      componentName: 'Steps',
      props: {}
    }
  }
];

export default {
  ...StepsMeta,
  snippets
};
