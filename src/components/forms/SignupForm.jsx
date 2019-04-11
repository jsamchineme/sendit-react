import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';
import { userSignupRules } from './rules/formRules';


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  
  return (
    <div>
      <label>{label}</label>
      {touched &&
        ((error && <div className="error-box active">{error}</div>))}
      <div>
        <input {...input} placeholder={label} type={type} />
      </div>
    </div>
  )
}


const SignupForm = props => {
  const { handleSubmit, serverErrorMessage, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-header">
        Signup
        {serverErrorMessage &&
        <div id="server-error-box" className="error-box active">{serverErrorMessage}</div>}
      </div>
      <div className="form-body">
        <div className="input-group transparent-box">
          <Field
            name="firstname"
            type="firstname"
            component={renderField}
            label="Firstname"
            validate={userSignupRules.firstname}
          />
          <Field
            name="lastname"
            type="lastname"
            component={renderField}
            label="Lastname"
            validate={userSignupRules.lastname}
          />
          <Field
            name="email"
            type="email"
            component={renderField}
            label="your email"
            validate={userSignupRules.email}
          />
          <Field
            name="username"
            type="username"
            component={renderField}
            label="username"
            validate={userSignupRules.username}
          />
          <Field
            name="password"
            type="password"
            component={renderField}
            label="secure password"
            validate={userSignupRules.password}
          />
        </div>
        <div className="input-footer" />
        <div className="row text-center">
          <div className="column">
            <button className="btn submit">Signup</button>
          </div>
          <div className="actions column text-center">
            <div className="v-gap-2" />
            <div>
              <NavLink to='/login'>Login</NavLink>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signupForm'
})(SignupForm)