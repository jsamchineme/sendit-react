import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import MobileHeader from '../common/MobileHeader';
import MainPageHeader from '../common/MainPageHeader';
import ParcelEntry from './ParcelEntry';
import ParcelEntryEdit from './ParcelEntryEdit';
import MakeOrder from './MakeOrder';
import OrdersList from './OrdersList';
import Sidebar from '../common/Sidebar';
import { toggleMobileMenu } from '../../redux/actions/elements';
import Map from './Map';
import ConfirmModalContainer from '../common/ConfirmModal';
import { getAllUserParcels } from '../../redux/actions/parcel';

window.initMap = () => Map.init();
window.map = Map;

class Dashboard extends Component {
  componentDidMount() {
    const { getAllUserParcels } = this.props;
    getAllUserParcels();
  }

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
                      <Route exact path='/dashboard' component={MakeOrder} />
                      <Route path='/dashboard/make-order' component={MakeOrder} />
                      <Route exact path='/dashboard/orders' render={() => <OrdersList type='all' />} />
                      <Route exact path='/dashboard/pending-orders' render={() => <OrdersList type='pending' />} />
                      <Route exact path='/dashboard/delivered-orders' render={() => <OrdersList type='delivered' />} />
                      <Route exact path='/dashboard/cancelled-orders' render={() => <OrdersList type='cancelled' />} />
                      <Route exact path='/dashboard/orders/:parcelId' component={ParcelEntry} />
                      <Route exact path='/dashboard/orders/edit/:parcelId' component={ParcelEntryEdit} />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <ConfirmModalContainer />

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
    getAllUserParcels: () => dispatch(getAllUserParcels()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);