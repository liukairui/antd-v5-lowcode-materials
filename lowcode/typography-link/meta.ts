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
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'TypographyLink',
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
            'en-US': 'code',
            'zh-CN': 'code'
          },
          tip: {
            type: 'i18n',
            'en-US': 'code',
            'zh-CN': 'code'
          }
        },
        name: 'code',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'copyable',
            'zh-CN': 'copyable'
          },
          tip: {
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
                            'en-US': 'text',
                            'zh-CN': 'text'
                          }
                        },
                        name: 'text',
                        setter: {
                          componentName: 'StringSetter',
                          initialValue: undefined
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                            'en-US': 'tooltips',
                            'zh-CN': 'tooltips'
                          }
                        },
                        name: 'tooltips',
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
                            'en-US': 'format',
                            'zh-CN': 'format'
                          }
                        },
                        name: 'format',
                        setter: {
                          componentName: 'RadioGroupSetter',
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
          },
          tip: {
            type: 'i18n',
            'en-US': 'delete',
            'zh-CN': 'delete'
          }
        },
        name: 'delete',
        setter: {
          componentName: 'BoolSetter',
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
            'en-US': 'download',
            'zh-CN': 'download'
          },
          tip: {
            type: 'i18n',
            'en-US': 'download',
            'zh-CN': 'download'
          }
        },
        name: 'download',
        setter: {
          componentName: 'MixedSetter',
          props: {}
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'editable',
            'zh-CN': 'editable'
          },
          tip: {
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
                            'en-US': 'text',
                            'zh-CN': 'text'
                          }
                        },
                        name: 'text',
                        setter: {
                          componentName: 'StringSetter',
                          initialValue: undefined
                        }
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
                        setter: {
                          componentName: 'BoolSetter',
                          initialValue: undefined
                        }
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
                            'en-US': 'tooltip',
                            'zh-CN': 'tooltip'
                          }
                        },
                        name: 'tooltip',
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
                            'en-US': 'onStart',
                            'zh-CN': 'onStart'
                          }
                        },
                        name: 'onStart',
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
                            'en-US': 'onCancel',
                            'zh-CN': 'onCancel'
                          }
                        },
                        name: 'onCancel',
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'FunctionSetter'
                        }
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
                        setter: {
                          componentName: 'NumberSetter',
                          initialValue: undefined
                        }
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
                            'en-US': 'triggerType',
                            'zh-CN': 'triggerType'
                          }
                        },
                        name: 'triggerType',
                        setter: {
                          componentName: 'ArraySetter',
                          props: {
                            itemSetter: {
                              componentName: 'RadioGroupSetter',
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
                              },
                              initialValue: undefined
                            }
                          },
                          initialValue: undefined
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
          },
          tip: {
            type: 'i18n',
            'en-US': 'ellipsis',
            'zh-CN': 'ellipsis'
          }
        },
        name: 'ellipsis',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'href',
            'zh-CN': 'href'
          },
          tip: {
            type: 'i18n',
            'en-US': 'href',
            'zh-CN': 'href'
          }
        },
        name: 'href',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'hrefLang',
            'zh-CN': 'hrefLang'
          },
          tip: {
            type: 'i18n',
            'en-US': 'hrefLang',
            'zh-CN': 'hrefLang'
          }
        },
        name: 'hrefLang',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'id',
            'zh-CN': 'id'
          },
          tip: {
            type: 'i18n',
            'en-US': 'id',
            'zh-CN': 'id'
          }
        },
        name: 'id',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'italic',
            'zh-CN': 'italic'
          },
          tip: {
            type: 'i18n',
            'en-US': 'italic',
            'zh-CN': 'italic'
          }
        },
        name: 'italic',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'keyboard',
            'zh-CN': 'keyboard'
          },
          tip: {
            type: 'i18n',
            'en-US': 'keyboard',
            'zh-CN': 'keyboard'
          }
        },
        name: 'keyboard',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mark',
            'zh-CN': 'mark'
          },
          tip: {
            type: 'i18n',
            'en-US': 'mark',
            'zh-CN': 'mark'
          }
        },
        name: 'mark',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'media',
            'zh-CN': 'media'
          },
          tip: {
            type: 'i18n',
            'en-US': 'media',
            'zh-CN': 'media'
          }
        },
        name: 'media',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'ping',
            'zh-CN': 'ping'
          },
          tip: {
            type: 'i18n',
            'en-US': 'ping',
            'zh-CN': 'ping'
          }
        },
        name: 'ping',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'referrerPolicy',
            'zh-CN': 'referrerPolicy'
          },
          tip: {
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
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'strong',
            'zh-CN': 'strong'
          },
          tip: {
            type: 'i18n',
            'en-US': 'strong',
            'zh-CN': 'strong'
          }
        },
        name: 'strong',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'target',
            'zh-CN': 'target'
          },
          tip: {
            type: 'i18n',
            'en-US': 'target',
            'zh-CN': 'target'
          }
        },
        name: 'target',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
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
              },
              {
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
            'en-US': 'title',
            'zh-CN': 'title'
          },
          tip: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': 'title'
          }
        },
        name: 'title',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'type',
            'zh-CN': 'type'
          },
          tip: {
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
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'underline',
            'zh-CN': 'underline'
          },
          tip: {
            type: 'i18n',
            'en-US': 'underline',
            'zh-CN': 'underline'
          }
        },
        name: 'underline',
        setter: {
          componentName: 'BoolSetter',
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
