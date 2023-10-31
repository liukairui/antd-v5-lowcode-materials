import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const BreadcrumbMeta: IPublicTypeComponentMetadata = {
  componentName: 'Breadcrumb',
  title: '面包屑',
  group: '原子组件',
  category: '导航 Navigation',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Breadcrumb',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'itemRender',
            'zh-CN': 'itemRender'
          }
        },
        name: 'itemRender',
        setter: 'FunctionSetter'
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
                          'en-US': 'className',
                          'zh-CN': 'className'
                        }
                      },
                      name: 'className',
                      setter: 'StringSetter'
                    },
                    /**
                     * @TODO DropdownProps
                     */
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'dropdownProps',
                          'zh-CN': 'dropdownProps'
                        }
                      },
                      name: 'dropdownProps',
                      setter: {
                        componentName: 'VariableSetter'
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'href',
                          'zh-CN': 'href'
                        }
                      },
                      name: 'href',
                      setter: 'StringSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'path',
                          'zh-CN': 'path'
                        }
                      },
                      name: 'path',
                      setter: 'StringSetter'
                    },
                    /**
                     * @TODO MenuProps
                     */
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
                        componentName: 'VariableSetter'
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
                          'en-US': 'title',
                          'zh-CN': 'title'
                        }
                      },
                      name: 'title',
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
            'en-US': 'params',
            'zh-CN': 'params'
          }
        },
        name: 'params',
        setter: {
          componentName: 'VariableSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'separator',
            'zh-CN': 'separator'
          }
        },
        name: 'separator',
        setter: 'SlotSetter'
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
    title: '面包屑',
    screenshot: '',
    schema: {
      componentName: 'Breadcrumb',
      props: {}
    }
  }
];

export default {
  ...BreadcrumbMeta,
  snippets
};
