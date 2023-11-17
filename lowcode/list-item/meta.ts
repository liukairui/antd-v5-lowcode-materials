import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ListItemMeta: IPublicTypeComponentMetadata = {
  componentName: 'ListItem',
  title: '列表项',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'ListItem',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'actions',
            'zh-CN': 'actions'
          }
        },
        name: 'actions',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemsetter: {
              componentName: 'MixedSetter',
              props: {
                setters: ['StringSetter', 'SlotSetter']
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'colStyle',
            'zh-CN': 'colStyle'
          }
        },
        name: 'colStyle',
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
            'en-US': 'extra',
            'zh-CN': 'extra'
          }
        },
        name: 'extra',
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
    title: '列表项',
    screenshot: '',
    schema: {
      componentName: 'ListItem',
      props: {}
    }
  }
];

export default {
  ...ListItemMeta,
  snippets
};
