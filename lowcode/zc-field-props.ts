import { IPublicTypeFieldConfig } from '@alilc/lowcode-types';

const zcFieldProps: IPublicTypeFieldConfig[] = [
  {
    title: {
      label: {
        type: 'i18n',
        'en-US': 'label',
        'zh-CN': '标题'
      },
      tip: {
        type: 'i18n',
        'en-US': 'label',
        'zh-CN': 'label'
      }
    },
    name: 'label',
    setter: 'StringSetter'
  },
  {
    title: {
      label: {
        type: 'i18n',
        'en-US': 'name',
        'zh-CN': '字段名'
      },
      tip: {
        type: 'i18n',
        'en-US': 'name',
        'zh-CN': 'name'
      }
    },
    name: 'name',
    setter: 'StringSetter'
  },

  {
    title: {
      label: {
        type: 'i18n',
        'en-US': 'required',
        'zh-CN': '必填'
      },
      tip: {
        type: 'i18n',
        'en-US': 'required',
        'zh-CN': 'required | 已设置字段名时生效'
      }
    },
    name: 'required',
    setter: 'BoolSetter'
  },
  {
    title: {
      label: {
        type: 'i18n',
        'en-US': 'disabled',
        'zh-CN': '禁用'
      },
      tip: {
        type: 'i18n',
        'en-US': 'disabled',
        'zh-CN': 'disabled'
      }
    },
    name: 'disabled',
    setter: 'BoolSetter'
  }
];

export { zcFieldProps };
