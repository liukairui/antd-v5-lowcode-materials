import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DividerMeta: IPublicTypeComponentMetadata = {
  componentName: 'Divider',
  title: '分割线',
  group: '原子组件',
  category: '布局 Layout',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Divider',
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
            'en-US': 'dashed',
            'zh-CN': 'dashed'
          },
          tip: {
            type: 'i18n',
            'en-US': 'dashed',
            'zh-CN': 'dashed'
          }
        },
        name: 'dashed',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'orientation',
            'zh-CN': 'orientation'
          },
          tip: {
            type: 'i18n',
            'en-US': 'orientation',
            'zh-CN': 'orientation'
          }
        },
        name: 'orientation',
        setter: {
          componentName: 'RadioGroupSetter',
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
                label: 'center',
                value: 'center'
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
                label: 'center',
                value: 'center'
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
            'en-US': 'orientationMargin',
            'zh-CN': 'orientationMargin'
          },
          tip: {
            type: 'i18n',
            'en-US': 'orientationMargin',
            'zh-CN': 'orientationMargin'
          }
        },
        name: 'orientationMargin',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: undefined
              },
              {
                componentName: 'NumberSetter',
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
            'en-US': 'plain',
            'zh-CN': 'plain'
          },
          tip: {
            type: 'i18n',
            'en-US': 'plain',
            'zh-CN': 'plain'
          }
        },
        name: 'plain',
        setter: {
          componentName: 'BoolSetter',
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
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'horizontal',
                value: 'horizontal'
              },
              {
                label: 'vertical',
                value: 'vertical'
              }
            ],
            options: [
              {
                label: 'horizontal',
                value: 'horizontal'
              },
              {
                label: 'vertical',
                value: 'vertical'
              }
            ]
          },
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
    title: '分割线',
    screenshot: '',
    schema: {
      componentName: 'Divider',
      props: {}
    }
  }
];

export default {
  ...DividerMeta,
  snippets
};
