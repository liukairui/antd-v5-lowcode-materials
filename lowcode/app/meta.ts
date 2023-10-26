import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AppMeta: IPublicTypeComponentMetadata = {
  componentName: 'App',
  title: '应用',
  group: '原子组件',
  category: '其他 Other',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'App',
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
            'en-US': 'message',
            'zh-CN': 'message'
          },
          tip: {
            type: 'i18n',
            'en-US': 'message',
            'zh-CN': 'message'
          }
        },
        name: 'message',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'top',
                      'zh-CN': 'top'
                    }
                  },
                  name: 'top',
                  setter: {
                    componentName: 'NumberSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'duration',
                      'zh-CN': 'duration'
                    }
                  },
                  name: 'duration',
                  setter: {
                    componentName: 'NumberSetter',
                    initialValue: undefined
                  }
                },
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
                      'en-US': 'getContainer',
                      'zh-CN': 'getContainer'
                    }
                  },
                  name: 'getContainer',
                  setter: {
                    componentName: 'FunctionSetter'
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'transitionName',
                      'zh-CN': 'transitionName'
                    }
                  },
                  name: 'transitionName',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'maxCount',
                      'zh-CN': 'maxCount'
                    }
                  },
                  name: 'maxCount',
                  setter: {
                    componentName: 'NumberSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'rtl',
                      'zh-CN': 'rtl'
                    }
                  },
                  name: 'rtl',
                  setter: {
                    componentName: 'BoolSetter',
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
            'en-US': 'notification',
            'zh-CN': 'notification'
          },
          tip: {
            type: 'i18n',
            'en-US': 'notification',
            'zh-CN': 'notification'
          }
        },
        name: 'notification',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'top',
                      'zh-CN': 'top'
                    }
                  },
                  name: 'top',
                  setter: {
                    componentName: 'NumberSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'bottom',
                      'zh-CN': 'bottom'
                    }
                  },
                  name: 'bottom',
                  setter: {
                    componentName: 'NumberSetter',
                    initialValue: undefined
                  }
                },
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
                      'en-US': 'getContainer',
                      'zh-CN': 'getContainer'
                    }
                  },
                  name: 'getContainer',
                  setter: {
                    componentName: 'FunctionSetter'
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'placement',
                      'zh-CN': 'placement'
                    }
                  },
                  name: 'placement',
                  setter: {
                    componentName: 'SelectSetter',
                    props: {
                      dataSource: [
                        {
                          label: 'top',
                          value: 'top'
                        },
                        {
                          label: 'bottom',
                          value: 'bottom'
                        },
                        {
                          label: 'topLeft',
                          value: 'topLeft'
                        },
                        {
                          label: 'topRight',
                          value: 'topRight'
                        },
                        {
                          label: 'bottomLeft',
                          value: 'bottomLeft'
                        },
                        {
                          label: 'bottomRight',
                          value: 'bottomRight'
                        }
                      ],
                      options: [
                        {
                          label: 'top',
                          value: 'top'
                        },
                        {
                          label: 'bottom',
                          value: 'bottom'
                        },
                        {
                          label: 'topLeft',
                          value: 'topLeft'
                        },
                        {
                          label: 'topRight',
                          value: 'topRight'
                        },
                        {
                          label: 'bottomLeft',
                          value: 'bottomLeft'
                        },
                        {
                          label: 'bottomRight',
                          value: 'bottomRight'
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
                      'en-US': 'maxCount',
                      'zh-CN': 'maxCount'
                    }
                  },
                  name: 'maxCount',
                  setter: {
                    componentName: 'NumberSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'rtl',
                      'zh-CN': 'rtl'
                    }
                  },
                  name: 'rtl',
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'stack',
                      'zh-CN': 'stack'
                    }
                  },
                  name: 'stack',
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
                                      'en-US': 'threshold',
                                      'zh-CN': 'threshold'
                                    }
                                  },
                                  name: 'threshold',
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
                }
              ],
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
    title: '应用',
    screenshot: '',
    schema: {
      componentName: 'App',
      props: {}
    }
  }
];

export default {
  ...AppMeta,
  snippets
};
