import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ImagePreviewGroupMeta: IPublicTypeComponentMetadata = {
  componentName: 'ImagePreviewGroup',
  title: 'ImagePreviewGroup',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'ImagePreviewGroup',
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
            'en-US': 'previewPrefixCls',
            'zh-CN': 'previewPrefixCls'
          }
        },
        name: 'previewPrefixCls',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
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
                      'en-US': 'rotateRight',
                      'zh-CN': 'rotateRight'
                    }
                  },
                  name: 'rotateRight',
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
                      'en-US': 'zoomIn',
                      'zh-CN': 'zoomIn'
                    }
                  },
                  name: 'zoomIn',
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
                      'en-US': 'zoomOut',
                      'zh-CN': 'zoomOut'
                    }
                  },
                  name: 'zoomOut',
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
                      'en-US': 'close',
                      'zh-CN': 'close'
                    }
                  },
                  name: 'close',
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
                      'en-US': 'left',
                      'zh-CN': 'left'
                    }
                  },
                  name: 'left',
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
                      'en-US': 'right',
                      'zh-CN': 'right'
                    }
                  },
                  name: 'right',
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
                      'en-US': 'flipX',
                      'zh-CN': 'flipX'
                    }
                  },
                  name: 'flipX',
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
                      'en-US': 'flipY',
                      'zh-CN': 'flipY'
                    }
                  },
                  name: 'flipY',
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
            'en-US': 'items',
            'zh-CN': 'items'
          }
        },
        name: 'items',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'MixedSetter',
              props: {
                setters: [
                  {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  },
                  {
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
                ]
              }
            }
          },
          initialValue: undefined
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
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
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
              {
                componentName: 'BoolSetter',
                initialValue: undefined
              },
              {
                componentName: 'ObjectSetter',
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
                        setter: {
                          componentName: 'NumberSetter',
                          initialValue: undefined
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
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
                        setter: {
                          componentName: 'FunctionSetter'
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
    title: 'ImagePreviewGroup',
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
