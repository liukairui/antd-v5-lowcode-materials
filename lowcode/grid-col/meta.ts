import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const GridColMeta: IPublicTypeComponentMetadata = {
  componentName: 'GridCol',
  title: '栅格列',
  group: '原子组件',
  category: '布局 Layout',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'GridCol',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'flex',
            'zh-CN': 'flex'
          }
        },
        name: 'flex',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'offset',
            'zh-CN': 'offset'
          }
        },
        name: 'offset',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'order',
            'zh-CN': 'order'
          }
        },
        name: 'order',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pull',
            'zh-CN': 'pull'
          }
        },
        name: 'pull',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'push',
            'zh-CN': 'push'
          }
        },
        name: 'push',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'span',
            'zh-CN': 'span'
          }
        },
        name: 'span',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'xs',
            'zh-CN': 'xs'
          }
        },
        name: 'xs',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'sm',
            'zh-CN': 'sm'
          }
        },
        name: 'sm',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'md',
            'zh-CN': 'md'
          }
        },
        name: 'md',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'lg',
            'zh-CN': 'lg'
          }
        },
        name: 'lg',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'xl',
            'zh-CN': 'xl'
          }
        },
        name: 'xl',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'xxl',
            'zh-CN': 'xxl'
          }
        },
        name: 'xxl',
        setter: 'NumberSetter'
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
    title: '栅格列',
    screenshot: '',
    schema: {
      componentName: 'GridCol',
      props: {}
    }
  }
];

export default {
  ...GridColMeta,
  snippets
};
