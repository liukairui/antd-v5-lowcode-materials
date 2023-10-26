import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ListItemMeta: IPublicTypeComponentMetadata = {
  componentName: 'ListItem',
  title: 'ListItem',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'ListItem',
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
            'en-US': 'actions',
            'zh-CN': 'actions'
          }
        },
        name: 'actions',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
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
          initialValue: undefined
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
    title: 'ListItem',
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
