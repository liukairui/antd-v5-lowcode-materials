import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SkeletonButtonMeta: IPublicTypeComponentMetadata = {
  componentName: 'SkeletonButton',
  title: '骨架屏按钮',
  group: '原子组件',
  category: '反馈 Feedback',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'SkeletonButton',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'active',
            'zh-CN': 'active'
          }
        },
        name: 'active',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'block',
            'zh-CN': 'block'
          }
        },
        name: 'block',
        setter: 'BoolSetter'
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
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'default',
                value: 'default'
              },
              {
                label: 'circle',
                value: 'circle'
              },
              {
                label: 'round',
                value: 'round'
              },
              {
                label: 'square',
                value: 'square'
              }
            ],
            options: [
              {
                label: 'default',
                value: 'default'
              },
              {
                label: 'circle',
                value: 'circle'
              },
              {
                label: 'round',
                value: 'round'
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
          componentName: 'RadioGroupSetter',
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
    title: '骨架屏按钮',
    screenshot: '',
    schema: {
      componentName: 'SkeletonButton',
      props: {}
    }
  }
];

export default {
  ...SkeletonButtonMeta,
  snippets
};
