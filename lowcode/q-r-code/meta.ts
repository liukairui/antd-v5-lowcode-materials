import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const QRCodeMeta: IPublicTypeComponentMetadata = {
  componentName: 'QRCode',
  title: '二维码',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'QRCode',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'bgColor',
            'zh-CN': 'bgColor'
          }
        },
        name: 'bgColor',
        setter: 'StringSetter'
      },
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
            'en-US': 'color',
            'zh-CN': 'color'
          }
        },
        name: 'color',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'errorLevel',
            'zh-CN': 'errorLevel'
          }
        },
        name: 'errorLevel',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'M',
                value: 'M'
              },
              {
                label: 'Q',
                value: 'Q'
              },
              {
                label: 'L',
                value: 'L'
              },
              {
                label: 'H',
                value: 'H'
              }
            ],
            options: [
              {
                label: 'M',
                value: 'M'
              },
              {
                label: 'Q',
                value: 'Q'
              },
              {
                label: 'L',
                value: 'L'
              },
              {
                label: 'H',
                value: 'H'
              }
            ]
          }
        }
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
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'iconSize',
            'zh-CN': 'iconSize'
          }
        },
        name: 'iconSize',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'imageSettings',
            'zh-CN': 'imageSettings'
          }
        },
        name: 'imageSettings',
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
                      'en-US': 'src',
                      'zh-CN': 'src'
                    }
                  },
                  name: 'src',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'height',
                      'zh-CN': 'height'
                    }
                  },
                  name: 'height',
                  setter: 'NumberSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'width',
                      'zh-CN': 'width'
                    }
                  },
                  name: 'width',
                  setter: 'NumberSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'excavate',
                      'zh-CN': 'excavate'
                    }
                  },
                  name: 'excavate',
                  setter: 'BoolSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'x',
                      'zh-CN': 'x'
                    }
                  },
                  name: 'x',
                  setter: 'NumberSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'y',
                      'zh-CN': 'y'
                    }
                  },
                  name: 'y',
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
            'en-US': 'includeMargin',
            'zh-CN': 'includeMargin'
          }
        },
        name: 'includeMargin',
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
        setter: 'NumberSetter'
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
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'loading',
                value: 'loading'
              },
              {
                label: 'active',
                value: 'active'
              },
              {
                label: 'expired',
                value: 'expired'
              }
            ],
            options: [
              {
                label: 'loading',
                value: 'loading'
              },
              {
                label: 'active',
                value: 'active'
              },
              {
                label: 'expired',
                value: 'expired'
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
                label: 'canvas',
                value: 'canvas'
              },
              {
                label: 'svg',
                value: 'svg'
              }
            ],
            options: [
              {
                label: 'canvas',
                value: 'canvas'
              },
              {
                label: 'svg',
                value: 'svg'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': 'value'
          }
        },
        name: 'value',
        setter: 'StringSetter'
      }
    ],
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onRefresh'
        }
      ]
    },
    component: {
      isContainer: true
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '二维码',
    screenshot: '',
    schema: {
      componentName: 'QRCode',
      props: {}
    }
  }
];

export default {
  ...QRCodeMeta,
  snippets
};
