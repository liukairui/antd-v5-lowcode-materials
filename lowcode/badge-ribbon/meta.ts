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
          props: {}
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
                label: 'end',
                value: 'end'
              },
              {
                label: 'start',
                value: 'start'
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
        setter: 'SlotSetter'
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
