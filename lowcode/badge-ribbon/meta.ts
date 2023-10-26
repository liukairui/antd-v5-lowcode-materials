import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const BadgeRibbonMeta: IPublicTypeComponentMetadata = {
  componentName: 'BadgeRibbon',
  title: 'BadgeRibbon',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'BadgeRibbon',
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
            'en-US': 'text',
            'zh-CN': 'text'
          }
        },
        name: 'text',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node'
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
    title: 'BadgeRibbon',
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
