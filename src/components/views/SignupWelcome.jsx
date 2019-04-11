import React from 'react';
import { NavLink } from 'react-router-dom';

const SignupWelcome = () => {
  return (
    <div className="wrapper signup-welcome">
      <section className="page-content">
        <div className="mast-banner">
          <section className="mast theme-dark">
            <NavLink to='/' className="logo-text-group">
              <div className="logo"><img src="/assets/img/sendit-pickup-ondemand.svg" alt="sendit-logo" /></div>
              <div className="text">Send<span>IT</span></div>
            </NavLink>
          </section>
          <section className="landing-intro">
            <div className="container">
              <div className="right-content">
                <div className="landing-text">
                  <div className="text-1">Great!</div>
                  <div className="text-2">You can now login to start sending parcels</div>
                </div>
                <div className="actions">
                  <NavLink to='/login' className="button cta">Login</NavLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="page-background">
        <div className="overlay" />
      </div>
    </div>
  );
}


export default SignupWelcome;