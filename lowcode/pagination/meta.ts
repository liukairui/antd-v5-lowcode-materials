import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PaginationMeta: IPublicTypeComponentMetadata = {
  componentName: 'Pagination',
  title: '分页',
  group: '原子组件',
  category: '导航 Navigation',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Pagination',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'current',
            'zh-CN': 'current'
          }
        },
        name: 'current',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultCurrent',
            'zh-CN': 'defaultCurrent'
          }
        },
        name: 'defaultCurrent',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultPageSize',
            'zh-CN': 'defaultPageSize'
          }
        },
        name: 'defaultPageSize',
        setter: 'NumberSetter'
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
            'en-US': 'hideOnSinglePage',
            'zh-CN': 'hideOnSinglePage'
          }
        },
        name: 'hideOnSinglePage',
        setter: 'BoolSetter'
      },
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
            'en-US': 'onShowSizeChange',
            'zh-CN': 'onShowSizeChange'
          }
        },
        name: 'onShowSizeChange',
        setter: 'FunctionSetter'
      },
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
            'en-US': 'pageSizeOptions',
            'zh-CN': 'pageSizeOptions'
          }
        },
        name: 'pageSizeOptions',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'ArraySetter',
                condition: () => false,
                props: {
                  itemSetter: 'StringSetter'
                }
              },
              {
                componentName: 'ArraySetter',
                condition: () => false,
                props: {
                  itemSetter: 'NumberSetter'
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
            'en-US': 'responsive',
            'zh-CN': 'responsive'
          }
        },
        name: 'responsive',
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showQuickJumper',
            'zh-CN': 'showQuickJumper'
          }
        },
        name: 'showQuickJumper',
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
                            'en-US': 'goButton',
                            'zh-CN': 'goButton'
                          }
                        },
                        name: 'goButton',
                        setter: 'SlotSetter'
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
            'en-US': 'showTitle',
            'zh-CN': 'showTitle'
          }
        },
        name: 'showTitle',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showTotal',
            'zh-CN': 'showTotal'
          }
        },
        name: 'showTotal',
        setter: 'FunctionSetter'
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
            'en-US': 'size',
            'zh-CN': 'size'
          }
        },
        name: 'size',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'default',
                value: 'default'
              },
              {
                label: 'small',
                value: 'small'
              }
            ],
            options: [
              {
                label: 'default',
                value: 'default'
              },
              {
                label: 'small',
                value: 'small'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'total',
            'zh-CN': 'total'
          }
        },
        name: 'total',
        setter: 'NumberSetter'
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
    title: '分页',
    screenshot: '',
    schema: {
      componentName: 'Pagination',
      props: {}
    }
  }
];

export default {
  ...PaginationMeta,
  snippets
};
