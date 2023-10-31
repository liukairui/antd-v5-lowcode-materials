import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TreeMeta: IPublicTypeComponentMetadata = {
  componentName: 'Tree',
  title: '树形控件',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Tree',
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
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'allowDrop',
            'zh-CN': 'allowDrop'
          }
        },
        name: 'allowDrop',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoExpandParent',
            'zh-CN': 'autoExpandParent'
          }
        },
        name: 'autoExpandParent',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'blockNode',
            'zh-CN': 'blockNode'
          }
        },
        name: 'blockNode',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'checkStrictly',
            'zh-CN': 'checkStrictly'
          }
        },
        name: 'checkStrictly',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'checkable',
            'zh-CN': 'checkable'
          }
        },
        name: 'checkable',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
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
                condition: () => false,
                props: {
                  itemSetter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: ['StringSetter', 'NumberSetter']
                    }
                  }
                }
              },
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
                            'en-US': 'checked',
                            'zh-CN': 'checked'
                          }
                        },
                        name: 'checked',
                        setter: {
                          componentName: 'ArraySetter',
                          condition: () => false,
                          props: {
                            itemSetter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'NumberSetter']
                              }
                            }
                          }
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
                          condition: () => false,
                          props: {
                            itemSetter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'NumberSetter']
                              }
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
            'en-US': 'defaultCheckedKeys',
            'zh-CN': 'defaultCheckedKeys'
          }
        },
        name: 'defaultCheckedKeys',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: {
              componentName: 'MixedSetter',
              props: {
                setters: ['StringSetter', 'NumberSetter']
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultExpandAll',
            'zh-CN': 'defaultExpandAll'
          }
        },
        name: 'defaultExpandAll',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultExpandParent',
            'zh-CN': 'defaultExpandParent'
          }
        },
        name: 'defaultExpandParent',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultExpandedKeys',
            'zh-CN': 'defaultExpandedKeys'
          }
        },
        name: 'defaultExpandedKeys',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: {
              componentName: 'MixedSetter',
              props: {
                setters: ['StringSetter', 'NumberSetter']
              }
            }
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
            itemSetter: {
              componentName: 'MixedSetter',
              props: {
                setters: ['StringSetter', 'NumberSetter']
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
            'en-US': 'draggable',
            'zh-CN': 'draggable'
          }
        },
        name: 'draggable',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'BoolSetter',
              'FunctionSetter',
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
                            'en-US': 'icon',
                            'zh-CN': 'icon'
                          }
                        },
                        name: 'icon',
                        setter: 'SlotSetter'
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
                        setter: 'FunctionSetter'
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
            'en-US': 'dropIndicatorRender',
            'zh-CN': 'dropIndicatorRender'
          }
        },
        name: 'dropIndicatorRender',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
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
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'expandedKeys',
            'zh-CN': 'expandedKeys'
          }
        },
        name: 'expandedKeys',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: {
              componentName: 'MixedSetter',
              props: {
                setters: ['StringSetter', 'NumberSetter']
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fieldNames',
            'zh-CN': 'fieldNames'
          }
        },
        name: 'fieldNames',
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
                      'en-US': 'title',
                      'zh-CN': 'title'
                    }
                  },
                  name: 'title',
                  setter: 'StringSetter'
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
                      'en-US': 'children',
                      'zh-CN': 'children'
                    }
                  },
                  name: 'children',
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
            'en-US': 'filterAntTreeNode',
            'zh-CN': 'filterAntTreeNode'
          }
        },
        name: 'filterAntTreeNode',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'filterTreeNode',
            'zh-CN': 'filterTreeNode'
          }
        },
        name: 'filterTreeNode',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'focusable',
            'zh-CN': 'focusable'
          }
        },
        name: 'focusable',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'height',
            'zh-CN': 'height'
          }
        },
        name: 'height',
        setter: 'NumberSetter'
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
              },
              'FunctionSetter',
              'FunctionSetter'
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
          }
        },
        name: 'itemHeight',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loadData',
            'zh-CN': 'loadData'
          }
        },
        name: 'loadData',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loadedKeys',
            'zh-CN': 'loadedKeys'
          }
        },
        name: 'loadedKeys',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: {
              componentName: 'MixedSetter',
              props: {
                setters: ['StringSetter', 'NumberSetter']
              }
            }
          }
        }
      },
      {
        title: {
          label: {
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
          }
        },
        name: 'multiple',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onActiveChange',
            'zh-CN': 'onActiveChange'
          }
        },
        name: 'onActiveChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onBlur',
            'zh-CN': 'onBlur'
          }
        },
        name: 'onBlur',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onContextMenu',
            'zh-CN': 'onContextMenu'
          }
        },
        name: 'onContextMenu',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onFocus',
            'zh-CN': 'onFocus'
          }
        },
        name: 'onFocus',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onKeyDown',
            'zh-CN': 'onKeyDown'
          }
        },
        name: 'onKeyDown',
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
            'en-US': 'rootStyle',
            'zh-CN': 'rootStyle'
          }
        },
        name: 'rootStyle',
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
            itemSetter: {
              componentName: 'MixedSetter',
              props: {
                setters: ['StringSetter', 'NumberSetter']
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showIcon',
            'zh-CN': 'showIcon'
          }
        },
        name: 'showIcon',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
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
                            'en-US': 'showLeafIcon',
                            'zh-CN': 'showLeafIcon'
                          }
                        },
                        name: 'showLeafIcon',
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
                              },
                              'FunctionSetter'
                            ]
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
            'en-US': 'switcherIcon',
            'zh-CN': 'switcherIcon'
          }
        },
        name: 'switcherIcon',
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
              },
              'FunctionSetter',
              'FunctionSetter'
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'titleRender',
            'zh-CN': 'titleRender'
          }
        },
        name: 'titleRender',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'treeData',
            'zh-CN': 'treeData'
          }
        },
        name: 'treeData',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: {
              componentName: 'MixedSetter',
              props: {
                setters: [
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
                                'en-US': 'checkable',
                                'zh-CN': 'checkable'
                              }
                            },
                            name: 'checkable',
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
                                'en-US': 'disableCheckbox',
                                'zh-CN': 'disableCheckbox'
                              }
                            },
                            name: 'disableCheckbox',
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
                                  },
                                  'FunctionSetter'
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
                            setter: 'BoolSetter'
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
                                'en-US': 'switcherIcon',
                                'zh-CN': 'switcherIcon'
                              }
                            },
                            name: 'switcherIcon',
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
                                  },
                                  'FunctionSetter'
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
                            setter: 'StringSetter'
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
                          }
                        ]
                      }
                    }
                  },
                  'FunctionSetter'
                ]
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'virtual',
            'zh-CN': 'virtual'
          }
        },
        name: 'virtual',
        setter: 'BoolSetter'
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
    title: '树形控件',
    screenshot: '',
    schema: {
      componentName: 'Tree',
      props: {}
    }
  }
];

export default {
  ...TreeMeta,
  snippets
};
