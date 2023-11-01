import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AvatarGroupMeta: IPublicTypeComponentMetadata = {
  componentName: 'AvatarGroup',
  title: '头像组',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'AvatarGroup',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxCount',
            'zh-CN': 'maxCount'
          }
        },
        name: 'maxCount',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxPopoverPlacement',
            'zh-CN': 'maxPopoverPlacement'
          }
        },
        name: 'maxPopoverPlacement',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
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
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxPopoverTrigger',
            'zh-CN': 'maxPopoverTrigger'
          }
        },
        name: 'maxPopoverTrigger',
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
              },
              {
                label: 'focus',
                value: 'focus'
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
              },
              {
                label: 'focus',
                value: 'focus'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxStyle',
            'zh-CN': 'maxStyle'
          }
        },
        name: 'maxStyle',
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
            'en-US': 'shape',
            'zh-CN': 'shape'
          }
        },
        name: 'shape',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'circle',
                value: 'circle'
              },
              {
                label: 'square',
                value: 'square'
              }
            ],
            options: [
              {
                label: 'circle',
                value: 'circle'
              },
              {
                label: 'square',
                value: 'square'
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
          componentName: 'MixedSetter',
          props: {
            setters: [
              'NumberSetter',
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
                componentName: 'RadioGroupSetter',
                condition: () => false,
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
    title: '头像组',
    screenshot: '',
    schema: {
      componentName: 'AvatarGroup',
      props: {}
    }
  }
];

export default {
  ...AvatarGroupMeta,
  snippets
};
