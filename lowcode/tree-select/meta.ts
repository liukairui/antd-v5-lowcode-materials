import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TreeSelectMeta: IPublicTypeComponentMetadata = {
  componentName: 'TreeSelect',
  title: '树选择',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'TreeSelect',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'allowClear',
            'zh-CN': 'allowClear'
          }
        },
        name: 'allowClear',
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
                            'en-US': 'clearIcon',
                            'zh-CN': 'clearIcon'
                          }
                        },
                        name: 'clearIcon',
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
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoClearSearchValue',
            'zh-CN': 'autoClearSearchValue'
          }
        },
        name: 'autoClearSearchValue',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'bordered',
            'zh-CN': 'bordered'
          }
        },
        name: 'bordered',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultValue',
            'zh-CN': 'defaultValue'
          }
        },
        name: 'defaultValue',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'StringSetter',
              {
                componentName: 'ArraySetter',
                condition: () => false,
                props: {
                  itemSetter: 'StringSetter'
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
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['originNode', 'props']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dropdownStyle',
            'zh-CN': 'dropdownStyle'
          }
        },
        name: 'dropdownStyle',
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
                      'en-US': 'label',
                      'zh-CN': 'label'
                    }
                  },
                  name: 'label',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'value',
                      'zh-CN': 'value'
                    }
                  },
                  name: 'value',
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
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'FunctionSetter']
          }
        }
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
            'en-US': 'labelInValue',
            'zh-CN': 'labelInValue'
          }
        },
        name: 'labelInValue',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'listHeight',
            'zh-CN': 'listHeight'
          }
        },
        name: 'listHeight',
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
            'en-US': 'maxTagCount',
            'zh-CN': 'maxTagCount'
          }
        },
        name: 'maxTagCount',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'NumberSetter',
              {
                componentName: 'RadioGroupSetter',
                condition: () => false,
                props: {
                  dataSource: [
                    {
                      label: 'responsive',
                      value: 'responsive'
                    }
                  ],
                  options: [
                    {
                      label: 'responsive',
                      value: 'responsive'
                    }
                  ]
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
            'en-US': 'maxTagPlaceholder',
            'zh-CN': 'maxTagPlaceholder'
          }
        },
        name: 'maxTagPlaceholder',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['omittedValues']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxTagTextLength',
            'zh-CN': 'maxTagTextLength'
          }
        },
        name: 'maxTagTextLength',
        setter: 'NumberSetter'
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
            'en-US': 'onDropdownVisibleChange',
            'zh-CN': 'onDropdownVisibleChange'
          }
        },
        name: 'onDropdownVisibleChange',
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
            'en-US': 'onTreeExpand',
            'zh-CN': 'onTreeExpand'
          }
        },
        name: 'onTreeExpand',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': 'placeholder'
          }
        },
        name: 'placeholder',
        setter: 'StringSetter'
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
                label: 'topLeft',
                value: 'topLeft'
              },
              {
                label: 'topRight',
                value: 'topRight'
              },
              {
                label: 'bottomLeft',
                value: 'bottomLeft'
              },
              {
                label: 'bottomRight',
                value: 'bottomRight'
              }
            ],
            options: [
              {
                label: 'topLeft',
                value: 'topLeft'
              },
              {
                label: 'topRight',
                value: 'topRight'
              },
              {
                label: 'bottomLeft',
                value: 'bottomLeft'
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
            'en-US': 'popupMatchSelectWidth',
            'zh-CN': 'popupMatchSelectWidth'
          }
        },
        name: 'popupMatchSelectWidth',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'searchValue',
            'zh-CN': 'searchValue'
          }
        },
        name: 'searchValue',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showCheckedStrategy',
            'zh-CN': 'showCheckedStrategy'
          }
        },
        name: 'showCheckedStrategy',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'SHOW_PARENT',
                value: 'SHOW_PARENT'
              },
              {
                label: 'SHOW_CHILD',
                value: 'SHOW_CHILD'
              },
              {
                label: 'SHOW_ALL',
                value: 'SHOW_ALL'
              }
            ],
            options: [
              {
                label: 'SHOW_PARENT',
                value: 'SHOW_PARENT'
              },
              {
                label: 'SHOW_CHILD',
                value: 'SHOW_CHILD'
              },
              {
                label: 'SHOW_ALL',
                value: 'SHOW_ALL'
              }
            ]
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
            'en-US': 'suffixIcon',
            'zh-CN': 'suffixIcon'
          }
        },
        name: 'suffixIcon',
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
            'en-US': 'tagRender',
            'zh-CN': 'tagRender'
          }
        },
        name: 'tagRender',
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
            'en-US': 'treeCheckStrictly',
            'zh-CN': 'treeCheckStrictly'
          }
        },
        name: 'treeCheckStrictly',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'treeCheckable',
            'zh-CN': 'treeCheckable'
          }
        },
        name: 'treeCheckable',
        setter: 'BoolSetter'
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
            'en-US': 'treeDataSimpleMode',
            'zh-CN': 'treeDataSimpleMode'
          }
        },
        name: 'treeDataSimpleMode',
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
                            'en-US': 'id',
                            'zh-CN': 'id'
                          }
                        },
                        name: 'id',
                        setter: 'StringSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'pId',
                            'zh-CN': 'pId'
                          }
                        },
                        name: 'pId',
                        setter: 'StringSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'rootPId',
                            'zh-CN': 'rootPId'
                          }
                        },
                        name: 'rootPId',
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
            'en-US': 'treeDefaultExpandAll',
            'zh-CN': 'treeDefaultExpandAll'
          }
        },
        name: 'treeDefaultExpandAll',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'treeDefaultExpandedKeys',
            'zh-CN': 'treeDefaultExpandedKeys'
          }
        },
        name: 'treeDefaultExpandedKeys',
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
            'en-US': 'treeExpandAction',
            'zh-CN': 'treeExpandAction'
          }
        },
        name: 'treeExpandAction',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
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
            'en-US': 'treeExpandedKeys',
            'zh-CN': 'treeExpandedKeys'
          }
        },
        name: 'treeExpandedKeys',
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
            'en-US': 'treeIcon',
            'zh-CN': 'treeIcon'
          }
        },
        name: 'treeIcon',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'treeLine',
            'zh-CN': 'treeLine'
          }
        },
        name: 'treeLine',
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
            'en-US': 'treeLoadedKeys',
            'zh-CN': 'treeLoadedKeys'
          }
        },
        name: 'treeLoadedKeys',
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
            'en-US': 'treeNodeFilterProp',
            'zh-CN': 'treeNodeFilterProp'
          }
        },
        name: 'treeNodeFilterProp',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'treeNodeLabelProp',
            'zh-CN': 'treeNodeLabelProp'
          }
        },
        name: 'treeNodeLabelProp',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': 'value'
          }
        },
        name: 'value'
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
    title: '树选择',
    screenshot: '',
    schema: {
      componentName: 'TreeSelect',
      props: {}
    }
  }
];

export default {
  ...TreeSelectMeta,
  snippets
};
