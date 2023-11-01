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
            'en-US': 'accessibility',
            'zh-CN': 'accessibility'
          }
        },
        name: 'accessibility',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'adaptiveHeight',
            'zh-CN': 'adaptiveHeight'
          }
        },
        name: 'adaptiveHeight',
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
            'en-US': 'appendDots',
            'zh-CN': 'appendDots'
          }
        },
        name: 'appendDots',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'arrows',
            'zh-CN': 'arrows'
          }
        },
        name: 'arrows',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'asNavFor',
            'zh-CN': 'asNavFor'
          }
        },
        name: 'asNavFor',
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
                      'en-US': 'slickNext',
                      'zh-CN': 'slickNext'
                    }
                  },
                  name: 'slickNext',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'slickPause',
                      'zh-CN': 'slickPause'
                    }
                  },
                  name: 'slickPause',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'slickPlay',
                      'zh-CN': 'slickPlay'
                    }
                  },
                  name: 'slickPlay',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'slickPrev',
                      'zh-CN': 'slickPrev'
                    }
                  },
                  name: 'slickPrev',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'slickGoTo',
                      'zh-CN': 'slickGoTo'
                    }
                  },
                  name: 'slickGoTo',
                  setter: 'FunctionSetter'
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
            'en-US': 'centerMode',
            'zh-CN': 'centerMode'
          }
        },
        name: 'centerMode',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'centerPadding',
            'zh-CN': 'centerPadding'
          }
        },
        name: 'centerPadding',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'cssEase',
            'zh-CN': 'cssEase'
          }
        },
        name: 'cssEase',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'customPaging',
            'zh-CN': 'customPaging'
          }
        },
        name: 'customPaging',
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
                label: 'left',
                value: 'left'
              },
              {
                label: 'right',
                value: 'right'
              },
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
                label: 'left',
                value: 'left'
              },
              {
                label: 'right',
                value: 'right'
              },
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
            'en-US': 'draggable',
            'zh-CN': 'draggable'
          }
        },
        name: 'draggable',
        setter: 'BoolSetter'
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
            'en-US': 'edgeFriction',
            'zh-CN': 'edgeFriction'
          }
        },
        name: 'edgeFriction',
        setter: 'NumberSetter'
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
            'en-US': 'focusOnSelect',
            'zh-CN': 'focusOnSelect'
          }
        },
        name: 'focusOnSelect',
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
            'en-US': 'initialSlide',
            'zh-CN': 'initialSlide'
          }
        },
        name: 'initialSlide',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'lazyLoad',
            'zh-CN': 'lazyLoad'
          }
        },
        name: 'lazyLoad',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'ondemand',
                value: 'ondemand'
              },
              {
                label: 'progressive',
                value: 'progressive'
              }
            ],
            options: [
              {
                label: 'ondemand',
                value: 'ondemand'
              },
              {
                label: 'progressive',
                value: 'progressive'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'nextArrow',
            'zh-CN': 'nextArrow'
          }
        },
        name: 'nextArrow',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'element'
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
            'en-US': 'onEdge',
            'zh-CN': 'onEdge'
          }
        },
        name: 'onEdge',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onInit',
            'zh-CN': 'onInit'
          }
        },
        name: 'onInit',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onLazyLoad',
            'zh-CN': 'onLazyLoad'
          }
        },
        name: 'onLazyLoad',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onReInit',
            'zh-CN': 'onReInit'
          }
        },
        name: 'onReInit',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onSwipe',
            'zh-CN': 'onSwipe'
          }
        },
        name: 'onSwipe',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pauseOnDotsHover',
            'zh-CN': 'pauseOnDotsHover'
          }
        },
        name: 'pauseOnDotsHover',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pauseOnFocus',
            'zh-CN': 'pauseOnFocus'
          }
        },
        name: 'pauseOnFocus',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pauseOnHover',
            'zh-CN': 'pauseOnHover'
          }
        },
        name: 'pauseOnHover',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'prevArrow',
            'zh-CN': 'prevArrow'
          }
        },
        name: 'prevArrow',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'element'
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
            'en-US': 'responsive',
            'zh-CN': 'responsive'
          }
        },
        name: 'responsive',
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
                          'en-US': 'breakpoint',
                          'zh-CN': 'breakpoint'
                        }
                      },
                      name: 'breakpoint',
                      setter: 'NumberSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'settings',
                          'zh-CN': 'settings'
                        }
                      },
                      name: 'settings',
                      setter: {
                        componentName: 'MixedSetter',
                        props: {
                          setters: [
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
                                          'en-US': 'accessibility',
                                          'zh-CN': 'accessibility'
                                        }
                                      },
                                      name: 'accessibility',
                                      setter: 'BoolSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'adaptiveHeight',
                                          'zh-CN': 'adaptiveHeight'
                                        }
                                      },
                                      name: 'adaptiveHeight',
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
                                          'en-US': 'appendDots',
                                          'zh-CN': 'appendDots'
                                        }
                                      },
                                      name: 'appendDots',
                                      setter: 'FunctionSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'arrows',
                                          'zh-CN': 'arrows'
                                        }
                                      },
                                      name: 'arrows',
                                      setter: 'BoolSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'asNavFor',
                                          'zh-CN': 'asNavFor'
                                        }
                                      },
                                      name: 'asNavFor',
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
                                                    'en-US': 'slickNext',
                                                    'zh-CN': 'slickNext'
                                                  }
                                                },
                                                name: 'slickNext',
                                                setter: 'FunctionSetter'
                                              },
                                              {
                                                title: {
                                                  label: {
                                                    type: 'i18n',
                                                    'en-US': 'slickPause',
                                                    'zh-CN': 'slickPause'
                                                  }
                                                },
                                                name: 'slickPause',
                                                setter: 'FunctionSetter'
                                              },
                                              {
                                                title: {
                                                  label: {
                                                    type: 'i18n',
                                                    'en-US': 'slickPlay',
                                                    'zh-CN': 'slickPlay'
                                                  }
                                                },
                                                name: 'slickPlay',
                                                setter: 'FunctionSetter'
                                              },
                                              {
                                                title: {
                                                  label: {
                                                    type: 'i18n',
                                                    'en-US': 'slickPrev',
                                                    'zh-CN': 'slickPrev'
                                                  }
                                                },
                                                name: 'slickPrev',
                                                setter: 'FunctionSetter'
                                              },
                                              {
                                                title: {
                                                  label: {
                                                    type: 'i18n',
                                                    'en-US': 'slickGoTo',
                                                    'zh-CN': 'slickGoTo'
                                                  }
                                                },
                                                name: 'slickGoTo',
                                                setter: 'FunctionSetter'
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
                                          'en-US': 'centerMode',
                                          'zh-CN': 'centerMode'
                                        }
                                      },
                                      name: 'centerMode',
                                      setter: 'BoolSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'centerPadding',
                                          'zh-CN': 'centerPadding'
                                        }
                                      },
                                      name: 'centerPadding',
                                      setter: 'StringSetter'
                                    },
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
                                          'en-US': 'cssEase',
                                          'zh-CN': 'cssEase'
                                        }
                                      },
                                      name: 'cssEase',
                                      setter: 'StringSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'customPaging',
                                          'zh-CN': 'customPaging'
                                        }
                                      },
                                      name: 'customPaging',
                                      setter: 'FunctionSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'dotsClass',
                                          'zh-CN': 'dotsClass'
                                        }
                                      },
                                      name: 'dotsClass',
                                      setter: 'StringSetter'
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
                                      setter: 'BoolSetter'
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
                                      setter: 'BoolSetter'
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
                                          'en-US': 'edgeFriction',
                                          'zh-CN': 'edgeFriction'
                                        }
                                      },
                                      name: 'edgeFriction',
                                      setter: 'NumberSetter'
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
                                          'en-US': 'focusOnSelect',
                                          'zh-CN': 'focusOnSelect'
                                        }
                                      },
                                      name: 'focusOnSelect',
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
                                          'en-US': 'initialSlide',
                                          'zh-CN': 'initialSlide'
                                        }
                                      },
                                      name: 'initialSlide',
                                      setter: 'NumberSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'lazyLoad',
                                          'zh-CN': 'lazyLoad'
                                        }
                                      },
                                      name: 'lazyLoad',
                                      setter: {
                                        componentName: 'RadioGroupSetter',
                                        condition: () => false,
                                        props: {
                                          dataSource: [
                                            {
                                              label: 'ondemand',
                                              value: 'ondemand'
                                            },
                                            {
                                              label: 'progressive',
                                              value: 'progressive'
                                            }
                                          ],
                                          options: [
                                            {
                                              label: 'ondemand',
                                              value: 'ondemand'
                                            },
                                            {
                                              label: 'progressive',
                                              value: 'progressive'
                                            }
                                          ]
                                        }
                                      }
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'nextArrow',
                                          'zh-CN': 'nextArrow'
                                        }
                                      },
                                      name: 'nextArrow',
                                      setter: {
                                        componentName: 'SlotSetter',
                                        props: {
                                          mode: 'element'
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
                                          'en-US': 'onEdge',
                                          'zh-CN': 'onEdge'
                                        }
                                      },
                                      name: 'onEdge',
                                      setter: 'FunctionSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'onInit',
                                          'zh-CN': 'onInit'
                                        }
                                      },
                                      name: 'onInit',
                                      setter: 'FunctionSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'onLazyLoad',
                                          'zh-CN': 'onLazyLoad'
                                        }
                                      },
                                      name: 'onLazyLoad',
                                      setter: 'FunctionSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'onReInit',
                                          'zh-CN': 'onReInit'
                                        }
                                      },
                                      name: 'onReInit',
                                      setter: 'FunctionSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'onSwipe',
                                          'zh-CN': 'onSwipe'
                                        }
                                      },
                                      name: 'onSwipe',
                                      setter: 'FunctionSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'pauseOnDotsHover',
                                          'zh-CN': 'pauseOnDotsHover'
                                        }
                                      },
                                      name: 'pauseOnDotsHover',
                                      setter: 'BoolSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'pauseOnFocus',
                                          'zh-CN': 'pauseOnFocus'
                                        }
                                      },
                                      name: 'pauseOnFocus',
                                      setter: 'BoolSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'pauseOnHover',
                                          'zh-CN': 'pauseOnHover'
                                        }
                                      },
                                      name: 'pauseOnHover',
                                      setter: 'BoolSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'prevArrow',
                                          'zh-CN': 'prevArrow'
                                        }
                                      },
                                      name: 'prevArrow',
                                      setter: {
                                        componentName: 'SlotSetter',
                                        props: {
                                          mode: 'element'
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
                                          'en-US': 'responsive',
                                          'zh-CN': 'responsive'
                                        }
                                      },
                                      name: 'responsive',
                                      setter: {
                                        componentName: 'ArraySetter',
                                        condition: () => false,
                                        props: {
                                          itemSetter: {
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
                                      }
                                    },
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
                                          'en-US': 'rtl',
                                          'zh-CN': 'rtl'
                                        }
                                      },
                                      name: 'rtl',
                                      setter: 'BoolSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'slide',
                                          'zh-CN': 'slide'
                                        }
                                      },
                                      name: 'slide',
                                      setter: 'StringSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'slidesPerRow',
                                          'zh-CN': 'slidesPerRow'
                                        }
                                      },
                                      name: 'slidesPerRow',
                                      setter: 'NumberSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'slidesToScroll',
                                          'zh-CN': 'slidesToScroll'
                                        }
                                      },
                                      name: 'slidesToScroll',
                                      setter: 'NumberSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'slidesToShow',
                                          'zh-CN': 'slidesToShow'
                                        }
                                      },
                                      name: 'slidesToShow',
                                      setter: 'NumberSetter'
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
                                          'en-US': 'swipeToSlide',
                                          'zh-CN': 'swipeToSlide'
                                        }
                                      },
                                      name: 'swipeToSlide',
                                      setter: 'BoolSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'swipe',
                                          'zh-CN': 'swipe'
                                        }
                                      },
                                      name: 'swipe',
                                      setter: 'BoolSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'swipeEvent',
                                          'zh-CN': 'swipeEvent'
                                        }
                                      },
                                      name: 'swipeEvent',
                                      setter: 'FunctionSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'touchMove',
                                          'zh-CN': 'touchMove'
                                        }
                                      },
                                      name: 'touchMove',
                                      setter: 'BoolSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'touchThreshold',
                                          'zh-CN': 'touchThreshold'
                                        }
                                      },
                                      name: 'touchThreshold',
                                      setter: 'NumberSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'useCSS',
                                          'zh-CN': 'useCSS'
                                        }
                                      },
                                      name: 'useCSS',
                                      setter: 'BoolSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'useTransform',
                                          'zh-CN': 'useTransform'
                                        }
                                      },
                                      name: 'useTransform',
                                      setter: 'BoolSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'variableWidth',
                                          'zh-CN': 'variableWidth'
                                        }
                                      },
                                      name: 'variableWidth',
                                      setter: 'BoolSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'vertical',
                                          'zh-CN': 'vertical'
                                        }
                                      },
                                      name: 'vertical',
                                      setter: 'BoolSetter'
                                    },
                                    {
                                      title: {
                                        label: {
                                          type: 'i18n',
                                          'en-US': 'verticalSwiping',
                                          'zh-CN': 'verticalSwiping'
                                        }
                                      },
                                      name: 'verticalSwiping',
                                      setter: 'BoolSetter'
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
                                  ]
                                }
                              }
                            },
                            {
                              componentName: 'RadioGroupSetter',
                              condition: () => false,
                              props: {
                                dataSource: [
                                  {
                                    label: 'unslick',
                                    value: 'unslick'
                                  }
                                ],
                                options: [
                                  {
                                    label: 'unslick',
                                    value: 'unslick'
                                  }
                                ]
                              }
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
        }
      },
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
            'en-US': 'rtl',
            'zh-CN': 'rtl'
          }
        },
        name: 'rtl',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'slickGoTo',
            'zh-CN': 'slickGoTo'
          }
        },
        name: 'slickGoTo',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'slide',
            'zh-CN': 'slide'
          }
        },
        name: 'slide',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'slidesPerRow',
            'zh-CN': 'slidesPerRow'
          }
        },
        name: 'slidesPerRow',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'slidesToScroll',
            'zh-CN': 'slidesToScroll'
          }
        },
        name: 'slidesToScroll',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'slidesToShow',
            'zh-CN': 'slidesToShow'
          }
        },
        name: 'slidesToShow',
        setter: 'NumberSetter'
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
            'en-US': 'swipe',
            'zh-CN': 'swipe'
          }
        },
        name: 'swipe',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'swipeEvent',
            'zh-CN': 'swipeEvent'
          }
        },
        name: 'swipeEvent',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'swipeToSlide',
            'zh-CN': 'swipeToSlide'
          }
        },
        name: 'swipeToSlide',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'touchMove',
            'zh-CN': 'touchMove'
          }
        },
        name: 'touchMove',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'touchThreshold',
            'zh-CN': 'touchThreshold'
          }
        },
        name: 'touchThreshold',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'useCSS',
            'zh-CN': 'useCSS'
          }
        },
        name: 'useCSS',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'useTransform',
            'zh-CN': 'useTransform'
          }
        },
        name: 'useTransform',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'variableWidth',
            'zh-CN': 'variableWidth'
          }
        },
        name: 'variableWidth',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'vertical',
            'zh-CN': 'vertical'
          }
        },
        name: 'vertical',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'verticalSwiping',
            'zh-CN': 'verticalSwiping'
          }
        },
        name: 'verticalSwiping',
        setter: 'BoolSetter'
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
