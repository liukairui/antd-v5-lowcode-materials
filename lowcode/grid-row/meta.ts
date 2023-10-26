import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const GridRowMeta: IPublicTypeComponentMetadata = {
  componentName: 'GridRow',
  title: 'GridRow',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'GridRow',
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
            'en-US': 'gutter',
            'zh-CN': 'gutter'
          }
        },
        name: 'gutter',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'NumberSetter',
                initialValue: undefined
              },
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
                componentName: 'MixedSetter',
                props: {}
              }
            ]
          }
        }
      },
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
                      label: 'middle',
                      value: 'middle'
                    },
                    {
                      label: 'stretch',
                      value: 'stretch'
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
                      label: 'middle',
                      value: 'middle'
                    },
                    {
                      label: 'stretch',
                      value: 'stretch'
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
            'en-US': 'justify',
            'zh-CN': 'justify'
          }
        },
        name: 'justify',
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
                      label: 'center',
                      value: 'center'
                    },
                    {
                      label: 'space-around',
                      value: 'space-around'
                    },
                    {
                      label: 'space-between',
                      value: 'space-between'
                    },
                    {
                      label: 'space-evenly',
                      value: 'space-evenly'
                    },
                    {
                      label: 'end',
                      value: 'end'
                    },
                    {
                      label: 'start',
                      value: 'start'
                    }
                  ],
                  options: [
                    {
                      label: 'center',
                      value: 'center'
                    },
                    {
                      label: 'space-around',
                      value: 'space-around'
                    },
                    {
                      label: 'space-between',
                      value: 'space-between'
                    },
                    {
                      label: 'space-evenly',
                      value: 'space-evenly'
                    },
                    {
                      label: 'end',
                      value: 'end'
                    },
                    {
                      label: 'start',
                      value: 'start'
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
            'en-US': 'wrap',
            'zh-CN': 'wrap'
          }
        },
        name: 'wrap',
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
    title: 'GridRow',
    screenshot: '',
    schema: {
      componentName: 'GridRow',
      props: {}
    }
  }
];

export default {
  ...GridRowMeta,
  snippets
};
