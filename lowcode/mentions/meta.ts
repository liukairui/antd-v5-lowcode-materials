import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const MentionsMeta: IPublicTypeComponentMetadata = {
  componentName: 'Mentions',
  title: '提及',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Mentions',
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
            'en-US': 'autoComplete',
            'zh-CN': 'autoComplete'
          },
          tip: {
            type: 'i18n',
            'en-US': 'autoComplete',
            'zh-CN': 'autoComplete'
          }
        },
        name: 'autoComplete',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoFocus',
            'zh-CN': 'autoFocus'
          },
          tip: {
            type: 'i18n',
            'en-US': 'autoFocus',
            'zh-CN': 'autoFocus'
          }
        },
        name: 'autoFocus',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoSize',
            'zh-CN': 'autoSize'
          },
          tip: {
            type: 'i18n',
            'en-US': 'autoSize',
            'zh-CN': 'autoSize'
          }
        },
        name: 'autoSize',
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
                            'en-US': 'minRows',
                            'zh-CN': 'minRows'
                          }
                        },
                        name: 'minRows',
                        setter: {
                          componentName: 'NumberSetter',
                          initialValue: undefined
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'maxRows',
                            'zh-CN': 'maxRows'
                          }
                        },
                        name: 'maxRows',
                        setter: {
                          componentName: 'NumberSetter',
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
            'en-US': 'classNames',
            'zh-CN': 'classNames'
          },
          tip: {
            type: 'i18n',
            'en-US': 'classNames',
            'zh-CN': 'classNames'
          }
        },
        name: 'classNames',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'textarea',
                      'zh-CN': 'textarea'
                    }
                  },
                  name: 'textarea',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'count',
                      'zh-CN': 'count'
                    }
                  },
                  name: 'count',
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
            'en-US': 'classes',
            'zh-CN': 'classes'
          },
          tip: {
            type: 'i18n',
            'en-US': 'classes',
            'zh-CN': 'classes'
          }
        },
        name: 'classes',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'countWrapper',
                      'zh-CN': 'countWrapper'
                    }
                  },
                  name: 'countWrapper',
                  setter: {
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'affixWrapper',
                      'zh-CN': 'affixWrapper'
                    }
                  },
                  name: 'affixWrapper',
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
            'en-US': 'cols',
            'zh-CN': 'cols'
          },
          tip: {
            type: 'i18n',
            'en-US': 'cols',
            'zh-CN': 'cols'
          }
        },
        name: 'cols',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultValue',
            'zh-CN': 'defaultValue'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultValue',
            'zh-CN': 'defaultValue'
          }
        },
        name: 'defaultValue',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dirName',
            'zh-CN': 'dirName'
          },
          tip: {
            type: 'i18n',
            'en-US': 'dirName',
            'zh-CN': 'dirName'
          }
        },
        name: 'dirName',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'direction',
            'zh-CN': 'direction'
          },
          tip: {
            type: 'i18n',
            'en-US': 'direction',
            'zh-CN': 'direction'
          }
        },
        name: 'direction',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'ltr',
                value: 'ltr'
              },
              {
                label: 'rtl',
                value: 'rtl'
              }
            ],
            options: [
              {
                label: 'ltr',
                value: 'ltr'
              },
              {
                label: 'rtl',
                value: 'rtl'
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
            'en-US': 'dropdownClassName',
            'zh-CN': 'dropdownClassName'
          },
          tip: {
            type: 'i18n',
            'en-US': 'dropdownClassName',
            'zh-CN': 'dropdownClassName'
          }
        },
        name: 'dropdownClassName',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'filterOption',
            'zh-CN': 'filterOption'
          },
          tip: {
            type: 'i18n',
            'en-US': 'filterOption',
            'zh-CN': 'filterOption'
          }
        },
        name: 'filterOption',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'FunctionSetter'
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
            'en-US': 'form',
            'zh-CN': 'form'
          },
          tip: {
            type: 'i18n',
            'en-US': 'form',
            'zh-CN': 'form'
          }
        },
        name: 'form',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getPopupContainer',
            'zh-CN': 'getPopupContainer'
          },
          tip: {
            type: 'i18n',
            'en-US': 'getPopupContainer',
            'zh-CN': 'getPopupContainer'
          }
        },
        name: 'getPopupContainer',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': 'loading'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': 'loading'
          }
        },
        name: 'loading',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxLength',
            'zh-CN': 'maxLength'
          },
          tip: {
            type: 'i18n',
            'en-US': 'maxLength',
            'zh-CN': 'maxLength'
          }
        },
        name: 'maxLength',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'minLength',
            'zh-CN': 'minLength'
          },
          tip: {
            type: 'i18n',
            'en-US': 'minLength',
            'zh-CN': 'minLength'
          }
        },
        name: 'minLength',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'name',
            'zh-CN': 'name'
          },
          tip: {
            type: 'i18n',
            'en-US': 'name',
            'zh-CN': 'name'
          }
        },
        name: 'name',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'notFoundContent',
            'zh-CN': 'notFoundContent'
          },
          tip: {
            type: 'i18n',
            'en-US': 'notFoundContent',
            'zh-CN': 'notFoundContent'
          }
        },
        name: 'notFoundContent',
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
            'en-US': 'onPressEnter',
            'zh-CN': 'onPressEnter'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onPressEnter',
            'zh-CN': 'onPressEnter'
          }
        },
        name: 'onPressEnter',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onResize',
            'zh-CN': 'onResize'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onResize',
            'zh-CN': 'onResize'
          }
        },
        name: 'onResize',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onSearch',
            'zh-CN': 'onSearch'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onSearch',
            'zh-CN': 'onSearch'
          }
        },
        name: 'onSearch',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onSelect',
            'zh-CN': 'onSelect'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onSelect',
            'zh-CN': 'onSelect'
          }
        },
        name: 'onSelect',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'open',
            'zh-CN': 'open'
          },
          tip: {
            type: 'i18n',
            'en-US': 'open',
            'zh-CN': 'open'
          }
        },
        name: 'open',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'options',
            'zh-CN': 'options'
          },
          tip: {
            type: 'i18n',
            'en-US': 'options',
            'zh-CN': 'options'
          }
        },
        name: 'options',
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
                          'en-US': 'label',
                          'zh-CN': 'label'
                        }
                      },
                      name: 'label',
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
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': 'placeholder'
          },
          tip: {
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
          },
          tip: {
            type: 'i18n',
            'en-US': 'placement',
            'zh-CN': 'placement'
          }
        },
        name: 'placement',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'top',
                value: 'top'
              },
              {
                label: 'bottom',
                value: 'bottom'
              }
            ],
            options: [
              {
                label: 'top',
                value: 'top'
              },
              {
                label: 'bottom',
                value: 'bottom'
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
            'en-US': 'popupClassName',
            'zh-CN': 'popupClassName'
          },
          tip: {
            type: 'i18n',
            'en-US': 'popupClassName',
            'zh-CN': 'popupClassName'
          }
        },
        name: 'popupClassName',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'prefix',
            'zh-CN': 'prefix'
          },
          tip: {
            type: 'i18n',
            'en-US': 'prefix',
            'zh-CN': 'prefix'
          }
        },
        name: 'prefix',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: undefined
              },
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'StringSetter',
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
            'en-US': 'readOnly',
            'zh-CN': 'readOnly'
          },
          tip: {
            type: 'i18n',
            'en-US': 'readOnly',
            'zh-CN': 'readOnly'
          }
        },
        name: 'readOnly',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'required',
            'zh-CN': 'required'
          },
          tip: {
            type: 'i18n',
            'en-US': 'required',
            'zh-CN': 'required'
          }
        },
        name: 'required',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rows',
            'zh-CN': 'rows'
          },
          tip: {
            type: 'i18n',
            'en-US': 'rows',
            'zh-CN': 'rows'
          }
        },
        name: 'rows',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'split',
            'zh-CN': 'split'
          },
          tip: {
            type: 'i18n',
            'en-US': 'split',
            'zh-CN': 'split'
          }
        },
        name: 'split',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'status',
            'zh-CN': 'status'
          },
          tip: {
            type: 'i18n',
            'en-US': 'status',
            'zh-CN': 'status'
          }
        },
        name: 'status',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '',
                value: ''
              },
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
                label: '',
                value: ''
              },
              {
                label: 'warning',
                value: 'warning'
              },
              {
                label: 'error',
                value: 'error'
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
            'en-US': 'styles',
            'zh-CN': 'styles'
          },
          tip: {
            type: 'i18n',
            'en-US': 'styles',
            'zh-CN': 'styles'
          }
        },
        name: 'styles',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'textarea',
                      'zh-CN': 'textarea'
                    }
                  },
                  name: 'textarea',
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
                      'en-US': 'count',
                      'zh-CN': 'count'
                    }
                  },
                  name: 'count',
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
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'transitionName',
            'zh-CN': 'transitionName'
          },
          tip: {
            type: 'i18n',
            'en-US': 'transitionName',
            'zh-CN': 'transitionName'
          }
        },
        name: 'transitionName',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'validateSearch',
            'zh-CN': 'validateSearch'
          },
          tip: {
            type: 'i18n',
            'en-US': 'validateSearch',
            'zh-CN': 'validateSearch'
          }
        },
        name: 'validateSearch',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': 'value'
          },
          tip: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': 'value'
          }
        },
        name: 'value',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'wrap',
            'zh-CN': 'wrap'
          },
          tip: {
            type: 'i18n',
            'en-US': 'wrap',
            'zh-CN': 'wrap'
          }
        },
        name: 'wrap',
        setter: {
          componentName: 'StringSetter',
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
    title: '提及',
    screenshot: '',
    schema: {
      componentName: 'Mentions',
      props: {}
    }
  }
];

export default {
  ...MentionsMeta,
  snippets
};
