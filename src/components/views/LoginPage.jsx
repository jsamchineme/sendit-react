import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="wrapper">
      <section className="page-content">
        <section className="mast no-bg paddless">
          <a href="index.html" className="logo-text-group">
            <div className="logo"><img src="assets/img/sendit-pickup-ondemand.svg" alt="sendit-logo" /></div>
            <div className="text">Send<span>IT</span></div>
          </a>
        </section>
        <div className="login-box">
          <form action="">
            <div className="form-header">
              Login
            </div>
            <div className="form-body">
              <div className="input-group transparent-box">
                <label htmlFor="email">Email</label>   
                <input type="email" placeholder="you@email.com" id="email" required />
              </div>
              <div className="input-group transparent-box">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="your password" id="password" required /> 
              </div>
              <div className="input-footer" />
              <div className="row text-center">
                <div className="column">
                  <button className="btn submit">Login</button>
                </div>
                <div className="actions column text-center">
                  <div className="v-gap-2" />
                  <div className>
                    <NavLink to="/signup">Sign up</NavLink> 
                    <span style={{marginRight: 10, display: 'inline-block'}} />
                    <NavLink to="/forgot-password">Forgot password</NavLink>
                    <span style={{marginRight: 10, display: 'inline-block'}} />
                    <NavLink to="/admin-login">Admin Login</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <div className="page-background">
        <div className="overlay" />
      </div>
    </div>

  );
}

export default LoginPage;