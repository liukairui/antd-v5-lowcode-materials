import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CalendarMeta: IPublicTypeComponentMetadata = {
  componentName: 'Calendar',
  title: '日历',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Calendar',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'cellRender',
            'zh-CN': 'cellRender'
          }
        },
        name: 'cellRender',
        setter: 'FunctionSetter'
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
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': '__constructor',
                      'zh-CN': '__constructor'
                    }
                  },
                  name: '__constructor',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {}
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'clone',
                      'zh-CN': 'clone'
                    }
                  },
                  name: 'clone',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'isValid',
                      'zh-CN': 'isValid'
                    }
                  },
                  name: 'isValid',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'year',
                      'zh-CN': 'year'
                    }
                  },
                  name: 'year',
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
                      'en-US': 'month',
                      'zh-CN': 'month'
                    }
                  },
                  name: 'month',
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
                      'en-US': 'day',
                      'zh-CN': 'day'
                    }
                  },
                  name: 'day',
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
                      'en-US': 'hour',
                      'zh-CN': 'hour'
                    }
                  },
                  name: 'hour',
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
                      'en-US': 'minute',
                      'zh-CN': 'minute'
                    }
                  },
                  name: 'minute',
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
                      'en-US': 'second',
                      'zh-CN': 'second'
                    }
                  },
                  name: 'second',
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
                      'en-US': 'millisecond',
                      'zh-CN': 'millisecond'
                    }
                  },
                  name: 'millisecond',
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
                      'en-US': 'set',
                      'zh-CN': 'set'
                    }
                  },
                  name: 'set',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'get',
                      'zh-CN': 'get'
                    }
                  },
                  name: 'get',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'add',
                      'zh-CN': 'add'
                    }
                  },
                  name: 'add',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'subtract',
                      'zh-CN': 'subtract'
                    }
                  },
                  name: 'subtract',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'startOf',
                      'zh-CN': 'startOf'
                    }
                  },
                  name: 'startOf',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'endOf',
                      'zh-CN': 'endOf'
                    }
                  },
                  name: 'endOf',
                  setter: 'FunctionSetter'
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
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'diff',
                      'zh-CN': 'diff'
                    }
                  },
                  name: 'diff',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'valueOf',
                      'zh-CN': 'valueOf'
                    }
                  },
                  name: 'valueOf',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'unix',
                      'zh-CN': 'unix'
                    }
                  },
                  name: 'unix',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'daysInMonth',
                      'zh-CN': 'daysInMonth'
                    }
                  },
                  name: 'daysInMonth',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'toDate',
                      'zh-CN': 'toDate'
                    }
                  },
                  name: 'toDate',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'toJSON',
                      'zh-CN': 'toJSON'
                    }
                  },
                  name: 'toJSON',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'toISOString',
                      'zh-CN': 'toISOString'
                    }
                  },
                  name: 'toISOString',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'toString',
                      'zh-CN': 'toString'
                    }
                  },
                  name: 'toString',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'utcOffset',
                      'zh-CN': 'utcOffset'
                    }
                  },
                  name: 'utcOffset',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'isBefore',
                      'zh-CN': 'isBefore'
                    }
                  },
                  name: 'isBefore',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'isSame',
                      'zh-CN': 'isSame'
                    }
                  },
                  name: 'isSame',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'isAfter',
                      'zh-CN': 'isAfter'
                    }
                  },
                  name: 'isAfter',
                  setter: 'FunctionSetter'
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
                        extraSetter: {
                          componentName: 'MixedSetter',
                          props: {}
                        }
                      }
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
            'en-US': 'disabledDate',
            'zh-CN': 'disabledDate'
          }
        },
        name: 'disabledDate',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fullCellRender',
            'zh-CN': 'fullCellRender'
          }
        },
        name: 'fullCellRender',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fullscreen',
            'zh-CN': 'fullscreen'
          }
        },
        name: 'fullscreen',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'headerRender',
            'zh-CN': 'headerRender'
          }
        },
        name: 'headerRender',
        setter: 'FunctionSetter'
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
            'en-US': 'mode',
            'zh-CN': 'mode'
          }
        },
        name: 'mode',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'month',
                value: 'month'
              },
              {
                label: 'year',
                value: 'year'
              }
            ],
            options: [
              {
                label: 'month',
                value: 'month'
              },
              {
                label: 'year',
                value: 'year'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'validRange',
            'zh-CN': 'validRange'
          }
        },
        name: 'validRange',
        setter: {
          componentName: 'MixedSetter',
          props: {}
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
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': '__constructor',
                      'zh-CN': '__constructor'
                    }
                  },
                  name: '__constructor',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {}
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'clone',
                      'zh-CN': 'clone'
                    }
                  },
                  name: 'clone',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'isValid',
                      'zh-CN': 'isValid'
                    }
                  },
                  name: 'isValid',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'year',
                      'zh-CN': 'year'
                    }
                  },
                  name: 'year',
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
                      'en-US': 'month',
                      'zh-CN': 'month'
                    }
                  },
                  name: 'month',
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
                      'en-US': 'day',
                      'zh-CN': 'day'
                    }
                  },
                  name: 'day',
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
                      'en-US': 'hour',
                      'zh-CN': 'hour'
                    }
                  },
                  name: 'hour',
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
                      'en-US': 'minute',
                      'zh-CN': 'minute'
                    }
                  },
                  name: 'minute',
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
                      'en-US': 'second',
                      'zh-CN': 'second'
                    }
                  },
                  name: 'second',
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
                      'en-US': 'millisecond',
                      'zh-CN': 'millisecond'
                    }
                  },
                  name: 'millisecond',
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
                      'en-US': 'set',
                      'zh-CN': 'set'
                    }
                  },
                  name: 'set',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'get',
                      'zh-CN': 'get'
                    }
                  },
                  name: 'get',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'add',
                      'zh-CN': 'add'
                    }
                  },
                  name: 'add',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'subtract',
                      'zh-CN': 'subtract'
                    }
                  },
                  name: 'subtract',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'startOf',
                      'zh-CN': 'startOf'
                    }
                  },
                  name: 'startOf',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'endOf',
                      'zh-CN': 'endOf'
                    }
                  },
                  name: 'endOf',
                  setter: 'FunctionSetter'
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
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'diff',
                      'zh-CN': 'diff'
                    }
                  },
                  name: 'diff',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'valueOf',
                      'zh-CN': 'valueOf'
                    }
                  },
                  name: 'valueOf',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'unix',
                      'zh-CN': 'unix'
                    }
                  },
                  name: 'unix',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'daysInMonth',
                      'zh-CN': 'daysInMonth'
                    }
                  },
                  name: 'daysInMonth',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'toDate',
                      'zh-CN': 'toDate'
                    }
                  },
                  name: 'toDate',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'toJSON',
                      'zh-CN': 'toJSON'
                    }
                  },
                  name: 'toJSON',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'toISOString',
                      'zh-CN': 'toISOString'
                    }
                  },
                  name: 'toISOString',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'toString',
                      'zh-CN': 'toString'
                    }
                  },
                  name: 'toString',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'utcOffset',
                      'zh-CN': 'utcOffset'
                    }
                  },
                  name: 'utcOffset',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'isBefore',
                      'zh-CN': 'isBefore'
                    }
                  },
                  name: 'isBefore',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'isSame',
                      'zh-CN': 'isSame'
                    }
                  },
                  name: 'isSame',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'isAfter',
                      'zh-CN': 'isAfter'
                    }
                  },
                  name: 'isAfter',
                  setter: 'FunctionSetter'
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
                        extraSetter: {
                          componentName: 'MixedSetter',
                          props: {}
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
    ],
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onChange'
        },
        {
          name: 'onPanelChange'
        },
        {
          name: 'onSelect'
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
    title: '日历',
    screenshot: '',
    schema: {
      componentName: 'Calendar',
      props: {}
    }
  }
];

export default {
  ...CalendarMeta,
  snippets
};
