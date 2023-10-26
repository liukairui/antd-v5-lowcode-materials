import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SliderMeta: IPublicTypeComponentMetadata = {
  componentName: 'Slider',
  title: '滑动输入条',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Slider',
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
            'en-US': 'autoFocus',
            'zh-CN': 'autoFocus'
          },
          tip: {
            type: 'i18n',
            'en-US': 'autoFocus',
            'zh-CN': 'autoFocus'
          }
        },
        name: 'autoFocus',
        setter: {
          componentName: 'BoolSetter',
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
            'en-US': 'defaultValue',
            'zh-CN': 'defaultValue'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultValue',
            'zh-CN': 'defaultValue'
          }
        },
        name: 'defaultValue',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'NumberSetter',
                initialValue: undefined
              },
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'NumberSetter',
                    initialValue: undefined
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
            'en-US': 'disabled',
            'zh-CN': 'disabled'
          },
          tip: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': 'disabled'
          }
        },
        name: 'disabled',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dots',
            'zh-CN': 'dots'
          },
          tip: {
            type: 'i18n',
            'en-US': 'dots',
            'zh-CN': 'dots'
          }
        },
        name: 'dots',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'id',
            'zh-CN': 'id'
          },
          tip: {
            type: 'i18n',
            'en-US': 'id',
            'zh-CN': 'id'
          }
        },
        name: 'id',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'included',
            'zh-CN': 'included'
          },
          tip: {
            type: 'i18n',
            'en-US': 'included',
            'zh-CN': 'included'
          }
        },
        name: 'included',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'keyboard',
            'zh-CN': 'keyboard'
          },
          tip: {
            type: 'i18n',
            'en-US': 'keyboard',
            'zh-CN': 'keyboard'
          }
        },
        name: 'keyboard',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'marks',
            'zh-CN': 'marks'
          },
          tip: {
            type: 'i18n',
            'en-US': 'marks',
            'zh-CN': 'marks'
          }
        },
        name: 'marks',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              extraSetter: {
                componentName: 'MixedSetter',
                props: {
                  setters: []
                }
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
            'en-US': 'max',
            'zh-CN': 'max'
          },
          tip: {
            type: 'i18n',
            'en-US': 'max',
            'zh-CN': 'max'
          }
        },
        name: 'max',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'min',
            'zh-CN': 'min'
          },
          tip: {
            type: 'i18n',
            'en-US': 'min',
            'zh-CN': 'min'
          }
        },
        name: 'min',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onAfterChange',
            'zh-CN': 'onAfterChange'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onAfterChange',
            'zh-CN': 'onAfterChange'
          }
        },
        name: 'onAfterChange',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'FunctionSetter'
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
          },
          tip: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange'
          }
        },
        name: 'onChange',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'FunctionSetter'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'range',
            'zh-CN': 'range'
          },
          tip: {
            type: 'i18n',
            'en-US': 'range',
            'zh-CN': 'range'
          }
        },
        name: 'range',
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
                            'en-US': 'draggableTrack',
                            'zh-CN': 'draggableTrack'
                          }
                        },
                        name: 'draggableTrack',
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
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'reverse',
            'zh-CN': 'reverse'
          },
          tip: {
            type: 'i18n',
            'en-US': 'reverse',
            'zh-CN': 'reverse'
          }
        },
        name: 'reverse',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'step',
            'zh-CN': 'step'
          },
          tip: {
            type: 'i18n',
            'en-US': 'step',
            'zh-CN': 'step'
          }
        },
        name: 'step',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
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
            'en-US': 'tooltip',
            'zh-CN': 'tooltip'
          },
          tip: {
            type: 'i18n',
            'en-US': 'tooltip',
            'zh-CN': 'tooltip'
          }
        },
        name: 'tooltip',
        setter: {
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
                      'en-US': 'open',
                      'zh-CN': 'open'
                    }
                  },
                  name: 'open',
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
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
                          label: 'left',
                          value: 'left'
                        },
                        {
                          label: 'right',
                          value: 'right'
                        },
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
                        },
                        {
                          label: 'leftTop',
                          value: 'leftTop'
                        },
                        {
                          label: 'leftBottom',
                          value: 'leftBottom'
                        },
                        {
                          label: 'rightTop',
                          value: 'rightTop'
                        },
                        {
                          label: 'rightBottom',
                          value: 'rightBottom'
                        }
                      ],
                      options: [
                        {
                          label: 'left',
                          value: 'left'
                        },
                        {
                          label: 'right',
                          value: 'right'
                        },
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
                        },
                        {
                          label: 'leftTop',
                          value: 'leftTop'
                        },
                        {
                          label: 'leftBottom',
                          value: 'leftBottom'
                        },
                        {
                          label: 'rightTop',
                          value: 'rightTop'
                        },
                        {
                          label: 'rightBottom',
                          value: 'rightBottom'
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
                      'en-US': 'getPopupContainer',
                      'zh-CN': 'getPopupContainer'
                    }
                  },
                  name: 'getPopupContainer',
                  setter: {
                    componentName: 'FunctionSetter'
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'formatter',
                      'zh-CN': 'formatter'
                    }
                  },
                  name: 'formatter',
                  setter: {
                    componentName: 'FunctionSetter'
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'autoAdjustOverflow',
                      'zh-CN': 'autoAdjustOverflow'
                    }
                  },
                  name: 'autoAdjustOverflow',
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
            'en-US': 'value',
            'zh-CN': 'value'
          },
          tip: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': 'value'
          }
        },
        name: 'value',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'NumberSetter',
                initialValue: undefined
              },
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'NumberSetter',
                    initialValue: undefined
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
            'en-US': 'vertical',
            'zh-CN': 'vertical'
          },
          tip: {
            type: 'i18n',
            'en-US': 'vertical',
            'zh-CN': 'vertical'
          }
        },
        name: 'vertical',
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
    title: '滑动输入条',
    screenshot: '',
    schema: {
      componentName: 'Slider',
      props: {}
    }
  }
];

export default {
  ...SliderMeta,
  snippets
};
