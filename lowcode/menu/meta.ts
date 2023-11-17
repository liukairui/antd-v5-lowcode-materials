import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const MenuMeta: IPublicTypeComponentMetadata = {
  componentName: 'Menu',
  title: '导航菜单',
  group: '原子组件',
  category: '导航 Navigation',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Menu',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultOpenKeys',
            'zh-CN': 'defaultOpenKeys'
          }
        },
        name: 'defaultOpenKeys',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: 'StringSetter'
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultSelectedKeys',
            'zh-CN': 'defaultSelectedKeys'
          }
        },
        name: 'defaultSelectedKeys',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: 'StringSetter'
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'expandIcon',
            'zh-CN': 'expandIcon'
          }
        },
        name: 'expandIcon',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['SlotSetter', 'FunctionSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'forceSubMenuRender',
            'zh-CN': 'forceSubMenuRender'
          }
        },
        name: 'forceSubMenuRender',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'inlineCollapsed',
            'zh-CN': 'inlineCollapsed'
          }
        },
        name: 'inlineCollapsed',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'inlineIndent',
            'zh-CN': 'inlineIndent'
          }
        },
        name: 'inlineIndent',
        setter: 'NumberSetter'
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
                          'en-US': 'children',
                          'zh-CN': 'children'
                        }
                      },
                      name: 'children',
                      setter: {
                        componentName: 'VariableSetter'
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'danger',
                          'zh-CN': 'danger'
                        }
                      },
                      name: 'danger',
                      setter: 'BoolSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'disabled',
                          'zh-CN': 'disabled'
                        }
                      },
                      name: 'disabled',
                      setter: 'BoolSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'disabled',
                          'zh-CN': 'disabled'
                        }
                      },
                      name: 'disabled',
                      setter: 'BoolSetter'
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
                      setter: {
                        componentName: 'MixedSetter',
                        props: {
                          setters: ['StringSetter', 'SlotSetter']
                        }
                      }
                    },
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
                      setter: {
                        componentName: 'MixedSetter',
                        props: {
                          setters: ['StringSetter', 'SlotSetter']
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'onTitleClick',
                          'zh-CN': 'onTitleClick'
                        }
                      },
                      name: 'onTitleClick',
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
                          'en-US': 'popupOffset',
                          'zh-CN': 'popupOffset'
                        }
                      },
                      name: 'popupOffset',
                      setter: {
                        componentName: 'ArraySetter',
                        props: {
                          itemSetter: 'NumberSetter'
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'theme',
                          'zh-CN': 'theme'
                        }
                      },
                      name: 'theme',
                      setter: {
                        componentName: 'RadioGroupSetter',
                        condition: () => false,
                        props: {
                          dataSource: [
                            {
                              label: 'light',
                              value: 'light'
                            },
                            {
                              label: 'dark',
                              value: 'dark'
                            }
                          ],
                          options: [
                            {
                              label: 'light',
                              value: 'light'
                            },
                            {
                              label: 'dark',
                              value: 'dark'
                            }
                          ]
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'title',
                          'zh-CN': 'title'
                        }
                      },
                      name: 'title',
                      setter: 'StringSetter'
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
            'en-US': 'mode',
            'zh-CN': 'mode'
          }
        },
        name: 'mode',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'horizontal',
                value: 'horizontal'
              },
              {
                label: 'vertical',
                value: 'vertical'
              },
              {
                label: 'inline',
                value: 'inline'
              }
            ],
            options: [
              {
                label: 'horizontal',
                value: 'horizontal'
              },
              {
                label: 'vertical',
                value: 'vertical'
              },
              {
                label: 'inline',
                value: 'inline'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'multiple',
            'zh-CN': 'multiple'
          }
        },
        name: 'multiple',
        setter: 'BoolSetter'
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
            'en-US': 'onDeselect',
            'zh-CN': 'onDeselect'
          }
        },
        name: 'onDeselect',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onOpenChange',
            'zh-CN': 'onOpenChange'
          }
        },
        name: 'onOpenChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onSelect',
            'zh-CN': 'onSelect'
          }
        },
        name: 'onSelect',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'openKeys',
            'zh-CN': 'openKeys'
          }
        },
        name: 'openKeys',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: 'StringSetter'
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'overflowedIndicator',
            'zh-CN': 'overflowedIndicator'
          }
        },
        name: 'overflowedIndicator',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'SlotSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'selectable',
            'zh-CN': 'selectable'
          }
        },
        name: 'selectable',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'selectedKeys',
            'zh-CN': 'selectedKeys'
          }
        },
        name: 'selectedKeys',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: 'StringSetter'
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'subMenuCloseDelay',
            'zh-CN': 'subMenuCloseDelay'
          }
        },
        name: 'subMenuCloseDelay',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'subMenuOpenDelay',
            'zh-CN': 'subMenuOpenDelay'
          }
        },
        name: 'subMenuOpenDelay',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'theme',
            'zh-CN': 'theme'
          }
        },
        name: 'theme',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'light',
                value: 'light'
              },
              {
                label: 'dark',
                value: 'dark'
              }
            ],
            options: [
              {
                label: 'light',
                value: 'light'
              },
              {
                label: 'dark',
                value: 'dark'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'triggerSubMenuAction',
            'zh-CN': 'triggerSubMenuAction'
          }
        },
        name: 'triggerSubMenuAction',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'click',
                value: 'click'
              },
              {
                label: 'hover',
                value: 'hover'
              }
            ],
            options: [
              {
                label: 'click',
                value: 'click'
              },
              {
                label: 'hover',
                value: 'hover'
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
    title: '导航菜单',
    screenshot: '',
    schema: {
      componentName: 'Menu',
      props: {}
    }
  }
];

export default {
  ...MenuMeta,
  snippets
};
