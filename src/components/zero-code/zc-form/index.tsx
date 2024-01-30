import Form, { FormInstance, FormProps } from 'antd/es/form';
import lodash from 'lodash';
import React, { Component, ReactNode, createRef } from 'react';

interface IZcFormProps {
  that: Component;
  children?: ReactNode;
  disabled?: FormProps['disabled'];
  layout?: FormProps['layout'];
  instanceStateKey?: string;
  valuesStateKey?: string;
  initialValues?: FormProps['initialValues'];
}

class ZcForm extends Component<IZcFormProps> {
  ref = createRef<FormInstance>();

  componentDidMount = () => {
    const { that, instanceStateKey } = this.props;
    if (instanceStateKey) that.setState({ [instanceStateKey]: this.ref.current });
  };

  render() {
    const { children, disabled, layout, that, valuesStateKey, initialValues, ...rest } = this.props;
    const ref = this.ref;

    return (
      <Form {...{ ref, disabled, layout, initialValues, ...rest }}>
        {children}
        <Form.Item
          noStyle
          shouldUpdate
          children={() => {
            const values = this.ref.current?.getFieldsValue();
            if (valuesStateKey) {
              const prevValues = that.state[valuesStateKey];
              if (!lodash.isEqual(prevValues, values)) that.setState({ [valuesStateKey]: values });
            }
          }}
        />
      </Form>
    );
  }
}

export { ZcForm };
