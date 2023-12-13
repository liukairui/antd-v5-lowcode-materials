import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import SpinMeta from '../spin/meta';
import TooltipMeta from '../tooltip/meta';
import PaginationMeta from '../pagination/meta';

const TableMeta: IPublicTypeComponentMetadata = {
  componentName: 'Table',
  title: '表格',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Table',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
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
            'en-US': 'columns',
            'zh-CN': 'columns'
          }
        },
        name: 'columns',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              condition: () => false,
              initialValue: {
                title: '列标题',
                dataIndex: '列字段'
              },
              props: {
                config: {
                  items: [
                    {
                      title: '『 常用属性 』',
                      type: 'group',
                      display: 'block',
                      items: []
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'dataIndex',
                          'zh-CN': 'dataIndex'
                        }
                      },
                      name: 'dataIndex',
                      isRequired: true,
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
                          'en-US': 'title',
                          'zh-CN': 'title'
                        }
                      },
                      name: 'title',
                      isRequired: true,
                      setter: {
                        componentName: 'MixedSetter',
                        props: {
                          setters: [
                            'StringSetter',
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
                          params: ['text', 'record', 'index']
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
                          'en-US': 'width',
                          'zh-CN': 'width'
                        }
                      },
                      name: 'width',
                      setter: {
                        componentName: 'MixedSetter',
                        props: {
                          setters: ['StringSetter', 'NumberSetter']
                        }
                      }
                    },
                    {
                      title: '『 全部属性 』',
                      type: 'group',
                      display: 'block',
                      items: []
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'align',
                          'zh-CN': 'align'
                        }
                      },
                      name: 'align',
                      setter: {
                        componentName: 'RadioGroupSetter',
                        props: {
                          dataSource: [
                            {
                              label: 'center',
                              value: 'center'
                            },
                            {
                              label: 'left',
                              value: 'left'
                            },
                            {
                              label: 'right',
                              value: 'right'
                            }
                          ],
                          options: [
                            {
                              label: 'center',
                              value: 'center'
                            },
                            {
                              label: 'left',
                              value: 'left'
                            },
                            {
                              label: 'right',
                              value: 'right'
                            }
                          ]
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'colSpan',
                          'zh-CN': 'colSpan'
                        }
                      },
                      name: 'colSpan',
                      setter: 'NumberSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'defaultFilteredValue',
                          'zh-CN': 'defaultFilteredValue'
                        }
                      },
                      name: 'defaultFilteredValue',
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
                          'en-US': 'defaultSortOrder',
                          'zh-CN': 'defaultSortOrder'
                        }
                      },
                      name: 'defaultSortOrder',
                      setter: {
                        componentName: 'RadioGroupSetter',
                        props: {
                          dataSource: [
                            {
                              label: 'descend',
                              value: 'descend'
                            },
                            {
                              label: 'ascend',
                              value: 'ascend'
                            }
                          ],
                          options: [
                            {
                              label: 'descend',
                              value: 'descend'
                            },
                            {
                              label: 'ascend',
                              value: 'ascend'
                            }
                          ]
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'ellipsis',
                          'zh-CN': 'ellipsis'
                        }
                      },
                      name: 'ellipsis',
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
                                          'en-US': 'showTitle',
                                          'zh-CN': 'showTitle'
                                        }
                                      },
                                      name: 'showTitle',
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
                          'en-US': 'filterDropdown',
                          'zh-CN': 'filterDropdown'
                        }
                      },
                      name: 'filterDropdown',
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
                          'en-US': 'filterDropdownOpen',
                          'zh-CN': 'filterDropdownOpen'
                        }
                      },
                      name: 'filterDropdownOpen',
                      setter: 'BoolSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'filtered',
                          'zh-CN': 'filtered'
                        }
                      },
                      name: 'filtered',
                      setter: 'BoolSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'filteredValue',
                          'zh-CN': 'filteredValue'
                        }
                      },
                      name: 'filteredValue',
                      setter: {
                        componentName: 'ArraySetter',
                        props: {
                          itemSetter: 'StringSetter'
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'filterIcon',
                          'zh-CN': 'filterIcon'
                        }
                      },
                      name: 'filterIcon',
                      setter: {
                        componentName: 'SlotSetter',
                        initialValue: {
                          type: 'JSSlot',
                          params: ['filtered']
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'filterMode',
                          'zh-CN': 'filterMode'
                        }
                      },
                      name: 'filterMode',
                      setter: {
                        componentName: 'RadioGroupSetter',
                        props: {
                          dataSource: [
                            {
                              label: 'menu',
                              value: 'menu'
                            },
                            {
                              label: 'tree',
                              value: 'tree'
                            }
                          ],
                          options: [
                            {
                              label: 'menu',
                              value: 'menu'
                            },
                            {
                              label: 'tree',
                              value: 'tree'
                            }
                          ]
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'filterMultiple',
                          'zh-CN': 'filterMultiple'
                        }
                      },
                      name: 'filterMultiple',
                      setter: 'BoolSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'filterResetToDefaultFilteredValue',
                          'zh-CN': 'filterResetToDefaultFilteredValue'
                        }
                      },
                      name: 'filterResetToDefaultFilteredValue',
                      setter: 'BoolSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'filters',
                          'zh-CN': 'filters'
                        }
                      },
                      name: 'filters',
                      setter: {
                        componentName: 'ArraySetter',
                        props: {
                          itemSetter: {
                            componentName: 'ObjectSetter',
                            props: {
                              config: {
                                items: [
                                  {
                                    title: {
                                      label: {
                                        type: 'i18n',
                                        'en-US': 'text',
                                        'zh-CN': 'text'
                                      }
                                    },
                                    name: 'text',
                                    isRequired: true,
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
                                        'en-US': 'value',
                                        'zh-CN': 'value'
                                      }
                                    },
                                    name: 'value',
                                    isRequired: true,
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
                                    setter: {
                                      componentName: 'ArraySetter',
                                      props: {
                                        itemSetter: {
                                          componentName: 'ObjectSetter',
                                          props: {
                                            config: {
                                              items: [
                                                {
                                                  title: {
                                                    label: {
                                                      type: 'i18n',
                                                      'en-US': 'text',
                                                      'zh-CN': 'text'
                                                    }
                                                  },
                                                  name: 'text',
                                                  isRequired: true,
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
                                                      'en-US': 'value',
                                                      'zh-CN': 'value'
                                                    }
                                                  },
                                                  name: 'value',
                                                  isRequired: true,
                                                  setter: 'StringSetter'
                                                }
                                              ]
                                            }
                                          }
                                        }
                                      }
                                    }
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
                          'en-US': 'filterSearch',
                          'zh-CN': 'filterSearch'
                        }
                      },
                      name: 'filterSearch',
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
                          'en-US': 'fixed',
                          'zh-CN': 'fixed'
                        }
                      },
                      name: 'fixed',
                      setter: {
                        componentName: 'MixedSetter',
                        props: {
                          setters: [
                            'BoolSetter',
                            {
                              componentName: 'RadioGroupSetter',
                              props: {
                                dataSource: [
                                  {
                                    label: 'left',
                                    value: 'left'
                                  },
                                  {
                                    label: 'right',
                                    value: 'right'
                                  }
                                ],
                                options: [
                                  {
                                    label: 'left',
                                    value: 'left'
                                  },
                                  {
                                    label: 'right',
                                    value: 'right'
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
                          'en-US': 'onCell',
                          'zh-CN': 'onCell'
                        }
                      },
                      name: 'onCell',
                      setter: 'FunctionSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'onFilter',
                          'zh-CN': 'onFilter'
                        }
                      },
                      name: 'onFilter',
                      setter: 'FunctionSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'onFilterDropdownOpenChange',
                          'zh-CN': 'onFilterDropdownOpenChange'
                        }
                      },
                      name: 'onFilterDropdownOpenChange',
                      setter: 'FunctionSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'onHeaderCell',
                          'zh-CN': 'onHeaderCell'
                        }
                      },
                      name: 'onHeaderCell',
                      setter: 'FunctionSetter'
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
                      setter: {
                        componentName: 'ArraySetter',
                        props: {
                          itemSetter: {
                            componentName: 'SelectSetter',
                            props: {
                              dataSource: [
                                {
                                  label: 'xs',
                                  value: 'xs'
                                },
                                {
                                  label: 'sm',
                                  value: 'sm'
                                },
                                {
                                  label: 'md',
                                  value: 'md'
                                },
                                {
                                  label: 'lg',
                                  value: 'lg'
                                },
                                {
                                  label: 'xl',
                                  value: 'xl'
                                },
                                {
                                  label: 'xxl',
                                  value: 'xxl'
                                }
                              ],
                              options: [
                                {
                                  label: 'xs',
                                  value: 'xs'
                                },
                                {
                                  label: 'sm',
                                  value: 'sm'
                                },
                                {
                                  label: 'md',
                                  value: 'md'
                                },
                                {
                                  label: 'lg',
                                  value: 'lg'
                                },
                                {
                                  label: 'xl',
                                  value: 'xl'
                                },
                                {
                                  label: 'xxl',
                                  value: 'xxl'
                                }
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
                          'en-US': 'rowScope',
                          'zh-CN': 'rowScope'
                        }
                      },
                      name: 'rowScope',
                      setter: {
                        componentName: 'ArraySetter',
                        props: {
                          itemSetter: {
                            componentName: 'SelectSetter',
                            props: {
                              dataSource: [
                                {
                                  label: 'row',
                                  value: 'row'
                                },
                                {
                                  label: 'rowgroup',
                                  value: 'rowgroup'
                                }
                              ],
                              options: [
                                {
                                  label: 'row',
                                  value: 'row'
                                },
                                {
                                  label: 'rowgroup',
                                  value: 'rowgroup'
                                }
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
                          'en-US': 'showSorterTooltip',
                          'zh-CN': 'showSorterTooltip'
                        }
                      },
                      name: 'showSorterTooltip',
                      extraProps: {
                        display: 'accordion',
                        defaultCollapsed: true
                      },
                      setter: {
                        componentName: 'MixedSetter',
                        props: {
                          setters: [
                            'BoolSetter',
                            {
                              componentName: 'ObjectSetter',
                              props: {
                                config: {
                                  items: TooltipMeta.configure!['props']
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
                          'en-US': 'sortDirections',
                          'zh-CN': 'sortDirections'
                        }
                      },
                      name: 'sortDirections',
                      setter: {
                        componentName: 'ArraySetter',
                        props: {
                          itemSetter: {
                            componentName: 'RadioGroupSetter',
                            props: {
                              dataSource: [
                                {
                                  label: 'descend',
                                  value: 'descend'
                                },
                                {
                                  label: 'ascend',
                                  value: 'ascend'
                                }
                              ],
                              options: [
                                {
                                  label: 'descend',
                                  value: 'descend'
                                },
                                {
                                  label: 'ascend',
                                  value: 'ascend'
                                }
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
                          'en-US': 'sorter',
                          'zh-CN': 'sorter'
                        }
                      },
                      name: 'sorter',
                      setter: {
                        componentName: 'MixedSetter',
                        props: {
                          setters: [
                            'BoolSetter',
                            'FunctionSetter',
                            {
                              componentName: 'ObjectSetter',
                              props: {
                                config: {
                                  items: [
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'compare',
                                          'zh-CN': 'compare'
                                        }
                                      },
                                      name: 'compare',
                                      setter: 'FunctionSetter'
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
                                      setter: 'NumberSetter'
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
                          'en-US': 'sortIcon',
                          'zh-CN': 'sortIcon'
                        }
                      },
                      name: 'sortIcon',
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
                          'en-US': 'sortOrder',
                          'zh-CN': 'sortOrder'
                        }
                      },
                      name: 'sortOrder',
                      setter: {
                        componentName: 'RadioGroupSetter',
                        props: {
                          dataSource: [
                            {
                              label: 'descend',
                              value: 'descend'
                            },
                            {
                              label: 'ascend',
                              value: 'ascend'
                            }
                          ],
                          options: [
                            {
                              label: 'descend',
                              value: 'descend'
                            },
                            {
                              label: 'ascend',
                              value: 'ascend'
                            }
                          ]
                        }
                      }
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
            'en-US': 'components',
            'zh-CN': 'components'
          }
        },
        description: '@todo 待完善自定义元素',
        name: 'components'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dataSource',
            'zh-CN': 'dataSource'
          }
        },
        name: 'dataSource'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'expandable',
            'zh-CN': 'expandable'
          }
        },
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
        name: 'expandable',
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
                      'en-US': 'childrenColumnName',
                      'zh-CN': 'childrenColumnName'
                    }
                  },
                  name: 'childrenColumnName',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'columnTitle',
                      'zh-CN': 'columnTitle'
                    }
                  },
                  name: 'columnTitle',
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
                      'en-US': 'columnWidth',
                      'zh-CN': 'columnWidth'
                    }
                  },
                  name: 'columnWidth',
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
                      'en-US': 'defaultExpandAllRows',
                      'zh-CN': 'defaultExpandAllRows'
                    }
                  },
                  name: 'defaultExpandAllRows',
                  setter: 'BoolSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'defaultExpandedRowKeys',
                      'zh-CN': 'defaultExpandedRowKeys'
                    }
                  },
                  name: 'defaultExpandedRowKeys',
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: 'StringSetter'
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'expandedRowClassName',
                      'zh-CN': 'expandedRowClassName'
                    }
                  },
                  name: 'expandedRowClassName',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'expandedRowKeys',
                      'zh-CN': 'expandedRowKeys'
                    }
                  },
                  name: 'expandedRowKeys',
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: 'StringSetter'
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'expandedRowRender',
                      'zh-CN': 'expandedRowRender'
                    }
                  },
                  name: 'expandedRowRender',
                  setter: {
                    componentName: 'SlotSetter',
                    initialValue: {
                      type: 'JSSlot',
                      params: ['record', 'index', 'indent', 'expanded']
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
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'expandRowByClick',
                      'zh-CN': 'expandRowByClick'
                    }
                  },
                  name: 'expandRowByClick',
                  setter: 'BoolSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'fixed',
                      'zh-CN': 'fixed'
                    }
                  },
                  name: 'fixed',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
                        'BoolSetter',
                        {
                          componentName: 'RadioGroupSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'left',
                                value: 'left'
                              },
                              {
                                label: 'right',
                                value: 'right'
                              }
                            ],
                            options: [
                              {
                                label: 'left',
                                value: 'left'
                              },
                              {
                                label: 'right',
                                value: 'right'
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
                      'en-US': 'indentSize',
                      'zh-CN': 'indentSize'
                    }
                  },
                  name: 'indentSize',
                  setter: 'NumberSetter'
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
                      'en-US': 'onExpandedRowsChange',
                      'zh-CN': 'onExpandedRowsChange'
                    }
                  },
                  name: 'onExpandedRowsChange',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'rowExpandable',
                      'zh-CN': 'rowExpandable'
                    }
                  },
                  name: 'rowExpandable',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'showExpandColumn',
                      'zh-CN': 'showExpandColumn'
                    }
                  },
                  name: 'showExpandColumn',
                  setter: 'BoolSetter'
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
            'en-US': 'footer',
            'zh-CN': 'footer'
          }
        },
        name: 'footer',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['currentPageData']
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
            'en-US': 'loading',
            'zh-CN': 'loading'
          }
        },
        name: 'loading',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
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
                    items: SpinMeta.configure!['props']
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
            'en-US': 'locale',
            'zh-CN': 'locale'
          }
        },
        name: 'locale',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
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
                      'en-US': 'filterTitle',
                      'zh-CN': 'filterTitle'
                    }
                  },
                  name: 'filterTitle',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'filterConfirm',
                      'zh-CN': 'filterConfirm'
                    }
                  },
                  name: 'filterConfirm',
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
                      'en-US': 'filterReset',
                      'zh-CN': 'filterReset'
                    }
                  },
                  name: 'filterReset',
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
                      'en-US': 'filterEmptyText',
                      'zh-CN': 'filterEmptyText'
                    }
                  },
                  name: 'filterEmptyText',
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
                      'en-US': 'filterCheckall',
                      'zh-CN': 'filterCheckall'
                    }
                  },
                  name: 'filterCheckall',
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
                      'en-US': 'filterSearchPlaceholder',
                      'zh-CN': 'filterSearchPlaceholder'
                    }
                  },
                  name: 'filterSearchPlaceholder',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'emptyText',
                      'zh-CN': 'emptyText'
                    }
                  },
                  name: 'emptyText',
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
                      'en-US': 'selectAll',
                      'zh-CN': 'selectAll'
                    }
                  },
                  name: 'selectAll',
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
                      'en-US': 'selectNone',
                      'zh-CN': 'selectNone'
                    }
                  },
                  name: 'selectNone',
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
                      'en-US': 'selectInvert',
                      'zh-CN': 'selectInvert'
                    }
                  },
                  name: 'selectInvert',
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
                      'en-US': 'selectionAll',
                      'zh-CN': 'selectionAll'
                    }
                  },
                  name: 'selectionAll',
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
                      'en-US': 'sortTitle',
                      'zh-CN': 'sortTitle'
                    }
                  },
                  name: 'sortTitle',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'expand',
                      'zh-CN': 'expand'
                    }
                  },
                  name: 'expand',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'collapse',
                      'zh-CN': 'collapse'
                    }
                  },
                  name: 'collapse',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'triggerDesc',
                      'zh-CN': 'triggerDesc'
                    }
                  },
                  name: 'triggerDesc',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'triggerAsc',
                      'zh-CN': 'triggerAsc'
                    }
                  },
                  name: 'triggerAsc',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'cancelSort',
                      'zh-CN': 'cancelSort'
                    }
                  },
                  name: 'cancelSort',
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
            'en-US': 'onHeaderRow',
            'zh-CN': 'onHeaderRow'
          }
        },
        name: 'onHeaderRow',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onRow',
            'zh-CN': 'onRow'
          }
        },
        name: 'onRow',
        setter: 'FunctionSetter'
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
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
        setter: {
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
                            'en-US': 'position',
                            'zh-CN': 'position'
                          }
                        },
                        name: 'position',
                        setter: {
                          componentName: 'ArraySetter',
                          condition: () => false,
                          props: {
                            itemSetter: {
                              componentName: 'SelectSetter',
                              props: {
                                dataSource: [
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
                          }
                        }
                      },
                      ...PaginationMeta.configure!['props']
                    ]
                  }
                }
              },
              {
                componentName: 'RadioGroupSetter',
                condition: () => false,
                props: {
                  dataSource: [
                    {
                      label: 'false',
                      value: false
                    }
                  ],
                  options: [
                    {
                      label: 'false',
                      value: false
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
            'en-US': 'rowClassName',
            'zh-CN': 'rowClassName'
          }
        },
        name: 'rowClassName',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rowKey',
            'zh-CN': 'rowKey'
          }
        },
        name: 'rowKey',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'FunctionSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rowSelection',
            'zh-CN': 'rowSelection'
          }
        },
        name: 'rowSelection',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
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
                      'en-US': 'columnTitle',
                      'zh-CN': 'columnTitle'
                    }
                  },
                  name: 'columnTitle',
                  setter: {
                    componentName: 'SlotSetter',
                    initialValue: {
                      type: 'JSSlot',
                      params: ['originalNode']
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'columnWidth',
                      'zh-CN': 'columnWidth'
                    }
                  },
                  name: 'columnWidth',
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
                      'en-US': 'defaultSelectedRowKeys',
                      'zh-CN': 'defaultSelectedRowKeys'
                    }
                  },
                  name: 'defaultSelectedRowKeys',
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: 'StringSetter'
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'fixed',
                      'zh-CN': 'fixed'
                    }
                  },
                  name: 'fixed',
                  setter: 'BoolSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'getCheckboxProps',
                      'zh-CN': 'getCheckboxProps'
                    }
                  },
                  name: 'getCheckboxProps',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'hideSelectAll',
                      'zh-CN': 'hideSelectAll'
                    }
                  },
                  name: 'hideSelectAll',
                  setter: 'BoolSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onCell',
                      'zh-CN': 'onCell'
                    }
                  },
                  name: 'onCell',
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
                      'en-US': 'onSelectAll',
                      'zh-CN': 'onSelectAll'
                    }
                  },
                  name: 'onSelectAll',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onSelectInvert',
                      'zh-CN': 'onSelectInvert'
                    }
                  },
                  name: 'onSelectInvert',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onSelectMultiple',
                      'zh-CN': 'onSelectMultiple'
                    }
                  },
                  name: 'onSelectMultiple',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onSelectNone',
                      'zh-CN': 'onSelectNone'
                    }
                  },
                  name: 'onSelectNone',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'preserveSelectedRowKeys',
                      'zh-CN': 'preserveSelectedRowKeys'
                    }
                  },
                  name: 'preserveSelectedRowKeys',
                  setter: 'BoolSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'renderCell',
                      'zh-CN': 'renderCell'
                    }
                  },
                  name: 'renderCell',
                  setter: {
                    componentName: 'SlotSetter',
                    initialValue: {
                      type: 'JSSlot',
                      params: ['checked', 'record', 'index', 'originNode']
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'selectedRowKeys',
                      'zh-CN': 'selectedRowKeys'
                    }
                  },
                  name: 'selectedRowKeys',
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: 'StringSetter'
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'selections',
                      'zh-CN': 'selections'
                    }
                  },
                  name: 'selections',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
                        'BoolSetter',
                        {
                          componentName: 'ArraySetter',
                          props: {
                            itemSetter: {
                              componentName: 'ObjectSetter',
                              props: {
                                config: {
                                  items: [
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
                                          'en-US': 'text',
                                          'zh-CN': 'text'
                                        }
                                      },
                                      name: 'text',
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
                      'en-US': 'type',
                      'zh-CN': 'type'
                    }
                  },
                  name: 'type',
                  setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                      dataSource: [
                        {
                          label: 'checkbox',
                          value: 'checkbox'
                        },
                        {
                          label: 'radio',
                          value: 'radio'
                        }
                      ],
                      options: [
                        {
                          label: 'checkbox',
                          value: 'checkbox'
                        },
                        {
                          label: 'radio',
                          value: 'radio'
                        }
                      ]
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
            'en-US': 'scroll',
            'zh-CN': 'scroll'
          }
        },
        name: 'scroll',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
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
                      'en-US': 'scrollToFirstRowOnChange',
                      'zh-CN': 'scrollToFirstRowOnChange'
                    }
                  },
                  name: 'scrollToFirstRowOnChange',
                  setter: 'BoolSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'x',
                      'zh-CN': 'x'
                    }
                  },
                  name: 'x',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: ['BoolSetter', 'StringSetter', 'NumberSetter']
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'y',
                      'zh-CN': 'y'
                    }
                  },
                  name: 'y',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: ['StringSetter', 'NumberSetter']
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
            'en-US': 'showHeader',
            'zh-CN': 'showHeader'
          }
        },
        name: 'showHeader',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showSorterTooltip',
            'zh-CN': 'showSorterTooltip'
          }
        },
        name: 'showSorterTooltip',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'BoolSetter',
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: TooltipMeta.configure!['props']
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
            'en-US': 'sortDirections',
            'zh-CN': 'sortDirections'
          }
        },
        name: 'sortDirections',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: {
              componentName: 'RadioGroupSetter',
              condition: () => false,
              props: {
                dataSource: [
                  {
                    label: 'descend',
                    value: 'descend'
                  },
                  {
                    label: 'ascend',
                    value: 'ascend'
                  }
                ],
                options: [
                  {
                    label: 'descend',
                    value: 'descend'
                  },
                  {
                    label: 'ascend',
                    value: 'ascend'
                  }
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
            'en-US': 'sticky',
            'zh-CN': 'sticky'
          }
        },
        name: 'sticky',
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
                            'en-US': 'offsetHeader',
                            'zh-CN': 'offsetHeader'
                          }
                        },
                        name: 'offsetHeader',
                        setter: 'NumberSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'offsetScroll',
                            'zh-CN': 'offsetScroll'
                          }
                        },
                        name: 'offsetScroll',
                        setter: 'NumberSetter'
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
            'en-US': 'summary',
            'zh-CN': 'summary'
          }
        },
        name: 'summary',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['currentData']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tableLayout',
            'zh-CN': 'tableLayout'
          }
        },
        name: 'tableLayout',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'auto',
                value: 'auto'
              },
              {
                label: 'fixed',
                value: 'fixed'
              }
            ],
            options: [
              {
                label: 'auto',
                value: 'auto'
              },
              {
                label: 'fixed',
                value: 'fixed'
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
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['currentPageData']
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
      style: true
    },
    component: {
      isContainer: true
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '表格',
    screenshot: '',
    schema: {
      componentName: 'Table',
      props: {}
    }
  }
];

export default {
  ...TableMeta,
  snippets
};
