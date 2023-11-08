import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CascaderMeta: IPublicTypeComponentMetadata = {
  componentName: 'Cascader',
  title: '级联选择',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Cascader',
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
            'en-US': 'autoFocus',
            'zh-CN': 'autoFocus'
          }
        },
        name: 'autoFocus',
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
            'en-US': 'changeOnSelect',
            'zh-CN': 'changeOnSelect'
          }
        },
        name: 'changeOnSelect',
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
            'en-US': 'displayRender',
            'zh-CN': 'displayRender'
          }
        },
        name: 'displayRender',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dropdownMenuColumnStyle',
            'zh-CN': 'dropdownMenuColumnStyle'
          }
        },
        name: 'dropdownMenuColumnStyle',
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
            'en-US': 'dropdownRender',
            'zh-CN': 'dropdownRender'
          }
        },
        name: 'dropdownRender',
        setter: 'FunctionSetter'
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
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'expandTrigger',
            'zh-CN': 'expandTrigger'
          }
        },
        name: 'expandTrigger',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'click',
                value: 'click'
              },
              {
                label: 'hover',
                value: 'hover'
              }
            ],
            options: [
              {
                label: 'click',
                value: 'click'
              },
              {
                label: 'hover',
                value: 'hover'
              }
            ]
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
          componentName: 'MixedSetter',
          props: {
            setters: ['SlotSetter', 'FunctionSetter']
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
          componentName: 'StringSetter',
          initialValue: undefined
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
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['FunctionSetter']
          }
        }
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
            'en-US': 'open',
            'zh-CN': 'open'
          }
        },
        name: 'open',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'options',
            'zh-CN': 'options'
          }
        },
        name: 'options',
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
                                'en-US': 'label',
                                'zh-CN': 'label'
                              }
                            },
                            name: 'label',
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
                                setters: ['StringSetter', 'NumberSetter']
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
                            description: '@todo 暂不支持递归',
                            name: 'children',
                            setter: {
                              componentName: 'VariableSetter'
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
                                'en-US': 'isLeaf',
                                'zh-CN': 'isLeaf'
                              }
                            },
                            name: 'isLeaf',
                            setter: 'BoolSetter'
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
                                'en-US': 'disabled',
                                'zh-CN': 'disabled'
                              }
                            },
                            name: 'disabled',
                            setter: 'BoolSetter'
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
            'en-US': 'placeholder',
            'zh-CN': 'placeholder'
          }
        },
        name: 'placeholder',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
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
            'en-US': 'removeIcon',
            'zh-CN': 'removeIcon'
          }
        },
        name: 'removeIcon',
        setter: 'SlotSetter'
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
                            'en-US': 'filter',
                            'zh-CN': 'filter'
                          }
                        },
                        name: 'filter',
                        setter: 'FunctionSetter'
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
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'sort',
                            'zh-CN': 'sort'
                          }
                        },
                        name: 'sort',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'matchInputWidth',
                            'zh-CN': 'matchInputWidth'
                          }
                        },
                        name: 'matchInputWidth',
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'limit',
                            'zh-CN': 'limit'
                          }
                        },
                        name: 'limit',
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
        setter: 'SlotSetter'
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
        setter: 'FunctionSetter'
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
    title: '级联选择',
    screenshot: '',
    schema: {
      componentName: 'Cascader',
      props: {}
    }
  }
];

export default {
  ...CascaderMeta,
  snippets
};
