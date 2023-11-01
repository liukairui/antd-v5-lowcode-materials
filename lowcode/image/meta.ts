import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ImageMeta: IPublicTypeComponentMetadata = {
  componentName: 'Image',
  title: '图片',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Image',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'alt',
            'zh-CN': 'alt'
          }
        },
        name: 'alt',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'crossOrigin',
            'zh-CN': 'crossOrigin'
          }
        },
        name: 'crossOrigin',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: '',
                value: ''
              },
              {
                label: 'anonymous',
                value: 'anonymous'
              },
              {
                label: 'use-credentials',
                value: 'use-credentials'
              }
            ],
            options: [
              {
                label: '',
                value: ''
              },
              {
                label: 'anonymous',
                value: 'anonymous'
              },
              {
                label: 'use-credentials',
                value: 'use-credentials'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'decoding',
            'zh-CN': 'decoding'
          }
        },
        name: 'decoding',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'auto',
                value: 'auto'
              },
              {
                label: 'async',
                value: 'async'
              },
              {
                label: 'sync',
                value: 'sync'
              }
            ],
            options: [
              {
                label: 'auto',
                value: 'auto'
              },
              {
                label: 'async',
                value: 'async'
              },
              {
                label: 'sync',
                value: 'sync'
              }
            ]
          }
        }
      },
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
            'en-US': 'height',
            'zh-CN': 'height'
          }
        },
        name: 'height',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
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
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'eager',
                value: 'eager'
              },
              {
                label: 'lazy',
                value: 'lazy'
              }
            ],
            options: [
              {
                label: 'eager',
                value: 'eager'
              },
              {
                label: 'lazy',
                value: 'lazy'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onClick',
            'zh-CN': 'onClick'
          }
        },
        name: 'onClick',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onError',
            'zh-CN': 'onError'
          }
        },
        name: 'onError',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': 'placeholder'
          }
        },
        name: 'placeholder',
        setter: 'SlotSetter'
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
                            'en-US': 'visible',
                            'zh-CN': 'visible'
                          }
                        },
                        name: 'visible',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'minScale',
                            'zh-CN': 'minScale'
                          }
                        },
                        name: 'minScale',
                        setter: 'NumberSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'maxScale',
                            'zh-CN': 'maxScale'
                          }
                        },
                        name: 'maxScale',
                        setter: 'NumberSetter'
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
                            'en-US': 'getContainer',
                            'zh-CN': 'getContainer'
                          }
                        },
                        name: 'getContainer',
                        setter: {
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
                              },
                              'FunctionSetter',
                              {
                                componentName: 'RadioGroupSetter',
                                condition: () => false,
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
                            'en-US': 'mask',
                            'zh-CN': 'mask'
                          }
                        },
                        name: 'mask',
                        setter: 'SlotSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'maskClassName',
                            'zh-CN': 'maskClassName'
                          }
                        },
                        name: 'maskClassName',
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
                            'en-US': 'scaleStep',
                            'zh-CN': 'scaleStep'
                          }
                        },
                        name: 'scaleStep',
                        setter: 'NumberSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'movable',
                            'zh-CN': 'movable'
                          }
                        },
                        name: 'movable',
                        setter: 'BoolSetter'
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
                            'en-US': 'onTransform',
                            'zh-CN': 'onTransform'
                          }
                        },
                        name: 'onTransform',
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'referrerPolicy',
            'zh-CN': 'referrerPolicy'
          }
        },
        name: 'referrerPolicy',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '',
                value: ''
              },
              {
                label: 'no-referrer',
                value: 'no-referrer'
              },
              {
                label: 'no-referrer-when-downgrade',
                value: 'no-referrer-when-downgrade'
              },
              {
                label: 'origin',
                value: 'origin'
              },
              {
                label: 'origin-when-cross-origin',
                value: 'origin-when-cross-origin'
              },
              {
                label: 'same-origin',
                value: 'same-origin'
              },
              {
                label: 'strict-origin',
                value: 'strict-origin'
              },
              {
                label: 'strict-origin-when-cross-origin',
                value: 'strict-origin-when-cross-origin'
              },
              {
                label: 'unsafe-url',
                value: 'unsafe-url'
              }
            ],
            options: [
              {
                label: '',
                value: ''
              },
              {
                label: 'no-referrer',
                value: 'no-referrer'
              },
              {
                label: 'no-referrer-when-downgrade',
                value: 'no-referrer-when-downgrade'
              },
              {
                label: 'origin',
                value: 'origin'
              },
              {
                label: 'origin-when-cross-origin',
                value: 'origin-when-cross-origin'
              },
              {
                label: 'same-origin',
                value: 'same-origin'
              },
              {
                label: 'strict-origin',
                value: 'strict-origin'
              },
              {
                label: 'strict-origin-when-cross-origin',
                value: 'strict-origin-when-cross-origin'
              },
              {
                label: 'unsafe-url',
                value: 'unsafe-url'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'sizes',
            'zh-CN': 'sizes'
          }
        },
        name: 'sizes',
        setter: 'StringSetter'
      },
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
            'en-US': 'srcSet',
            'zh-CN': 'srcSet'
          }
        },
        name: 'srcSet',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'useMap',
            'zh-CN': 'useMap'
          }
        },
        name: 'useMap',
        setter: 'StringSetter'
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
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
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
            'en-US': 'wrapperStyle',
            'zh-CN': 'wrapperStyle'
          }
        },
        name: 'wrapperStyle',
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
    title: '图片',
    screenshot: '',
    schema: {
      componentName: 'Image',
      props: {}
    }
  }
];

export default {
  ...ImageMeta,
  snippets
};
