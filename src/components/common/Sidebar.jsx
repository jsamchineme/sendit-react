import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <aside className='actions-sidebar show-for-large'>
      <div className="header">
        <NavLink to="/" className='logo-text-group'>
          <div className="logo"><img src="/assets/img/sendit-pickup-ondemand.svg" alt="sendit-logo" /></div>
          <div className="text">Send<span>IT</span></div>
        </NavLink>
      </div>
      <div className="content">
        <ul className="side-links">
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
    </aside>
  );
}

export default SideBar;