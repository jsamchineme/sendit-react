import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
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
    </aside>
  );
}

export default AdminSidebar;