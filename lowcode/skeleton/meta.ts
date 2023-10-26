import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SkeletonMeta: IPublicTypeComponentMetadata = {
  componentName: 'Skeleton',
  title: '骨架屏',
  group: '原子组件',
  category: '反馈 Feedback',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Skeleton',
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
            'en-US': 'active',
            'zh-CN': 'active'
          },
          tip: {
            type: 'i18n',
            'en-US': 'active',
            'zh-CN': 'active'
          }
        },
        name: 'active',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'avatar',
            'zh-CN': 'avatar'
          },
          tip: {
            type: 'i18n',
            'en-US': 'avatar',
            'zh-CN': 'avatar'
          }
        },
        name: 'avatar',
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
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': 'loading'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': 'loading'
          }
        },
        name: 'loading',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'paragraph',
            'zh-CN': 'paragraph'
          },
          tip: {
            type: 'i18n',
            'en-US': 'paragraph',
            'zh-CN': 'paragraph'
          }
        },
        name: 'paragraph',
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
                            'en-US': 'prefixCls',
                            'zh-CN': 'prefixCls'
                          }
                        },
                        name: 'prefixCls',
                        setter: {
                          componentName: 'StringSetter',
                          initialValue: undefined
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'className',
                            'zh-CN': 'className'
                          }
                        },
                        name: 'className',
                        setter: {
                          componentName: 'StringSetter',
                          initialValue: undefined
                        }
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
                            setters: [
                              {
                                componentName: 'StringSetter',
                                initialValue: undefined
                              },
                              {
                                componentName: 'NumberSetter',
                                initialValue: undefined
                              },
                              {
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
                                          componentName: 'NumberSetter',
                                          initialValue: undefined
                                        }
                                      ]
                                    }
                                  }
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
                            'en-US': 'rows',
                            'zh-CN': 'rows'
                          }
                        },
                        name: 'rows',
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
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'round',
            'zh-CN': 'round'
          },
          tip: {
            type: 'i18n',
            'en-US': 'round',
            'zh-CN': 'round'
          }
        },
        name: 'round',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': 'title'
          },
          tip: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': 'title'
          }
        },
        name: 'title',
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
                            'en-US': 'prefixCls',
                            'zh-CN': 'prefixCls'
                          }
                        },
                        name: 'prefixCls',
                        setter: {
                          componentName: 'StringSetter',
                          initialValue: undefined
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'className',
                            'zh-CN': 'className'
                          }
                        },
                        name: 'className',
                        setter: {
                          componentName: 'StringSetter',
                          initialValue: undefined
                        }
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
                            setters: [
                              {
                                componentName: 'StringSetter',
                                initialValue: undefined
                              },
                              {
                                componentName: 'NumberSetter',
                                initialValue: undefined
                              }
                            ]
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
    title: '骨架屏',
    screenshot: '',
    schema: {
      componentName: 'Skeleton',
      props: {}
    }
  }
];

export default {
  ...SkeletonMeta,
  snippets
};
