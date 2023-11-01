const 字符串 = 'StringSetter';
const 数字 = 'NumberSetter';
const 布尔 = 'BoolSetter';
const 元素 = 'SlotSetter';
const 函数 = 'FunctionSetter';
const 返回元素的函数 = {
  componentName: 'SlotSetter',
  initialValue: {
    type: 'JSSlot',
    params: ['__placeholder__']
  }
};
const 对象的数组 = {
  componentName: 'ArraySetter',
  condition: () => false,
  props: {
    itemSetter: {
      componentName: 'ObjectSetter',
      condition: () => false,
      props: {
        config: {
          items: [
            {
              title: {
                label: {
                  type: 'i18n',
                  'en-US': 'danger',
                  'zh-CN': 'danger'
                }
              },
              name: 'danger',
              setter: 'StringSetter'
            }
          ]
        }
      }
    }
  }
};
const 融合 = {
  componentName: 'MixedSetter',
  props: {
    setters: ['StringSetter', 'NumberSetter']
  }
};

const 样式 = {
  setter: 'StyleSetter',
  extraProps: {
    display: 'accordion',
    defaultCollapsed: true
  }
};
