import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FlexMeta: IPublicTypeComponentMetadata = {
  componentName: 'Flex',
  title: '弹性布局',
  group: '原子组件',
  category: '布局 Layout',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Flex',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'align',
            'zh-CN': 'align'
          }
        },
        name: 'align',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'normal',
                value: 'normal'
              },
              {
                label: 'stretch',
                value: 'stretch'
              },
              {
                label: 'center',
                value: 'center'
              },
              {
                label: 'start',
                value: 'start'
              },
              {
                label: 'end',
                value: 'end'
              },
              {
                label: 'flex-start',
                value: 'flex-start'
              },
              {
                label: 'flex-end',
                value: 'flex-end'
              },
              {
                label: 'self-start',
                value: 'self-start'
              },
              {
                label: 'self-end',
                value: 'self-end'
              },
              {
                label: 'baseline',
                value: 'baseline'
              },
              {
                label: 'inherit',
                value: 'inherit'
              },
              {
                label: 'initial',
                value: 'initial'
              },
              {
                label: 'revert',
                value: 'revert'
              },
              {
                label: 'revert-layer',
                value: 'revert-layer'
              },
              {
                label: 'unset',
                value: 'unset'
              }
            ],
            options: [
              {
                label: 'normal',
                value: 'normal'
              },
              {
                label: 'stretch',
                value: 'stretch'
              },
              {
                label: 'center',
                value: 'center'
              },
              {
                label: 'start',
                value: 'start'
              },
              {
                label: 'end',
                value: 'end'
              },
              {
                label: 'flex-start',
                value: 'flex-start'
              },
              {
                label: 'flex-end',
                value: 'flex-end'
              },
              {
                label: 'self-start',
                value: 'self-start'
              },
              {
                label: 'self-end',
                value: 'self-end'
              },
              {
                label: 'baseline',
                value: 'baseline'
              },
              {
                label: 'inherit',
                value: 'inherit'
              },
              {
                label: 'initial',
                value: 'initial'
              },
              {
                label: 'unset',
                value: 'unset'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'component',
            'zh-CN': 'component'
          }
        },
        name: 'component',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'flex',
            'zh-CN': 'flex'
          }
        },
        name: 'flex',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
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
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'SelectSetter',
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
              },
              'StringSetter',
              'NumberSetter'
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'justify',
            'zh-CN': 'justify'
          }
        },
        name: 'justify',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'normal',
                value: 'normal'
              },
              {
                label: 'center',
                value: 'center'
              },
              {
                label: 'start',
                value: 'start'
              },
              {
                label: 'end',
                value: 'end'
              },
              {
                label: 'flex-start',
                value: 'flex-start'
              },
              {
                label: 'flex-end',
                value: 'flex-end'
              },
              {
                label: 'left',
                value: 'left'
              },
              {
                label: 'right',
                value: 'right'
              },
              {
                label: 'baseline',
                value: 'baseline'
              },
              {
                label: 'space-between',
                value: 'space-between'
              },
              {
                label: 'space-around',
                value: 'space-around'
              },
              {
                label: 'space-evenly',
                value: 'space-evenly'
              },
              {
                label: 'stretch',
                value: 'stretch'
              },
              {
                label: 'inherit',
                value: 'inherit'
              },
              {
                label: 'initial',
                value: 'initial'
              },
              {
                label: 'unset',
                value: 'unset'
              }
            ],
            options: [
              {
                label: 'normal',
                value: 'normal'
              },
              {
                label: 'center',
                value: 'center'
              },
              {
                label: 'start',
                value: 'start'
              },
              {
                label: 'end',
                value: 'end'
              },
              {
                label: 'flex-start',
                value: 'flex-start'
              },
              {
                label: 'flex-end',
                value: 'flex-end'
              },
              {
                label: 'left',
                value: 'left'
              },
              {
                label: 'right',
                value: 'right'
              },
              {
                label: 'baseline',
                value: 'baseline'
              },
              {
                label: 'space-between',
                value: 'space-between'
              },
              {
                label: 'space-around',
                value: 'space-around'
              },
              {
                label: 'space-evenly',
                value: 'space-evenly'
              },
              {
                label: 'stretch',
                value: 'stretch'
              },
              {
                label: 'inherit',
                value: 'inherit'
              },
              {
                label: 'initial',
                value: 'initial'
              },
              {
                label: 'unset',
                value: 'unset'
              }
            ]
          }
        }
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
            'en-US': 'wrap',
            'zh-CN': 'wrap'
          }
        },
        name: 'wrap',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'nowrap',
                value: 'nowrap'
              },
              {
                label: 'wrap',
                value: 'wrap'
              },
              {
                label: 'wrap-reverse',
                value: 'wrap-reverse'
              },
              {
                label: 'inherit',
                value: 'inherit'
              },
              {
                label: 'initial',
                value: 'initial'
              },
              {
                label: 'revert',
                value: 'revert'
              },
              {
                label: 'unset',
                value: 'unset'
              }
            ],
            options: [
              {
                label: 'nowrap',
                value: 'nowrap'
              },
              {
                label: 'wrap',
                value: 'wrap'
              },
              {
                label: 'wrap-reverse',
                value: 'wrap-reverse'
              },
              {
                label: 'inherit',
                value: 'inherit'
              },
              {
                label: 'initial',
                value: 'initial'
              },
              {
                label: 'revert',
                value: 'revert'
              },
              {
                label: 'unset',
                value: 'unset'
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
    title: '弹性布局',
    screenshot: '',
    schema: {
      componentName: 'Flex',
      props: {}
    }
  }
];

export default {
  ...FlexMeta,
  snippets
};
