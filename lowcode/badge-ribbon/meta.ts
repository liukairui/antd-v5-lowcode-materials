import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const BadgeRibbonMeta: IPublicTypeComponentMetadata = {
  componentName: 'BadgeRibbon',
  title: '多彩徽标',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'BadgeRibbon',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'color',
            'zh-CN': 'color'
          }
        },
        name: 'color',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'SelectSetter',
                props: {
                  dataSource: [
                    {
                      label: 'blue',
                      value: 'blue'
                    },
                    {
                      label: 'purple',
                      value: 'purple'
                    },
                    {
                      label: 'cyan',
                      value: 'cyan'
                    },
                    {
                      label: 'green',
                      value: 'green'
                    },
                    {
                      label: 'magenta',
                      value: 'magenta'
                    },
                    {
                      label: 'pink',
                      value: 'pink'
                    },
                    {
                      label: 'red',
                      value: 'red'
                    },
                    {
                      label: 'orange',
                      value: 'orange'
                    },
                    {
                      label: 'yellow',
                      value: 'yellow'
                    },
                    {
                      label: 'volcano',
                      value: 'volcano'
                    },
                    {
                      label: 'geekblue',
                      value: 'geekblue'
                    },
                    {
                      label: 'lime',
                      value: 'lime'
                    },
                    {
                      label: 'gold',
                      value: 'gold'
                    }
                  ],
                  options: [
                    {
                      label: 'blue',
                      value: 'blue'
                    },
                    {
                      label: 'purple',
                      value: 'purple'
                    },
                    {
                      label: 'cyan',
                      value: 'cyan'
                    },
                    {
                      label: 'green',
                      value: 'green'
                    },
                    {
                      label: 'magenta',
                      value: 'magenta'
                    },
                    {
                      label: 'pink',
                      value: 'pink'
                    },
                    {
                      label: 'red',
                      value: 'red'
                    },
                    {
                      label: 'orange',
                      value: 'orange'
                    },
                    {
                      label: 'yellow',
                      value: 'yellow'
                    },
                    {
                      label: 'volcano',
                      value: 'volcano'
                    },
                    {
                      label: 'geekblue',
                      value: 'geekblue'
                    },
                    {
                      label: 'lime',
                      value: 'lime'
                    },
                    {
                      label: 'gold',
                      value: 'gold'
                    }
                  ]
                }
              },
              'StringSetter'
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placement',
            'zh-CN': 'placement'
          }
        },
        name: 'placement',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'start',
                value: 'start'
              },
              {
                label: 'end',
                value: 'end'
              }
            ],
            options: [
              {
                label: 'start',
                value: 'start'
              },
              {
                label: 'end',
                value: 'end'
              }
            ]
          }
        }
      },
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
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'SlotSetter']
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
    title: '多彩徽标',
    screenshot: '',
    schema: {
      componentName: 'BadgeRibbon',
      props: {}
    }
  }
];

export default {
  ...BadgeRibbonMeta,
  snippets
};
