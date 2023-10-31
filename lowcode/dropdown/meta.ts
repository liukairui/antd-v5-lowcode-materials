import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import MenuMeta from '../menu/meta';

const DropdownMeta: IPublicTypeComponentMetadata = {
  componentName: 'Dropdown',
  title: '下拉菜单',
  group: '原子组件',
  category: '导航 Navigation',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Dropdown',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
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
                            'en-US': 'pointAtCenter',
                            'zh-CN': 'pointAtCenter'
                          }
                        },
                        name: 'pointAtCenter',
                        setter: 'BoolSetter'
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
            'en-US': 'autoAdjustOverflow',
            'zh-CN': 'autoAdjustOverflow'
          }
        },
        name: 'autoAdjustOverflow',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoFocus',
            'zh-CN': 'autoFocus'
          }
        },
        name: 'autoFocus',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'destroyPopupOnHide',
            'zh-CN': 'destroyPopupOnHide'
          }
        },
        name: 'destroyPopupOnHide',
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
            'en-US': 'dropdownRender',
            'zh-CN': 'dropdownRender'
          }
        },
        name: 'dropdownRender',
        setter: 'FunctionSetter'
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
            'en-US': 'menu',
            'zh-CN': 'menu'
          }
        },
        name: 'menu',
        setter: {
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              items: MenuMeta.configure!['props']
            }
          }
        }
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
            'en-US': 'open',
            'zh-CN': 'open'
          }
        },
        name: 'open',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'overlayClassName',
            'zh-CN': 'overlayClassName'
          }
        },
        name: 'overlayClassName',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'overlayStyle',
            'zh-CN': 'overlayStyle'
          }
        },
        name: 'overlayStyle',
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
                label: 'topLeft',
                value: 'topLeft'
              },
              {
                label: 'topCenter',
                value: 'topCenter'
              },
              {
                label: 'topRight',
                value: 'topRight'
              },
              {
                label: 'bottom',
                value: 'bottom'
              },
              {
                label: 'bottomLeft',
                value: 'bottomLeft'
              },
              {
                label: 'bottomCenter',
                value: 'bottomCenter'
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
                label: 'topLeft',
                value: 'topLeft'
              },
              {
                label: 'topCenter',
                value: 'topCenter'
              },
              {
                label: 'topRight',
                value: 'topRight'
              },
              {
                label: 'bottom',
                value: 'bottom'
              },
              {
                label: 'bottomLeft',
                value: 'bottomLeft'
              },
              {
                label: 'bottomCenter',
                value: 'bottomCenter'
              },
              {
                label: 'bottomRight',
                value: 'bottomRight'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'trigger',
            'zh-CN': 'trigger'
          }
        },
        name: 'trigger',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: {
              componentName: 'RadioGroupSetter',
              props: {
                dataSource: [
                  {
                    label: 'click',
                    value: 'click'
                  },
                  {
                    label: 'hover',
                    value: 'hover'
                  },
                  {
                    label: 'contextMenu',
                    value: 'contextMenu'
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
                  },
                  {
                    label: 'contextMenu',
                    value: 'contextMenu'
                  }
                ]
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
    title: '下拉菜单',
    screenshot: '',
    schema: {
      componentName: 'Dropdown',
      props: {}
    }
  }
];

export default {
  ...DropdownMeta,
  snippets
};
