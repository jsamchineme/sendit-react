import React from 'react';
import { NavLink } from 'react-router-dom';
import DateFormater from '../../utils/DateFormater';
import parcelStatuses from '../../constants/parcelStatuses';

const Parcel = ({
  description, 
  status, 
  sentOn,
  deliveredOn,
  cost,
  currentLocation,
  from,
  to,
  weight,
  weightmetric,
  presentMapPointer,
  id,
  scope
}) => {

  let caption = description !== undefined && description !== null ? description.slice(0, 30) : 'No description';
  let productLink = scope === 'admin' ? `/admin-dashboard/orders/${id}` : `/dashboard/orders/${id}`;
  let dotLink = <NavLink to={productLink} className="view-more">...</NavLink>;
  let parcelCaption = (<span>{caption}{dotLink}</span>);

  let parcelStatus = parcelStatuses[status];

  return (
    <div className="item column col-3">
      <div className="container">
        <div className="upper-section">
          <div className="description">
            <span>{caption}</span>
          </div>
        </div>
        <div className="lower-section">
          <div className="quick-info">
            <div className="item">
              <span className='field'>Order<span className='inset-text'> {parcelStatus}</span></span>
            </div>
            <div className="item">
              <span className="field">Created on <span className='inset-text style-1'>{DateFormater.formatDate(sentOn)}</span></span>
            </div>
          </div>
          <div className="actions">
            <NavLink to={productLink} className="btn medium-btn">View Order</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parcel;
