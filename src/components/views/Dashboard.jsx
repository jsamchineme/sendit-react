import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import MobileHeader from '../common/MobileHeader';
import MainPageHeader from '../common/MainPageHeader';
import MakeOrder from './MakeOrder';
import Sidebar from '../common/Sidebar';
import { toggleMobileMenu } from '../../redux/actions/elements';

class Dashboard extends Component {

  render() {
    let {
      menuActiveOverlayStatus,
      mobileMenuOpen,
      toggleMobileMenu
    } = this.props;

    return (
      <div>
        <div className="wrapper">
          <section className="page-content">
            <MobileHeader />
            <div className="row">
              <div className="column col-3 page-left">
                <Sidebar />
              </div>
              <div className="column col-9 page-right">
                <MainPageHeader />
                <div className="main-content">
                  <div className="container">
                    <Switch>
                      <Route path='/dashboard/make-order' component={MakeOrder} />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="hide-for-large">
          <div id="menu-active-overlay"
              onClick={() => toggleMobileMenu(mobileMenuOpen)}
            className={menuActiveOverlayStatus} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuActiveOverlayStatus: state.elementStatuses.menuActiveOverlayStatus,
    mobileMenuOpen: state.elementStatuses.mobileMenuOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMobileMenu: (visibility) => dispatch(toggleMobileMenu(visibility)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);