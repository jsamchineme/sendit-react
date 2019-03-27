import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="wrapper">
      <div className="page-content">
        <div className='mast-banner' style={{backgroundImage: 'url(assets/img/sending-package.jpg)'}}>
          <section className="mast theme-dark">
            <NavLink to="/" className='logo-text-group'>
              <div className="logo"><img src="assets/img/sendit-pickup-ondemand.svg" alt="sendit-logo" /></div>
              <div className="text">Send<span>IT</span></div>
            </NavLink>
          </section>
          <section className='landing-intro'>
            <div className="container">
              <div className="left-content">
                <div className="image">
                  <img src="assets/img/package-landing-image.jpg" alt="sendit landing introduction image" />
                </div>
              </div>
              <div className="right-content">
                <div className="landing-text">
                  <div className="text-1">Send Packages Anywhere.</div>
                  <div className="text-2">We pick up, deliver and even let you track the process.</div>
                  <div className="text-3">Ain't that cool?</div>
                </div>
                <div className="actions">
                  <NavLink to='/login' className="button cta">Send Package</NavLink>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className='value-props'>
          <div className="items row auto-container">
            <div className="item column col-4">
              <div className="image"><img src="assets/img/sendit-pickup-ondemand.svg" alt="" /></div>
              <div className="text">Pickup On Demand</div>
            </div>
            <div className="item column col-4">
              <div className="image"><img src="assets/img/sendit-timely-delivery.svg" alt="" /></div>
              <div className="text">Timely Delivery</div>
            </div>
            <div className="item column col-4">
              <div className="image"><img src="assets/img/sendit-track-package.svg" alt="" /></div>
              <div className="text">Track Order</div>
            </div>
          </div>
        </section>
        <section className='footer'>
          <div className="row action-banners">
            <div className="item column col-6">
              <div className="container" style={{backgroundImage: 'url(assets/img/sending-package.jpg)'}}>
                <div className="bg">
                  <div className="text">Got Package?</div>
                  <NavLink to="/login" className="btn small cta theme-orange">SEND IT</NavLink>
                </div>
              </div>
            </div>
            <div className="item column col-6">
              <div className="container" style={{backgroundImage: 'url(assets/img/tracking-image.jpg)'}}>
                <div className="bg">
                  <div className="text">Sent Package?</div>
                  <NavLink to="/login" className="btn small cta theme-yellow">TRACK IT</NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="page">
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default LandingPage;