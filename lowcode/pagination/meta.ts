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
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Pagination',
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
            'en-US': 'defaultPageSize',
            'zh-CN': 'defaultPageSize'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultPageSize',
            'zh-CN': 'defaultPageSize'
          }
        },
        name: 'defaultPageSize',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
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
            'en-US': 'hideOnSinglePage',
            'zh-CN': 'hideOnSinglePage'
          },
          tip: {
            type: 'i18n',
            'en-US': 'hideOnSinglePage',
            'zh-CN': 'hideOnSinglePage'
          }
        },
        name: 'hideOnSinglePage',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'itemRender',
            'zh-CN': 'itemRender'
          },
          tip: {
            type: 'i18n',
            'en-US': 'itemRender',
            'zh-CN': 'itemRender'
          }
        },
        name: 'itemRender',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'jumpNextIcon',
            'zh-CN': 'jumpNextIcon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'jumpNextIcon',
            'zh-CN': 'jumpNextIcon'
          }
        },
        name: 'jumpNextIcon',
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
            'en-US': 'jumpPrevIcon',
            'zh-CN': 'jumpPrevIcon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'jumpPrevIcon',
            'zh-CN': 'jumpPrevIcon'
          }
        },
        name: 'jumpPrevIcon',
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
            'en-US': 'locale',
            'zh-CN': 'locale'
          },
          tip: {
            type: 'i18n',
            'en-US': 'locale',
            'zh-CN': 'locale'
          }
        },
        name: 'locale',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'items_per_page',
                      'zh-CN': 'items_per_page'
                    }
                  },
                  name: 'items_per_page',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'jump_to',
                      'zh-CN': 'jump_to'
                    }
                  },
                  name: 'jump_to',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'jump_to_confirm',
                      'zh-CN': 'jump_to_confirm'
                    }
                  },
                  name: 'jump_to_confirm',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'page',
                      'zh-CN': 'page'
                    }
                  },
                  name: 'page',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'prev_page',
                      'zh-CN': 'prev_page'
                    }
                  },
                  name: 'prev_page',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'next_page',
                      'zh-CN': 'next_page'
                    }
                  },
                  name: 'next_page',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'prev_5',
                      'zh-CN': 'prev_5'
                    }
                  },
                  name: 'prev_5',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'next_5',
                      'zh-CN': 'next_5'
                    }
                  },
                  name: 'next_5',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'prev_3',
                      'zh-CN': 'prev_3'
                    }
                  },
                  name: 'prev_3',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'next_3',
                      'zh-CN': 'next_3'
                    }
                  },
                  name: 'next_3',
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'nextIcon',
            'zh-CN': 'nextIcon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'nextIcon',
            'zh-CN': 'nextIcon'
          }
        },
        name: 'nextIcon',
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
            'en-US': 'onShowSizeChange',
            'zh-CN': 'onShowSizeChange'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onShowSizeChange',
            'zh-CN': 'onShowSizeChange'
          }
        },
        name: 'onShowSizeChange',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pageSize',
            'zh-CN': 'pageSize'
          },
          tip: {
            type: 'i18n',
            'en-US': 'pageSize',
            'zh-CN': 'pageSize'
          }
        },
        name: 'pageSize',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pageSizeOptions',
            'zh-CN': 'pageSizeOptions'
          },
          tip: {
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
                props: {
                  itemSetter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
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
            'en-US': 'prevIcon',
            'zh-CN': 'prevIcon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'prevIcon',
            'zh-CN': 'prevIcon'
          }
        },
        name: 'prevIcon',
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
            'en-US': 'responsive',
            'zh-CN': 'responsive'
          },
          tip: {
            type: 'i18n',
            'en-US': 'responsive',
            'zh-CN': 'responsive'
          }
        },
        name: 'responsive',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'role',
            'zh-CN': 'role'
          },
          tip: {
            type: 'i18n',
            'en-US': 'role',
            'zh-CN': 'role'
          }
        },
        name: 'role',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'selectComponentClass',
            'zh-CN': 'selectComponentClass'
          },
          tip: {
            type: 'i18n',
            'en-US': 'selectComponentClass',
            'zh-CN': 'selectComponentClass'
          }
        },
        name: 'selectComponentClass',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
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
            'en-US': 'selectPrefixCls',
            'zh-CN': 'selectPrefixCls'
          },
          tip: {
            type: 'i18n',
            'en-US': 'selectPrefixCls',
            'zh-CN': 'selectPrefixCls'
          }
        },
        name: 'selectPrefixCls',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showLessItems',
            'zh-CN': 'showLessItems'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showLessItems',
            'zh-CN': 'showLessItems'
          }
        },
        name: 'showLessItems',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showPrevNextJumpers',
            'zh-CN': 'showPrevNextJumpers'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showPrevNextJumpers',
            'zh-CN': 'showPrevNextJumpers'
          }
        },
        name: 'showPrevNextJumpers',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showQuickJumper',
            'zh-CN': 'showQuickJumper'
          },
          tip: {
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
                            'en-US': 'goButton',
                            'zh-CN': 'goButton'
                          }
                        },
                        name: 'goButton',
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
            'en-US': 'showSizeChanger',
            'zh-CN': 'showSizeChanger'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showSizeChanger',
            'zh-CN': 'showSizeChanger'
          }
        },
        name: 'showSizeChanger',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showTitle',
            'zh-CN': 'showTitle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showTitle',
            'zh-CN': 'showTitle'
          }
        },
        name: 'showTitle',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showTotal',
            'zh-CN': 'showTotal'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showTotal',
            'zh-CN': 'showTotal'
          }
        },
        name: 'showTotal',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'simple',
            'zh-CN': 'simple'
          },
          tip: {
            type: 'i18n',
            'en-US': 'simple',
            'zh-CN': 'simple'
          }
        },
        name: 'simple',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'size',
            'zh-CN': 'size'
          },
          tip: {
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
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'total',
            'zh-CN': 'total'
          },
          tip: {
            type: 'i18n',
            'en-US': 'total',
            'zh-CN': 'total'
          }
        },
        name: 'total',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'totalBoundaryShowSizeChanger',
            'zh-CN': 'totalBoundaryShowSizeChanger'
          },
          tip: {
            type: 'i18n',
            'en-US': 'totalBoundaryShowSizeChanger',
            'zh-CN': 'totalBoundaryShowSizeChanger'
          }
        },
        name: 'totalBoundaryShowSizeChanger',
        setter: {
          componentName: 'NumberSetter',
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
