import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SpinMeta: IPublicTypeComponentMetadata = {
  componentName: 'Spin',
  title: '加载中',
  group: '原子组件',
  category: '反馈 Feedback',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Spin',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'delay',
            'zh-CN': 'delay'
          }
        },
        name: 'delay',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'indicator',
            'zh-CN': 'indicator'
          }
        },
        name: 'indicator',
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
            'en-US': 'size',
            'zh-CN': 'size'
          }
        },
        name: 'size',
        setter: {
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'spinning',
            'zh-CN': 'spinning'
          }
        },
        name: 'spinning',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tip',
            'zh-CN': 'tip'
          }
        },
        name: 'tip',
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
            'en-US': 'wrapperClassName',
            'zh-CN': 'wrapperClassName'
          }
        },
        name: 'wrapperClassName',
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
    title: '加载中',
    screenshot: '',
    schema: {
      componentName: 'Spin',
      props: {}
    }
  }
];

export default {
  ...SpinMeta,
  snippets
};
