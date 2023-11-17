import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CarouselMeta: IPublicTypeComponentMetadata = {
  componentName: 'Carousel',
  title: '走马灯',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Carousel',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoplay',
            'zh-CN': 'autoplay'
          }
        },
        name: 'autoplay',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'afterChange',
            'zh-CN': 'afterChange'
          }
        },
        name: 'afterChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoplaySpeed',
            'zh-CN': 'autoplaySpeed'
          }
        },
        name: 'autoplaySpeed',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'beforeChange',
            'zh-CN': 'beforeChange'
          }
        },
        name: 'beforeChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dotPosition',
            'zh-CN': 'dotPosition'
          }
        },
        name: 'dotPosition',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'top',
                value: 'top'
              },
              {
                label: 'bottom',
                value: 'bottom'
              },
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
                label: 'top',
                value: 'top'
              },
              {
                label: 'bottom',
                value: 'bottom'
              },
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
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dots',
            'zh-CN': 'dots'
          }
        },
        name: 'dots',
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
                            'en-US': 'className',
                            'zh-CN': 'className'
                          }
                        },
                        name: 'className',
                        setter: 'StringSetter'
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
            'en-US': 'easing',
            'zh-CN': 'easing'
          }
        },
        name: 'easing',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'effect',
            'zh-CN': 'effect'
          }
        },
        name: 'effect',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'fade',
                value: 'fade'
              },
              {
                label: 'scrollx',
                value: 'scrollx'
              }
            ],
            options: [
              {
                label: 'fade',
                value: 'fade'
              },
              {
                label: 'scrollx',
                value: 'scrollx'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fade',
            'zh-CN': 'fade'
          }
        },
        name: 'fade',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'infinite',
            'zh-CN': 'infinite'
          }
        },
        name: 'infinite',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'speed',
            'zh-CN': 'speed'
          }
        },
        name: 'speed',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'waitForAnimate',
            'zh-CN': 'waitForAnimate'
          }
        },
        name: 'waitForAnimate',
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
    title: '走马灯',
    screenshot: '',
    schema: {
      componentName: 'Carousel',
      props: {}
    }
  }
];

export default {
  ...CarouselMeta,
  snippets
};
