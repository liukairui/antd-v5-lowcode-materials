import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PopoverMeta: IPublicTypeComponentMetadata = {
  componentName: 'Popover',
  title: '气泡卡片',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Popover',
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
            'en-US': 'description',
            'zh-CN': 'description'
          },
          tip: {
            type: 'i18n',
            'en-US': 'description',
            'zh-CN': 'description'
          }
        },
        name: 'description',
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
            'en-US': 'image',
            'zh-CN': 'image'
          },
          tip: {
            type: 'i18n',
            'en-US': 'image',
            'zh-CN': 'image'
          }
        },
        name: 'image',
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
            'en-US': 'imageStyle',
            'zh-CN': 'imageStyle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'imageStyle',
            'zh-CN': 'imageStyle'
          }
        },
        name: 'imageStyle',
        setter: {
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
    title: '气泡卡片',
    screenshot: '',
    schema: {
      componentName: 'Popover',
      props: {}
    }
  }
];

export default {
  ...PopoverMeta,
  snippets
};
