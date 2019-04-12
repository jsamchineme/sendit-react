import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { editDestinationRules } from '../forms/rules/formRules';

export const renderField = ({
  input,
  label,
  type,
  className,
  placeholder,
  meta: { touched, error, warning }
}) => {

  let inputBox = <input className={className} {...input} placeholder={placeholder} type={type} />;
  return (
    <div>
      {touched &&
        ((error && <div className="error-box active">{error}</div>))}
        {inputBox}
    </div>
  )
}

const Form = ({
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="to"
      type="text"
      className="line-input"
      component={renderField}
      label="Delivery Location"
      placeholder="Provide delivery location"
      validate={editDestinationRules.to}
    />
  </form>
)

const EditForm = reduxForm({
  form: 'destinationEdit',
})(Form);

const DestinationEditContainer = props => {
  const { handleSubmit, value } = props;
  return (
    <EditForm
      initialValues={{to: value }}
      enableReinitialize={true}
    />
  );
}

export default DestinationEditContainer;

