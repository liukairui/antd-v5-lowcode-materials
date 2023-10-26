import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CollapsePanelMeta: IPublicTypeComponentMetadata = {
  componentName: 'CollapsePanel',
  title: 'CollapsePanel',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'CollapsePanel',
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
            'en-US': 'header',
            'zh-CN': 'header'
          }
        },
        name: 'header',
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
            'en-US': 'showArrow',
            'zh-CN': 'showArrow'
          }
        },
        name: 'showArrow',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'forceRender',
            'zh-CN': 'forceRender'
          }
        },
        name: 'forceRender',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'id',
            'zh-CN': 'id'
          }
        },
        name: 'id',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'extra',
            'zh-CN': 'extra'
          }
        },
        name: 'extra',
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
            'en-US': 'collapsible',
            'zh-CN': 'collapsible'
          }
        },
        name: 'collapsible',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'disabled',
                value: 'disabled'
              },
              {
                label: 'icon',
                value: 'icon'
              },
              {
                label: 'header',
                value: 'header'
              }
            ],
            options: [
              {
                label: 'disabled',
                value: 'disabled'
              },
              {
                label: 'icon',
                value: 'icon'
              },
              {
                label: 'header',
                value: 'header'
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
    title: 'CollapsePanel',
    screenshot: '',
    schema: {
      componentName: 'CollapsePanel',
      props: {}
    }
  }
];

export default {
  ...CollapsePanelMeta,
  snippets
};
