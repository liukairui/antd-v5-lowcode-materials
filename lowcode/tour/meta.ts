import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TourMeta: IPublicTypeComponentMetadata = {
  componentName: 'Tour',
  title: '漫游式引导',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Tour',
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
            'en-US': 'animated',
            'zh-CN': 'animated'
          },
          tip: {
            type: 'i18n',
            'en-US': 'animated',
            'zh-CN': 'animated'
          }
        },
        name: 'animated',
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
                            'en-US': 'placeholder',
                            'zh-CN': 'placeholder'
                          }
                        },
                        name: 'placeholder',
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
            'en-US': 'arrow',
            'zh-CN': 'arrow'
          },
          tip: {
            type: 'i18n',
            'en-US': 'arrow',
            'zh-CN': 'arrow'
          }
        },
        name: 'arrow',
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
                            'en-US': 'pointAtCenter',
                            'zh-CN': 'pointAtCenter'
                          }
                        },
                        name: 'pointAtCenter',
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
            'en-US': 'builtinPlacements',
            'zh-CN': 'builtinPlacements'
          },
          tip: {
            type: 'i18n',
            'en-US': 'builtinPlacements',
            'zh-CN': 'builtinPlacements'
          }
        },
        name: 'builtinPlacements',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              extraSetter: {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [],
                    extraSetter: {
                      componentName: 'MixedSetter',
                      props: {}
                    }
                  }
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
            'en-US': 'closeIcon',
            'zh-CN': 'closeIcon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'closeIcon',
            'zh-CN': 'closeIcon'
          }
        },
        name: 'closeIcon',
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
            'en-US': 'current',
            'zh-CN': 'current'
          },
          tip: {
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
            'en-US': 'defaultCurrent',
            'zh-CN': 'defaultCurrent'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultCurrent',
            'zh-CN': 'defaultCurrent'
          }
        },
        name: 'defaultCurrent',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'gap',
            'zh-CN': 'gap'
          },
          tip: {
            type: 'i18n',
            'en-US': 'gap',
            'zh-CN': 'gap'
          }
        },
        name: 'gap',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'offset',
                      'zh-CN': 'offset'
                    }
                  },
                  name: 'offset',
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
                        }
                      ]
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'radius',
                      'zh-CN': 'radius'
                    }
                  },
                  name: 'radius',
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
            'en-US': 'indicatorsRender',
            'zh-CN': 'indicatorsRender'
          },
          tip: {
            type: 'i18n',
            'en-US': 'indicatorsRender',
            'zh-CN': 'indicatorsRender'
          }
        },
        name: 'indicatorsRender',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mask',
            'zh-CN': 'mask'
          },
          tip: {
            type: 'i18n',
            'en-US': 'mask',
            'zh-CN': 'mask'
          }
        },
        name: 'mask',
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
                            'en-US': 'color',
                            'zh-CN': 'color'
                          }
                        },
                        name: 'color',
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
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onClose',
            'zh-CN': 'onClose'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onClose',
            'zh-CN': 'onClose'
          }
        },
        name: 'onClose',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onPopupAlign',
            'zh-CN': 'onPopupAlign'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onPopupAlign',
            'zh-CN': 'onPopupAlign'
          }
        },
        name: 'onPopupAlign',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'open',
            'zh-CN': 'open'
          },
          tip: {
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
          },
          tip: {
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
                label: 'center',
                value: 'center'
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
                label: 'center',
                value: 'center'
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
            'en-US': 'scrollIntoViewOptions',
            'zh-CN': 'scrollIntoViewOptions'
          },
          tip: {
            type: 'i18n',
            'en-US': 'scrollIntoViewOptions',
            'zh-CN': 'scrollIntoViewOptions'
          }
        },
        name: 'scrollIntoViewOptions',
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
                            'en-US': 'block',
                            'zh-CN': 'block'
                          }
                        },
                        name: 'block',
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
                                label: 'nearest',
                                value: 'nearest'
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
                                label: 'nearest',
                                value: 'nearest'
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
                            'en-US': 'inline',
                            'zh-CN': 'inline'
                          }
                        },
                        name: 'inline',
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
                                label: 'nearest',
                                value: 'nearest'
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
                                label: 'nearest',
                                value: 'nearest'
                              }
                            ]
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
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'steps',
            'zh-CN': 'steps'
          },
          tip: {
            type: 'i18n',
            'en-US': 'steps',
            'zh-CN': 'steps'
          }
        },
        name: 'steps',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'cover',
                          'zh-CN': 'cover'
                        }
                      },
                      name: 'cover',
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
                          'en-US': 'nextButtonProps',
                          'zh-CN': 'nextButtonProps'
                        }
                      },
                      name: 'nextButtonProps',
                      setter: {
                        componentName: 'ObjectSetter',
                        props: {
                          config: {
                            items: [
                              {
                                title: {
                                  label: {
                                    type: 'i18n',
                                    'en-US': 'children',
                                    'zh-CN': 'children'
                                  }
                                },
                                name: 'children',
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
                                    'en-US': 'onClick',
                                    'zh-CN': 'onClick'
                                  }
                                },
                                name: 'onClick',
                                setter: {
                                  componentName: 'FunctionSetter'
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
                          'en-US': 'prevButtonProps',
                          'zh-CN': 'prevButtonProps'
                        }
                      },
                      name: 'prevButtonProps',
                      setter: {
                        componentName: 'ObjectSetter',
                        props: {
                          config: {
                            items: [
                              {
                                title: {
                                  label: {
                                    type: 'i18n',
                                    'en-US': 'children',
                                    'zh-CN': 'children'
                                  }
                                },
                                name: 'children',
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
                                    'en-US': 'onClick',
                                    'zh-CN': 'onClick'
                                  }
                                },
                                name: 'onClick',
                                setter: {
                                  componentName: 'FunctionSetter'
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
                          'en-US': 'indicatorsRender',
                          'zh-CN': 'indicatorsRender'
                        }
                      },
                      name: 'indicatorsRender',
                      setter: {
                        componentName: 'FunctionSetter'
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
                              label: 'default',
                              value: 'default'
                            },
                            {
                              label: 'primary',
                              value: 'primary'
                            }
                          ],
                          options: [
                            {
                              label: 'default',
                              value: 'default'
                            },
                            {
                              label: 'primary',
                              value: 'primary'
                            }
                          ]
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
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'type',
            'zh-CN': 'type'
          },
          tip: {
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
                label: 'default',
                value: 'default'
              },
              {
                label: 'primary',
                value: 'primary'
              }
            ],
            options: [
              {
                label: 'default',
                value: 'default'
              },
              {
                label: 'primary',
                value: 'primary'
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
            'en-US': 'zIndex',
            'zh-CN': 'zIndex'
          },
          tip: {
            type: 'i18n',
            'en-US': 'zIndex',
            'zh-CN': 'zIndex'
          }
        },
        name: 'zIndex',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      }
    ],
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onFinish'
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
    title: '漫游式引导',
    screenshot: '',
    schema: {
      componentName: 'Tour',
      props: {}
    }
  }
];

export default {
  ...TourMeta,
  snippets
};
