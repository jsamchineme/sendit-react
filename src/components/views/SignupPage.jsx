import React from 'react';
import { NavLink } from 'react-router-dom';
import SignupForm from '../forms/SignupForm';

const LoginPage = () => {
  return (
    <div className="wrapper">
      <section className="page-content">
        <section className="mast no-bg paddless">
          <NavLink to='/' className="logo-text-group">
            <div className="logo"><img src="assets/img/sendit-pickup-ondemand.svg" alt="sendit-logo" /></div>
            <div className="text">Send<span>IT</span></div>
          </NavLink>
        </section>
        <div className="login-box">
          <SignupForm />
        </div>
      </section>
      <div className="page-background">
        <div className="overlay" />
      </div>
    </div>
  );
}

export default LoginPage;