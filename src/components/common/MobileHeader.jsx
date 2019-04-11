import React from 'react';
import { NavLink } from 'react-router-dom';
import { retrieveAuthUser } from '../../utils/localStorage';
import { connect } from 'react-redux';
import { toggleMobileMenu } from '../../redux/actions/elements';


const MobileHeader = ({
  mobileMenuOpen,
  toggleMobileMenu,
}) => {
  const authUser = retrieveAuthUser();
  let visibilityStatus = mobileMenuOpen ? ' active' : ' inactive';

  if(authUser.isAdmin) {
    return <AdminHeader
            mobileMenuOpen={mobileMenuOpen}
            visibilityStatus={visibilityStatus}
            toggleMobileMenu={toggleMobileMenu} />;
  }
  return <UserHeader
            mobileMenuOpen={mobileMenuOpen}
            visibilityStatus={visibilityStatus}
            toggleMobileMenu={toggleMobileMenu} />;
}

const AdminHeader = ({ 
  visibilityStatus, 
  toggleMobileMenu,
  mobileMenuOpen
}) => {
  return (
    <div className="mobile-header hide-for-large">
      <div className="top-bar">
        <div className="text" style={{paddingLeft: 0}}>
          <div className="name" />
          <span className="icon-group" onClick={() => toggleMobileMenu(mobileMenuOpen)}>
            <span className="fa fa-navicon" />
          </span>
        </div>
        <div className="icons">
          <span className="drop-down-container">
            <span className="icon-group">
              <span className="fa fa-user" />
            </span>
            <div className="drop-down">
              <ul>
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </div>
      <div className={`mobile-side-menu${visibilityStatus}`}>
        <ul className="side-links" onClick={() => toggleMobileMenu(mobileMenuOpen)}>
          <li>
            <NavLink to="/admin-dashboard/orders">All Orders</NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard/pending-orders">Pending Orders</NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard/delivered-orders">Delivered Orders</NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard/cancelled-orders">Cancelled Orders</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

const UserHeader = ({
  visibilityStatus, 
  toggleMobileMenu,
  mobileMenuOpen
}) => {
  return (
    <div className="mobile-header hide-for-large">
      <div className="top-bar">
        <div className="text" style={{paddingLeft: 0}}>
          <div className="name" />
          <span className="icon-group" onClick={() => toggleMobileMenu(mobileMenuOpen)}>
            <span className="fa fa-navicon" />
          </span>
        </div>
        <div className="icons">
          <span className="drop-down-container">
            <span className="icon-group">
              <span className="fa fa-user" />
            </span>
            <div className="drop-down">
              <ul>
                <li>
                  <NavLink to="/user-profile">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </div>
      <div className={`mobile-side-menu${visibilityStatus}`}>
        <ul className="side-links" onClick={() => toggleMobileMenu(mobileMenuOpen)}>
          <li>
            <NavLink to="/dashboard/make-order">Make an Order</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/orders">See Your Orders</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/pending-orders">Pending Orders</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/delivered-orders">Delivered Orders</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cancelled-orders">Cancelled Orders</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/user-profile">My Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    mobileMenuOpen: state.elementStatuses.mobileMenuOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMobileMenu: (visibility) => dispatch(toggleMobileMenu(visibility))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader);
            