import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { orderCreateRules } from './rules/formRules';


const renderField = ({
  input,
  label,
  type,
  className,
  placeholder,
  meta: { touched, error, warning }
}) => {
  let inputBox = <input className={className} {...input} placeholder={placeholder} type={type} />;
  if(type === 'textarea') {
    inputBox = <textarea className={className} {...input} placeholder={placeholder} />
  }
  return (
    <div className="item">
      <div className="field">{label}</div>
      {touched &&
        ((error && <div className="error-box active">{error}</div>))}
      <div className="value">
        {inputBox}
      </div>
    </div>
  )
}


const OrderCreateForm = props => {
  const { handleSubmit, serverErrorMessage, pristine, reset, submitting } = props;

  return (
    <form className="create-order-form" onSubmit={handleSubmit}>
      <div className="info-sections column col-7">
        <div className="item">
          {serverErrorMessage &&
          <div className="error-box active">{serverErrorMessage}</div>}
        </div>
        <Field
          name="from"
          type="text"
          className="line-input"
          component={renderField}
          label="Pickup Location"
          placeholder="Provide Pickup location"
          validate={orderCreateRules.from}
        />
        <Field
          name="to"
          type="text"
          className="line-input"
          component={renderField}
          label="Delivery Location"
          placeholder="Provide delivery location"
          validate={orderCreateRules.to}
        />
        <Field
          name="currentLocation"
          type="text"
          className="line-input"
          component={renderField}
          label="Present Location"
          placeholder="Provide your present location"
          validate={orderCreateRules.currentLocation}
        />
        <Field
          name="contactPhone"
          type="text"
          className="line-input"
          component={renderField}
          label="Receiver's phone"
          placeholder="Receiver's phone"
          validate={orderCreateRules.contactPhone}
        />
        <Field
          name="contactEmail"
          type="email"
          className="line-input"
          component={renderField}
          label="Receiver's email"
          placeholder="Receiver's email"
          validate={orderCreateRules.contactEmail}
        />
        <Field
          name="description"
          type="textarea"
          className="line-input"
          component={renderField}
          label="Parcel Description"
          placeholder="Provide brief description"
          validate={orderCreateRules.description}
        />
        <Field
          name="weight"
          type="text"
          className="line-input"
          component={renderField}
          label="Approximate weight of the parcel"
          placeholder="Provide the approximate weight of the parcel"
          validate={orderCreateRules.weight}
        />
        <div className="item actions">
          <button className="btn bg-light-orange medium-btn">Create Order</button>
        </div>
        <div className="images column col-5">
          <div className="image">
          </div>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'orderCreate'
})(OrderCreateForm)