import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SpaceMeta: IPublicTypeComponentMetadata = {
  componentName: 'Space',
  title: '间距',
  group: '原子组件',
  category: '布局 Layout',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Space',
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
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'start',
                value: 'start'
              },
              {
                label: 'end',
                value: 'end'
              },
              {
                label: 'center',
                value: 'center'
              },
              {
                label: 'baseline',
                value: 'baseline'
              }
            ],
            options: [
              {
                label: 'start',
                value: 'start'
              },
              {
                label: 'end',
                value: 'end'
              },
              {
                label: 'center',
                value: 'center'
              },
              {
                label: 'baseline',
                value: 'baseline'
              }
            ]
          }
        }
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
            'en-US': 'size',
            'zh-CN': 'size'
          }
        },
        name: 'size',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
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
                }
              },
              'NumberSetter',
              /**
               * @TODO ArraySetter 暂不支持 MixedSetter，会只显示 RadioGroupSetter
               */
              {
                componentName: 'ArraySetter',
                condition: () => false,
                props: {
                  itemSetter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
                        {
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
                          }
                        },
                        'NumberSetter'
                      ]
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
            'en-US': 'split',
            'zh-CN': 'split'
          }
        },
        name: 'split',
        setter: 'SlotSetter'
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'classNames',
            'zh-CN': 'classNames'
          }
        },
        name: 'classNames',
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
                      'en-US': 'item',
                      'zh-CN': 'item'
                    }
                  },
                  name: 'item',
                  setter: 'StringSetter'
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
            'en-US': 'styles',
            'zh-CN': 'styles'
          }
        },
        name: 'styles',
        setter: {
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              items: [
                {
                  title: 'item',
                  display: 'entry',
                  type: 'group',
                  items: [
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'item',
                          'zh-CN': 'item'
                        }
                      },
                      name: 'item',
                      setter: {
                        componentName: 'StyleSetter'
                      },
                      display: 'block'
                    }
                  ]
                }
              ]
            }
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
    title: '间距',
    screenshot: '',
    schema: {
      componentName: 'Space',
      props: {}
    }
  }
];

export default {
  ...SpaceMeta,
  snippets
};
