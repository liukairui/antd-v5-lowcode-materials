import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CardMetaMeta: IPublicTypeComponentMetadata = {
  componentName: 'CardMeta',
  title: '卡片元数据',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'CardMeta',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'avatar',
            'zh-CN': 'avatar'
          }
        },
        name: 'avatar',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'description',
            'zh-CN': 'description'
          }
        },
        name: 'description',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': 'title'
          }
        },
        name: 'title',
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
    title: '卡片元数据',
    screenshot: '',
    schema: {
      componentName: 'CardMeta',
      props: {}
    }
  }
];

export default {
  ...CardMetaMeta,
  snippets
};
