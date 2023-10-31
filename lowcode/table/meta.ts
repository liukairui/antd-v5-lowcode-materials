import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

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
            'en-US': 'caption',
            'zh-CN': 'caption'
          }
        },
        name: 'caption',
        setter: 'SlotSetter'
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
                                'en-US': 'RecordType',
                                'zh-CN': 'RecordType'
                              }
                            },
                            name: 'RecordType',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {}
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
                                            extraSetter: {
                                              componentName: 'MixedSetter',
                                              props: {}
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
                                                    'en-US': 'RecordType',
                                                    'zh-CN': 'RecordType'
                                                  }
                                                },
                                                name: 'RecordType',
                                                setter: {
                                                  componentName: 'MixedSetter',
                                                  props: {}
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
                                                        condition: () => false,
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
                                                    'en-US': 'sortIcon',
                                                    'zh-CN': 'sortIcon'
                                                  }
                                                },
                                                name: 'sortIcon',
                                                setter: 'FunctionSetter'
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
                                                                    'en-US': 'title',
                                                                    'zh-CN': 'title'
                                                                  }
                                                                },
                                                                name: 'title',
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
                                                                    'en-US': 'overlay',
                                                                    'zh-CN': 'overlay'
                                                                  }
                                                                },
                                                                name: 'overlay',
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
                                                                    'en-US': 'title',
                                                                    'zh-CN': 'title'
                                                                  }
                                                                },
                                                                name: 'title',
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
                                                                    'en-US': 'overlay',
                                                                    'zh-CN': 'overlay'
                                                                  }
                                                                },
                                                                name: 'overlay',
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
                                                    'en-US': 'filters',
                                                    'zh-CN': 'filters'
                                                  }
                                                },
                                                name: 'filters',
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
                                                                  'en-US': 'text',
                                                                  'zh-CN': 'text'
                                                                }
                                                              },
                                                              name: 'text',
                                                              setter: 'SlotSetter'
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
                                                              setter: {
                                                                componentName: 'MixedSetter',
                                                                props: {
                                                                  setters: ['StringSetter', 'NumberSetter', 'BoolSetter']
                                                                }
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
                                                                componentName: 'ArraySetter',
                                                                condition: () => false,
                                                                props: {
                                                                  itemSetter: {
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
                                                    'en-US': 'filterDropdown',
                                                    'zh-CN': 'filterDropdown'
                                                  }
                                                },
                                                name: 'filterDropdown',
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
                                                    'en-US': 'filteredValue',
                                                    'zh-CN': 'filteredValue'
                                                  }
                                                },
                                                name: 'filteredValue',
                                                setter: {
                                                  componentName: 'ArraySetter',
                                                  condition: () => false,
                                                  props: {
                                                    itemSetter: {
                                                      componentName: 'MixedSetter',
                                                      props: {
                                                        setters: ['StringSetter', 'NumberSetter', 'BoolSetter']
                                                      }
                                                    }
                                                  }
                                                }
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
                                                    itemSetter: {
                                                      componentName: 'MixedSetter',
                                                      props: {
                                                        setters: ['StringSetter', 'NumberSetter', 'BoolSetter']
                                                      }
                                                    }
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
                                                    'en-US': 'responsive',
                                                    'zh-CN': 'responsive'
                                                  }
                                                },
                                                name: 'responsive',
                                                setter: {
                                                  componentName: 'ArraySetter',
                                                  condition: () => false,
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
                                                    'en-US': 'filterDropdownVisible',
                                                    'zh-CN': 'filterDropdownVisible'
                                                  }
                                                },
                                                name: 'filterDropdownVisible',
                                                setter: 'BoolSetter'
                                              },
                                              {
                                                title: {
                                                  label: {
                                                    type: 'i18n',
                                                    'en-US': 'onFilterDropdownVisibleChange',
                                                    'zh-CN': 'onFilterDropdownVisibleChange'
                                                  }
                                                },
                                                name: 'onFilterDropdownVisibleChange',
                                                setter: 'FunctionSetter'
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
                        ]
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
                                'en-US': 'RecordType',
                                'zh-CN': 'RecordType'
                              }
                            },
                            name: 'RecordType',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {}
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
                                    condition: () => false,
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
                                'en-US': 'sortIcon',
                                'zh-CN': 'sortIcon'
                              }
                            },
                            name: 'sortIcon',
                            setter: 'FunctionSetter'
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
                                                'en-US': 'title',
                                                'zh-CN': 'title'
                                              }
                                            },
                                            name: 'title',
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
                                                'en-US': 'overlay',
                                                'zh-CN': 'overlay'
                                              }
                                            },
                                            name: 'overlay',
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
                                                'en-US': 'title',
                                                'zh-CN': 'title'
                                              }
                                            },
                                            name: 'title',
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
                                                'en-US': 'overlay',
                                                'zh-CN': 'overlay'
                                              }
                                            },
                                            name: 'overlay',
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
                                'en-US': 'filters',
                                'zh-CN': 'filters'
                              }
                            },
                            name: 'filters',
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
                                              'en-US': 'text',
                                              'zh-CN': 'text'
                                            }
                                          },
                                          name: 'text',
                                          setter: 'SlotSetter'
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
                                          setter: {
                                            componentName: 'MixedSetter',
                                            props: {
                                              setters: ['StringSetter', 'NumberSetter', 'BoolSetter']
                                            }
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
                                            componentName: 'ArraySetter',
                                            condition: () => false,
                                            props: {
                                              itemSetter: {
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
                                'en-US': 'filterDropdown',
                                'zh-CN': 'filterDropdown'
                              }
                            },
                            name: 'filterDropdown',
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
                                'en-US': 'filteredValue',
                                'zh-CN': 'filteredValue'
                              }
                            },
                            name: 'filteredValue',
                            setter: {
                              componentName: 'ArraySetter',
                              condition: () => false,
                              props: {
                                itemSetter: {
                                  componentName: 'MixedSetter',
                                  props: {
                                    setters: ['StringSetter', 'NumberSetter', 'BoolSetter']
                                  }
                                }
                              }
                            }
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
                                itemSetter: {
                                  componentName: 'MixedSetter',
                                  props: {
                                    setters: ['StringSetter', 'NumberSetter', 'BoolSetter']
                                  }
                                }
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
                                'en-US': 'responsive',
                                'zh-CN': 'responsive'
                              }
                            },
                            name: 'responsive',
                            setter: {
                              componentName: 'ArraySetter',
                              condition: () => false,
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
                                'en-US': 'filterDropdownVisible',
                                'zh-CN': 'filterDropdownVisible'
                              }
                            },
                            name: 'filterDropdownVisible',
                            setter: 'BoolSetter'
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'onFilterDropdownVisibleChange',
                                'zh-CN': 'onFilterDropdownVisibleChange'
                              }
                            },
                            name: 'onFilterDropdownVisibleChange',
                            setter: 'FunctionSetter'
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'components',
            'zh-CN': 'components'
          }
        },
        name: 'components',
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
                      'en-US': 'RecordType',
                      'zh-CN': 'RecordType'
                    }
                  },
                  name: 'RecordType',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {}
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'table',
                      'zh-CN': 'table'
                    }
                  },
                  name: 'table',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
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
                        {
                          componentName: 'SelectSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'object',
                                value: 'object'
                              },
                              {
                                label: 'button',
                                value: 'button'
                              },
                              {
                                label: 'style',
                                value: 'style'
                              },
                              {
                                label: 'form',
                                value: 'form'
                              },
                              {
                                label: 'link',
                                value: 'link'
                              },
                              {
                                label: 'small',
                                value: 'small'
                              },
                              {
                                label: 'title',
                                value: 'title'
                              },
                              {
                                label: 'a',
                                value: 'a'
                              },
                              {
                                label: 'code',
                                value: 'code'
                              },
                              {
                                label: 'mark',
                                value: 'mark'
                              },
                              {
                                label: 'strong',
                                value: 'strong'
                              },
                              {
                                label: 'div',
                                value: 'div'
                              },
                              {
                                label: 'span',
                                value: 'span'
                              },
                              {
                                label: 'h1',
                                value: 'h1'
                              },
                              {
                                label: 'h2',
                                value: 'h2'
                              },
                              {
                                label: 'h3',
                                value: 'h3'
                              },
                              {
                                label: 'h4',
                                value: 'h4'
                              },
                              {
                                label: 'h5',
                                value: 'h5'
                              },
                              {
                                label: 'menu',
                                value: 'menu'
                              },
                              {
                                label: 'label',
                                value: 'label'
                              },
                              {
                                label: 'input',
                                value: 'input'
                              },
                              {
                                label: 'progress',
                                value: 'progress'
                              },
                              {
                                label: 'select',
                                value: 'select'
                              },
                              {
                                label: 'abbr',
                                value: 'abbr'
                              },
                              {
                                label: 'address',
                                value: 'address'
                              },
                              {
                                label: 'area',
                                value: 'area'
                              },
                              {
                                label: 'article',
                                value: 'article'
                              },
                              {
                                label: 'aside',
                                value: 'aside'
                              },
                              {
                                label: 'audio',
                                value: 'audio'
                              },
                              {
                                label: 'b',
                                value: 'b'
                              },
                              {
                                label: 'base',
                                value: 'base'
                              },
                              {
                                label: 'bdi',
                                value: 'bdi'
                              },
                              {
                                label: 'bdo',
                                value: 'bdo'
                              },
                              {
                                label: 'blockquote',
                                value: 'blockquote'
                              },
                              {
                                label: 'body',
                                value: 'body'
                              },
                              {
                                label: 'br',
                                value: 'br'
                              },
                              {
                                label: 'canvas',
                                value: 'canvas'
                              },
                              {
                                label: 'caption',
                                value: 'caption'
                              },
                              {
                                label: 'cite',
                                value: 'cite'
                              },
                              {
                                label: 'col',
                                value: 'col'
                              },
                              {
                                label: 'colgroup',
                                value: 'colgroup'
                              },
                              {
                                label: 'data',
                                value: 'data'
                              },
                              {
                                label: 'datalist',
                                value: 'datalist'
                              },
                              {
                                label: 'dd',
                                value: 'dd'
                              },
                              {
                                label: 'del',
                                value: 'del'
                              },
                              {
                                label: 'details',
                                value: 'details'
                              },
                              {
                                label: 'dfn',
                                value: 'dfn'
                              },
                              {
                                label: 'dialog',
                                value: 'dialog'
                              },
                              {
                                label: 'dl',
                                value: 'dl'
                              },
                              {
                                label: 'dt',
                                value: 'dt'
                              },
                              {
                                label: 'em',
                                value: 'em'
                              },
                              {
                                label: 'embed',
                                value: 'embed'
                              },
                              {
                                label: 'fieldset',
                                value: 'fieldset'
                              },
                              {
                                label: 'figcaption',
                                value: 'figcaption'
                              },
                              {
                                label: 'figure',
                                value: 'figure'
                              },
                              {
                                label: 'footer',
                                value: 'footer'
                              },
                              {
                                label: 'h6',
                                value: 'h6'
                              },
                              {
                                label: 'head',
                                value: 'head'
                              },
                              {
                                label: 'header',
                                value: 'header'
                              },
                              {
                                label: 'hgroup',
                                value: 'hgroup'
                              },
                              {
                                label: 'hr',
                                value: 'hr'
                              },
                              {
                                label: 'html',
                                value: 'html'
                              },
                              {
                                label: 'i',
                                value: 'i'
                              },
                              {
                                label: 'iframe',
                                value: 'iframe'
                              },
                              {
                                label: 'img',
                                value: 'img'
                              },
                              {
                                label: 'ins',
                                value: 'ins'
                              },
                              {
                                label: 'kbd',
                                value: 'kbd'
                              },
                              {
                                label: 'legend',
                                value: 'legend'
                              },
                              {
                                label: 'li',
                                value: 'li'
                              },
                              {
                                label: 'main',
                                value: 'main'
                              },
                              {
                                label: 'map',
                                value: 'map'
                              },
                              {
                                label: 'meta',
                                value: 'meta'
                              },
                              {
                                label: 'meter',
                                value: 'meter'
                              },
                              {
                                label: 'nav',
                                value: 'nav'
                              },
                              {
                                label: 'noscript',
                                value: 'noscript'
                              },
                              {
                                label: 'ol',
                                value: 'ol'
                              },
                              {
                                label: 'optgroup',
                                value: 'optgroup'
                              },
                              {
                                label: 'option',
                                value: 'option'
                              },
                              {
                                label: 'output',
                                value: 'output'
                              },
                              {
                                label: 'p',
                                value: 'p'
                              },
                              {
                                label: 'param',
                                value: 'param'
                              },
                              {
                                label: 'picture',
                                value: 'picture'
                              },
                              {
                                label: 'pre',
                                value: 'pre'
                              },
                              {
                                label: 'q',
                                value: 'q'
                              },
                              {
                                label: 'rp',
                                value: 'rp'
                              },
                              {
                                label: 'rt',
                                value: 'rt'
                              },
                              {
                                label: 'ruby',
                                value: 'ruby'
                              },
                              {
                                label: 's',
                                value: 's'
                              },
                              {
                                label: 'samp',
                                value: 'samp'
                              },
                              {
                                label: 'script',
                                value: 'script'
                              },
                              {
                                label: 'section',
                                value: 'section'
                              },
                              {
                                label: 'slot',
                                value: 'slot'
                              },
                              {
                                label: 'source',
                                value: 'source'
                              },
                              {
                                label: 'sub',
                                value: 'sub'
                              },
                              {
                                label: 'summary',
                                value: 'summary'
                              },
                              {
                                label: 'sup',
                                value: 'sup'
                              },
                              {
                                label: 'table',
                                value: 'table'
                              },
                              {
                                label: 'tbody',
                                value: 'tbody'
                              },
                              {
                                label: 'td',
                                value: 'td'
                              },
                              {
                                label: 'template',
                                value: 'template'
                              },
                              {
                                label: 'textarea',
                                value: 'textarea'
                              },
                              {
                                label: 'tfoot',
                                value: 'tfoot'
                              },
                              {
                                label: 'th',
                                value: 'th'
                              },
                              {
                                label: 'thead',
                                value: 'thead'
                              },
                              {
                                label: 'time',
                                value: 'time'
                              },
                              {
                                label: 'tr',
                                value: 'tr'
                              },
                              {
                                label: 'track',
                                value: 'track'
                              },
                              {
                                label: 'u',
                                value: 'u'
                              },
                              {
                                label: 'ul',
                                value: 'ul'
                              },
                              {
                                label: 'var',
                                value: 'var'
                              },
                              {
                                label: 'video',
                                value: 'video'
                              },
                              {
                                label: 'wbr',
                                value: 'wbr'
                              },
                              {
                                label: 'big',
                                value: 'big'
                              },
                              {
                                label: 'keygen',
                                value: 'keygen'
                              },
                              {
                                label: 'menuitem',
                                value: 'menuitem'
                              },
                              {
                                label: 'webview',
                                value: 'webview'
                              }
                            ],
                            options: [
                              {
                                label: 'object',
                                value: 'object'
                              },
                              {
                                label: 'button',
                                value: 'button'
                              },
                              {
                                label: 'style',
                                value: 'style'
                              },
                              {
                                label: 'form',
                                value: 'form'
                              },
                              {
                                label: 'link',
                                value: 'link'
                              },
                              {
                                label: 'small',
                                value: 'small'
                              },
                              {
                                label: 'title',
                                value: 'title'
                              },
                              {
                                label: 'a',
                                value: 'a'
                              },
                              {
                                label: 'code',
                                value: 'code'
                              },
                              {
                                label: 'mark',
                                value: 'mark'
                              },
                              {
                                label: 'strong',
                                value: 'strong'
                              },
                              {
                                label: 'div',
                                value: 'div'
                              },
                              {
                                label: 'span',
                                value: 'span'
                              },
                              {
                                label: 'h1',
                                value: 'h1'
                              },
                              {
                                label: 'h2',
                                value: 'h2'
                              },
                              {
                                label: 'h3',
                                value: 'h3'
                              },
                              {
                                label: 'h4',
                                value: 'h4'
                              },
                              {
                                label: 'h5',
                                value: 'h5'
                              },
                              {
                                label: 'menu',
                                value: 'menu'
                              },
                              {
                                label: 'label',
                                value: 'label'
                              },
                              {
                                label: 'input',
                                value: 'input'
                              },
                              {
                                label: 'progress',
                                value: 'progress'
                              },
                              {
                                label: 'select',
                                value: 'select'
                              },
                              {
                                label: 'abbr',
                                value: 'abbr'
                              },
                              {
                                label: 'address',
                                value: 'address'
                              },
                              {
                                label: 'area',
                                value: 'area'
                              },
                              {
                                label: 'article',
                                value: 'article'
                              },
                              {
                                label: 'aside',
                                value: 'aside'
                              },
                              {
                                label: 'audio',
                                value: 'audio'
                              },
                              {
                                label: 'b',
                                value: 'b'
                              },
                              {
                                label: 'base',
                                value: 'base'
                              },
                              {
                                label: 'bdi',
                                value: 'bdi'
                              },
                              {
                                label: 'bdo',
                                value: 'bdo'
                              },
                              {
                                label: 'blockquote',
                                value: 'blockquote'
                              },
                              {
                                label: 'body',
                                value: 'body'
                              },
                              {
                                label: 'br',
                                value: 'br'
                              },
                              {
                                label: 'canvas',
                                value: 'canvas'
                              },
                              {
                                label: 'caption',
                                value: 'caption'
                              },
                              {
                                label: 'cite',
                                value: 'cite'
                              },
                              {
                                label: 'col',
                                value: 'col'
                              },
                              {
                                label: 'colgroup',
                                value: 'colgroup'
                              },
                              {
                                label: 'data',
                                value: 'data'
                              },
                              {
                                label: 'datalist',
                                value: 'datalist'
                              },
                              {
                                label: 'dd',
                                value: 'dd'
                              },
                              {
                                label: 'del',
                                value: 'del'
                              },
                              {
                                label: 'details',
                                value: 'details'
                              },
                              {
                                label: 'dfn',
                                value: 'dfn'
                              },
                              {
                                label: 'dialog',
                                value: 'dialog'
                              },
                              {
                                label: 'dl',
                                value: 'dl'
                              },
                              {
                                label: 'dt',
                                value: 'dt'
                              },
                              {
                                label: 'em',
                                value: 'em'
                              },
                              {
                                label: 'embed',
                                value: 'embed'
                              },
                              {
                                label: 'fieldset',
                                value: 'fieldset'
                              },
                              {
                                label: 'figcaption',
                                value: 'figcaption'
                              },
                              {
                                label: 'figure',
                                value: 'figure'
                              },
                              {
                                label: 'footer',
                                value: 'footer'
                              },
                              {
                                label: 'h6',
                                value: 'h6'
                              },
                              {
                                label: 'head',
                                value: 'head'
                              },
                              {
                                label: 'header',
                                value: 'header'
                              },
                              {
                                label: 'hgroup',
                                value: 'hgroup'
                              },
                              {
                                label: 'hr',
                                value: 'hr'
                              },
                              {
                                label: 'html',
                                value: 'html'
                              },
                              {
                                label: 'i',
                                value: 'i'
                              },
                              {
                                label: 'iframe',
                                value: 'iframe'
                              },
                              {
                                label: 'img',
                                value: 'img'
                              },
                              {
                                label: 'ins',
                                value: 'ins'
                              },
                              {
                                label: 'kbd',
                                value: 'kbd'
                              },
                              {
                                label: 'legend',
                                value: 'legend'
                              },
                              {
                                label: 'li',
                                value: 'li'
                              },
                              {
                                label: 'main',
                                value: 'main'
                              },
                              {
                                label: 'map',
                                value: 'map'
                              },
                              {
                                label: 'meta',
                                value: 'meta'
                              },
                              {
                                label: 'meter',
                                value: 'meter'
                              },
                              {
                                label: 'nav',
                                value: 'nav'
                              },
                              {
                                label: 'noscript',
                                value: 'noscript'
                              },
                              {
                                label: 'ol',
                                value: 'ol'
                              },
                              {
                                label: 'optgroup',
                                value: 'optgroup'
                              },
                              {
                                label: 'option',
                                value: 'option'
                              },
                              {
                                label: 'output',
                                value: 'output'
                              },
                              {
                                label: 'p',
                                value: 'p'
                              },
                              {
                                label: 'param',
                                value: 'param'
                              },
                              {
                                label: 'picture',
                                value: 'picture'
                              },
                              {
                                label: 'pre',
                                value: 'pre'
                              },
                              {
                                label: 'q',
                                value: 'q'
                              },
                              {
                                label: 'rp',
                                value: 'rp'
                              },
                              {
                                label: 'rt',
                                value: 'rt'
                              },
                              {
                                label: 'ruby',
                                value: 'ruby'
                              },
                              {
                                label: 's',
                                value: 's'
                              },
                              {
                                label: 'samp',
                                value: 'samp'
                              },
                              {
                                label: 'script',
                                value: 'script'
                              },
                              {
                                label: 'section',
                                value: 'section'
                              },
                              {
                                label: 'slot',
                                value: 'slot'
                              },
                              {
                                label: 'source',
                                value: 'source'
                              },
                              {
                                label: 'sub',
                                value: 'sub'
                              },
                              {
                                label: 'summary',
                                value: 'summary'
                              },
                              {
                                label: 'sup',
                                value: 'sup'
                              },
                              {
                                label: 'table',
                                value: 'table'
                              },
                              {
                                label: 'tbody',
                                value: 'tbody'
                              },
                              {
                                label: 'td',
                                value: 'td'
                              },
                              {
                                label: 'template',
                                value: 'template'
                              },
                              {
                                label: 'textarea',
                                value: 'textarea'
                              },
                              {
                                label: 'tfoot',
                                value: 'tfoot'
                              },
                              {
                                label: 'th',
                                value: 'th'
                              },
                              {
                                label: 'thead',
                                value: 'thead'
                              },
                              {
                                label: 'time',
                                value: 'time'
                              },
                              {
                                label: 'tr',
                                value: 'tr'
                              },
                              {
                                label: 'track',
                                value: 'track'
                              },
                              {
                                label: 'u',
                                value: 'u'
                              },
                              {
                                label: 'ul',
                                value: 'ul'
                              },
                              {
                                label: 'var',
                                value: 'var'
                              },
                              {
                                label: 'video',
                                value: 'video'
                              },
                              {
                                label: 'wbr',
                                value: 'wbr'
                              },
                              {
                                label: 'big',
                                value: 'big'
                              },
                              {
                                label: 'keygen',
                                value: 'keygen'
                              },
                              {
                                label: 'menuitem',
                                value: 'menuitem'
                              },
                              {
                                label: 'webview',
                                value: 'webview'
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
                      'en-US': 'header',
                      'zh-CN': 'header'
                    }
                  },
                  name: 'header',
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
                                'en-US': 'wrapper',
                                'zh-CN': 'wrapper'
                              }
                            },
                            name: 'wrapper',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
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
                                  {
                                    componentName: 'SelectSetter',
                                    props: {
                                      dataSource: [
                                        {
                                          label: 'object',
                                          value: 'object'
                                        },
                                        {
                                          label: 'button',
                                          value: 'button'
                                        },
                                        {
                                          label: 'style',
                                          value: 'style'
                                        },
                                        {
                                          label: 'form',
                                          value: 'form'
                                        },
                                        {
                                          label: 'link',
                                          value: 'link'
                                        },
                                        {
                                          label: 'small',
                                          value: 'small'
                                        },
                                        {
                                          label: 'title',
                                          value: 'title'
                                        },
                                        {
                                          label: 'a',
                                          value: 'a'
                                        },
                                        {
                                          label: 'code',
                                          value: 'code'
                                        },
                                        {
                                          label: 'mark',
                                          value: 'mark'
                                        },
                                        {
                                          label: 'strong',
                                          value: 'strong'
                                        },
                                        {
                                          label: 'div',
                                          value: 'div'
                                        },
                                        {
                                          label: 'span',
                                          value: 'span'
                                        },
                                        {
                                          label: 'h1',
                                          value: 'h1'
                                        },
                                        {
                                          label: 'h2',
                                          value: 'h2'
                                        },
                                        {
                                          label: 'h3',
                                          value: 'h3'
                                        },
                                        {
                                          label: 'h4',
                                          value: 'h4'
                                        },
                                        {
                                          label: 'h5',
                                          value: 'h5'
                                        },
                                        {
                                          label: 'menu',
                                          value: 'menu'
                                        },
                                        {
                                          label: 'label',
                                          value: 'label'
                                        },
                                        {
                                          label: 'input',
                                          value: 'input'
                                        },
                                        {
                                          label: 'progress',
                                          value: 'progress'
                                        },
                                        {
                                          label: 'select',
                                          value: 'select'
                                        },
                                        {
                                          label: 'abbr',
                                          value: 'abbr'
                                        },
                                        {
                                          label: 'address',
                                          value: 'address'
                                        },
                                        {
                                          label: 'area',
                                          value: 'area'
                                        },
                                        {
                                          label: 'article',
                                          value: 'article'
                                        },
                                        {
                                          label: 'aside',
                                          value: 'aside'
                                        },
                                        {
                                          label: 'audio',
                                          value: 'audio'
                                        },
                                        {
                                          label: 'b',
                                          value: 'b'
                                        },
                                        {
                                          label: 'base',
                                          value: 'base'
                                        },
                                        {
                                          label: 'bdi',
                                          value: 'bdi'
                                        },
                                        {
                                          label: 'bdo',
                                          value: 'bdo'
                                        },
                                        {
                                          label: 'blockquote',
                                          value: 'blockquote'
                                        },
                                        {
                                          label: 'body',
                                          value: 'body'
                                        },
                                        {
                                          label: 'br',
                                          value: 'br'
                                        },
                                        {
                                          label: 'canvas',
                                          value: 'canvas'
                                        },
                                        {
                                          label: 'caption',
                                          value: 'caption'
                                        },
                                        {
                                          label: 'cite',
                                          value: 'cite'
                                        },
                                        {
                                          label: 'col',
                                          value: 'col'
                                        },
                                        {
                                          label: 'colgroup',
                                          value: 'colgroup'
                                        },
                                        {
                                          label: 'data',
                                          value: 'data'
                                        },
                                        {
                                          label: 'datalist',
                                          value: 'datalist'
                                        },
                                        {
                                          label: 'dd',
                                          value: 'dd'
                                        },
                                        {
                                          label: 'del',
                                          value: 'del'
                                        },
                                        {
                                          label: 'details',
                                          value: 'details'
                                        },
                                        {
                                          label: 'dfn',
                                          value: 'dfn'
                                        },
                                        {
                                          label: 'dialog',
                                          value: 'dialog'
                                        },
                                        {
                                          label: 'dl',
                                          value: 'dl'
                                        },
                                        {
                                          label: 'dt',
                                          value: 'dt'
                                        },
                                        {
                                          label: 'em',
                                          value: 'em'
                                        },
                                        {
                                          label: 'embed',
                                          value: 'embed'
                                        },
                                        {
                                          label: 'fieldset',
                                          value: 'fieldset'
                                        },
                                        {
                                          label: 'figcaption',
                                          value: 'figcaption'
                                        },
                                        {
                                          label: 'figure',
                                          value: 'figure'
                                        },
                                        {
                                          label: 'footer',
                                          value: 'footer'
                                        },
                                        {
                                          label: 'h6',
                                          value: 'h6'
                                        },
                                        {
                                          label: 'head',
                                          value: 'head'
                                        },
                                        {
                                          label: 'header',
                                          value: 'header'
                                        },
                                        {
                                          label: 'hgroup',
                                          value: 'hgroup'
                                        },
                                        {
                                          label: 'hr',
                                          value: 'hr'
                                        },
                                        {
                                          label: 'html',
                                          value: 'html'
                                        },
                                        {
                                          label: 'i',
                                          value: 'i'
                                        },
                                        {
                                          label: 'iframe',
                                          value: 'iframe'
                                        },
                                        {
                                          label: 'img',
                                          value: 'img'
                                        },
                                        {
                                          label: 'ins',
                                          value: 'ins'
                                        },
                                        {
                                          label: 'kbd',
                                          value: 'kbd'
                                        },
                                        {
                                          label: 'legend',
                                          value: 'legend'
                                        },
                                        {
                                          label: 'li',
                                          value: 'li'
                                        },
                                        {
                                          label: 'main',
                                          value: 'main'
                                        },
                                        {
                                          label: 'map',
                                          value: 'map'
                                        },
                                        {
                                          label: 'meta',
                                          value: 'meta'
                                        },
                                        {
                                          label: 'meter',
                                          value: 'meter'
                                        },
                                        {
                                          label: 'nav',
                                          value: 'nav'
                                        },
                                        {
                                          label: 'noscript',
                                          value: 'noscript'
                                        },
                                        {
                                          label: 'ol',
                                          value: 'ol'
                                        },
                                        {
                                          label: 'optgroup',
                                          value: 'optgroup'
                                        },
                                        {
                                          label: 'option',
                                          value: 'option'
                                        },
                                        {
                                          label: 'output',
                                          value: 'output'
                                        },
                                        {
                                          label: 'p',
                                          value: 'p'
                                        },
                                        {
                                          label: 'param',
                                          value: 'param'
                                        },
                                        {
                                          label: 'picture',
                                          value: 'picture'
                                        },
                                        {
                                          label: 'pre',
                                          value: 'pre'
                                        },
                                        {
                                          label: 'q',
                                          value: 'q'
                                        },
                                        {
                                          label: 'rp',
                                          value: 'rp'
                                        },
                                        {
                                          label: 'rt',
                                          value: 'rt'
                                        },
                                        {
                                          label: 'ruby',
                                          value: 'ruby'
                                        },
                                        {
                                          label: 's',
                                          value: 's'
                                        },
                                        {
                                          label: 'samp',
                                          value: 'samp'
                                        },
                                        {
                                          label: 'script',
                                          value: 'script'
                                        },
                                        {
                                          label: 'section',
                                          value: 'section'
                                        },
                                        {
                                          label: 'slot',
                                          value: 'slot'
                                        },
                                        {
                                          label: 'source',
                                          value: 'source'
                                        },
                                        {
                                          label: 'sub',
                                          value: 'sub'
                                        },
                                        {
                                          label: 'summary',
                                          value: 'summary'
                                        },
                                        {
                                          label: 'sup',
                                          value: 'sup'
                                        },
                                        {
                                          label: 'table',
                                          value: 'table'
                                        },
                                        {
                                          label: 'tbody',
                                          value: 'tbody'
                                        },
                                        {
                                          label: 'td',
                                          value: 'td'
                                        },
                                        {
                                          label: 'template',
                                          value: 'template'
                                        },
                                        {
                                          label: 'textarea',
                                          value: 'textarea'
                                        },
                                        {
                                          label: 'tfoot',
                                          value: 'tfoot'
                                        },
                                        {
                                          label: 'th',
                                          value: 'th'
                                        },
                                        {
                                          label: 'thead',
                                          value: 'thead'
                                        },
                                        {
                                          label: 'time',
                                          value: 'time'
                                        },
                                        {
                                          label: 'tr',
                                          value: 'tr'
                                        },
                                        {
                                          label: 'track',
                                          value: 'track'
                                        },
                                        {
                                          label: 'u',
                                          value: 'u'
                                        },
                                        {
                                          label: 'ul',
                                          value: 'ul'
                                        },
                                        {
                                          label: 'var',
                                          value: 'var'
                                        },
                                        {
                                          label: 'video',
                                          value: 'video'
                                        },
                                        {
                                          label: 'wbr',
                                          value: 'wbr'
                                        },
                                        {
                                          label: 'big',
                                          value: 'big'
                                        },
                                        {
                                          label: 'keygen',
                                          value: 'keygen'
                                        },
                                        {
                                          label: 'menuitem',
                                          value: 'menuitem'
                                        },
                                        {
                                          label: 'webview',
                                          value: 'webview'
                                        }
                                      ],
                                      options: [
                                        {
                                          label: 'object',
                                          value: 'object'
                                        },
                                        {
                                          label: 'button',
                                          value: 'button'
                                        },
                                        {
                                          label: 'style',
                                          value: 'style'
                                        },
                                        {
                                          label: 'form',
                                          value: 'form'
                                        },
                                        {
                                          label: 'link',
                                          value: 'link'
                                        },
                                        {
                                          label: 'small',
                                          value: 'small'
                                        },
                                        {
                                          label: 'title',
                                          value: 'title'
                                        },
                                        {
                                          label: 'a',
                                          value: 'a'
                                        },
                                        {
                                          label: 'code',
                                          value: 'code'
                                        },
                                        {
                                          label: 'mark',
                                          value: 'mark'
                                        },
                                        {
                                          label: 'strong',
                                          value: 'strong'
                                        },
                                        {
                                          label: 'div',
                                          value: 'div'
                                        },
                                        {
                                          label: 'span',
                                          value: 'span'
                                        },
                                        {
                                          label: 'h1',
                                          value: 'h1'
                                        },
                                        {
                                          label: 'h2',
                                          value: 'h2'
                                        },
                                        {
                                          label: 'h3',
                                          value: 'h3'
                                        },
                                        {
                                          label: 'h4',
                                          value: 'h4'
                                        },
                                        {
                                          label: 'h5',
                                          value: 'h5'
                                        },
                                        {
                                          label: 'menu',
                                          value: 'menu'
                                        },
                                        {
                                          label: 'label',
                                          value: 'label'
                                        },
                                        {
                                          label: 'input',
                                          value: 'input'
                                        },
                                        {
                                          label: 'progress',
                                          value: 'progress'
                                        },
                                        {
                                          label: 'select',
                                          value: 'select'
                                        },
                                        {
                                          label: 'abbr',
                                          value: 'abbr'
                                        },
                                        {
                                          label: 'address',
                                          value: 'address'
                                        },
                                        {
                                          label: 'area',
                                          value: 'area'
                                        },
                                        {
                                          label: 'article',
                                          value: 'article'
                                        },
                                        {
                                          label: 'aside',
                                          value: 'aside'
                                        },
                                        {
                                          label: 'audio',
                                          value: 'audio'
                                        },
                                        {
                                          label: 'b',
                                          value: 'b'
                                        },
                                        {
                                          label: 'base',
                                          value: 'base'
                                        },
                                        {
                                          label: 'bdi',
                                          value: 'bdi'
                                        },
                                        {
                                          label: 'bdo',
                                          value: 'bdo'
                                        },
                                        {
                                          label: 'blockquote',
                                          value: 'blockquote'
                                        },
                                        {
                                          label: 'body',
                                          value: 'body'
                                        },
                                        {
                                          label: 'br',
                                          value: 'br'
                                        },
                                        {
                                          label: 'canvas',
                                          value: 'canvas'
                                        },
                                        {
                                          label: 'caption',
                                          value: 'caption'
                                        },
                                        {
                                          label: 'cite',
                                          value: 'cite'
                                        },
                                        {
                                          label: 'col',
                                          value: 'col'
                                        },
                                        {
                                          label: 'colgroup',
                                          value: 'colgroup'
                                        },
                                        {
                                          label: 'data',
                                          value: 'data'
                                        },
                                        {
                                          label: 'datalist',
                                          value: 'datalist'
                                        },
                                        {
                                          label: 'dd',
                                          value: 'dd'
                                        },
                                        {
                                          label: 'del',
                                          value: 'del'
                                        },
                                        {
                                          label: 'details',
                                          value: 'details'
                                        },
                                        {
                                          label: 'dfn',
                                          value: 'dfn'
                                        },
                                        {
                                          label: 'dialog',
                                          value: 'dialog'
                                        },
                                        {
                                          label: 'dl',
                                          value: 'dl'
                                        },
                                        {
                                          label: 'dt',
                                          value: 'dt'
                                        },
                                        {
                                          label: 'em',
                                          value: 'em'
                                        },
                                        {
                                          label: 'embed',
                                          value: 'embed'
                                        },
                                        {
                                          label: 'fieldset',
                                          value: 'fieldset'
                                        },
                                        {
                                          label: 'figcaption',
                                          value: 'figcaption'
                                        },
                                        {
                                          label: 'figure',
                                          value: 'figure'
                                        },
                                        {
                                          label: 'footer',
                                          value: 'footer'
                                        },
                                        {
                                          label: 'h6',
                                          value: 'h6'
                                        },
                                        {
                                          label: 'head',
                                          value: 'head'
                                        },
                                        {
                                          label: 'header',
                                          value: 'header'
                                        },
                                        {
                                          label: 'hgroup',
                                          value: 'hgroup'
                                        },
                                        {
                                          label: 'hr',
                                          value: 'hr'
                                        },
                                        {
                                          label: 'html',
                                          value: 'html'
                                        },
                                        {
                                          label: 'i',
                                          value: 'i'
                                        },
                                        {
                                          label: 'iframe',
                                          value: 'iframe'
                                        },
                                        {
                                          label: 'img',
                                          value: 'img'
                                        },
                                        {
                                          label: 'ins',
                                          value: 'ins'
                                        },
                                        {
                                          label: 'kbd',
                                          value: 'kbd'
                                        },
                                        {
                                          label: 'legend',
                                          value: 'legend'
                                        },
                                        {
                                          label: 'li',
                                          value: 'li'
                                        },
                                        {
                                          label: 'main',
                                          value: 'main'
                                        },
                                        {
                                          label: 'map',
                                          value: 'map'
                                        },
                                        {
                                          label: 'meta',
                                          value: 'meta'
                                        },
                                        {
                                          label: 'meter',
                                          value: 'meter'
                                        },
                                        {
                                          label: 'nav',
                                          value: 'nav'
                                        },
                                        {
                                          label: 'noscript',
                                          value: 'noscript'
                                        },
                                        {
                                          label: 'ol',
                                          value: 'ol'
                                        },
                                        {
                                          label: 'optgroup',
                                          value: 'optgroup'
                                        },
                                        {
                                          label: 'option',
                                          value: 'option'
                                        },
                                        {
                                          label: 'output',
                                          value: 'output'
                                        },
                                        {
                                          label: 'p',
                                          value: 'p'
                                        },
                                        {
                                          label: 'param',
                                          value: 'param'
                                        },
                                        {
                                          label: 'picture',
                                          value: 'picture'
                                        },
                                        {
                                          label: 'pre',
                                          value: 'pre'
                                        },
                                        {
                                          label: 'q',
                                          value: 'q'
                                        },
                                        {
                                          label: 'rp',
                                          value: 'rp'
                                        },
                                        {
                                          label: 'rt',
                                          value: 'rt'
                                        },
                                        {
                                          label: 'ruby',
                                          value: 'ruby'
                                        },
                                        {
                                          label: 's',
                                          value: 's'
                                        },
                                        {
                                          label: 'samp',
                                          value: 'samp'
                                        },
                                        {
                                          label: 'script',
                                          value: 'script'
                                        },
                                        {
                                          label: 'section',
                                          value: 'section'
                                        },
                                        {
                                          label: 'slot',
                                          value: 'slot'
                                        },
                                        {
                                          label: 'source',
                                          value: 'source'
                                        },
                                        {
                                          label: 'sub',
                                          value: 'sub'
                                        },
                                        {
                                          label: 'summary',
                                          value: 'summary'
                                        },
                                        {
                                          label: 'sup',
                                          value: 'sup'
                                        },
                                        {
                                          label: 'table',
                                          value: 'table'
                                        },
                                        {
                                          label: 'tbody',
                                          value: 'tbody'
                                        },
                                        {
                                          label: 'td',
                                          value: 'td'
                                        },
                                        {
                                          label: 'template',
                                          value: 'template'
                                        },
                                        {
                                          label: 'textarea',
                                          value: 'textarea'
                                        },
                                        {
                                          label: 'tfoot',
                                          value: 'tfoot'
                                        },
                                        {
                                          label: 'th',
                                          value: 'th'
                                        },
                                        {
                                          label: 'thead',
                                          value: 'thead'
                                        },
                                        {
                                          label: 'time',
                                          value: 'time'
                                        },
                                        {
                                          label: 'tr',
                                          value: 'tr'
                                        },
                                        {
                                          label: 'track',
                                          value: 'track'
                                        },
                                        {
                                          label: 'u',
                                          value: 'u'
                                        },
                                        {
                                          label: 'ul',
                                          value: 'ul'
                                        },
                                        {
                                          label: 'var',
                                          value: 'var'
                                        },
                                        {
                                          label: 'video',
                                          value: 'video'
                                        },
                                        {
                                          label: 'wbr',
                                          value: 'wbr'
                                        },
                                        {
                                          label: 'big',
                                          value: 'big'
                                        },
                                        {
                                          label: 'keygen',
                                          value: 'keygen'
                                        },
                                        {
                                          label: 'menuitem',
                                          value: 'menuitem'
                                        },
                                        {
                                          label: 'webview',
                                          value: 'webview'
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
                                'en-US': 'row',
                                'zh-CN': 'row'
                              }
                            },
                            name: 'row',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
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
                                  {
                                    componentName: 'SelectSetter',
                                    props: {
                                      dataSource: [
                                        {
                                          label: 'object',
                                          value: 'object'
                                        },
                                        {
                                          label: 'button',
                                          value: 'button'
                                        },
                                        {
                                          label: 'style',
                                          value: 'style'
                                        },
                                        {
                                          label: 'form',
                                          value: 'form'
                                        },
                                        {
                                          label: 'link',
                                          value: 'link'
                                        },
                                        {
                                          label: 'small',
                                          value: 'small'
                                        },
                                        {
                                          label: 'title',
                                          value: 'title'
                                        },
                                        {
                                          label: 'a',
                                          value: 'a'
                                        },
                                        {
                                          label: 'code',
                                          value: 'code'
                                        },
                                        {
                                          label: 'mark',
                                          value: 'mark'
                                        },
                                        {
                                          label: 'strong',
                                          value: 'strong'
                                        },
                                        {
                                          label: 'div',
                                          value: 'div'
                                        },
                                        {
                                          label: 'span',
                                          value: 'span'
                                        },
                                        {
                                          label: 'h1',
                                          value: 'h1'
                                        },
                                        {
                                          label: 'h2',
                                          value: 'h2'
                                        },
                                        {
                                          label: 'h3',
                                          value: 'h3'
                                        },
                                        {
                                          label: 'h4',
                                          value: 'h4'
                                        },
                                        {
                                          label: 'h5',
                                          value: 'h5'
                                        },
                                        {
                                          label: 'menu',
                                          value: 'menu'
                                        },
                                        {
                                          label: 'label',
                                          value: 'label'
                                        },
                                        {
                                          label: 'input',
                                          value: 'input'
                                        },
                                        {
                                          label: 'progress',
                                          value: 'progress'
                                        },
                                        {
                                          label: 'select',
                                          value: 'select'
                                        },
                                        {
                                          label: 'abbr',
                                          value: 'abbr'
                                        },
                                        {
                                          label: 'address',
                                          value: 'address'
                                        },
                                        {
                                          label: 'area',
                                          value: 'area'
                                        },
                                        {
                                          label: 'article',
                                          value: 'article'
                                        },
                                        {
                                          label: 'aside',
                                          value: 'aside'
                                        },
                                        {
                                          label: 'audio',
                                          value: 'audio'
                                        },
                                        {
                                          label: 'b',
                                          value: 'b'
                                        },
                                        {
                                          label: 'base',
                                          value: 'base'
                                        },
                                        {
                                          label: 'bdi',
                                          value: 'bdi'
                                        },
                                        {
                                          label: 'bdo',
                                          value: 'bdo'
                                        },
                                        {
                                          label: 'blockquote',
                                          value: 'blockquote'
                                        },
                                        {
                                          label: 'body',
                                          value: 'body'
                                        },
                                        {
                                          label: 'br',
                                          value: 'br'
                                        },
                                        {
                                          label: 'canvas',
                                          value: 'canvas'
                                        },
                                        {
                                          label: 'caption',
                                          value: 'caption'
                                        },
                                        {
                                          label: 'cite',
                                          value: 'cite'
                                        },
                                        {
                                          label: 'col',
                                          value: 'col'
                                        },
                                        {
                                          label: 'colgroup',
                                          value: 'colgroup'
                                        },
                                        {
                                          label: 'data',
                                          value: 'data'
                                        },
                                        {
                                          label: 'datalist',
                                          value: 'datalist'
                                        },
                                        {
                                          label: 'dd',
                                          value: 'dd'
                                        },
                                        {
                                          label: 'del',
                                          value: 'del'
                                        },
                                        {
                                          label: 'details',
                                          value: 'details'
                                        },
                                        {
                                          label: 'dfn',
                                          value: 'dfn'
                                        },
                                        {
                                          label: 'dialog',
                                          value: 'dialog'
                                        },
                                        {
                                          label: 'dl',
                                          value: 'dl'
                                        },
                                        {
                                          label: 'dt',
                                          value: 'dt'
                                        },
                                        {
                                          label: 'em',
                                          value: 'em'
                                        },
                                        {
                                          label: 'embed',
                                          value: 'embed'
                                        },
                                        {
                                          label: 'fieldset',
                                          value: 'fieldset'
                                        },
                                        {
                                          label: 'figcaption',
                                          value: 'figcaption'
                                        },
                                        {
                                          label: 'figure',
                                          value: 'figure'
                                        },
                                        {
                                          label: 'footer',
                                          value: 'footer'
                                        },
                                        {
                                          label: 'h6',
                                          value: 'h6'
                                        },
                                        {
                                          label: 'head',
                                          value: 'head'
                                        },
                                        {
                                          label: 'header',
                                          value: 'header'
                                        },
                                        {
                                          label: 'hgroup',
                                          value: 'hgroup'
                                        },
                                        {
                                          label: 'hr',
                                          value: 'hr'
                                        },
                                        {
                                          label: 'html',
                                          value: 'html'
                                        },
                                        {
                                          label: 'i',
                                          value: 'i'
                                        },
                                        {
                                          label: 'iframe',
                                          value: 'iframe'
                                        },
                                        {
                                          label: 'img',
                                          value: 'img'
                                        },
                                        {
                                          label: 'ins',
                                          value: 'ins'
                                        },
                                        {
                                          label: 'kbd',
                                          value: 'kbd'
                                        },
                                        {
                                          label: 'legend',
                                          value: 'legend'
                                        },
                                        {
                                          label: 'li',
                                          value: 'li'
                                        },
                                        {
                                          label: 'main',
                                          value: 'main'
                                        },
                                        {
                                          label: 'map',
                                          value: 'map'
                                        },
                                        {
                                          label: 'meta',
                                          value: 'meta'
                                        },
                                        {
                                          label: 'meter',
                                          value: 'meter'
                                        },
                                        {
                                          label: 'nav',
                                          value: 'nav'
                                        },
                                        {
                                          label: 'noscript',
                                          value: 'noscript'
                                        },
                                        {
                                          label: 'ol',
                                          value: 'ol'
                                        },
                                        {
                                          label: 'optgroup',
                                          value: 'optgroup'
                                        },
                                        {
                                          label: 'option',
                                          value: 'option'
                                        },
                                        {
                                          label: 'output',
                                          value: 'output'
                                        },
                                        {
                                          label: 'p',
                                          value: 'p'
                                        },
                                        {
                                          label: 'param',
                                          value: 'param'
                                        },
                                        {
                                          label: 'picture',
                                          value: 'picture'
                                        },
                                        {
                                          label: 'pre',
                                          value: 'pre'
                                        },
                                        {
                                          label: 'q',
                                          value: 'q'
                                        },
                                        {
                                          label: 'rp',
                                          value: 'rp'
                                        },
                                        {
                                          label: 'rt',
                                          value: 'rt'
                                        },
                                        {
                                          label: 'ruby',
                                          value: 'ruby'
                                        },
                                        {
                                          label: 's',
                                          value: 's'
                                        },
                                        {
                                          label: 'samp',
                                          value: 'samp'
                                        },
                                        {
                                          label: 'script',
                                          value: 'script'
                                        },
                                        {
                                          label: 'section',
                                          value: 'section'
                                        },
                                        {
                                          label: 'slot',
                                          value: 'slot'
                                        },
                                        {
                                          label: 'source',
                                          value: 'source'
                                        },
                                        {
                                          label: 'sub',
                                          value: 'sub'
                                        },
                                        {
                                          label: 'summary',
                                          value: 'summary'
                                        },
                                        {
                                          label: 'sup',
                                          value: 'sup'
                                        },
                                        {
                                          label: 'table',
                                          value: 'table'
                                        },
                                        {
                                          label: 'tbody',
                                          value: 'tbody'
                                        },
                                        {
                                          label: 'td',
                                          value: 'td'
                                        },
                                        {
                                          label: 'template',
                                          value: 'template'
                                        },
                                        {
                                          label: 'textarea',
                                          value: 'textarea'
                                        },
                                        {
                                          label: 'tfoot',
                                          value: 'tfoot'
                                        },
                                        {
                                          label: 'th',
                                          value: 'th'
                                        },
                                        {
                                          label: 'thead',
                                          value: 'thead'
                                        },
                                        {
                                          label: 'time',
                                          value: 'time'
                                        },
                                        {
                                          label: 'tr',
                                          value: 'tr'
                                        },
                                        {
                                          label: 'track',
                                          value: 'track'
                                        },
                                        {
                                          label: 'u',
                                          value: 'u'
                                        },
                                        {
                                          label: 'ul',
                                          value: 'ul'
                                        },
                                        {
                                          label: 'var',
                                          value: 'var'
                                        },
                                        {
                                          label: 'video',
                                          value: 'video'
                                        },
                                        {
                                          label: 'wbr',
                                          value: 'wbr'
                                        },
                                        {
                                          label: 'big',
                                          value: 'big'
                                        },
                                        {
                                          label: 'keygen',
                                          value: 'keygen'
                                        },
                                        {
                                          label: 'menuitem',
                                          value: 'menuitem'
                                        },
                                        {
                                          label: 'webview',
                                          value: 'webview'
                                        }
                                      ],
                                      options: [
                                        {
                                          label: 'object',
                                          value: 'object'
                                        },
                                        {
                                          label: 'button',
                                          value: 'button'
                                        },
                                        {
                                          label: 'style',
                                          value: 'style'
                                        },
                                        {
                                          label: 'form',
                                          value: 'form'
                                        },
                                        {
                                          label: 'link',
                                          value: 'link'
                                        },
                                        {
                                          label: 'small',
                                          value: 'small'
                                        },
                                        {
                                          label: 'title',
                                          value: 'title'
                                        },
                                        {
                                          label: 'a',
                                          value: 'a'
                                        },
                                        {
                                          label: 'code',
                                          value: 'code'
                                        },
                                        {
                                          label: 'mark',
                                          value: 'mark'
                                        },
                                        {
                                          label: 'strong',
                                          value: 'strong'
                                        },
                                        {
                                          label: 'div',
                                          value: 'div'
                                        },
                                        {
                                          label: 'span',
                                          value: 'span'
                                        },
                                        {
                                          label: 'h1',
                                          value: 'h1'
                                        },
                                        {
                                          label: 'h2',
                                          value: 'h2'
                                        },
                                        {
                                          label: 'h3',
                                          value: 'h3'
                                        },
                                        {
                                          label: 'h4',
                                          value: 'h4'
                                        },
                                        {
                                          label: 'h5',
                                          value: 'h5'
                                        },
                                        {
                                          label: 'menu',
                                          value: 'menu'
                                        },
                                        {
                                          label: 'label',
                                          value: 'label'
                                        },
                                        {
                                          label: 'input',
                                          value: 'input'
                                        },
                                        {
                                          label: 'progress',
                                          value: 'progress'
                                        },
                                        {
                                          label: 'select',
                                          value: 'select'
                                        },
                                        {
                                          label: 'abbr',
                                          value: 'abbr'
                                        },
                                        {
                                          label: 'address',
                                          value: 'address'
                                        },
                                        {
                                          label: 'area',
                                          value: 'area'
                                        },
                                        {
                                          label: 'article',
                                          value: 'article'
                                        },
                                        {
                                          label: 'aside',
                                          value: 'aside'
                                        },
                                        {
                                          label: 'audio',
                                          value: 'audio'
                                        },
                                        {
                                          label: 'b',
                                          value: 'b'
                                        },
                                        {
                                          label: 'base',
                                          value: 'base'
                                        },
                                        {
                                          label: 'bdi',
                                          value: 'bdi'
                                        },
                                        {
                                          label: 'bdo',
                                          value: 'bdo'
                                        },
                                        {
                                          label: 'blockquote',
                                          value: 'blockquote'
                                        },
                                        {
                                          label: 'body',
                                          value: 'body'
                                        },
                                        {
                                          label: 'br',
                                          value: 'br'
                                        },
                                        {
                                          label: 'canvas',
                                          value: 'canvas'
                                        },
                                        {
                                          label: 'caption',
                                          value: 'caption'
                                        },
                                        {
                                          label: 'cite',
                                          value: 'cite'
                                        },
                                        {
                                          label: 'col',
                                          value: 'col'
                                        },
                                        {
                                          label: 'colgroup',
                                          value: 'colgroup'
                                        },
                                        {
                                          label: 'data',
                                          value: 'data'
                                        },
                                        {
                                          label: 'datalist',
                                          value: 'datalist'
                                        },
                                        {
                                          label: 'dd',
                                          value: 'dd'
                                        },
                                        {
                                          label: 'del',
                                          value: 'del'
                                        },
                                        {
                                          label: 'details',
                                          value: 'details'
                                        },
                                        {
                                          label: 'dfn',
                                          value: 'dfn'
                                        },
                                        {
                                          label: 'dialog',
                                          value: 'dialog'
                                        },
                                        {
                                          label: 'dl',
                                          value: 'dl'
                                        },
                                        {
                                          label: 'dt',
                                          value: 'dt'
                                        },
                                        {
                                          label: 'em',
                                          value: 'em'
                                        },
                                        {
                                          label: 'embed',
                                          value: 'embed'
                                        },
                                        {
                                          label: 'fieldset',
                                          value: 'fieldset'
                                        },
                                        {
                                          label: 'figcaption',
                                          value: 'figcaption'
                                        },
                                        {
                                          label: 'figure',
                                          value: 'figure'
                                        },
                                        {
                                          label: 'footer',
                                          value: 'footer'
                                        },
                                        {
                                          label: 'h6',
                                          value: 'h6'
                                        },
                                        {
                                          label: 'head',
                                          value: 'head'
                                        },
                                        {
                                          label: 'header',
                                          value: 'header'
                                        },
                                        {
                                          label: 'hgroup',
                                          value: 'hgroup'
                                        },
                                        {
                                          label: 'hr',
                                          value: 'hr'
                                        },
                                        {
                                          label: 'html',
                                          value: 'html'
                                        },
                                        {
                                          label: 'i',
                                          value: 'i'
                                        },
                                        {
                                          label: 'iframe',
                                          value: 'iframe'
                                        },
                                        {
                                          label: 'img',
                                          value: 'img'
                                        },
                                        {
                                          label: 'ins',
                                          value: 'ins'
                                        },
                                        {
                                          label: 'kbd',
                                          value: 'kbd'
                                        },
                                        {
                                          label: 'legend',
                                          value: 'legend'
                                        },
                                        {
                                          label: 'li',
                                          value: 'li'
                                        },
                                        {
                                          label: 'main',
                                          value: 'main'
                                        },
                                        {
                                          label: 'map',
                                          value: 'map'
                                        },
                                        {
                                          label: 'meta',
                                          value: 'meta'
                                        },
                                        {
                                          label: 'meter',
                                          value: 'meter'
                                        },
                                        {
                                          label: 'nav',
                                          value: 'nav'
                                        },
                                        {
                                          label: 'noscript',
                                          value: 'noscript'
                                        },
                                        {
                                          label: 'ol',
                                          value: 'ol'
                                        },
                                        {
                                          label: 'optgroup',
                                          value: 'optgroup'
                                        },
                                        {
                                          label: 'option',
                                          value: 'option'
                                        },
                                        {
                                          label: 'output',
                                          value: 'output'
                                        },
                                        {
                                          label: 'p',
                                          value: 'p'
                                        },
                                        {
                                          label: 'param',
                                          value: 'param'
                                        },
                                        {
                                          label: 'picture',
                                          value: 'picture'
                                        },
                                        {
                                          label: 'pre',
                                          value: 'pre'
                                        },
                                        {
                                          label: 'q',
                                          value: 'q'
                                        },
                                        {
                                          label: 'rp',
                                          value: 'rp'
                                        },
                                        {
                                          label: 'rt',
                                          value: 'rt'
                                        },
                                        {
                                          label: 'ruby',
                                          value: 'ruby'
                                        },
                                        {
                                          label: 's',
                                          value: 's'
                                        },
                                        {
                                          label: 'samp',
                                          value: 'samp'
                                        },
                                        {
                                          label: 'script',
                                          value: 'script'
                                        },
                                        {
                                          label: 'section',
                                          value: 'section'
                                        },
                                        {
                                          label: 'slot',
                                          value: 'slot'
                                        },
                                        {
                                          label: 'source',
                                          value: 'source'
                                        },
                                        {
                                          label: 'sub',
                                          value: 'sub'
                                        },
                                        {
                                          label: 'summary',
                                          value: 'summary'
                                        },
                                        {
                                          label: 'sup',
                                          value: 'sup'
                                        },
                                        {
                                          label: 'table',
                                          value: 'table'
                                        },
                                        {
                                          label: 'tbody',
                                          value: 'tbody'
                                        },
                                        {
                                          label: 'td',
                                          value: 'td'
                                        },
                                        {
                                          label: 'template',
                                          value: 'template'
                                        },
                                        {
                                          label: 'textarea',
                                          value: 'textarea'
                                        },
                                        {
                                          label: 'tfoot',
                                          value: 'tfoot'
                                        },
                                        {
                                          label: 'th',
                                          value: 'th'
                                        },
                                        {
                                          label: 'thead',
                                          value: 'thead'
                                        },
                                        {
                                          label: 'time',
                                          value: 'time'
                                        },
                                        {
                                          label: 'tr',
                                          value: 'tr'
                                        },
                                        {
                                          label: 'track',
                                          value: 'track'
                                        },
                                        {
                                          label: 'u',
                                          value: 'u'
                                        },
                                        {
                                          label: 'ul',
                                          value: 'ul'
                                        },
                                        {
                                          label: 'var',
                                          value: 'var'
                                        },
                                        {
                                          label: 'video',
                                          value: 'video'
                                        },
                                        {
                                          label: 'wbr',
                                          value: 'wbr'
                                        },
                                        {
                                          label: 'big',
                                          value: 'big'
                                        },
                                        {
                                          label: 'keygen',
                                          value: 'keygen'
                                        },
                                        {
                                          label: 'menuitem',
                                          value: 'menuitem'
                                        },
                                        {
                                          label: 'webview',
                                          value: 'webview'
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
                                'en-US': 'cell',
                                'zh-CN': 'cell'
                              }
                            },
                            name: 'cell',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
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
                                  {
                                    componentName: 'SelectSetter',
                                    props: {
                                      dataSource: [
                                        {
                                          label: 'object',
                                          value: 'object'
                                        },
                                        {
                                          label: 'button',
                                          value: 'button'
                                        },
                                        {
                                          label: 'style',
                                          value: 'style'
                                        },
                                        {
                                          label: 'form',
                                          value: 'form'
                                        },
                                        {
                                          label: 'link',
                                          value: 'link'
                                        },
                                        {
                                          label: 'small',
                                          value: 'small'
                                        },
                                        {
                                          label: 'title',
                                          value: 'title'
                                        },
                                        {
                                          label: 'a',
                                          value: 'a'
                                        },
                                        {
                                          label: 'code',
                                          value: 'code'
                                        },
                                        {
                                          label: 'mark',
                                          value: 'mark'
                                        },
                                        {
                                          label: 'strong',
                                          value: 'strong'
                                        },
                                        {
                                          label: 'div',
                                          value: 'div'
                                        },
                                        {
                                          label: 'span',
                                          value: 'span'
                                        },
                                        {
                                          label: 'h1',
                                          value: 'h1'
                                        },
                                        {
                                          label: 'h2',
                                          value: 'h2'
                                        },
                                        {
                                          label: 'h3',
                                          value: 'h3'
                                        },
                                        {
                                          label: 'h4',
                                          value: 'h4'
                                        },
                                        {
                                          label: 'h5',
                                          value: 'h5'
                                        },
                                        {
                                          label: 'menu',
                                          value: 'menu'
                                        },
                                        {
                                          label: 'label',
                                          value: 'label'
                                        },
                                        {
                                          label: 'input',
                                          value: 'input'
                                        },
                                        {
                                          label: 'progress',
                                          value: 'progress'
                                        },
                                        {
                                          label: 'select',
                                          value: 'select'
                                        },
                                        {
                                          label: 'abbr',
                                          value: 'abbr'
                                        },
                                        {
                                          label: 'address',
                                          value: 'address'
                                        },
                                        {
                                          label: 'area',
                                          value: 'area'
                                        },
                                        {
                                          label: 'article',
                                          value: 'article'
                                        },
                                        {
                                          label: 'aside',
                                          value: 'aside'
                                        },
                                        {
                                          label: 'audio',
                                          value: 'audio'
                                        },
                                        {
                                          label: 'b',
                                          value: 'b'
                                        },
                                        {
                                          label: 'base',
                                          value: 'base'
                                        },
                                        {
                                          label: 'bdi',
                                          value: 'bdi'
                                        },
                                        {
                                          label: 'bdo',
                                          value: 'bdo'
                                        },
                                        {
                                          label: 'blockquote',
                                          value: 'blockquote'
                                        },
                                        {
                                          label: 'body',
                                          value: 'body'
                                        },
                                        {
                                          label: 'br',
                                          value: 'br'
                                        },
                                        {
                                          label: 'canvas',
                                          value: 'canvas'
                                        },
                                        {
                                          label: 'caption',
                                          value: 'caption'
                                        },
                                        {
                                          label: 'cite',
                                          value: 'cite'
                                        },
                                        {
                                          label: 'col',
                                          value: 'col'
                                        },
                                        {
                                          label: 'colgroup',
                                          value: 'colgroup'
                                        },
                                        {
                                          label: 'data',
                                          value: 'data'
                                        },
                                        {
                                          label: 'datalist',
                                          value: 'datalist'
                                        },
                                        {
                                          label: 'dd',
                                          value: 'dd'
                                        },
                                        {
                                          label: 'del',
                                          value: 'del'
                                        },
                                        {
                                          label: 'details',
                                          value: 'details'
                                        },
                                        {
                                          label: 'dfn',
                                          value: 'dfn'
                                        },
                                        {
                                          label: 'dialog',
                                          value: 'dialog'
                                        },
                                        {
                                          label: 'dl',
                                          value: 'dl'
                                        },
                                        {
                                          label: 'dt',
                                          value: 'dt'
                                        },
                                        {
                                          label: 'em',
                                          value: 'em'
                                        },
                                        {
                                          label: 'embed',
                                          value: 'embed'
                                        },
                                        {
                                          label: 'fieldset',
                                          value: 'fieldset'
                                        },
                                        {
                                          label: 'figcaption',
                                          value: 'figcaption'
                                        },
                                        {
                                          label: 'figure',
                                          value: 'figure'
                                        },
                                        {
                                          label: 'footer',
                                          value: 'footer'
                                        },
                                        {
                                          label: 'h6',
                                          value: 'h6'
                                        },
                                        {
                                          label: 'head',
                                          value: 'head'
                                        },
                                        {
                                          label: 'header',
                                          value: 'header'
                                        },
                                        {
                                          label: 'hgroup',
                                          value: 'hgroup'
                                        },
                                        {
                                          label: 'hr',
                                          value: 'hr'
                                        },
                                        {
                                          label: 'html',
                                          value: 'html'
                                        },
                                        {
                                          label: 'i',
                                          value: 'i'
                                        },
                                        {
                                          label: 'iframe',
                                          value: 'iframe'
                                        },
                                        {
                                          label: 'img',
                                          value: 'img'
                                        },
                                        {
                                          label: 'ins',
                                          value: 'ins'
                                        },
                                        {
                                          label: 'kbd',
                                          value: 'kbd'
                                        },
                                        {
                                          label: 'legend',
                                          value: 'legend'
                                        },
                                        {
                                          label: 'li',
                                          value: 'li'
                                        },
                                        {
                                          label: 'main',
                                          value: 'main'
                                        },
                                        {
                                          label: 'map',
                                          value: 'map'
                                        },
                                        {
                                          label: 'meta',
                                          value: 'meta'
                                        },
                                        {
                                          label: 'meter',
                                          value: 'meter'
                                        },
                                        {
                                          label: 'nav',
                                          value: 'nav'
                                        },
                                        {
                                          label: 'noscript',
                                          value: 'noscript'
                                        },
                                        {
                                          label: 'ol',
                                          value: 'ol'
                                        },
                                        {
                                          label: 'optgroup',
                                          value: 'optgroup'
                                        },
                                        {
                                          label: 'option',
                                          value: 'option'
                                        },
                                        {
                                          label: 'output',
                                          value: 'output'
                                        },
                                        {
                                          label: 'p',
                                          value: 'p'
                                        },
                                        {
                                          label: 'param',
                                          value: 'param'
                                        },
                                        {
                                          label: 'picture',
                                          value: 'picture'
                                        },
                                        {
                                          label: 'pre',
                                          value: 'pre'
                                        },
                                        {
                                          label: 'q',
                                          value: 'q'
                                        },
                                        {
                                          label: 'rp',
                                          value: 'rp'
                                        },
                                        {
                                          label: 'rt',
                                          value: 'rt'
                                        },
                                        {
                                          label: 'ruby',
                                          value: 'ruby'
                                        },
                                        {
                                          label: 's',
                                          value: 's'
                                        },
                                        {
                                          label: 'samp',
                                          value: 'samp'
                                        },
                                        {
                                          label: 'script',
                                          value: 'script'
                                        },
                                        {
                                          label: 'section',
                                          value: 'section'
                                        },
                                        {
                                          label: 'slot',
                                          value: 'slot'
                                        },
                                        {
                                          label: 'source',
                                          value: 'source'
                                        },
                                        {
                                          label: 'sub',
                                          value: 'sub'
                                        },
                                        {
                                          label: 'summary',
                                          value: 'summary'
                                        },
                                        {
                                          label: 'sup',
                                          value: 'sup'
                                        },
                                        {
                                          label: 'table',
                                          value: 'table'
                                        },
                                        {
                                          label: 'tbody',
                                          value: 'tbody'
                                        },
                                        {
                                          label: 'td',
                                          value: 'td'
                                        },
                                        {
                                          label: 'template',
                                          value: 'template'
                                        },
                                        {
                                          label: 'textarea',
                                          value: 'textarea'
                                        },
                                        {
                                          label: 'tfoot',
                                          value: 'tfoot'
                                        },
                                        {
                                          label: 'th',
                                          value: 'th'
                                        },
                                        {
                                          label: 'thead',
                                          value: 'thead'
                                        },
                                        {
                                          label: 'time',
                                          value: 'time'
                                        },
                                        {
                                          label: 'tr',
                                          value: 'tr'
                                        },
                                        {
                                          label: 'track',
                                          value: 'track'
                                        },
                                        {
                                          label: 'u',
                                          value: 'u'
                                        },
                                        {
                                          label: 'ul',
                                          value: 'ul'
                                        },
                                        {
                                          label: 'var',
                                          value: 'var'
                                        },
                                        {
                                          label: 'video',
                                          value: 'video'
                                        },
                                        {
                                          label: 'wbr',
                                          value: 'wbr'
                                        },
                                        {
                                          label: 'big',
                                          value: 'big'
                                        },
                                        {
                                          label: 'keygen',
                                          value: 'keygen'
                                        },
                                        {
                                          label: 'menuitem',
                                          value: 'menuitem'
                                        },
                                        {
                                          label: 'webview',
                                          value: 'webview'
                                        }
                                      ],
                                      options: [
                                        {
                                          label: 'object',
                                          value: 'object'
                                        },
                                        {
                                          label: 'button',
                                          value: 'button'
                                        },
                                        {
                                          label: 'style',
                                          value: 'style'
                                        },
                                        {
                                          label: 'form',
                                          value: 'form'
                                        },
                                        {
                                          label: 'link',
                                          value: 'link'
                                        },
                                        {
                                          label: 'small',
                                          value: 'small'
                                        },
                                        {
                                          label: 'title',
                                          value: 'title'
                                        },
                                        {
                                          label: 'a',
                                          value: 'a'
                                        },
                                        {
                                          label: 'code',
                                          value: 'code'
                                        },
                                        {
                                          label: 'mark',
                                          value: 'mark'
                                        },
                                        {
                                          label: 'strong',
                                          value: 'strong'
                                        },
                                        {
                                          label: 'div',
                                          value: 'div'
                                        },
                                        {
                                          label: 'span',
                                          value: 'span'
                                        },
                                        {
                                          label: 'h1',
                                          value: 'h1'
                                        },
                                        {
                                          label: 'h2',
                                          value: 'h2'
                                        },
                                        {
                                          label: 'h3',
                                          value: 'h3'
                                        },
                                        {
                                          label: 'h4',
                                          value: 'h4'
                                        },
                                        {
                                          label: 'h5',
                                          value: 'h5'
                                        },
                                        {
                                          label: 'menu',
                                          value: 'menu'
                                        },
                                        {
                                          label: 'label',
                                          value: 'label'
                                        },
                                        {
                                          label: 'input',
                                          value: 'input'
                                        },
                                        {
                                          label: 'progress',
                                          value: 'progress'
                                        },
                                        {
                                          label: 'select',
                                          value: 'select'
                                        },
                                        {
                                          label: 'abbr',
                                          value: 'abbr'
                                        },
                                        {
                                          label: 'address',
                                          value: 'address'
                                        },
                                        {
                                          label: 'area',
                                          value: 'area'
                                        },
                                        {
                                          label: 'article',
                                          value: 'article'
                                        },
                                        {
                                          label: 'aside',
                                          value: 'aside'
                                        },
                                        {
                                          label: 'audio',
                                          value: 'audio'
                                        },
                                        {
                                          label: 'b',
                                          value: 'b'
                                        },
                                        {
                                          label: 'base',
                                          value: 'base'
                                        },
                                        {
                                          label: 'bdi',
                                          value: 'bdi'
                                        },
                                        {
                                          label: 'bdo',
                                          value: 'bdo'
                                        },
                                        {
                                          label: 'blockquote',
                                          value: 'blockquote'
                                        },
                                        {
                                          label: 'body',
                                          value: 'body'
                                        },
                                        {
                                          label: 'br',
                                          value: 'br'
                                        },
                                        {
                                          label: 'canvas',
                                          value: 'canvas'
                                        },
                                        {
                                          label: 'caption',
                                          value: 'caption'
                                        },
                                        {
                                          label: 'cite',
                                          value: 'cite'
                                        },
                                        {
                                          label: 'col',
                                          value: 'col'
                                        },
                                        {
                                          label: 'colgroup',
                                          value: 'colgroup'
                                        },
                                        {
                                          label: 'data',
                                          value: 'data'
                                        },
                                        {
                                          label: 'datalist',
                                          value: 'datalist'
                                        },
                                        {
                                          label: 'dd',
                                          value: 'dd'
                                        },
                                        {
                                          label: 'del',
                                          value: 'del'
                                        },
                                        {
                                          label: 'details',
                                          value: 'details'
                                        },
                                        {
                                          label: 'dfn',
                                          value: 'dfn'
                                        },
                                        {
                                          label: 'dialog',
                                          value: 'dialog'
                                        },
                                        {
                                          label: 'dl',
                                          value: 'dl'
                                        },
                                        {
                                          label: 'dt',
                                          value: 'dt'
                                        },
                                        {
                                          label: 'em',
                                          value: 'em'
                                        },
                                        {
                                          label: 'embed',
                                          value: 'embed'
                                        },
                                        {
                                          label: 'fieldset',
                                          value: 'fieldset'
                                        },
                                        {
                                          label: 'figcaption',
                                          value: 'figcaption'
                                        },
                                        {
                                          label: 'figure',
                                          value: 'figure'
                                        },
                                        {
                                          label: 'footer',
                                          value: 'footer'
                                        },
                                        {
                                          label: 'h6',
                                          value: 'h6'
                                        },
                                        {
                                          label: 'head',
                                          value: 'head'
                                        },
                                        {
                                          label: 'header',
                                          value: 'header'
                                        },
                                        {
                                          label: 'hgroup',
                                          value: 'hgroup'
                                        },
                                        {
                                          label: 'hr',
                                          value: 'hr'
                                        },
                                        {
                                          label: 'html',
                                          value: 'html'
                                        },
                                        {
                                          label: 'i',
                                          value: 'i'
                                        },
                                        {
                                          label: 'iframe',
                                          value: 'iframe'
                                        },
                                        {
                                          label: 'img',
                                          value: 'img'
                                        },
                                        {
                                          label: 'ins',
                                          value: 'ins'
                                        },
                                        {
                                          label: 'kbd',
                                          value: 'kbd'
                                        },
                                        {
                                          label: 'legend',
                                          value: 'legend'
                                        },
                                        {
                                          label: 'li',
                                          value: 'li'
                                        },
                                        {
                                          label: 'main',
                                          value: 'main'
                                        },
                                        {
                                          label: 'map',
                                          value: 'map'
                                        },
                                        {
                                          label: 'meta',
                                          value: 'meta'
                                        },
                                        {
                                          label: 'meter',
                                          value: 'meter'
                                        },
                                        {
                                          label: 'nav',
                                          value: 'nav'
                                        },
                                        {
                                          label: 'noscript',
                                          value: 'noscript'
                                        },
                                        {
                                          label: 'ol',
                                          value: 'ol'
                                        },
                                        {
                                          label: 'optgroup',
                                          value: 'optgroup'
                                        },
                                        {
                                          label: 'option',
                                          value: 'option'
                                        },
                                        {
                                          label: 'output',
                                          value: 'output'
                                        },
                                        {
                                          label: 'p',
                                          value: 'p'
                                        },
                                        {
                                          label: 'param',
                                          value: 'param'
                                        },
                                        {
                                          label: 'picture',
                                          value: 'picture'
                                        },
                                        {
                                          label: 'pre',
                                          value: 'pre'
                                        },
                                        {
                                          label: 'q',
                                          value: 'q'
                                        },
                                        {
                                          label: 'rp',
                                          value: 'rp'
                                        },
                                        {
                                          label: 'rt',
                                          value: 'rt'
                                        },
                                        {
                                          label: 'ruby',
                                          value: 'ruby'
                                        },
                                        {
                                          label: 's',
                                          value: 's'
                                        },
                                        {
                                          label: 'samp',
                                          value: 'samp'
                                        },
                                        {
                                          label: 'script',
                                          value: 'script'
                                        },
                                        {
                                          label: 'section',
                                          value: 'section'
                                        },
                                        {
                                          label: 'slot',
                                          value: 'slot'
                                        },
                                        {
                                          label: 'source',
                                          value: 'source'
                                        },
                                        {
                                          label: 'sub',
                                          value: 'sub'
                                        },
                                        {
                                          label: 'summary',
                                          value: 'summary'
                                        },
                                        {
                                          label: 'sup',
                                          value: 'sup'
                                        },
                                        {
                                          label: 'table',
                                          value: 'table'
                                        },
                                        {
                                          label: 'tbody',
                                          value: 'tbody'
                                        },
                                        {
                                          label: 'td',
                                          value: 'td'
                                        },
                                        {
                                          label: 'template',
                                          value: 'template'
                                        },
                                        {
                                          label: 'textarea',
                                          value: 'textarea'
                                        },
                                        {
                                          label: 'tfoot',
                                          value: 'tfoot'
                                        },
                                        {
                                          label: 'th',
                                          value: 'th'
                                        },
                                        {
                                          label: 'thead',
                                          value: 'thead'
                                        },
                                        {
                                          label: 'time',
                                          value: 'time'
                                        },
                                        {
                                          label: 'tr',
                                          value: 'tr'
                                        },
                                        {
                                          label: 'track',
                                          value: 'track'
                                        },
                                        {
                                          label: 'u',
                                          value: 'u'
                                        },
                                        {
                                          label: 'ul',
                                          value: 'ul'
                                        },
                                        {
                                          label: 'var',
                                          value: 'var'
                                        },
                                        {
                                          label: 'video',
                                          value: 'video'
                                        },
                                        {
                                          label: 'wbr',
                                          value: 'wbr'
                                        },
                                        {
                                          label: 'big',
                                          value: 'big'
                                        },
                                        {
                                          label: 'keygen',
                                          value: 'keygen'
                                        },
                                        {
                                          label: 'menuitem',
                                          value: 'menuitem'
                                        },
                                        {
                                          label: 'webview',
                                          value: 'webview'
                                        }
                                      ]
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
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'body',
                      'zh-CN': 'body'
                    }
                  },
                  name: 'body',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
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
                                      'en-US': 'wrapper',
                                      'zh-CN': 'wrapper'
                                    }
                                  },
                                  name: 'wrapper',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
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
                                        {
                                          componentName: 'SelectSetter',
                                          props: {
                                            dataSource: [
                                              {
                                                label: 'object',
                                                value: 'object'
                                              },
                                              {
                                                label: 'button',
                                                value: 'button'
                                              },
                                              {
                                                label: 'style',
                                                value: 'style'
                                              },
                                              {
                                                label: 'form',
                                                value: 'form'
                                              },
                                              {
                                                label: 'link',
                                                value: 'link'
                                              },
                                              {
                                                label: 'small',
                                                value: 'small'
                                              },
                                              {
                                                label: 'title',
                                                value: 'title'
                                              },
                                              {
                                                label: 'a',
                                                value: 'a'
                                              },
                                              {
                                                label: 'code',
                                                value: 'code'
                                              },
                                              {
                                                label: 'mark',
                                                value: 'mark'
                                              },
                                              {
                                                label: 'strong',
                                                value: 'strong'
                                              },
                                              {
                                                label: 'div',
                                                value: 'div'
                                              },
                                              {
                                                label: 'span',
                                                value: 'span'
                                              },
                                              {
                                                label: 'h1',
                                                value: 'h1'
                                              },
                                              {
                                                label: 'h2',
                                                value: 'h2'
                                              },
                                              {
                                                label: 'h3',
                                                value: 'h3'
                                              },
                                              {
                                                label: 'h4',
                                                value: 'h4'
                                              },
                                              {
                                                label: 'h5',
                                                value: 'h5'
                                              },
                                              {
                                                label: 'menu',
                                                value: 'menu'
                                              },
                                              {
                                                label: 'label',
                                                value: 'label'
                                              },
                                              {
                                                label: 'input',
                                                value: 'input'
                                              },
                                              {
                                                label: 'progress',
                                                value: 'progress'
                                              },
                                              {
                                                label: 'select',
                                                value: 'select'
                                              },
                                              {
                                                label: 'abbr',
                                                value: 'abbr'
                                              },
                                              {
                                                label: 'address',
                                                value: 'address'
                                              },
                                              {
                                                label: 'area',
                                                value: 'area'
                                              },
                                              {
                                                label: 'article',
                                                value: 'article'
                                              },
                                              {
                                                label: 'aside',
                                                value: 'aside'
                                              },
                                              {
                                                label: 'audio',
                                                value: 'audio'
                                              },
                                              {
                                                label: 'b',
                                                value: 'b'
                                              },
                                              {
                                                label: 'base',
                                                value: 'base'
                                              },
                                              {
                                                label: 'bdi',
                                                value: 'bdi'
                                              },
                                              {
                                                label: 'bdo',
                                                value: 'bdo'
                                              },
                                              {
                                                label: 'blockquote',
                                                value: 'blockquote'
                                              },
                                              {
                                                label: 'body',
                                                value: 'body'
                                              },
                                              {
                                                label: 'br',
                                                value: 'br'
                                              },
                                              {
                                                label: 'canvas',
                                                value: 'canvas'
                                              },
                                              {
                                                label: 'caption',
                                                value: 'caption'
                                              },
                                              {
                                                label: 'cite',
                                                value: 'cite'
                                              },
                                              {
                                                label: 'col',
                                                value: 'col'
                                              },
                                              {
                                                label: 'colgroup',
                                                value: 'colgroup'
                                              },
                                              {
                                                label: 'data',
                                                value: 'data'
                                              },
                                              {
                                                label: 'datalist',
                                                value: 'datalist'
                                              },
                                              {
                                                label: 'dd',
                                                value: 'dd'
                                              },
                                              {
                                                label: 'del',
                                                value: 'del'
                                              },
                                              {
                                                label: 'details',
                                                value: 'details'
                                              },
                                              {
                                                label: 'dfn',
                                                value: 'dfn'
                                              },
                                              {
                                                label: 'dialog',
                                                value: 'dialog'
                                              },
                                              {
                                                label: 'dl',
                                                value: 'dl'
                                              },
                                              {
                                                label: 'dt',
                                                value: 'dt'
                                              },
                                              {
                                                label: 'em',
                                                value: 'em'
                                              },
                                              {
                                                label: 'embed',
                                                value: 'embed'
                                              },
                                              {
                                                label: 'fieldset',
                                                value: 'fieldset'
                                              },
                                              {
                                                label: 'figcaption',
                                                value: 'figcaption'
                                              },
                                              {
                                                label: 'figure',
                                                value: 'figure'
                                              },
                                              {
                                                label: 'footer',
                                                value: 'footer'
                                              },
                                              {
                                                label: 'h6',
                                                value: 'h6'
                                              },
                                              {
                                                label: 'head',
                                                value: 'head'
                                              },
                                              {
                                                label: 'header',
                                                value: 'header'
                                              },
                                              {
                                                label: 'hgroup',
                                                value: 'hgroup'
                                              },
                                              {
                                                label: 'hr',
                                                value: 'hr'
                                              },
                                              {
                                                label: 'html',
                                                value: 'html'
                                              },
                                              {
                                                label: 'i',
                                                value: 'i'
                                              },
                                              {
                                                label: 'iframe',
                                                value: 'iframe'
                                              },
                                              {
                                                label: 'img',
                                                value: 'img'
                                              },
                                              {
                                                label: 'ins',
                                                value: 'ins'
                                              },
                                              {
                                                label: 'kbd',
                                                value: 'kbd'
                                              },
                                              {
                                                label: 'legend',
                                                value: 'legend'
                                              },
                                              {
                                                label: 'li',
                                                value: 'li'
                                              },
                                              {
                                                label: 'main',
                                                value: 'main'
                                              },
                                              {
                                                label: 'map',
                                                value: 'map'
                                              },
                                              {
                                                label: 'meta',
                                                value: 'meta'
                                              },
                                              {
                                                label: 'meter',
                                                value: 'meter'
                                              },
                                              {
                                                label: 'nav',
                                                value: 'nav'
                                              },
                                              {
                                                label: 'noscript',
                                                value: 'noscript'
                                              },
                                              {
                                                label: 'ol',
                                                value: 'ol'
                                              },
                                              {
                                                label: 'optgroup',
                                                value: 'optgroup'
                                              },
                                              {
                                                label: 'option',
                                                value: 'option'
                                              },
                                              {
                                                label: 'output',
                                                value: 'output'
                                              },
                                              {
                                                label: 'p',
                                                value: 'p'
                                              },
                                              {
                                                label: 'param',
                                                value: 'param'
                                              },
                                              {
                                                label: 'picture',
                                                value: 'picture'
                                              },
                                              {
                                                label: 'pre',
                                                value: 'pre'
                                              },
                                              {
                                                label: 'q',
                                                value: 'q'
                                              },
                                              {
                                                label: 'rp',
                                                value: 'rp'
                                              },
                                              {
                                                label: 'rt',
                                                value: 'rt'
                                              },
                                              {
                                                label: 'ruby',
                                                value: 'ruby'
                                              },
                                              {
                                                label: 's',
                                                value: 's'
                                              },
                                              {
                                                label: 'samp',
                                                value: 'samp'
                                              },
                                              {
                                                label: 'script',
                                                value: 'script'
                                              },
                                              {
                                                label: 'section',
                                                value: 'section'
                                              },
                                              {
                                                label: 'slot',
                                                value: 'slot'
                                              },
                                              {
                                                label: 'source',
                                                value: 'source'
                                              },
                                              {
                                                label: 'sub',
                                                value: 'sub'
                                              },
                                              {
                                                label: 'summary',
                                                value: 'summary'
                                              },
                                              {
                                                label: 'sup',
                                                value: 'sup'
                                              },
                                              {
                                                label: 'table',
                                                value: 'table'
                                              },
                                              {
                                                label: 'tbody',
                                                value: 'tbody'
                                              },
                                              {
                                                label: 'td',
                                                value: 'td'
                                              },
                                              {
                                                label: 'template',
                                                value: 'template'
                                              },
                                              {
                                                label: 'textarea',
                                                value: 'textarea'
                                              },
                                              {
                                                label: 'tfoot',
                                                value: 'tfoot'
                                              },
                                              {
                                                label: 'th',
                                                value: 'th'
                                              },
                                              {
                                                label: 'thead',
                                                value: 'thead'
                                              },
                                              {
                                                label: 'time',
                                                value: 'time'
                                              },
                                              {
                                                label: 'tr',
                                                value: 'tr'
                                              },
                                              {
                                                label: 'track',
                                                value: 'track'
                                              },
                                              {
                                                label: 'u',
                                                value: 'u'
                                              },
                                              {
                                                label: 'ul',
                                                value: 'ul'
                                              },
                                              {
                                                label: 'var',
                                                value: 'var'
                                              },
                                              {
                                                label: 'video',
                                                value: 'video'
                                              },
                                              {
                                                label: 'wbr',
                                                value: 'wbr'
                                              },
                                              {
                                                label: 'big',
                                                value: 'big'
                                              },
                                              {
                                                label: 'keygen',
                                                value: 'keygen'
                                              },
                                              {
                                                label: 'menuitem',
                                                value: 'menuitem'
                                              },
                                              {
                                                label: 'webview',
                                                value: 'webview'
                                              }
                                            ],
                                            options: [
                                              {
                                                label: 'object',
                                                value: 'object'
                                              },
                                              {
                                                label: 'button',
                                                value: 'button'
                                              },
                                              {
                                                label: 'style',
                                                value: 'style'
                                              },
                                              {
                                                label: 'form',
                                                value: 'form'
                                              },
                                              {
                                                label: 'link',
                                                value: 'link'
                                              },
                                              {
                                                label: 'small',
                                                value: 'small'
                                              },
                                              {
                                                label: 'title',
                                                value: 'title'
                                              },
                                              {
                                                label: 'a',
                                                value: 'a'
                                              },
                                              {
                                                label: 'code',
                                                value: 'code'
                                              },
                                              {
                                                label: 'mark',
                                                value: 'mark'
                                              },
                                              {
                                                label: 'strong',
                                                value: 'strong'
                                              },
                                              {
                                                label: 'div',
                                                value: 'div'
                                              },
                                              {
                                                label: 'span',
                                                value: 'span'
                                              },
                                              {
                                                label: 'h1',
                                                value: 'h1'
                                              },
                                              {
                                                label: 'h2',
                                                value: 'h2'
                                              },
                                              {
                                                label: 'h3',
                                                value: 'h3'
                                              },
                                              {
                                                label: 'h4',
                                                value: 'h4'
                                              },
                                              {
                                                label: 'h5',
                                                value: 'h5'
                                              },
                                              {
                                                label: 'menu',
                                                value: 'menu'
                                              },
                                              {
                                                label: 'label',
                                                value: 'label'
                                              },
                                              {
                                                label: 'input',
                                                value: 'input'
                                              },
                                              {
                                                label: 'progress',
                                                value: 'progress'
                                              },
                                              {
                                                label: 'select',
                                                value: 'select'
                                              },
                                              {
                                                label: 'abbr',
                                                value: 'abbr'
                                              },
                                              {
                                                label: 'address',
                                                value: 'address'
                                              },
                                              {
                                                label: 'area',
                                                value: 'area'
                                              },
                                              {
                                                label: 'article',
                                                value: 'article'
                                              },
                                              {
                                                label: 'aside',
                                                value: 'aside'
                                              },
                                              {
                                                label: 'audio',
                                                value: 'audio'
                                              },
                                              {
                                                label: 'b',
                                                value: 'b'
                                              },
                                              {
                                                label: 'base',
                                                value: 'base'
                                              },
                                              {
                                                label: 'bdi',
                                                value: 'bdi'
                                              },
                                              {
                                                label: 'bdo',
                                                value: 'bdo'
                                              },
                                              {
                                                label: 'blockquote',
                                                value: 'blockquote'
                                              },
                                              {
                                                label: 'body',
                                                value: 'body'
                                              },
                                              {
                                                label: 'br',
                                                value: 'br'
                                              },
                                              {
                                                label: 'canvas',
                                                value: 'canvas'
                                              },
                                              {
                                                label: 'caption',
                                                value: 'caption'
                                              },
                                              {
                                                label: 'cite',
                                                value: 'cite'
                                              },
                                              {
                                                label: 'col',
                                                value: 'col'
                                              },
                                              {
                                                label: 'colgroup',
                                                value: 'colgroup'
                                              },
                                              {
                                                label: 'data',
                                                value: 'data'
                                              },
                                              {
                                                label: 'datalist',
                                                value: 'datalist'
                                              },
                                              {
                                                label: 'dd',
                                                value: 'dd'
                                              },
                                              {
                                                label: 'del',
                                                value: 'del'
                                              },
                                              {
                                                label: 'details',
                                                value: 'details'
                                              },
                                              {
                                                label: 'dfn',
                                                value: 'dfn'
                                              },
                                              {
                                                label: 'dialog',
                                                value: 'dialog'
                                              },
                                              {
                                                label: 'dl',
                                                value: 'dl'
                                              },
                                              {
                                                label: 'dt',
                                                value: 'dt'
                                              },
                                              {
                                                label: 'em',
                                                value: 'em'
                                              },
                                              {
                                                label: 'embed',
                                                value: 'embed'
                                              },
                                              {
                                                label: 'fieldset',
                                                value: 'fieldset'
                                              },
                                              {
                                                label: 'figcaption',
                                                value: 'figcaption'
                                              },
                                              {
                                                label: 'figure',
                                                value: 'figure'
                                              },
                                              {
                                                label: 'footer',
                                                value: 'footer'
                                              },
                                              {
                                                label: 'h6',
                                                value: 'h6'
                                              },
                                              {
                                                label: 'head',
                                                value: 'head'
                                              },
                                              {
                                                label: 'header',
                                                value: 'header'
                                              },
                                              {
                                                label: 'hgroup',
                                                value: 'hgroup'
                                              },
                                              {
                                                label: 'hr',
                                                value: 'hr'
                                              },
                                              {
                                                label: 'html',
                                                value: 'html'
                                              },
                                              {
                                                label: 'i',
                                                value: 'i'
                                              },
                                              {
                                                label: 'iframe',
                                                value: 'iframe'
                                              },
                                              {
                                                label: 'img',
                                                value: 'img'
                                              },
                                              {
                                                label: 'ins',
                                                value: 'ins'
                                              },
                                              {
                                                label: 'kbd',
                                                value: 'kbd'
                                              },
                                              {
                                                label: 'legend',
                                                value: 'legend'
                                              },
                                              {
                                                label: 'li',
                                                value: 'li'
                                              },
                                              {
                                                label: 'main',
                                                value: 'main'
                                              },
                                              {
                                                label: 'map',
                                                value: 'map'
                                              },
                                              {
                                                label: 'meta',
                                                value: 'meta'
                                              },
                                              {
                                                label: 'meter',
                                                value: 'meter'
                                              },
                                              {
                                                label: 'nav',
                                                value: 'nav'
                                              },
                                              {
                                                label: 'noscript',
                                                value: 'noscript'
                                              },
                                              {
                                                label: 'ol',
                                                value: 'ol'
                                              },
                                              {
                                                label: 'optgroup',
                                                value: 'optgroup'
                                              },
                                              {
                                                label: 'option',
                                                value: 'option'
                                              },
                                              {
                                                label: 'output',
                                                value: 'output'
                                              },
                                              {
                                                label: 'p',
                                                value: 'p'
                                              },
                                              {
                                                label: 'param',
                                                value: 'param'
                                              },
                                              {
                                                label: 'picture',
                                                value: 'picture'
                                              },
                                              {
                                                label: 'pre',
                                                value: 'pre'
                                              },
                                              {
                                                label: 'q',
                                                value: 'q'
                                              },
                                              {
                                                label: 'rp',
                                                value: 'rp'
                                              },
                                              {
                                                label: 'rt',
                                                value: 'rt'
                                              },
                                              {
                                                label: 'ruby',
                                                value: 'ruby'
                                              },
                                              {
                                                label: 's',
                                                value: 's'
                                              },
                                              {
                                                label: 'samp',
                                                value: 'samp'
                                              },
                                              {
                                                label: 'script',
                                                value: 'script'
                                              },
                                              {
                                                label: 'section',
                                                value: 'section'
                                              },
                                              {
                                                label: 'slot',
                                                value: 'slot'
                                              },
                                              {
                                                label: 'source',
                                                value: 'source'
                                              },
                                              {
                                                label: 'sub',
                                                value: 'sub'
                                              },
                                              {
                                                label: 'summary',
                                                value: 'summary'
                                              },
                                              {
                                                label: 'sup',
                                                value: 'sup'
                                              },
                                              {
                                                label: 'table',
                                                value: 'table'
                                              },
                                              {
                                                label: 'tbody',
                                                value: 'tbody'
                                              },
                                              {
                                                label: 'td',
                                                value: 'td'
                                              },
                                              {
                                                label: 'template',
                                                value: 'template'
                                              },
                                              {
                                                label: 'textarea',
                                                value: 'textarea'
                                              },
                                              {
                                                label: 'tfoot',
                                                value: 'tfoot'
                                              },
                                              {
                                                label: 'th',
                                                value: 'th'
                                              },
                                              {
                                                label: 'thead',
                                                value: 'thead'
                                              },
                                              {
                                                label: 'time',
                                                value: 'time'
                                              },
                                              {
                                                label: 'tr',
                                                value: 'tr'
                                              },
                                              {
                                                label: 'track',
                                                value: 'track'
                                              },
                                              {
                                                label: 'u',
                                                value: 'u'
                                              },
                                              {
                                                label: 'ul',
                                                value: 'ul'
                                              },
                                              {
                                                label: 'var',
                                                value: 'var'
                                              },
                                              {
                                                label: 'video',
                                                value: 'video'
                                              },
                                              {
                                                label: 'wbr',
                                                value: 'wbr'
                                              },
                                              {
                                                label: 'big',
                                                value: 'big'
                                              },
                                              {
                                                label: 'keygen',
                                                value: 'keygen'
                                              },
                                              {
                                                label: 'menuitem',
                                                value: 'menuitem'
                                              },
                                              {
                                                label: 'webview',
                                                value: 'webview'
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
                                      'en-US': 'row',
                                      'zh-CN': 'row'
                                    }
                                  },
                                  name: 'row',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
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
                                        {
                                          componentName: 'SelectSetter',
                                          props: {
                                            dataSource: [
                                              {
                                                label: 'object',
                                                value: 'object'
                                              },
                                              {
                                                label: 'button',
                                                value: 'button'
                                              },
                                              {
                                                label: 'style',
                                                value: 'style'
                                              },
                                              {
                                                label: 'form',
                                                value: 'form'
                                              },
                                              {
                                                label: 'link',
                                                value: 'link'
                                              },
                                              {
                                                label: 'small',
                                                value: 'small'
                                              },
                                              {
                                                label: 'title',
                                                value: 'title'
                                              },
                                              {
                                                label: 'a',
                                                value: 'a'
                                              },
                                              {
                                                label: 'code',
                                                value: 'code'
                                              },
                                              {
                                                label: 'mark',
                                                value: 'mark'
                                              },
                                              {
                                                label: 'strong',
                                                value: 'strong'
                                              },
                                              {
                                                label: 'div',
                                                value: 'div'
                                              },
                                              {
                                                label: 'span',
                                                value: 'span'
                                              },
                                              {
                                                label: 'h1',
                                                value: 'h1'
                                              },
                                              {
                                                label: 'h2',
                                                value: 'h2'
                                              },
                                              {
                                                label: 'h3',
                                                value: 'h3'
                                              },
                                              {
                                                label: 'h4',
                                                value: 'h4'
                                              },
                                              {
                                                label: 'h5',
                                                value: 'h5'
                                              },
                                              {
                                                label: 'menu',
                                                value: 'menu'
                                              },
                                              {
                                                label: 'label',
                                                value: 'label'
                                              },
                                              {
                                                label: 'input',
                                                value: 'input'
                                              },
                                              {
                                                label: 'progress',
                                                value: 'progress'
                                              },
                                              {
                                                label: 'select',
                                                value: 'select'
                                              },
                                              {
                                                label: 'abbr',
                                                value: 'abbr'
                                              },
                                              {
                                                label: 'address',
                                                value: 'address'
                                              },
                                              {
                                                label: 'area',
                                                value: 'area'
                                              },
                                              {
                                                label: 'article',
                                                value: 'article'
                                              },
                                              {
                                                label: 'aside',
                                                value: 'aside'
                                              },
                                              {
                                                label: 'audio',
                                                value: 'audio'
                                              },
                                              {
                                                label: 'b',
                                                value: 'b'
                                              },
                                              {
                                                label: 'base',
                                                value: 'base'
                                              },
                                              {
                                                label: 'bdi',
                                                value: 'bdi'
                                              },
                                              {
                                                label: 'bdo',
                                                value: 'bdo'
                                              },
                                              {
                                                label: 'blockquote',
                                                value: 'blockquote'
                                              },
                                              {
                                                label: 'body',
                                                value: 'body'
                                              },
                                              {
                                                label: 'br',
                                                value: 'br'
                                              },
                                              {
                                                label: 'canvas',
                                                value: 'canvas'
                                              },
                                              {
                                                label: 'caption',
                                                value: 'caption'
                                              },
                                              {
                                                label: 'cite',
                                                value: 'cite'
                                              },
                                              {
                                                label: 'col',
                                                value: 'col'
                                              },
                                              {
                                                label: 'colgroup',
                                                value: 'colgroup'
                                              },
                                              {
                                                label: 'data',
                                                value: 'data'
                                              },
                                              {
                                                label: 'datalist',
                                                value: 'datalist'
                                              },
                                              {
                                                label: 'dd',
                                                value: 'dd'
                                              },
                                              {
                                                label: 'del',
                                                value: 'del'
                                              },
                                              {
                                                label: 'details',
                                                value: 'details'
                                              },
                                              {
                                                label: 'dfn',
                                                value: 'dfn'
                                              },
                                              {
                                                label: 'dialog',
                                                value: 'dialog'
                                              },
                                              {
                                                label: 'dl',
                                                value: 'dl'
                                              },
                                              {
                                                label: 'dt',
                                                value: 'dt'
                                              },
                                              {
                                                label: 'em',
                                                value: 'em'
                                              },
                                              {
                                                label: 'embed',
                                                value: 'embed'
                                              },
                                              {
                                                label: 'fieldset',
                                                value: 'fieldset'
                                              },
                                              {
                                                label: 'figcaption',
                                                value: 'figcaption'
                                              },
                                              {
                                                label: 'figure',
                                                value: 'figure'
                                              },
                                              {
                                                label: 'footer',
                                                value: 'footer'
                                              },
                                              {
                                                label: 'h6',
                                                value: 'h6'
                                              },
                                              {
                                                label: 'head',
                                                value: 'head'
                                              },
                                              {
                                                label: 'header',
                                                value: 'header'
                                              },
                                              {
                                                label: 'hgroup',
                                                value: 'hgroup'
                                              },
                                              {
                                                label: 'hr',
                                                value: 'hr'
                                              },
                                              {
                                                label: 'html',
                                                value: 'html'
                                              },
                                              {
                                                label: 'i',
                                                value: 'i'
                                              },
                                              {
                                                label: 'iframe',
                                                value: 'iframe'
                                              },
                                              {
                                                label: 'img',
                                                value: 'img'
                                              },
                                              {
                                                label: 'ins',
                                                value: 'ins'
                                              },
                                              {
                                                label: 'kbd',
                                                value: 'kbd'
                                              },
                                              {
                                                label: 'legend',
                                                value: 'legend'
                                              },
                                              {
                                                label: 'li',
                                                value: 'li'
                                              },
                                              {
                                                label: 'main',
                                                value: 'main'
                                              },
                                              {
                                                label: 'map',
                                                value: 'map'
                                              },
                                              {
                                                label: 'meta',
                                                value: 'meta'
                                              },
                                              {
                                                label: 'meter',
                                                value: 'meter'
                                              },
                                              {
                                                label: 'nav',
                                                value: 'nav'
                                              },
                                              {
                                                label: 'noscript',
                                                value: 'noscript'
                                              },
                                              {
                                                label: 'ol',
                                                value: 'ol'
                                              },
                                              {
                                                label: 'optgroup',
                                                value: 'optgroup'
                                              },
                                              {
                                                label: 'option',
                                                value: 'option'
                                              },
                                              {
                                                label: 'output',
                                                value: 'output'
                                              },
                                              {
                                                label: 'p',
                                                value: 'p'
                                              },
                                              {
                                                label: 'param',
                                                value: 'param'
                                              },
                                              {
                                                label: 'picture',
                                                value: 'picture'
                                              },
                                              {
                                                label: 'pre',
                                                value: 'pre'
                                              },
                                              {
                                                label: 'q',
                                                value: 'q'
                                              },
                                              {
                                                label: 'rp',
                                                value: 'rp'
                                              },
                                              {
                                                label: 'rt',
                                                value: 'rt'
                                              },
                                              {
                                                label: 'ruby',
                                                value: 'ruby'
                                              },
                                              {
                                                label: 's',
                                                value: 's'
                                              },
                                              {
                                                label: 'samp',
                                                value: 'samp'
                                              },
                                              {
                                                label: 'script',
                                                value: 'script'
                                              },
                                              {
                                                label: 'section',
                                                value: 'section'
                                              },
                                              {
                                                label: 'slot',
                                                value: 'slot'
                                              },
                                              {
                                                label: 'source',
                                                value: 'source'
                                              },
                                              {
                                                label: 'sub',
                                                value: 'sub'
                                              },
                                              {
                                                label: 'summary',
                                                value: 'summary'
                                              },
                                              {
                                                label: 'sup',
                                                value: 'sup'
                                              },
                                              {
                                                label: 'table',
                                                value: 'table'
                                              },
                                              {
                                                label: 'tbody',
                                                value: 'tbody'
                                              },
                                              {
                                                label: 'td',
                                                value: 'td'
                                              },
                                              {
                                                label: 'template',
                                                value: 'template'
                                              },
                                              {
                                                label: 'textarea',
                                                value: 'textarea'
                                              },
                                              {
                                                label: 'tfoot',
                                                value: 'tfoot'
                                              },
                                              {
                                                label: 'th',
                                                value: 'th'
                                              },
                                              {
                                                label: 'thead',
                                                value: 'thead'
                                              },
                                              {
                                                label: 'time',
                                                value: 'time'
                                              },
                                              {
                                                label: 'tr',
                                                value: 'tr'
                                              },
                                              {
                                                label: 'track',
                                                value: 'track'
                                              },
                                              {
                                                label: 'u',
                                                value: 'u'
                                              },
                                              {
                                                label: 'ul',
                                                value: 'ul'
                                              },
                                              {
                                                label: 'var',
                                                value: 'var'
                                              },
                                              {
                                                label: 'video',
                                                value: 'video'
                                              },
                                              {
                                                label: 'wbr',
                                                value: 'wbr'
                                              },
                                              {
                                                label: 'big',
                                                value: 'big'
                                              },
                                              {
                                                label: 'keygen',
                                                value: 'keygen'
                                              },
                                              {
                                                label: 'menuitem',
                                                value: 'menuitem'
                                              },
                                              {
                                                label: 'webview',
                                                value: 'webview'
                                              }
                                            ],
                                            options: [
                                              {
                                                label: 'object',
                                                value: 'object'
                                              },
                                              {
                                                label: 'button',
                                                value: 'button'
                                              },
                                              {
                                                label: 'style',
                                                value: 'style'
                                              },
                                              {
                                                label: 'form',
                                                value: 'form'
                                              },
                                              {
                                                label: 'link',
                                                value: 'link'
                                              },
                                              {
                                                label: 'small',
                                                value: 'small'
                                              },
                                              {
                                                label: 'title',
                                                value: 'title'
                                              },
                                              {
                                                label: 'a',
                                                value: 'a'
                                              },
                                              {
                                                label: 'code',
                                                value: 'code'
                                              },
                                              {
                                                label: 'mark',
                                                value: 'mark'
                                              },
                                              {
                                                label: 'strong',
                                                value: 'strong'
                                              },
                                              {
                                                label: 'div',
                                                value: 'div'
                                              },
                                              {
                                                label: 'span',
                                                value: 'span'
                                              },
                                              {
                                                label: 'h1',
                                                value: 'h1'
                                              },
                                              {
                                                label: 'h2',
                                                value: 'h2'
                                              },
                                              {
                                                label: 'h3',
                                                value: 'h3'
                                              },
                                              {
                                                label: 'h4',
                                                value: 'h4'
                                              },
                                              {
                                                label: 'h5',
                                                value: 'h5'
                                              },
                                              {
                                                label: 'menu',
                                                value: 'menu'
                                              },
                                              {
                                                label: 'label',
                                                value: 'label'
                                              },
                                              {
                                                label: 'input',
                                                value: 'input'
                                              },
                                              {
                                                label: 'progress',
                                                value: 'progress'
                                              },
                                              {
                                                label: 'select',
                                                value: 'select'
                                              },
                                              {
                                                label: 'abbr',
                                                value: 'abbr'
                                              },
                                              {
                                                label: 'address',
                                                value: 'address'
                                              },
                                              {
                                                label: 'area',
                                                value: 'area'
                                              },
                                              {
                                                label: 'article',
                                                value: 'article'
                                              },
                                              {
                                                label: 'aside',
                                                value: 'aside'
                                              },
                                              {
                                                label: 'audio',
                                                value: 'audio'
                                              },
                                              {
                                                label: 'b',
                                                value: 'b'
                                              },
                                              {
                                                label: 'base',
                                                value: 'base'
                                              },
                                              {
                                                label: 'bdi',
                                                value: 'bdi'
                                              },
                                              {
                                                label: 'bdo',
                                                value: 'bdo'
                                              },
                                              {
                                                label: 'blockquote',
                                                value: 'blockquote'
                                              },
                                              {
                                                label: 'body',
                                                value: 'body'
                                              },
                                              {
                                                label: 'br',
                                                value: 'br'
                                              },
                                              {
                                                label: 'canvas',
                                                value: 'canvas'
                                              },
                                              {
                                                label: 'caption',
                                                value: 'caption'
                                              },
                                              {
                                                label: 'cite',
                                                value: 'cite'
                                              },
                                              {
                                                label: 'col',
                                                value: 'col'
                                              },
                                              {
                                                label: 'colgroup',
                                                value: 'colgroup'
                                              },
                                              {
                                                label: 'data',
                                                value: 'data'
                                              },
                                              {
                                                label: 'datalist',
                                                value: 'datalist'
                                              },
                                              {
                                                label: 'dd',
                                                value: 'dd'
                                              },
                                              {
                                                label: 'del',
                                                value: 'del'
                                              },
                                              {
                                                label: 'details',
                                                value: 'details'
                                              },
                                              {
                                                label: 'dfn',
                                                value: 'dfn'
                                              },
                                              {
                                                label: 'dialog',
                                                value: 'dialog'
                                              },
                                              {
                                                label: 'dl',
                                                value: 'dl'
                                              },
                                              {
                                                label: 'dt',
                                                value: 'dt'
                                              },
                                              {
                                                label: 'em',
                                                value: 'em'
                                              },
                                              {
                                                label: 'embed',
                                                value: 'embed'
                                              },
                                              {
                                                label: 'fieldset',
                                                value: 'fieldset'
                                              },
                                              {
                                                label: 'figcaption',
                                                value: 'figcaption'
                                              },
                                              {
                                                label: 'figure',
                                                value: 'figure'
                                              },
                                              {
                                                label: 'footer',
                                                value: 'footer'
                                              },
                                              {
                                                label: 'h6',
                                                value: 'h6'
                                              },
                                              {
                                                label: 'head',
                                                value: 'head'
                                              },
                                              {
                                                label: 'header',
                                                value: 'header'
                                              },
                                              {
                                                label: 'hgroup',
                                                value: 'hgroup'
                                              },
                                              {
                                                label: 'hr',
                                                value: 'hr'
                                              },
                                              {
                                                label: 'html',
                                                value: 'html'
                                              },
                                              {
                                                label: 'i',
                                                value: 'i'
                                              },
                                              {
                                                label: 'iframe',
                                                value: 'iframe'
                                              },
                                              {
                                                label: 'img',
                                                value: 'img'
                                              },
                                              {
                                                label: 'ins',
                                                value: 'ins'
                                              },
                                              {
                                                label: 'kbd',
                                                value: 'kbd'
                                              },
                                              {
                                                label: 'legend',
                                                value: 'legend'
                                              },
                                              {
                                                label: 'li',
                                                value: 'li'
                                              },
                                              {
                                                label: 'main',
                                                value: 'main'
                                              },
                                              {
                                                label: 'map',
                                                value: 'map'
                                              },
                                              {
                                                label: 'meta',
                                                value: 'meta'
                                              },
                                              {
                                                label: 'meter',
                                                value: 'meter'
                                              },
                                              {
                                                label: 'nav',
                                                value: 'nav'
                                              },
                                              {
                                                label: 'noscript',
                                                value: 'noscript'
                                              },
                                              {
                                                label: 'ol',
                                                value: 'ol'
                                              },
                                              {
                                                label: 'optgroup',
                                                value: 'optgroup'
                                              },
                                              {
                                                label: 'option',
                                                value: 'option'
                                              },
                                              {
                                                label: 'output',
                                                value: 'output'
                                              },
                                              {
                                                label: 'p',
                                                value: 'p'
                                              },
                                              {
                                                label: 'param',
                                                value: 'param'
                                              },
                                              {
                                                label: 'picture',
                                                value: 'picture'
                                              },
                                              {
                                                label: 'pre',
                                                value: 'pre'
                                              },
                                              {
                                                label: 'q',
                                                value: 'q'
                                              },
                                              {
                                                label: 'rp',
                                                value: 'rp'
                                              },
                                              {
                                                label: 'rt',
                                                value: 'rt'
                                              },
                                              {
                                                label: 'ruby',
                                                value: 'ruby'
                                              },
                                              {
                                                label: 's',
                                                value: 's'
                                              },
                                              {
                                                label: 'samp',
                                                value: 'samp'
                                              },
                                              {
                                                label: 'script',
                                                value: 'script'
                                              },
                                              {
                                                label: 'section',
                                                value: 'section'
                                              },
                                              {
                                                label: 'slot',
                                                value: 'slot'
                                              },
                                              {
                                                label: 'source',
                                                value: 'source'
                                              },
                                              {
                                                label: 'sub',
                                                value: 'sub'
                                              },
                                              {
                                                label: 'summary',
                                                value: 'summary'
                                              },
                                              {
                                                label: 'sup',
                                                value: 'sup'
                                              },
                                              {
                                                label: 'table',
                                                value: 'table'
                                              },
                                              {
                                                label: 'tbody',
                                                value: 'tbody'
                                              },
                                              {
                                                label: 'td',
                                                value: 'td'
                                              },
                                              {
                                                label: 'template',
                                                value: 'template'
                                              },
                                              {
                                                label: 'textarea',
                                                value: 'textarea'
                                              },
                                              {
                                                label: 'tfoot',
                                                value: 'tfoot'
                                              },
                                              {
                                                label: 'th',
                                                value: 'th'
                                              },
                                              {
                                                label: 'thead',
                                                value: 'thead'
                                              },
                                              {
                                                label: 'time',
                                                value: 'time'
                                              },
                                              {
                                                label: 'tr',
                                                value: 'tr'
                                              },
                                              {
                                                label: 'track',
                                                value: 'track'
                                              },
                                              {
                                                label: 'u',
                                                value: 'u'
                                              },
                                              {
                                                label: 'ul',
                                                value: 'ul'
                                              },
                                              {
                                                label: 'var',
                                                value: 'var'
                                              },
                                              {
                                                label: 'video',
                                                value: 'video'
                                              },
                                              {
                                                label: 'wbr',
                                                value: 'wbr'
                                              },
                                              {
                                                label: 'big',
                                                value: 'big'
                                              },
                                              {
                                                label: 'keygen',
                                                value: 'keygen'
                                              },
                                              {
                                                label: 'menuitem',
                                                value: 'menuitem'
                                              },
                                              {
                                                label: 'webview',
                                                value: 'webview'
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
                                      'en-US': 'cell',
                                      'zh-CN': 'cell'
                                    }
                                  },
                                  name: 'cell',
                                  setter: {
                                    componentName: 'MixedSetter',
                                    props: {
                                      setters: [
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
                                        {
                                          componentName: 'SelectSetter',
                                          props: {
                                            dataSource: [
                                              {
                                                label: 'object',
                                                value: 'object'
                                              },
                                              {
                                                label: 'button',
                                                value: 'button'
                                              },
                                              {
                                                label: 'style',
                                                value: 'style'
                                              },
                                              {
                                                label: 'form',
                                                value: 'form'
                                              },
                                              {
                                                label: 'link',
                                                value: 'link'
                                              },
                                              {
                                                label: 'small',
                                                value: 'small'
                                              },
                                              {
                                                label: 'title',
                                                value: 'title'
                                              },
                                              {
                                                label: 'a',
                                                value: 'a'
                                              },
                                              {
                                                label: 'code',
                                                value: 'code'
                                              },
                                              {
                                                label: 'mark',
                                                value: 'mark'
                                              },
                                              {
                                                label: 'strong',
                                                value: 'strong'
                                              },
                                              {
                                                label: 'div',
                                                value: 'div'
                                              },
                                              {
                                                label: 'span',
                                                value: 'span'
                                              },
                                              {
                                                label: 'h1',
                                                value: 'h1'
                                              },
                                              {
                                                label: 'h2',
                                                value: 'h2'
                                              },
                                              {
                                                label: 'h3',
                                                value: 'h3'
                                              },
                                              {
                                                label: 'h4',
                                                value: 'h4'
                                              },
                                              {
                                                label: 'h5',
                                                value: 'h5'
                                              },
                                              {
                                                label: 'menu',
                                                value: 'menu'
                                              },
                                              {
                                                label: 'label',
                                                value: 'label'
                                              },
                                              {
                                                label: 'input',
                                                value: 'input'
                                              },
                                              {
                                                label: 'progress',
                                                value: 'progress'
                                              },
                                              {
                                                label: 'select',
                                                value: 'select'
                                              },
                                              {
                                                label: 'abbr',
                                                value: 'abbr'
                                              },
                                              {
                                                label: 'address',
                                                value: 'address'
                                              },
                                              {
                                                label: 'area',
                                                value: 'area'
                                              },
                                              {
                                                label: 'article',
                                                value: 'article'
                                              },
                                              {
                                                label: 'aside',
                                                value: 'aside'
                                              },
                                              {
                                                label: 'audio',
                                                value: 'audio'
                                              },
                                              {
                                                label: 'b',
                                                value: 'b'
                                              },
                                              {
                                                label: 'base',
                                                value: 'base'
                                              },
                                              {
                                                label: 'bdi',
                                                value: 'bdi'
                                              },
                                              {
                                                label: 'bdo',
                                                value: 'bdo'
                                              },
                                              {
                                                label: 'blockquote',
                                                value: 'blockquote'
                                              },
                                              {
                                                label: 'body',
                                                value: 'body'
                                              },
                                              {
                                                label: 'br',
                                                value: 'br'
                                              },
                                              {
                                                label: 'canvas',
                                                value: 'canvas'
                                              },
                                              {
                                                label: 'caption',
                                                value: 'caption'
                                              },
                                              {
                                                label: 'cite',
                                                value: 'cite'
                                              },
                                              {
                                                label: 'col',
                                                value: 'col'
                                              },
                                              {
                                                label: 'colgroup',
                                                value: 'colgroup'
                                              },
                                              {
                                                label: 'data',
                                                value: 'data'
                                              },
                                              {
                                                label: 'datalist',
                                                value: 'datalist'
                                              },
                                              {
                                                label: 'dd',
                                                value: 'dd'
                                              },
                                              {
                                                label: 'del',
                                                value: 'del'
                                              },
                                              {
                                                label: 'details',
                                                value: 'details'
                                              },
                                              {
                                                label: 'dfn',
                                                value: 'dfn'
                                              },
                                              {
                                                label: 'dialog',
                                                value: 'dialog'
                                              },
                                              {
                                                label: 'dl',
                                                value: 'dl'
                                              },
                                              {
                                                label: 'dt',
                                                value: 'dt'
                                              },
                                              {
                                                label: 'em',
                                                value: 'em'
                                              },
                                              {
                                                label: 'embed',
                                                value: 'embed'
                                              },
                                              {
                                                label: 'fieldset',
                                                value: 'fieldset'
                                              },
                                              {
                                                label: 'figcaption',
                                                value: 'figcaption'
                                              },
                                              {
                                                label: 'figure',
                                                value: 'figure'
                                              },
                                              {
                                                label: 'footer',
                                                value: 'footer'
                                              },
                                              {
                                                label: 'h6',
                                                value: 'h6'
                                              },
                                              {
                                                label: 'head',
                                                value: 'head'
                                              },
                                              {
                                                label: 'header',
                                                value: 'header'
                                              },
                                              {
                                                label: 'hgroup',
                                                value: 'hgroup'
                                              },
                                              {
                                                label: 'hr',
                                                value: 'hr'
                                              },
                                              {
                                                label: 'html',
                                                value: 'html'
                                              },
                                              {
                                                label: 'i',
                                                value: 'i'
                                              },
                                              {
                                                label: 'iframe',
                                                value: 'iframe'
                                              },
                                              {
                                                label: 'img',
                                                value: 'img'
                                              },
                                              {
                                                label: 'ins',
                                                value: 'ins'
                                              },
                                              {
                                                label: 'kbd',
                                                value: 'kbd'
                                              },
                                              {
                                                label: 'legend',
                                                value: 'legend'
                                              },
                                              {
                                                label: 'li',
                                                value: 'li'
                                              },
                                              {
                                                label: 'main',
                                                value: 'main'
                                              },
                                              {
                                                label: 'map',
                                                value: 'map'
                                              },
                                              {
                                                label: 'meta',
                                                value: 'meta'
                                              },
                                              {
                                                label: 'meter',
                                                value: 'meter'
                                              },
                                              {
                                                label: 'nav',
                                                value: 'nav'
                                              },
                                              {
                                                label: 'noscript',
                                                value: 'noscript'
                                              },
                                              {
                                                label: 'ol',
                                                value: 'ol'
                                              },
                                              {
                                                label: 'optgroup',
                                                value: 'optgroup'
                                              },
                                              {
                                                label: 'option',
                                                value: 'option'
                                              },
                                              {
                                                label: 'output',
                                                value: 'output'
                                              },
                                              {
                                                label: 'p',
                                                value: 'p'
                                              },
                                              {
                                                label: 'param',
                                                value: 'param'
                                              },
                                              {
                                                label: 'picture',
                                                value: 'picture'
                                              },
                                              {
                                                label: 'pre',
                                                value: 'pre'
                                              },
                                              {
                                                label: 'q',
                                                value: 'q'
                                              },
                                              {
                                                label: 'rp',
                                                value: 'rp'
                                              },
                                              {
                                                label: 'rt',
                                                value: 'rt'
                                              },
                                              {
                                                label: 'ruby',
                                                value: 'ruby'
                                              },
                                              {
                                                label: 's',
                                                value: 's'
                                              },
                                              {
                                                label: 'samp',
                                                value: 'samp'
                                              },
                                              {
                                                label: 'script',
                                                value: 'script'
                                              },
                                              {
                                                label: 'section',
                                                value: 'section'
                                              },
                                              {
                                                label: 'slot',
                                                value: 'slot'
                                              },
                                              {
                                                label: 'source',
                                                value: 'source'
                                              },
                                              {
                                                label: 'sub',
                                                value: 'sub'
                                              },
                                              {
                                                label: 'summary',
                                                value: 'summary'
                                              },
                                              {
                                                label: 'sup',
                                                value: 'sup'
                                              },
                                              {
                                                label: 'table',
                                                value: 'table'
                                              },
                                              {
                                                label: 'tbody',
                                                value: 'tbody'
                                              },
                                              {
                                                label: 'td',
                                                value: 'td'
                                              },
                                              {
                                                label: 'template',
                                                value: 'template'
                                              },
                                              {
                                                label: 'textarea',
                                                value: 'textarea'
                                              },
                                              {
                                                label: 'tfoot',
                                                value: 'tfoot'
                                              },
                                              {
                                                label: 'th',
                                                value: 'th'
                                              },
                                              {
                                                label: 'thead',
                                                value: 'thead'
                                              },
                                              {
                                                label: 'time',
                                                value: 'time'
                                              },
                                              {
                                                label: 'tr',
                                                value: 'tr'
                                              },
                                              {
                                                label: 'track',
                                                value: 'track'
                                              },
                                              {
                                                label: 'u',
                                                value: 'u'
                                              },
                                              {
                                                label: 'ul',
                                                value: 'ul'
                                              },
                                              {
                                                label: 'var',
                                                value: 'var'
                                              },
                                              {
                                                label: 'video',
                                                value: 'video'
                                              },
                                              {
                                                label: 'wbr',
                                                value: 'wbr'
                                              },
                                              {
                                                label: 'big',
                                                value: 'big'
                                              },
                                              {
                                                label: 'keygen',
                                                value: 'keygen'
                                              },
                                              {
                                                label: 'menuitem',
                                                value: 'menuitem'
                                              },
                                              {
                                                label: 'webview',
                                                value: 'webview'
                                              }
                                            ],
                                            options: [
                                              {
                                                label: 'object',
                                                value: 'object'
                                              },
                                              {
                                                label: 'button',
                                                value: 'button'
                                              },
                                              {
                                                label: 'style',
                                                value: 'style'
                                              },
                                              {
                                                label: 'form',
                                                value: 'form'
                                              },
                                              {
                                                label: 'link',
                                                value: 'link'
                                              },
                                              {
                                                label: 'small',
                                                value: 'small'
                                              },
                                              {
                                                label: 'title',
                                                value: 'title'
                                              },
                                              {
                                                label: 'a',
                                                value: 'a'
                                              },
                                              {
                                                label: 'code',
                                                value: 'code'
                                              },
                                              {
                                                label: 'mark',
                                                value: 'mark'
                                              },
                                              {
                                                label: 'strong',
                                                value: 'strong'
                                              },
                                              {
                                                label: 'div',
                                                value: 'div'
                                              },
                                              {
                                                label: 'span',
                                                value: 'span'
                                              },
                                              {
                                                label: 'h1',
                                                value: 'h1'
                                              },
                                              {
                                                label: 'h2',
                                                value: 'h2'
                                              },
                                              {
                                                label: 'h3',
                                                value: 'h3'
                                              },
                                              {
                                                label: 'h4',
                                                value: 'h4'
                                              },
                                              {
                                                label: 'h5',
                                                value: 'h5'
                                              },
                                              {
                                                label: 'menu',
                                                value: 'menu'
                                              },
                                              {
                                                label: 'label',
                                                value: 'label'
                                              },
                                              {
                                                label: 'input',
                                                value: 'input'
                                              },
                                              {
                                                label: 'progress',
                                                value: 'progress'
                                              },
                                              {
                                                label: 'select',
                                                value: 'select'
                                              },
                                              {
                                                label: 'abbr',
                                                value: 'abbr'
                                              },
                                              {
                                                label: 'address',
                                                value: 'address'
                                              },
                                              {
                                                label: 'area',
                                                value: 'area'
                                              },
                                              {
                                                label: 'article',
                                                value: 'article'
                                              },
                                              {
                                                label: 'aside',
                                                value: 'aside'
                                              },
                                              {
                                                label: 'audio',
                                                value: 'audio'
                                              },
                                              {
                                                label: 'b',
                                                value: 'b'
                                              },
                                              {
                                                label: 'base',
                                                value: 'base'
                                              },
                                              {
                                                label: 'bdi',
                                                value: 'bdi'
                                              },
                                              {
                                                label: 'bdo',
                                                value: 'bdo'
                                              },
                                              {
                                                label: 'blockquote',
                                                value: 'blockquote'
                                              },
                                              {
                                                label: 'body',
                                                value: 'body'
                                              },
                                              {
                                                label: 'br',
                                                value: 'br'
                                              },
                                              {
                                                label: 'canvas',
                                                value: 'canvas'
                                              },
                                              {
                                                label: 'caption',
                                                value: 'caption'
                                              },
                                              {
                                                label: 'cite',
                                                value: 'cite'
                                              },
                                              {
                                                label: 'col',
                                                value: 'col'
                                              },
                                              {
                                                label: 'colgroup',
                                                value: 'colgroup'
                                              },
                                              {
                                                label: 'data',
                                                value: 'data'
                                              },
                                              {
                                                label: 'datalist',
                                                value: 'datalist'
                                              },
                                              {
                                                label: 'dd',
                                                value: 'dd'
                                              },
                                              {
                                                label: 'del',
                                                value: 'del'
                                              },
                                              {
                                                label: 'details',
                                                value: 'details'
                                              },
                                              {
                                                label: 'dfn',
                                                value: 'dfn'
                                              },
                                              {
                                                label: 'dialog',
                                                value: 'dialog'
                                              },
                                              {
                                                label: 'dl',
                                                value: 'dl'
                                              },
                                              {
                                                label: 'dt',
                                                value: 'dt'
                                              },
                                              {
                                                label: 'em',
                                                value: 'em'
                                              },
                                              {
                                                label: 'embed',
                                                value: 'embed'
                                              },
                                              {
                                                label: 'fieldset',
                                                value: 'fieldset'
                                              },
                                              {
                                                label: 'figcaption',
                                                value: 'figcaption'
                                              },
                                              {
                                                label: 'figure',
                                                value: 'figure'
                                              },
                                              {
                                                label: 'footer',
                                                value: 'footer'
                                              },
                                              {
                                                label: 'h6',
                                                value: 'h6'
                                              },
                                              {
                                                label: 'head',
                                                value: 'head'
                                              },
                                              {
                                                label: 'header',
                                                value: 'header'
                                              },
                                              {
                                                label: 'hgroup',
                                                value: 'hgroup'
                                              },
                                              {
                                                label: 'hr',
                                                value: 'hr'
                                              },
                                              {
                                                label: 'html',
                                                value: 'html'
                                              },
                                              {
                                                label: 'i',
                                                value: 'i'
                                              },
                                              {
                                                label: 'iframe',
                                                value: 'iframe'
                                              },
                                              {
                                                label: 'img',
                                                value: 'img'
                                              },
                                              {
                                                label: 'ins',
                                                value: 'ins'
                                              },
                                              {
                                                label: 'kbd',
                                                value: 'kbd'
                                              },
                                              {
                                                label: 'legend',
                                                value: 'legend'
                                              },
                                              {
                                                label: 'li',
                                                value: 'li'
                                              },
                                              {
                                                label: 'main',
                                                value: 'main'
                                              },
                                              {
                                                label: 'map',
                                                value: 'map'
                                              },
                                              {
                                                label: 'meta',
                                                value: 'meta'
                                              },
                                              {
                                                label: 'meter',
                                                value: 'meter'
                                              },
                                              {
                                                label: 'nav',
                                                value: 'nav'
                                              },
                                              {
                                                label: 'noscript',
                                                value: 'noscript'
                                              },
                                              {
                                                label: 'ol',
                                                value: 'ol'
                                              },
                                              {
                                                label: 'optgroup',
                                                value: 'optgroup'
                                              },
                                              {
                                                label: 'option',
                                                value: 'option'
                                              },
                                              {
                                                label: 'output',
                                                value: 'output'
                                              },
                                              {
                                                label: 'p',
                                                value: 'p'
                                              },
                                              {
                                                label: 'param',
                                                value: 'param'
                                              },
                                              {
                                                label: 'picture',
                                                value: 'picture'
                                              },
                                              {
                                                label: 'pre',
                                                value: 'pre'
                                              },
                                              {
                                                label: 'q',
                                                value: 'q'
                                              },
                                              {
                                                label: 'rp',
                                                value: 'rp'
                                              },
                                              {
                                                label: 'rt',
                                                value: 'rt'
                                              },
                                              {
                                                label: 'ruby',
                                                value: 'ruby'
                                              },
                                              {
                                                label: 's',
                                                value: 's'
                                              },
                                              {
                                                label: 'samp',
                                                value: 'samp'
                                              },
                                              {
                                                label: 'script',
                                                value: 'script'
                                              },
                                              {
                                                label: 'section',
                                                value: 'section'
                                              },
                                              {
                                                label: 'slot',
                                                value: 'slot'
                                              },
                                              {
                                                label: 'source',
                                                value: 'source'
                                              },
                                              {
                                                label: 'sub',
                                                value: 'sub'
                                              },
                                              {
                                                label: 'summary',
                                                value: 'summary'
                                              },
                                              {
                                                label: 'sup',
                                                value: 'sup'
                                              },
                                              {
                                                label: 'table',
                                                value: 'table'
                                              },
                                              {
                                                label: 'tbody',
                                                value: 'tbody'
                                              },
                                              {
                                                label: 'td',
                                                value: 'td'
                                              },
                                              {
                                                label: 'template',
                                                value: 'template'
                                              },
                                              {
                                                label: 'textarea',
                                                value: 'textarea'
                                              },
                                              {
                                                label: 'tfoot',
                                                value: 'tfoot'
                                              },
                                              {
                                                label: 'th',
                                                value: 'th'
                                              },
                                              {
                                                label: 'thead',
                                                value: 'thead'
                                              },
                                              {
                                                label: 'time',
                                                value: 'time'
                                              },
                                              {
                                                label: 'tr',
                                                value: 'tr'
                                              },
                                              {
                                                label: 'track',
                                                value: 'track'
                                              },
                                              {
                                                label: 'u',
                                                value: 'u'
                                              },
                                              {
                                                label: 'ul',
                                                value: 'ul'
                                              },
                                              {
                                                label: 'var',
                                                value: 'var'
                                              },
                                              {
                                                label: 'video',
                                                value: 'video'
                                              },
                                              {
                                                label: 'wbr',
                                                value: 'wbr'
                                              },
                                              {
                                                label: 'big',
                                                value: 'big'
                                              },
                                              {
                                                label: 'keygen',
                                                value: 'keygen'
                                              },
                                              {
                                                label: 'menuitem',
                                                value: 'menuitem'
                                              },
                                              {
                                                label: 'webview',
                                                value: 'webview'
                                              }
                                            ]
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
                  extraSetter: {
                    componentName: 'MixedSetter',
                    props: {}
                  }
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
            'en-US': 'dropdownPrefixCls',
            'zh-CN': 'dropdownPrefixCls'
          }
        },
        name: 'dropdownPrefixCls',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'expandable',
            'zh-CN': 'expandable'
          }
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
                      'en-US': 'RecordType',
                      'zh-CN': 'RecordType'
                    }
                  },
                  name: 'RecordType',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {}
                  }
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
                      'en-US': 'defaultExpandedRowKeys',
                      'zh-CN': 'defaultExpandedRowKeys'
                    }
                  },
                  name: 'defaultExpandedRowKeys',
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
                      'en-US': 'expandedRowRender',
                      'zh-CN': 'expandedRowRender'
                    }
                  },
                  name: 'expandedRowRender',
                  setter: 'FunctionSetter'
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
                  setter: 'SlotSetter'
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
                      'en-US': 'expandIconColumnIndex',
                      'zh-CN': 'expandIconColumnIndex'
                    }
                  },
                  name: 'expandIconColumnIndex',
                  setter: 'NumberSetter'
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
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getContainerWidth',
            'zh-CN': 'getContainerWidth'
          }
        },
        name: 'getContainerWidth',
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
            'en-US': 'loading',
            'zh-CN': 'loading'
          }
        },
        name: 'loading',
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
                            'en-US': 'prefixCls',
                            'zh-CN': 'prefixCls'
                          }
                        },
                        name: 'prefixCls',
                        setter: 'StringSetter'
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
                            'en-US': 'spinning',
                            'zh-CN': 'spinning'
                          }
                        },
                        name: 'spinning',
                        setter: 'BoolSetter'
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
                          props: {
                            dataSource: [
                              {
                                label: 'default',
                                value: 'default'
                              },
                              {
                                label: 'small',
                                value: 'small'
                              },
                              {
                                label: 'large',
                                value: 'large'
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
                            'en-US': 'tip',
                            'zh-CN': 'tip'
                          }
                        },
                        name: 'tip',
                        setter: 'SlotSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'delay',
                            'zh-CN': 'delay'
                          }
                        },
                        name: 'delay',
                        setter: 'NumberSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'wrapperClassName',
                            'zh-CN': 'wrapperClassName'
                          }
                        },
                        name: 'wrapperClassName',
                        setter: 'StringSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'indicator',
                            'zh-CN': 'indicator'
                          }
                        },
                        name: 'indicator',
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
                            'en-US': 'children',
                            'zh-CN': 'children'
                          }
                        },
                        name: 'children',
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
                  setter: 'SlotSetter'
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
                  setter: 'SlotSetter'
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
                  setter: 'SlotSetter'
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
                  setter: 'SlotSetter'
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
                  setter: 'SlotSetter'
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
                  setter: 'SlotSetter'
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
                  setter: 'SlotSetter'
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
                  setter: 'SlotSetter'
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
            'en-US': 'pagination',
            'zh-CN': 'pagination'
          }
        },
        name: 'pagination',
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
                      }
                    ]
                  }
                }
              },
              {
                componentName: 'RadioGroupSetter',
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
            'en-US': 'rowKey',
            'zh-CN': 'rowKey'
          }
        },
        name: 'rowKey',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'StringSetter',
              'NumberSetter',
              {
                componentName: 'MixedSetter',
                props: {}
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
            'en-US': 'rowSelection',
            'zh-CN': 'rowSelection'
          }
        },
        name: 'rowSelection',
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
                      'en-US': 'T',
                      'zh-CN': 'T'
                    }
                  },
                  name: 'T',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {}
                  }
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
                      'en-US': 'defaultSelectedRowKeys',
                      'zh-CN': 'defaultSelectedRowKeys'
                    }
                  },
                  name: 'defaultSelectedRowKeys',
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
                                                'en-US': 'text',
                                                'zh-CN': 'text'
                                              }
                                            },
                                            name: 'text',
                                            setter: 'SlotSetter'
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
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  {
                                    componentName: 'RadioGroupSetter',
                                    props: {
                                      dataSource: [
                                        {
                                          label: 'SELECT_ALL',
                                          value: 'SELECT_ALL'
                                        },
                                        {
                                          label: 'SELECT_INVERT',
                                          value: 'SELECT_INVERT'
                                        },
                                        {
                                          label: 'SELECT_NONE',
                                          value: 'SELECT_NONE'
                                        }
                                      ],
                                      options: [
                                        {
                                          label: 'SELECT_ALL',
                                          value: 'SELECT_ALL'
                                        },
                                        {
                                          label: 'SELECT_INVERT',
                                          value: 'SELECT_INVERT'
                                        },
                                        {
                                          label: 'SELECT_NONE',
                                          value: 'SELECT_NONE'
                                        }
                                      ]
                                    }
                                  }
                                ]
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
                      'en-US': 'columnTitle',
                      'zh-CN': 'columnTitle'
                    }
                  },
                  name: 'columnTitle',
                  setter: 'SlotSetter'
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
                      'en-US': 'renderCell',
                      'zh-CN': 'renderCell'
                    }
                  },
                  name: 'renderCell',
                  setter: 'FunctionSetter'
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
                            'en-US': 'title',
                            'zh-CN': 'title'
                          }
                        },
                        name: 'title',
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
                            'en-US': 'overlay',
                            'zh-CN': 'overlay'
                          }
                        },
                        name: 'overlay',
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
                            'en-US': 'title',
                            'zh-CN': 'title'
                          }
                        },
                        name: 'title',
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
                            'en-US': 'overlay',
                            'zh-CN': 'overlay'
                          }
                        },
                        name: 'overlay',
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
                            'en-US': 'offsetSummary',
                            'zh-CN': 'offsetSummary'
                          }
                        },
                        name: 'offsetSummary',
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
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'getContainer',
                            'zh-CN': 'getContainer'
                          }
                        },
                        name: 'getContainer',
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
            'en-US': 'summary',
            'zh-CN': 'summary'
          }
        },
        name: 'summary',
        setter: 'FunctionSetter'
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
            'en-US': 'tailor',
            'zh-CN': 'tailor'
          }
        },
        name: 'tailor',
        setter: 'BoolSetter'
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
        setter: 'FunctionSetter'
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
          name: 'onChange'
        },
        {
          name: 'onExpand'
        },
        {
          name: 'onRow'
        },
        {
          name: 'onHeaderRow'
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
