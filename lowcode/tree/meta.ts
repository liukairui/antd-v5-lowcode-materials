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
                  itemSetter: 'StringSetter'
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
                            itemSetter: 'StringSetter'
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
                            itemSetter: 'StringSetter'
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
            itemSetter: 'StringSetter'
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
            'en-US': 'expandedKeys',
            'zh-CN': 'expandedKeys'
          }
        },
        name: 'expandedKeys',
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
                      'en-US': 'children',
                      'zh-CN': 'children'
                    }
                  },
                  name: 'children',
                  setter: 'StringSetter'
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
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['props']
          }
        }
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
            itemSetter: 'StringSetter'
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
            'en-US': 'onCheck',
            'zh-CN': 'onCheck'
          }
        },
        name: 'onCheck',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onDragEnd',
            'zh-CN': 'onDragEnd'
          }
        },
        name: 'onDragEnd',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onDragEnter',
            'zh-CN': 'onDragEnter'
          }
        },
        name: 'onDragEnter',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onDragLeave',
            'zh-CN': 'onDragLeave'
          }
        },
        name: 'onDragLeave',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onDragOver',
            'zh-CN': 'onDragOver'
          }
        },
        name: 'onDragOver',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onDragStart',
            'zh-CN': 'onDragStart'
          }
        },
        name: 'onDragStart',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onDrop',
            'zh-CN': 'onDrop'
          }
        },
        name: 'onDrop',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onExpand',
            'zh-CN': 'onExpand'
          }
        },
        name: 'onExpand',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onLoad',
            'zh-CN': 'onLoad'
          }
        },
        name: 'onLoad',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onRightClick',
            'zh-CN': 'onRightClick'
          }
        },
        name: 'onRightClick',
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
            'en-US': 'rootStyle',
            'zh-CN': 'rootStyle'
          }
        },
        name: 'rootStyle',
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
                              'BoolSetter',
                              {
                                componentName: 'SlotSetter',
                                initialValue: {
                                  type: 'JSSlot',
                                  params: ['props']
                                }
                              }
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
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['props']
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
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['nodeData']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'treeData',
            'zh-CN': 'treeData'
          }
        },
        description: '@todo 拖拽的方式配置起来操作复杂，且暂不支持递归，故先使用变量配置',
        name: 'treeData'
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
      style: true
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
