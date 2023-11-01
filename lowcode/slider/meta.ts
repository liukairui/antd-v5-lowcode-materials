import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import TooltipMeta from '../tooltip/meta';

const SliderMeta: IPublicTypeComponentMetadata = {
  componentName: 'Slider',
  title: '滑动输入条',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Slider',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoFocus',
            'zh-CN': 'autoFocus'
          }
        },
        name: 'autoFocus',
        setter: 'BoolSetter'
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
          props: {
            setters: [
              'NumberSetter',
              {
                componentName: 'ArraySetter',
                condition: () => false,
                props: {
                  itemSetter: 'NumberSetter'
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
            'en-US': 'included',
            'zh-CN': 'included'
          }
        },
        name: 'included',
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
            'en-US': 'marks',
            'zh-CN': 'marks'
          }
        },
        name: 'marks'
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
        setter: 'NumberSetter'
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
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onAfterChange',
            'zh-CN': 'onAfterChange'
          }
        },
        name: 'onAfterChange',
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
            'en-US': 'range',
            'zh-CN': 'range'
          }
        },
        name: 'range',
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
                            'en-US': 'draggableTrack',
                            'zh-CN': 'draggableTrack'
                          }
                        },
                        name: 'draggableTrack',
                        setter: 'BoolSetter'
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
            'en-US': 'reverse',
            'zh-CN': 'reverse'
          }
        },
        name: 'reverse',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'step',
            'zh-CN': 'step'
          }
        },
        name: 'step',
        setter: 'NumberSetter'
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
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              items: TooltipMeta.configure!['props']
            }
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
        name: 'value'
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
    title: '滑动输入条',
    screenshot: '',
    schema: {
      componentName: 'Slider',
      props: {}
    }
  }
];

export default {
  ...SliderMeta,
  snippets
};
