import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const QRCodeMeta: IPublicTypeComponentMetadata = {
  componentName: 'QRCode',
  title: 'QRCode',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'QRCode',
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
            'en-US': 'icon',
            'zh-CN': 'icon'
          }
        },
        name: 'icon',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
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
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
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
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
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
          },
          initialValue: undefined
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
          },
          initialValue: undefined
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
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
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
          }
        },
        name: 'size',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
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
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
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
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
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
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
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
                      'en-US': 'excavate',
                      'zh-CN': 'excavate'
                    }
                  },
                  name: 'excavate',
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
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
                  setter: {
                    componentName: 'NumberSetter',
                    initialValue: undefined
                  }
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
                  setter: {
                    componentName: 'NumberSetter',
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
            'en-US': 'bgColor',
            'zh-CN': 'bgColor'
          }
        },
        name: 'bgColor',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
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
    title: 'QRCode',
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
