import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SignupForm from '../forms/SignupForm';
import { userSignup } from '../../redux/actions/user';


const SignupPage = ({
  form: { signupForm },
  userSignup,
  history,
  serverErrorMessage
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { values } = signupForm;
    const onSuccess = () => {
      history.push('/signup/welcome');
    }
    userSignup(values, onSuccess);
  }
  return (
    <div className="wrapper">
      <section className="page-content">
        <section className="mast no-bg paddless">
          <NavLink to='/' className="logo-text-group">
            <div className="logo"><img src="/assets/img/sendit-pickup-ondemand.svg" alt="sendit-logo" /></div>
            <div className="text">Send<span>IT</span></div>
          </NavLink>
        </section>
        <div className="login-box">
          <SignupForm 
            serverErrorMessage={serverErrorMessage} 
            handleSubmit={handleSubmit} />/>
        </div>
      </section>
      <div className="page-background">
        <div className="overlay" />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  form: state.form,
  serverErrorMessage: state.serverErrors.userSignup || undefined
});

const mapDispatchToProps = dispatch => {
  return {
    userSignup: (data, onSuccess) => dispatch(userSignup(data, onSuccess))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);