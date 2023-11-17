import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AvatarMeta: IPublicTypeComponentMetadata = {
  componentName: 'Avatar',
  title: '头像',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Avatar',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'alt',
            'zh-CN': 'alt'
          }
        },
        name: 'alt',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'crossOrigin',
            'zh-CN': 'crossOrigin'
          }
        },
        name: 'crossOrigin',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'anonymous',
                value: 'anonymous'
              },
              {
                label: 'use-credentials',
                value: 'use-credentials'
              }
            ],
            options: [
              {
                label: 'anonymous',
                value: 'anonymous'
              },
              {
                label: 'use-credentials',
                value: 'use-credentials'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'draggable',
            'zh-CN': 'draggable'
          }
        },
        name: 'draggable',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'BoolSetter',
              {
                componentName: 'RadioGroupSetter',
                condition: () => false,
                props: {
                  dataSource: [
                    {
                      label: 'false',
                      value: 'false'
                    },
                    {
                      label: 'true',
                      value: 'true'
                    }
                  ],
                  options: [
                    {
                      label: 'false',
                      value: 'false'
                    },
                    {
                      label: 'true',
                      value: 'true'
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
            'en-US': 'gap',
            'zh-CN': 'gap'
          }
        },
        name: 'gap',
        setter: 'NumberSetter'
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
                            'en-US': 'xs',
                            'zh-CN': 'xs'
                          }
                        },
                        name: 'xs',
                        setter: 'NumberSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'sm',
                            'zh-CN': 'sm'
                          }
                        },
                        name: 'sm',
                        setter: 'NumberSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'md',
                            'zh-CN': 'md'
                          }
                        },
                        name: 'md',
                        setter: 'NumberSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'lg',
                            'zh-CN': 'lg'
                          }
                        },
                        name: 'lg',
                        setter: 'NumberSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'xl',
                            'zh-CN': 'xl'
                          }
                        },
                        name: 'xl',
                        setter: 'NumberSetter'
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'xxl',
                            'zh-CN': 'xxl'
                          }
                        },
                        name: 'xxl',
                        setter: 'NumberSetter'
                      }
                    ]
                  }
                }
              },
              'NumberSetter'
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'src',
            'zh-CN': 'src'
          }
        },
        name: 'src',
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
            'en-US': 'srcSet',
            'zh-CN': 'srcSet'
          }
        },
        name: 'srcSet',
        setter: 'StringSetter'
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
    title: '头像',
    screenshot: '',
    schema: {
      componentName: 'Avatar',
      props: {}
    }
  }
];

export default {
  ...AvatarMeta,
  snippets
};
