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
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Space',
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
            'en-US': 'align',
            'zh-CN': 'align'
          },
          tip: {
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
              },
              {
                label: 'baseline',
                value: 'baseline'
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
              },
              {
                label: 'baseline',
                value: 'baseline'
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
            'en-US': 'classNames',
            'zh-CN': 'classNames'
          },
          tip: {
            type: 'i18n',
            'en-US': 'classNames',
            'zh-CN': 'classNames'
          }
        },
        name: 'classNames',
        setter: {
          componentName: 'ObjectSetter',
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
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'NumberSetter',
                initialValue: undefined
              },
              {
                componentName: 'MixedSetter',
                props: {}
              },
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
            'en-US': 'split',
            'zh-CN': 'split'
          },
          tip: {
            type: 'i18n',
            'en-US': 'split',
            'zh-CN': 'split'
          }
        },
        name: 'split',
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
            'en-US': 'styles',
            'zh-CN': 'styles'
          },
          tip: {
            type: 'i18n',
            'en-US': 'styles',
            'zh-CN': 'styles'
          }
        },
        name: 'styles',
        setter: {
          componentName: 'ObjectSetter',
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
            'en-US': 'wrap',
            'zh-CN': 'wrap'
          },
          tip: {
            type: 'i18n',
            'en-US': 'wrap',
            'zh-CN': 'wrap'
          }
        },
        name: 'wrap',
        setter: {
          componentName: 'BoolSetter',
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
