import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ImagePreviewGroupMeta: IPublicTypeComponentMetadata = {
  componentName: 'ImagePreviewGroup',
  title: '图片预览组',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'ImagePreviewGroup',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fallback',
            'zh-CN': 'fallback'
          }
        },
        name: 'fallback',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'icons',
            'zh-CN': 'icons'
          }
        },
        name: 'icons',
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
                      'en-US': 'rotateLeft',
                      'zh-CN': 'rotateLeft'
                    }
                  },
                  name: 'rotateLeft',
                  setter: 'SlotSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'rotateRight',
                      'zh-CN': 'rotateRight'
                    }
                  },
                  name: 'rotateRight',
                  setter: 'SlotSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'zoomIn',
                      'zh-CN': 'zoomIn'
                    }
                  },
                  name: 'zoomIn',
                  setter: 'SlotSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'zoomOut',
                      'zh-CN': 'zoomOut'
                    }
                  },
                  name: 'zoomOut',
                  setter: 'SlotSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'close',
                      'zh-CN': 'close'
                    }
                  },
                  name: 'close',
                  setter: 'SlotSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'left',
                      'zh-CN': 'left'
                    }
                  },
                  name: 'left',
                  setter: 'SlotSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'right',
                      'zh-CN': 'right'
                    }
                  },
                  name: 'right',
                  setter: 'SlotSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'flipX',
                      'zh-CN': 'flipX'
                    }
                  },
                  name: 'flipX',
                  setter: 'SlotSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'flipY',
                      'zh-CN': 'flipY'
                    }
                  },
                  name: 'flipY',
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
              componentName: 'MixedSetter',
              props: {
                setters: [
                  'StringSetter',
                  {
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
                ]
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'preview',
            'zh-CN': 'preview'
          }
        },
        name: 'preview',
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
                            'en-US': 'countRender',
                            'zh-CN': 'countRender'
                          }
                        },
                        name: 'countRender',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'toolbarRender',
                            'zh-CN': 'toolbarRender'
                          }
                        },
                        name: 'toolbarRender',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'imageRender',
                            'zh-CN': 'imageRender'
                          }
                        },
                        name: 'imageRender',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onVisibleChange',
                            'zh-CN': 'onVisibleChange'
                          }
                        },
                        name: 'onVisibleChange',
                        setter: 'FunctionSetter'
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
            'en-US': 'previewPrefixCls',
            'zh-CN': 'previewPrefixCls'
          }
        },
        name: 'previewPrefixCls',
        setter: 'StringSetter'
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
    title: '图片预览组',
    screenshot: '',
    schema: {
      componentName: 'ImagePreviewGroup',
      props: {}
    }
  }
];

export default {
  ...ImagePreviewGroupMeta,
  snippets
};
