import { IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import { FormItemProps } from 'antd';
import { IZcFieldProps } from 'src/types';

const handleFormItemProps = (props: IZcFieldProps): FormItemProps => {
  return {
    name: props.name,
    label: props.label,
    rules: [{ required: props.required }],
    messageVariables: { name: props.label }
  };
};

const fieldPropsMeta: IPublicTypeFieldConfig[] = [
  {
    title: 'that',
    name: 'that',
    condition: () => false,
    setter: {
      componentName: 'VariableSetter',
      initialValue: {
        type: 'JSExpression',
        value: 'this'
      }
    }
  },
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
  }
];

export { fieldPropsMeta, handleFormItemProps };
