import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TabsMeta: IPublicTypeComponentMetadata = {
  componentName: 'Tabs',
  title: '标签页',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Tabs',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'activeKey',
            'zh-CN': 'activeKey'
          }
        },
        name: 'activeKey',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'addIcon',
            'zh-CN': 'addIcon'
          }
        },
        name: 'addIcon',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
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
                            'en-US': 'inkBar',
                            'zh-CN': 'inkBar'
                          }
                        },
                        name: 'inkBar',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'tabPane',
                            'zh-CN': 'tabPane'
                          }
                        },
                        name: 'tabPane',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'tabPaneMotion',
                            'zh-CN': 'tabPaneMotion'
                          }
                        },
                        name: 'tabPaneMotion',
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
                                      'en-US': 'motionName',
                                      'zh-CN': 'motionName'
                                    }
                                  },
                                  name: 'motionName',
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
                                              items: [
                                                {
                                                  title: {
                                                    label: {
                                                      type: 'i18n',
                                                      'en-US': 'appear',
                                                      'zh-CN': 'appear'
                                                    }
                                                  },
                                                  name: 'appear',
                                                  setter: 'StringSetter'
                                                },
                                                {
                                                  title: {
                                                    label: {
                                                      type: 'i18n',
                                                      'en-US': 'enter',
                                                      'zh-CN': 'enter'
                                                    }
                                                  },
                                                  name: 'enter',
                                                  setter: 'StringSetter'
                                                },
                                                {
                                                  title: {
                                                    label: {
                                                      type: 'i18n',
                                                      'en-US': 'leave',
                                                      'zh-CN': 'leave'
                                                    }
                                                  },
                                                  name: 'leave',
                                                  setter: 'StringSetter'
                                                },
                                                {
                                                  title: {
                                                    label: {
                                                      type: 'i18n',
                                                      'en-US': 'appearActive',
                                                      'zh-CN': 'appearActive'
                                                    }
                                                  },
                                                  name: 'appearActive',
                                                  setter: 'StringSetter'
                                                },
                                                {
                                                  title: {
                                                    label: {
                                                      type: 'i18n',
                                                      'en-US': 'enterActive',
                                                      'zh-CN': 'enterActive'
                                                    }
                                                  },
                                                  name: 'enterActive',
                                                  setter: 'StringSetter'
                                                },
                                                {
                                                  title: {
                                                    label: {
                                                      type: 'i18n',
                                                      'en-US': 'leaveActive',
                                                      'zh-CN': 'leaveActive'
                                                    }
                                                  },
                                                  name: 'leaveActive',
                                                  setter: 'StringSetter'
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
                                      'en-US': 'motionAppear',
                                      'zh-CN': 'motionAppear'
                                    }
                                  },
                                  name: 'motionAppear',
                                  setter: 'BoolSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'motionEnter',
                                      'zh-CN': 'motionEnter'
                                    }
                                  },
                                  name: 'motionEnter',
                                  setter: 'BoolSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'motionLeave',
                                      'zh-CN': 'motionLeave'
                                    }
                                  },
                                  name: 'motionLeave',
                                  setter: 'BoolSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'motionLeaveImmediately',
                                      'zh-CN': 'motionLeaveImmediately'
                                    }
                                  },
                                  name: 'motionLeaveImmediately',
                                  setter: 'BoolSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'motionDeadline',
                                      'zh-CN': 'motionDeadline'
                                    }
                                  },
                                  name: 'motionDeadline',
                                  setter: 'NumberSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'forceRender',
                                      'zh-CN': 'forceRender'
                                    }
                                  },
                                  name: 'forceRender',
                                  setter: 'BoolSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'removeOnLeave',
                                      'zh-CN': 'removeOnLeave'
                                    }
                                  },
                                  name: 'removeOnLeave',
                                  setter: 'BoolSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'leavedClassName',
                                      'zh-CN': 'leavedClassName'
                                    }
                                  },
                                  name: 'leavedClassName',
                                  setter: 'StringSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'eventProps',
                                      'zh-CN': 'eventProps'
                                    }
                                  },
                                  name: 'eventProps',
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
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'onAppearPrepare',
                                      'zh-CN': 'onAppearPrepare'
                                    }
                                  },
                                  name: 'onAppearPrepare',
                                  setter: 'FunctionSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'onEnterPrepare',
                                      'zh-CN': 'onEnterPrepare'
                                    }
                                  },
                                  name: 'onEnterPrepare',
                                  setter: 'FunctionSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'onLeavePrepare',
                                      'zh-CN': 'onLeavePrepare'
                                    }
                                  },
                                  name: 'onLeavePrepare',
                                  setter: 'FunctionSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'onAppearStart',
                                      'zh-CN': 'onAppearStart'
                                    }
                                  },
                                  name: 'onAppearStart',
                                  setter: 'FunctionSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'onEnterStart',
                                      'zh-CN': 'onEnterStart'
                                    }
                                  },
                                  name: 'onEnterStart',
                                  setter: 'FunctionSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'onLeaveStart',
                                      'zh-CN': 'onLeaveStart'
                                    }
                                  },
                                  name: 'onLeaveStart',
                                  setter: 'FunctionSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'onAppearActive',
                                      'zh-CN': 'onAppearActive'
                                    }
                                  },
                                  name: 'onAppearActive',
                                  setter: 'FunctionSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'onEnterActive',
                                      'zh-CN': 'onEnterActive'
                                    }
                                  },
                                  name: 'onEnterActive',
                                  setter: 'FunctionSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'onLeaveActive',
                                      'zh-CN': 'onLeaveActive'
                                    }
                                  },
                                  name: 'onLeaveActive',
                                  setter: 'FunctionSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'onAppearEnd',
                                      'zh-CN': 'onAppearEnd'
                                    }
                                  },
                                  name: 'onAppearEnd',
                                  setter: 'FunctionSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'onEnterEnd',
                                      'zh-CN': 'onEnterEnd'
                                    }
                                  },
                                  name: 'onEnterEnd',
                                  setter: 'FunctionSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'onLeaveEnd',
                                      'zh-CN': 'onLeaveEnd'
                                    }
                                  },
                                  name: 'onLeaveEnd',
                                  setter: 'FunctionSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'onVisibleChanged',
                                      'zh-CN': 'onVisibleChanged'
                                    }
                                  },
                                  name: 'onVisibleChanged',
                                  setter: 'FunctionSetter'
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'internalRef',
                                      'zh-CN': 'internalRef'
                                    }
                                  },
                                  name: 'internalRef',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
                                        'FunctionSetter',
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
                                },
                                {
                                  title: {
                                    label: {
                                      type: 'i18n',
                                      'en-US': 'children',
                                      'zh-CN': 'children'
                                    }
                                  },
                                  name: 'children',
                                  setter: 'FunctionSetter'
                                }
                              ]
                            }
                          }
                        }
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
            'en-US': 'centered',
            'zh-CN': 'centered'
          }
        },
        name: 'centered',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultActiveKey',
            'zh-CN': 'defaultActiveKey'
          }
        },
        name: 'defaultActiveKey',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'destroyInactiveTabPane',
            'zh-CN': 'destroyInactiveTabPane'
          }
        },
        name: 'destroyInactiveTabPane',
        setter: 'BoolSetter'
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
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'hideAdd',
            'zh-CN': 'hideAdd'
          }
        },
        name: 'hideAdd',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'indicatorSize',
            'zh-CN': 'indicatorSize'
          }
        },
        name: 'indicatorSize',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['NumberSetter', 'FunctionSetter']
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
              componentName: 'ObjectSetter',
              condition: () => false,
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'key',
                          'zh-CN': 'key'
                        }
                      },
                      name: 'key',
                      setter: 'StringSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'label',
                          'zh-CN': 'label'
                        }
                      },
                      name: 'label',
                      setter: 'SlotSetter'
                    }
                  ]
                }
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'locale',
            'zh-CN': 'locale'
          }
        },
        name: 'locale',
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
                      'en-US': 'dropdownAriaLabel',
                      'zh-CN': 'dropdownAriaLabel'
                    }
                  },
                  name: 'dropdownAriaLabel',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'removeAriaLabel',
                      'zh-CN': 'removeAriaLabel'
                    }
                  },
                  name: 'removeAriaLabel',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'addAriaLabel',
                      'zh-CN': 'addAriaLabel'
                    }
                  },
                  name: 'addAriaLabel',
                  setter: 'StringSetter'
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
            'en-US': 'moreIcon',
            'zh-CN': 'moreIcon'
          }
        },
        name: 'moreIcon',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'moreTransitionName',
            'zh-CN': 'moreTransitionName'
          }
        },
        name: 'moreTransitionName',
        setter: 'StringSetter'
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onEdit',
            'zh-CN': 'onEdit'
          }
        },
        name: 'onEdit',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onTabClick',
            'zh-CN': 'onTabClick'
          }
        },
        name: 'onTabClick',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onTabScroll',
            'zh-CN': 'onTabScroll'
          }
        },
        name: 'onTabScroll',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'popupClassName',
            'zh-CN': 'popupClassName'
          }
        },
        name: 'popupClassName',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'renderTabBar',
            'zh-CN': 'renderTabBar'
          }
        },
        name: 'renderTabBar',
        setter: 'FunctionSetter'
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
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tabBarExtraContent',
            'zh-CN': 'tabBarExtraContent'
          }
        },
        name: 'tabBarExtraContent',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'StringSetter',
              'NumberSetter',
              'BoolSetter',
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tabBarGutter',
            'zh-CN': 'tabBarGutter'
          }
        },
        name: 'tabBarGutter',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tabBarStyle',
            'zh-CN': 'tabBarStyle'
          }
        },
        name: 'tabBarStyle',
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tabPosition',
            'zh-CN': 'tabPosition'
          }
        },
        name: 'tabPosition',
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
                label: 'line',
                value: 'line'
              },
              {
                label: 'card',
                value: 'card'
              },
              {
                label: 'editable-card',
                value: 'editable-card'
              }
            ],
            options: [
              {
                label: 'line',
                value: 'line'
              },
              {
                label: 'card',
                value: 'card'
              },
              {
                label: 'editable-card',
                value: 'editable-card'
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
    title: '标签页',
    screenshot: '',
    schema: {
      componentName: 'Tabs',
      props: {}
    }
  }
];

export default {
  ...TabsMeta,
  snippets
};
