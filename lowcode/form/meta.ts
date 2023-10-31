import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import GridColMeta from '../grid-col/meta';

const FormMeta: IPublicTypeComponentMetadata = {
  componentName: 'Form',
  title: '表单',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Form',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'colon',
            'zh-CN': 'colon'
          }
        },
        name: 'colon',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'component',
            'zh-CN': 'component'
          }
        },
        name: 'component',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'StringSetter',
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
            'en-US': 'feedbackIcons',
            'zh-CN': 'feedbackIcons'
          }
        },
        name: 'feedbackIcons',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fields',
            'zh-CN': 'fields'
          }
        },
        name: 'fields',
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
                          'en-US': 'errors',
                          'zh-CN': 'errors'
                        }
                      },
                      name: 'errors',
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
                          'en-US': 'warnings',
                          'zh-CN': 'warnings'
                        }
                      },
                      name: 'warnings',
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
                          'en-US': 'name',
                          'zh-CN': 'name'
                        }
                      },
                      name: 'name',
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
                          'en-US': 'touched',
                          'zh-CN': 'touched'
                        }
                      },
                      name: 'touched',
                      setter: 'BoolSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'validating',
                          'zh-CN': 'validating'
                        }
                      },
                      name: 'validating',
                      setter: 'BoolSetter'
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
            'en-US': 'form',
            'zh-CN': 'form'
          }
        },
        name: 'form'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'initialValues',
            'zh-CN': 'initialValues'
          }
        },
        name: 'initialValues'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'labelAlign',
            'zh-CN': 'labelAlign'
          }
        },
        name: 'labelAlign',
        setter: {
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
      },
      {
        title: 'labelCol',
        display: 'entry',
        type: 'field',
        items: [
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'labelCol',
                'zh-CN': 'labelCol'
              }
            },
            name: 'labelCol',
            setter: {
              componentName: 'ObjectSetter',
              condition: () => false,
              props: {
                config: {
                  items: GridColMeta.configure!['props']
                }
              }
            }
          }
        ]
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'labelWrap',
            'zh-CN': 'labelWrap'
          }
        },
        name: 'labelWrap',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'layout',
            'zh-CN': 'layout'
          }
        },
        name: 'layout',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'horizontal',
                value: 'horizontal'
              },
              {
                label: 'vertical',
                value: 'vertical'
              },
              {
                label: 'inline',
                value: 'inline'
              }
            ],
            options: [
              {
                label: 'horizontal',
                value: 'horizontal'
              },
              {
                label: 'vertical',
                value: 'vertical'
              },
              {
                label: 'inline',
                value: 'inline'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'name',
            'zh-CN': 'name'
          }
        },
        name: 'name',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onFieldsChange',
            'zh-CN': 'onFieldsChange'
          }
        },
        name: 'onFieldsChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onFinish',
            'zh-CN': 'onFinish'
          }
        },
        name: 'onFinish',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onFinishFailed',
            'zh-CN': 'onFinishFailed'
          }
        },
        name: 'onFinishFailed',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onValuesChange',
            'zh-CN': 'onValuesChange'
          }
        },
        name: 'onValuesChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'preserve',
            'zh-CN': 'preserve'
          }
        },
        name: 'preserve',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'requiredMark',
            'zh-CN': 'requiredMark'
          }
        },
        name: 'requiredMark',
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
                      label: 'optional',
                      value: 'optional'
                    }
                  ],
                  options: [
                    {
                      label: 'optional',
                      value: 'optional'
                    }
                  ]
                }
              },
              'FunctionSetter'
            ]
          }
        }
      },
      /**
       * @TODO 待添加 scrollIntoView 的 Options
       * @SEE https://github.com/scroll-into-view/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#scrollintoviewtarget-options
       */
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'scrollToFirstError',
            'zh-CN': 'scrollToFirstError'
          }
        },
        name: 'scrollToFirstError',
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
        title: 'validateMessages',
        display: 'entry',
        type: 'field',
        items: [
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'validateMessages',
                'zh-CN': 'validateMessages'
              }
            },
            name: 'validateMessages',
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
                          'en-US': 'default',
                          'zh-CN': 'default'
                        }
                      },
                      name: 'default',
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
                          'en-US': 'required',
                          'zh-CN': 'required'
                        }
                      },
                      name: 'required',
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
                          'en-US': 'enum',
                          'zh-CN': 'enum'
                        }
                      },
                      name: 'enum',
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
                          'en-US': 'whitespace',
                          'zh-CN': 'whitespace'
                        }
                      },
                      name: 'whitespace',
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
                          'en-US': 'date',
                          'zh-CN': 'date'
                        }
                      },
                      name: 'date',
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
                                    'en-US': 'format',
                                    'zh-CN': 'format'
                                  }
                                },
                                name: 'format',
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
                                    'en-US': 'parse',
                                    'zh-CN': 'parse'
                                  }
                                },
                                name: 'parse',
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
                                    'en-US': 'invalid',
                                    'zh-CN': 'invalid'
                                  }
                                },
                                name: 'invalid',
                                setter: {
                                  componentName: 'MixedSetter',
                                  props: {
                                    setters: ['StringSetter', 'FunctionSetter']
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
                          'en-US': 'types',
                          'zh-CN': 'types'
                        }
                      },
                      name: 'types',
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
                                    'en-US': 'string',
                                    'zh-CN': 'string'
                                  }
                                },
                                name: 'string',
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
                                    'en-US': 'method',
                                    'zh-CN': 'method'
                                  }
                                },
                                name: 'method',
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
                                    'en-US': 'array',
                                    'zh-CN': 'array'
                                  }
                                },
                                name: 'array',
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
                                    'en-US': 'object',
                                    'zh-CN': 'object'
                                  }
                                },
                                name: 'object',
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
                                    'en-US': 'number',
                                    'zh-CN': 'number'
                                  }
                                },
                                name: 'number',
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
                                    'en-US': 'date',
                                    'zh-CN': 'date'
                                  }
                                },
                                name: 'date',
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
                                    'en-US': 'boolean',
                                    'zh-CN': 'boolean'
                                  }
                                },
                                name: 'boolean',
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
                                    'en-US': 'integer',
                                    'zh-CN': 'integer'
                                  }
                                },
                                name: 'integer',
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
                                    'en-US': 'float',
                                    'zh-CN': 'float'
                                  }
                                },
                                name: 'float',
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
                                    'en-US': 'regexp',
                                    'zh-CN': 'regexp'
                                  }
                                },
                                name: 'regexp',
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
                                    'en-US': 'email',
                                    'zh-CN': 'email'
                                  }
                                },
                                name: 'email',
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
                                    'en-US': 'url',
                                    'zh-CN': 'url'
                                  }
                                },
                                name: 'url',
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
                                    'en-US': 'hex',
                                    'zh-CN': 'hex'
                                  }
                                },
                                name: 'hex',
                                setter: {
                                  componentName: 'MixedSetter',
                                  props: {
                                    setters: ['StringSetter', 'FunctionSetter']
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
                          'en-US': 'string',
                          'zh-CN': 'string'
                        }
                      },
                      name: 'string',
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
                                    'en-US': 'len',
                                    'zh-CN': 'len'
                                  }
                                },
                                name: 'len',
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
                                    'en-US': 'min',
                                    'zh-CN': 'min'
                                  }
                                },
                                name: 'min',
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
                                    'en-US': 'max',
                                    'zh-CN': 'max'
                                  }
                                },
                                name: 'max',
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
                                    'en-US': 'range',
                                    'zh-CN': 'range'
                                  }
                                },
                                name: 'range',
                                setter: {
                                  componentName: 'MixedSetter',
                                  props: {
                                    setters: ['StringSetter', 'FunctionSetter']
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
                          'en-US': 'number',
                          'zh-CN': 'number'
                        }
                      },
                      name: 'number',
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
                                    'en-US': 'len',
                                    'zh-CN': 'len'
                                  }
                                },
                                name: 'len',
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
                                    'en-US': 'min',
                                    'zh-CN': 'min'
                                  }
                                },
                                name: 'min',
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
                                    'en-US': 'max',
                                    'zh-CN': 'max'
                                  }
                                },
                                name: 'max',
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
                                    'en-US': 'range',
                                    'zh-CN': 'range'
                                  }
                                },
                                name: 'range',
                                setter: {
                                  componentName: 'MixedSetter',
                                  props: {
                                    setters: ['StringSetter', 'FunctionSetter']
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
                          'en-US': 'array',
                          'zh-CN': 'array'
                        }
                      },
                      name: 'array',
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
                                    'en-US': 'len',
                                    'zh-CN': 'len'
                                  }
                                },
                                name: 'len',
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
                                    'en-US': 'min',
                                    'zh-CN': 'min'
                                  }
                                },
                                name: 'min',
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
                                    'en-US': 'max',
                                    'zh-CN': 'max'
                                  }
                                },
                                name: 'max',
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
                                    'en-US': 'range',
                                    'zh-CN': 'range'
                                  }
                                },
                                name: 'range',
                                setter: {
                                  componentName: 'MixedSetter',
                                  props: {
                                    setters: ['StringSetter', 'FunctionSetter']
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
                          'en-US': 'pattern',
                          'zh-CN': 'pattern'
                        }
                      },
                      name: 'pattern',
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
                                    'en-US': 'mismatch',
                                    'zh-CN': 'mismatch'
                                  }
                                },
                                name: 'mismatch',
                                setter: {
                                  componentName: 'MixedSetter',
                                  props: {
                                    setters: ['StringSetter', 'FunctionSetter']
                                  }
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
            }
          }
        ]
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'validateTrigger',
            'zh-CN': 'validateTrigger'
          }
        },
        name: 'validateTrigger',
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
        title: 'wrapperCol',
        display: 'entry',
        type: 'field',
        items: [
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'wrapperCol',
                'zh-CN': 'wrapperCol'
              }
            },
            name: 'wrapperCol',
            setter: {
              componentName: 'ObjectSetter',
              condition: () => false,
              props: {
                config: {
                  items: GridColMeta.configure!['props']
                }
              }
            }
          }
        ]
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
    title: '表单',
    screenshot: '',
    schema: {
      componentName: 'Form',
      props: {}
    }
  }
];

export default {
  ...FormMeta,
  snippets
};
