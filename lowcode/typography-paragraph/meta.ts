import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TypographyParagraphMeta: IPublicTypeComponentMetadata = {
  componentName: 'TypographyParagraph',
  title: '段落',
  group: '原子组件',
  category: '通用 General',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'TypographyParagraph',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'code',
            'zh-CN': 'code'
          }
        },
        name: 'code',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'copyable',
            'zh-CN': 'copyable'
          }
        },
        name: 'copyable',
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
                            'en-US': 'text',
                            'zh-CN': 'text'
                          }
                        },
                        name: 'text',
                        setter: 'StringSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onCopy',
                            'zh-CN': 'onCopy'
                          }
                        },
                        name: 'onCopy',
                        setter: 'FunctionSetter'
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
                        setter: 'SlotSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'tooltips',
                            'zh-CN': 'tooltips'
                          }
                        },
                        name: 'tooltips',
                        setter: 'SlotSetter'
                      },
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
                          componentName: 'RadioGroupSetter',
                          condition: () => false,
                          props: {
                            dataSource: [
                              {
                                label: 'text/plain',
                                value: 'text/plain'
                              },
                              {
                                label: 'text/html',
                                value: 'text/html'
                              }
                            ],
                            options: [
                              {
                                label: 'text/plain',
                                value: 'text/plain'
                              },
                              {
                                label: 'text/html',
                                value: 'text/html'
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
            'en-US': 'delete',
            'zh-CN': 'delete'
          }
        },
        name: 'delete',
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
            'en-US': 'editable',
            'zh-CN': 'editable'
          }
        },
        name: 'editable',
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
                            'en-US': 'text',
                            'zh-CN': 'text'
                          }
                        },
                        name: 'text',
                        setter: 'StringSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'editing',
                            'zh-CN': 'editing'
                          }
                        },
                        name: 'editing',
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
                        setter: 'SlotSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'tooltip',
                            'zh-CN': 'tooltip'
                          }
                        },
                        name: 'tooltip',
                        setter: 'SlotSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onStart',
                            'zh-CN': 'onStart'
                          }
                        },
                        name: 'onStart',
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
                            'en-US': 'onCancel',
                            'zh-CN': 'onCancel'
                          }
                        },
                        name: 'onCancel',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'onEnd',
                            'zh-CN': 'onEnd'
                          }
                        },
                        name: 'onEnd',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'maxLength',
                            'zh-CN': 'maxLength'
                          }
                        },
                        name: 'maxLength',
                        setter: 'NumberSetter'
                      },
                      {
                        title: {
                          label: {
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
                                            'en-US': 'minRows',
                                            'zh-CN': 'minRows'
                                          }
                                        },
                                        name: 'minRows',
                                        setter: 'NumberSetter'
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
                            'en-US': 'triggerType',
                            'zh-CN': 'triggerType'
                          }
                        },
                        name: 'triggerType',
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
                                    label: 'icon',
                                    value: 'icon'
                                  },
                                  {
                                    label: 'text',
                                    value: 'text'
                                  }
                                ],
                                options: [
                                  {
                                    label: 'icon',
                                    value: 'icon'
                                  },
                                  {
                                    label: 'text',
                                    value: 'text'
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
                            'en-US': 'enterIcon',
                            'zh-CN': 'enterIcon'
                          }
                        },
                        name: 'enterIcon',
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
                            'en-US': 'rows',
                            'zh-CN': 'rows'
                          }
                        },
                        name: 'rows',
                        setter: 'NumberSetter'
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
                        setter: 'BoolSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'suffix',
                            'zh-CN': 'suffix'
                          }
                        },
                        name: 'suffix',
                        setter: 'StringSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'symbol',
                            'zh-CN': 'symbol'
                          }
                        },
                        name: 'symbol',
                        setter: 'SlotSetter'
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
                            'en-US': 'onEllipsis',
                            'zh-CN': 'onEllipsis'
                          }
                        },
                        name: 'onEllipsis',
                        setter: 'FunctionSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'tooltip',
                            'zh-CN': 'tooltip'
                          }
                        },
                        name: 'tooltip',
                        setter: {
                          componentName: 'MixedSetter',
                          props: {
                            setters: ['BoolSetter', 'SlotSetter']
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
            'en-US': 'italic',
            'zh-CN': 'italic'
          }
        },
        name: 'italic',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mark',
            'zh-CN': 'mark'
          }
        },
        name: 'mark',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'strong',
            'zh-CN': 'strong'
          }
        },
        name: 'strong',
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
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'danger',
                value: 'danger'
              },
              {
                label: 'secondary',
                value: 'secondary'
              },
              {
                label: 'success',
                value: 'success'
              },
              {
                label: 'warning',
                value: 'warning'
              }
            ],
            options: [
              {
                label: 'danger',
                value: 'danger'
              },
              {
                label: 'secondary',
                value: 'secondary'
              },
              {
                label: 'success',
                value: 'success'
              },
              {
                label: 'warning',
                value: 'warning'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'underline',
            'zh-CN': 'underline'
          }
        },
        name: 'underline',
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
    title: '段落',
    screenshot: '',
    schema: {
      componentName: 'TypographyParagraph',
      props: {}
    }
  }
];

export default {
  ...TypographyParagraphMeta,
  snippets
};
