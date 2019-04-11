import React from 'react';
import { NavLink } from 'react-router-dom';

const MainPageHeader = () => {
  const username = '';

  return (
    <div className="page-header row">
      <div id="toast-place-holder" />
      <div className="text">
        <div className="name">{username}</div>
      </div>
      <div className="icons">
        <span className="drop-down-container">
          <span className="icon-group">
            <span className="fa fa-user" />
          </span>
          <div className="drop-down">
            <ul>
              <li>
                <NavLink to="/dashboard/user-profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            </ul>
          </div>
        </span>
      </div>
    </div>
  );
}


export default MainPageHeader;