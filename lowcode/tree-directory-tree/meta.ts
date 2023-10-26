import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TreeDirectoryTreeMeta: IPublicTypeComponentMetadata = {
  componentName: 'TreeDirectoryTree',
  title: '目录树',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'TreeDirectoryTree',
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
            'en-US': 'activeKey',
            'zh-CN': 'activeKey'
          },
          tip: {
            type: 'i18n',
            'en-US': 'activeKey',
            'zh-CN': 'activeKey'
          }
        },
        name: 'activeKey',
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
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'allowDrop',
            'zh-CN': 'allowDrop'
          },
          tip: {
            type: 'i18n',
            'en-US': 'allowDrop',
            'zh-CN': 'allowDrop'
          }
        },
        name: 'allowDrop',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoExpandParent',
            'zh-CN': 'autoExpandParent'
          },
          tip: {
            type: 'i18n',
            'en-US': 'autoExpandParent',
            'zh-CN': 'autoExpandParent'
          }
        },
        name: 'autoExpandParent',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'blockNode',
            'zh-CN': 'blockNode'
          },
          tip: {
            type: 'i18n',
            'en-US': 'blockNode',
            'zh-CN': 'blockNode'
          }
        },
        name: 'blockNode',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'checkStrictly',
            'zh-CN': 'checkStrictly'
          },
          tip: {
            type: 'i18n',
            'en-US': 'checkStrictly',
            'zh-CN': 'checkStrictly'
          }
        },
        name: 'checkStrictly',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'checkable',
            'zh-CN': 'checkable'
          },
          tip: {
            type: 'i18n',
            'en-US': 'checkable',
            'zh-CN': 'checkable'
          }
        },
        name: 'checkable',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'checkedKeys',
            'zh-CN': 'checkedKeys'
          },
          tip: {
            type: 'i18n',
            'en-US': 'checkedKeys',
            'zh-CN': 'checkedKeys'
          }
        },
        name: 'checkedKeys',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
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
                        }
                      ]
                    }
                  }
                },
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
                            'en-US': 'checked',
                            'zh-CN': 'checked'
                          }
                        },
                        name: 'checked',
                        setter: {
                          componentName: 'ArraySetter',
                          props: {
                            itemSetter: {
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
                                  }
                                ]
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
                            'en-US': 'halfChecked',
                            'zh-CN': 'halfChecked'
                          }
                        },
                        name: 'halfChecked',
                        setter: {
                          componentName: 'ArraySetter',
                          props: {
                            itemSetter: {
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
                                  }
                                ]
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
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultCheckedKeys',
            'zh-CN': 'defaultCheckedKeys'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultCheckedKeys',
            'zh-CN': 'defaultCheckedKeys'
          }
        },
        name: 'defaultCheckedKeys',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
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
                  }
                ]
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
            'en-US': 'defaultExpandAll',
            'zh-CN': 'defaultExpandAll'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultExpandAll',
            'zh-CN': 'defaultExpandAll'
          }
        },
        name: 'defaultExpandAll',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultExpandParent',
            'zh-CN': 'defaultExpandParent'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultExpandParent',
            'zh-CN': 'defaultExpandParent'
          }
        },
        name: 'defaultExpandParent',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultExpandedKeys',
            'zh-CN': 'defaultExpandedKeys'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultExpandedKeys',
            'zh-CN': 'defaultExpandedKeys'
          }
        },
        name: 'defaultExpandedKeys',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
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
                  }
                ]
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
            'en-US': 'defaultSelectedKeys',
            'zh-CN': 'defaultSelectedKeys'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultSelectedKeys',
            'zh-CN': 'defaultSelectedKeys'
          }
        },
        name: 'defaultSelectedKeys',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
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
                  }
                ]
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
            'en-US': 'draggable',
            'zh-CN': 'draggable'
          },
          tip: {
            type: 'i18n',
            'en-US': 'draggable',
            'zh-CN': 'draggable'
          }
        },
        name: 'draggable',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'BoolSetter',
                initialValue: undefined
              },
              {
                componentName: 'FunctionSetter'
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
                            'en-US': 'icon',
                            'zh-CN': 'icon'
                          }
                        },
                        name: 'icon',
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
                            'en-US': 'nodeDraggable',
                            'zh-CN': 'nodeDraggable'
                          }
                        },
                        name: 'nodeDraggable',
                        setter: {
                          componentName: 'FunctionSetter'
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
            'en-US': 'dropIndicatorRender',
            'zh-CN': 'dropIndicatorRender'
          },
          tip: {
            type: 'i18n',
            'en-US': 'dropIndicatorRender',
            'zh-CN': 'dropIndicatorRender'
          }
        },
        name: 'dropIndicatorRender',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'expandAction',
            'zh-CN': 'expandAction'
          },
          tip: {
            type: 'i18n',
            'en-US': 'expandAction',
            'zh-CN': 'expandAction'
          }
        },
        name: 'expandAction',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'false',
                value: false
              },
              {
                label: 'click',
                value: 'click'
              },
              {
                label: 'doubleClick',
                value: 'doubleClick'
              }
            ],
            options: [
              {
                label: 'false',
                value: false
              },
              {
                label: 'click',
                value: 'click'
              },
              {
                label: 'doubleClick',
                value: 'doubleClick'
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
            'en-US': 'expandedKeys',
            'zh-CN': 'expandedKeys'
          },
          tip: {
            type: 'i18n',
            'en-US': 'expandedKeys',
            'zh-CN': 'expandedKeys'
          }
        },
        name: 'expandedKeys',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
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
                  }
                ]
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
            'en-US': 'fieldNames',
            'zh-CN': 'fieldNames'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fieldNames',
            'zh-CN': 'fieldNames'
          }
        },
        name: 'fieldNames',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'title',
                      'zh-CN': 'title'
                    }
                  },
                  name: 'title',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': '_title',
                      'zh-CN': '_title'
                    }
                  },
                  name: '_title',
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
                    },
                    initialValue: undefined
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
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
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
            'en-US': 'filterAntTreeNode',
            'zh-CN': 'filterAntTreeNode'
          },
          tip: {
            type: 'i18n',
            'en-US': 'filterAntTreeNode',
            'zh-CN': 'filterAntTreeNode'
          }
        },
        name: 'filterAntTreeNode',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'filterTreeNode',
            'zh-CN': 'filterTreeNode'
          },
          tip: {
            type: 'i18n',
            'en-US': 'filterTreeNode',
            'zh-CN': 'filterTreeNode'
          }
        },
        name: 'filterTreeNode',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'focusable',
            'zh-CN': 'focusable'
          },
          tip: {
            type: 'i18n',
            'en-US': 'focusable',
            'zh-CN': 'focusable'
          }
        },
        name: 'focusable',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'height',
            'zh-CN': 'height'
          },
          tip: {
            type: 'i18n',
            'en-US': 'height',
            'zh-CN': 'height'
          }
        },
        name: 'height',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'icon',
            'zh-CN': 'icon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'icon',
            'zh-CN': 'icon'
          }
        },
        name: 'icon',
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
              },
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
            'en-US': 'itemHeight',
            'zh-CN': 'itemHeight'
          },
          tip: {
            type: 'i18n',
            'en-US': 'itemHeight',
            'zh-CN': 'itemHeight'
          }
        },
        name: 'itemHeight',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loadData',
            'zh-CN': 'loadData'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loadData',
            'zh-CN': 'loadData'
          }
        },
        name: 'loadData',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loadedKeys',
            'zh-CN': 'loadedKeys'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loadedKeys',
            'zh-CN': 'loadedKeys'
          }
        },
        name: 'loadedKeys',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
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
                  }
                ]
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
            'en-US': 'motion',
            'zh-CN': 'motion'
          },
          tip: {
            type: 'i18n',
            'en-US': 'motion',
            'zh-CN': 'motion'
          }
        },
        name: 'motion',
        setter: {
          componentName: 'MixedSetter',
          props: {}
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'multiple',
            'zh-CN': 'multiple'
          },
          tip: {
            type: 'i18n',
            'en-US': 'multiple',
            'zh-CN': 'multiple'
          }
        },
        name: 'multiple',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onActiveChange',
            'zh-CN': 'onActiveChange'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onActiveChange',
            'zh-CN': 'onActiveChange'
          }
        },
        name: 'onActiveChange',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onBlur',
            'zh-CN': 'onBlur'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onBlur',
            'zh-CN': 'onBlur'
          }
        },
        name: 'onBlur',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onContextMenu',
            'zh-CN': 'onContextMenu'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onContextMenu',
            'zh-CN': 'onContextMenu'
          }
        },
        name: 'onContextMenu',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onFocus',
            'zh-CN': 'onFocus'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onFocus',
            'zh-CN': 'onFocus'
          }
        },
        name: 'onFocus',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onKeyDown',
            'zh-CN': 'onKeyDown'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onKeyDown',
            'zh-CN': 'onKeyDown'
          }
        },
        name: 'onKeyDown',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onScroll',
            'zh-CN': 'onScroll'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onScroll',
            'zh-CN': 'onScroll'
          }
        },
        name: 'onScroll',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rootStyle',
            'zh-CN': 'rootStyle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'rootStyle',
            'zh-CN': 'rootStyle'
          }
        },
        name: 'rootStyle',
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
            'en-US': 'selectable',
            'zh-CN': 'selectable'
          },
          tip: {
            type: 'i18n',
            'en-US': 'selectable',
            'zh-CN': 'selectable'
          }
        },
        name: 'selectable',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'selectedKeys',
            'zh-CN': 'selectedKeys'
          },
          tip: {
            type: 'i18n',
            'en-US': 'selectedKeys',
            'zh-CN': 'selectedKeys'
          }
        },
        name: 'selectedKeys',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
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
                  }
                ]
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
            'en-US': 'showIcon',
            'zh-CN': 'showIcon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showIcon',
            'zh-CN': 'showIcon'
          }
        },
        name: 'showIcon',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showLine',
            'zh-CN': 'showLine'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showLine',
            'zh-CN': 'showLine'
          }
        },
        name: 'showLine',
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
                            'en-US': 'showLeafIcon',
                            'zh-CN': 'showLeafIcon'
                          }
                        },
                        name: 'showLeafIcon',
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
                              },
                              {
                                componentName: 'FunctionSetter'
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
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'switcherIcon',
            'zh-CN': 'switcherIcon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'switcherIcon',
            'zh-CN': 'switcherIcon'
          }
        },
        name: 'switcherIcon',
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
              },
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
            'en-US': 'tabIndex',
            'zh-CN': 'tabIndex'
          },
          tip: {
            type: 'i18n',
            'en-US': 'tabIndex',
            'zh-CN': 'tabIndex'
          }
        },
        name: 'tabIndex',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'titleRender',
            'zh-CN': 'titleRender'
          },
          tip: {
            type: 'i18n',
            'en-US': 'titleRender',
            'zh-CN': 'titleRender'
          }
        },
        name: 'titleRender',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'treeData',
            'zh-CN': 'treeData'
          },
          tip: {
            type: 'i18n',
            'en-US': 'treeData',
            'zh-CN': 'treeData'
          }
        },
        name: 'treeData',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'MixedSetter',
              props: {
                setters: [
                  {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'checkable',
                                'zh-CN': 'checkable'
                              }
                            },
                            name: 'checkable',
                            setter: {
                              componentName: 'BoolSetter',
                              initialValue: undefined
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
                            setter: {
                              componentName: 'BoolSetter',
                              initialValue: undefined
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'disableCheckbox',
                                'zh-CN': 'disableCheckbox'
                              }
                            },
                            name: 'disableCheckbox',
                            setter: {
                              componentName: 'BoolSetter',
                              initialValue: undefined
                            }
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
                                'en-US': 'isLeaf',
                                'zh-CN': 'isLeaf'
                              }
                            },
                            name: 'isLeaf',
                            setter: {
                              componentName: 'BoolSetter',
                              initialValue: undefined
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
                            setter: {
                              componentName: 'BoolSetter',
                              initialValue: undefined
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'switcherIcon',
                                'zh-CN': 'switcherIcon'
                              }
                            },
                            name: 'switcherIcon',
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
                  },
                  {
                    componentName: 'FunctionSetter'
                  }
                ]
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
            'en-US': 'virtual',
            'zh-CN': 'virtual'
          },
          tip: {
            type: 'i18n',
            'en-US': 'virtual',
            'zh-CN': 'virtual'
          }
        },
        name: 'virtual',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      }
    ],
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onClick'
        },
        {
          name: 'onExpand'
        },
        {
          name: 'onSelect'
        },
        {
          name: 'onMouseEnter'
        },
        {
          name: 'onMouseLeave'
        },
        {
          name: 'onDoubleClick'
        },
        {
          name: 'onCheck'
        },
        {
          name: 'onLoad'
        },
        {
          name: 'onRightClick'
        },
        {
          name: 'onDragStart'
        },
        {
          name: 'onDragEnter'
        },
        {
          name: 'onDragOver'
        },
        {
          name: 'onDragLeave'
        },
        {
          name: 'onDragEnd'
        },
        {
          name: 'onDrop'
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
    title: '目录树',
    screenshot: '',
    schema: {
      componentName: 'TreeDirectoryTree',
      props: {}
    }
  }
];

export default {
  ...TreeDirectoryTreeMeta,
  snippets
};
