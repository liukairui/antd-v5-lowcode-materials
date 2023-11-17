import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TransferMeta: IPublicTypeComponentMetadata = {
  componentName: 'Transfer',
  title: '穿梭框',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Transfer',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dataSource',
            'zh-CN': 'dataSource'
          }
        },
        name: 'dataSource',
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
                          'en-US': 'description',
                          'zh-CN': 'description'
                        }
                      },
                      name: 'description',
                      setter: 'StringSetter'
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
                          'en-US': 'key',
                          'zh-CN': 'key'
                        }
                      },
                      name: 'key',
                      isRequired: true,
                      setter: 'StringSetter'
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
                      isRequired: true,
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
            'en-US': 'filterOption',
            'zh-CN': 'filterOption'
          }
        },
        name: 'filterOption',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'footer',
            'zh-CN': 'footer'
          }
        },
        name: 'footer',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['props', 'config']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'listStyle',
            'zh-CN': 'listStyle'
          }
        },
        name: 'listStyle',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StyleSetter', 'FunctionSetter']
          }
        },
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
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
                      'en-US': 'itemUnit',
                      'zh-CN': 'itemUnit'
                    }
                  },
                  name: 'itemUnit',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'itemsUnit',
                      'zh-CN': 'itemsUnit'
                    }
                  },
                  name: 'itemsUnit',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'searchPlaceholder',
                      'zh-CN': 'searchPlaceholder'
                    }
                  },
                  name: 'searchPlaceholder',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'notFoundContent',
                      'zh-CN': 'notFoundContent'
                    }
                  },
                  name: 'notFoundContent',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: ['StringSetter', 'SlotSetter']
                    }
                  }
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
            'en-US': 'onScroll',
            'zh-CN': 'onScroll'
          }
        },
        name: 'onScroll',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onSearch',
            'zh-CN': 'onSearch'
          }
        },
        name: 'onSearch',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onSelectChange',
            'zh-CN': 'onSelectChange'
          }
        },
        name: 'onSelectChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'oneWay',
            'zh-CN': 'oneWay'
          }
        },
        name: 'oneWay',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'operationStyle',
            'zh-CN': 'operationStyle'
          }
        },
        name: 'operationStyle',
        setter: 'StyleSetter',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'operations',
            'zh-CN': 'operations'
          }
        },
        name: 'operations',
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
            'en-US': 'pagination',
            'zh-CN': 'pagination'
          }
        },
        name: 'pagination',
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
                            'en-US': 'pageSize',
                            'zh-CN': 'pageSize'
                          }
                        },
                        name: 'pageSize',
                        setter: 'NumberSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'simple',
                            'zh-CN': 'simple'
                          }
                        },
                        name: 'simple',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'showSizeChanger',
                            'zh-CN': 'showSizeChanger'
                          }
                        },
                        name: 'showSizeChanger',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'showLessItems',
                            'zh-CN': 'showLessItems'
                          }
                        },
                        name: 'showLessItems',
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
            'en-US': 'render',
            'zh-CN': 'render'
          }
        },
        name: 'render',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['record']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'selectAllLabels',
            'zh-CN': 'selectAllLabels'
          }
        },
        name: 'selectAllLabels',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: {
              componentName: 'SlotSetter',
              initialValue: {
                type: 'JSSlot',
                params: ['info']
              }
            }
          }
        }
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
            'en-US': 'selectionsIcon',
            'zh-CN': 'selectionsIcon'
          }
        },
        name: 'selectionsIcon',
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
            'en-US': 'showSearch',
            'zh-CN': 'showSearch'
          }
        },
        name: 'showSearch',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showSelectAll',
            'zh-CN': 'showSelectAll'
          }
        },
        name: 'showSelectAll',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'status',
            'zh-CN': 'status'
          }
        },
        name: 'status',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'warning',
                value: 'warning'
              },
              {
                label: 'error',
                value: 'error'
              }
            ],
            options: [
              {
                label: 'warning',
                value: 'warning'
              },
              {
                label: 'error',
                value: 'error'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'targetKeys',
            'zh-CN': 'targetKeys'
          }
        },
        name: 'targetKeys',
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
            'en-US': 'titles',
            'zh-CN': 'titles'
          }
        },
        name: 'titles',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemsetter: {
              componentName: 'MixedSetter',
              props: {
                setters: ['StringSetter', 'SlotSetter']
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
    title: '穿梭框',
    screenshot: '',
    schema: {
      componentName: 'Transfer',
      props: {}
    }
  }
];

export default {
  ...TransferMeta,
  snippets
};
