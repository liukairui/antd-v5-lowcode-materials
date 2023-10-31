import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const RadioGroupMeta: IPublicTypeComponentMetadata = {
  componentName: 'RadioGroup',
  title: '单选框组',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'RadioGroup',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'buttonStyle',
            'zh-CN': 'buttonStyle'
          }
        },
        name: 'buttonStyle',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'outline',
                value: 'outline'
              },
              {
                label: 'solid',
                value: 'solid'
              }
            ],
            options: [
              {
                label: 'outline',
                value: 'outline'
              },
              {
                label: 'solid',
                value: 'solid'
              }
            ]
          }
        }
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
          props: {}
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
            'en-US': 'onMouseEnter',
            'zh-CN': 'onMouseEnter'
          }
        },
        name: 'onMouseEnter',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onMouseLeave',
            'zh-CN': 'onMouseLeave'
          }
        },
        name: 'onMouseLeave',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'optionType',
            'zh-CN': 'optionType'
          }
        },
        name: 'optionType',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'button',
                value: 'button'
              },
              {
                label: 'default',
                value: 'default'
              }
            ],
            options: [
              {
                label: 'button',
                value: 'button'
              },
              {
                label: 'default',
                value: 'default'
              }
            ]
          }
        }
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
                  'StringSetter',
                  'NumberSetter',
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
                                setters: ['StringSetter', 'NumberSetter', 'BoolSetter']
                              }
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
                                'en-US': 'onChange',
                                'zh-CN': 'onChange'
                              }
                            },
                            name: 'onChange',
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
            'en-US': 'value',
            'zh-CN': 'value'
          }
        },
        name: 'value',
        setter: {
          componentName: 'MixedSetter',
          props: {}
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
    title: '单选框组',
    screenshot: '',
    schema: {
      componentName: 'RadioGroup',
      props: {}
    }
  }
];

export default {
  ...RadioGroupMeta,
  snippets
};
