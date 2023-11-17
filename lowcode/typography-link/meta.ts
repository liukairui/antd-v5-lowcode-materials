import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TypographyLinkMeta: IPublicTypeComponentMetadata = {
  componentName: 'TypographyLink',
  title: '链接',
  group: '原子组件',
  category: '通用 General',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'TypographyLink',
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
                            'en-US': 'tooltips',
                            'zh-CN': 'tooltips'
                          }
                        },
                        name: 'tooltips',
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
            'en-US': 'download',
            'zh-CN': 'download'
          }
        },
        name: 'download',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'StringSetter']
          }
        }
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
                            'en-US': 'tooltip',
                            'zh-CN': 'tooltip'
                          }
                        },
                        name: 'tooltip',
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
            'en-US': 'ellipsis',
            'zh-CN': 'ellipsis'
          }
        },
        name: 'ellipsis',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'href',
            'zh-CN': 'href'
          }
        },
        name: 'href',
        setter: 'StringSetter'
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
            'en-US': 'keyboard',
            'zh-CN': 'keyboard'
          }
        },
        name: 'keyboard',
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
            'en-US': 'target',
            'zh-CN': 'target'
          }
        },
        name: 'target',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '_self',
                value: '_self'
              },
              {
                label: '_blank',
                value: '_blank'
              },
              {
                label: '_parent',
                value: '_parent'
              },
              {
                label: '_top',
                value: '_top'
              }
            ],
            options: [
              {
                label: '_self',
                value: '_self'
              },
              {
                label: '_blank',
                value: '_blank'
              },
              {
                label: '_parent',
                value: '_parent'
              },
              {
                label: '_top',
                value: '_top'
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
      },
      {
        title: '原生 a 标签属性',
        type: 'group',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
        items: [
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'download',
                'zh-CN': 'download'
              }
            },
            name: 'download',
            setter: {
              componentName: 'MixedSetter',
              props: {
                setters: ['BoolSetter', 'StringSetter']
              }
            }
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'hrefLang',
                'zh-CN': 'hrefLang'
              }
            },
            name: 'hrefLang',
            setter: 'StringSetter'
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'ping',
                'zh-CN': 'ping'
              }
            },
            name: 'ping',
            setter: 'StringSetter'
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'referrerPolicy',
                'zh-CN': 'referrerPolicy'
              }
            },
            name: 'referrerPolicy',
            setter: {
              componentName: 'SelectSetter',
              props: {
                dataSource: [
                  {
                    label: '',
                    value: ''
                  },
                  {
                    label: 'no-referrer',
                    value: 'no-referrer'
                  },
                  {
                    label: 'no-referrer-when-downgrade',
                    value: 'no-referrer-when-downgrade'
                  },
                  {
                    label: 'origin',
                    value: 'origin'
                  },
                  {
                    label: 'origin-when-cross-origin',
                    value: 'origin-when-cross-origin'
                  },
                  {
                    label: 'same-origin',
                    value: 'same-origin'
                  },
                  {
                    label: 'strict-origin',
                    value: 'strict-origin'
                  },
                  {
                    label: 'strict-origin-when-cross-origin',
                    value: 'strict-origin-when-cross-origin'
                  },
                  {
                    label: 'unsafe-url',
                    value: 'unsafe-url'
                  }
                ],
                options: [
                  {
                    label: '',
                    value: ''
                  },
                  {
                    label: 'no-referrer',
                    value: 'no-referrer'
                  },
                  {
                    label: 'no-referrer-when-downgrade',
                    value: 'no-referrer-when-downgrade'
                  },
                  {
                    label: 'origin',
                    value: 'origin'
                  },
                  {
                    label: 'origin-when-cross-origin',
                    value: 'origin-when-cross-origin'
                  },
                  {
                    label: 'same-origin',
                    value: 'same-origin'
                  },
                  {
                    label: 'strict-origin',
                    value: 'strict-origin'
                  },
                  {
                    label: 'strict-origin-when-cross-origin',
                    value: 'strict-origin-when-cross-origin'
                  },
                  {
                    label: 'unsafe-url',
                    value: 'unsafe-url'
                  }
                ]
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
    title: '链接',
    screenshot: '',
    schema: {
      componentName: 'TypographyLink',
      props: {}
    }
  }
];

export default {
  ...TypographyLinkMeta,
  snippets
};
