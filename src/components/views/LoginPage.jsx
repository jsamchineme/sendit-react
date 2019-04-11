import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions/user';

const LoginPage = ({
  form: { loginForm },
  userLogin,
  history,
  serverErrorMessage
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { values } = loginForm;
    const onSuccess = () => {
      history.push('/dashboard');
    }
    userLogin(values, onSuccess);
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
          <LoginForm
            serverErrorMessage={serverErrorMessage} 
            handleSubmit={handleSubmit} />
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
  serverErrorMessage: state.serverErrors.userLogin || undefined
});

const mapDispatchToProps = dispatch => {
  return {
    userLogin: (data, onSuccess) => dispatch(userLogin(data, onSuccess))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);