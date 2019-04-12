import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';
import { userLoginRules } from './rules/formRules';


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
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


export const LoginForm = props => {
  const { handleSubmit, serverErrorMessage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-header">
        Login
        {serverErrorMessage &&
        <div id="server-error-box" className="error-box active">{serverErrorMessage}</div>}
      </div>
      <div className="form-body">
        <div className="input-group transparent-box">
          <Field
            name="email"
            type="email"
            component={renderField}
            label="email"
            validate={userLoginRules.email}
          />
          <Field
            name="password"
            type="password"
            component={renderField}
            label="password"
            validate={userLoginRules.password}
          />
        </div>
        <div className="input-footer" />
        <div className="row text-center">
          <div className="column">
            <button className="btn submit">Login</button>
          </div>
          <div className="actions column text-center">
            <div className="v-gap-2" />
            <div>
              <NavLink to='/signup'>Signup</NavLink>
              <span style={{marginRight: 10, display: 'inline-block'}} />
              <NavLink to='/forgot-password'>Forgot Password</NavLink>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm);