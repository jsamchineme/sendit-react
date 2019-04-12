import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import parcelStatuses from '../../constants/parcelStatuses';
import DateFormater from '../../utils/DateFormater';
import { renderField } from '../forms/OrderCreateForm';
import DestinationEditForm from '../forms/DestinationEditForm';

const SingleParcelEdit = ({
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
  showMap,
  mapDisplayStatus,
  contactEmail = '',
  contactPhone = '',
  handleEditSubmit
}) => {
  let mapViewButton = '';    
  if(!window.mapReady) {
    mapViewButton = status !== 'cancelled' ? 
      <a href="#map-modal" className="btn medium-btn bg-light-orange">View on the map</a>
      : '';
  }

  // allow order cancelling only if status is neither 'cancelled' nor 'delivered'
  let cancelOrderButton = status !== 'cancelled' && status !== 'delivered'  ? 
    <button className="btn danger medium-btn cancel-order" data-parcel-id='${id}'>Cancel Order</button>
    : '';

  // allow editing destination only if status is neither 'cancelled' nor 'delivered'
  let toSection = status !== 'cancelled' && status !== 'delivered' ? 
    <div className="item">
      <div className="field">Delivery Location</div>
      <div className="value">
        <DestinationEditForm value={to}/>
        <br />
        <button className='btn small-btn save-edit' onClick={handleEditSubmit}>Save</button>
        <NavLink className="btn small-btn" to={`/dashboard/orders/${id}`}>View</NavLink>
      </div>
    </div>
    : <div className="item">
        <div className="field">Delivery Location</div>
        <div className="value">
          {to}
        </div>
      </div>;

  let parcelStatus = parcelStatuses[status];
  sentOn = DateFormater.formatDate(sentOn);
  contactEmail = contactEmail === null || contactEmail === undefined ? 'Not Provided' : contactEmail;
  contactPhone = contactPhone === null || contactPhone === undefined ? 'Not Provided' : contactPhone;

  return (
    <section className="page-section single">
      <div className="header">
        <div className="order-info heading">
          <span>Order ID <span className="inset-text">#{id}</span></span>
        </div>
      </div>
      <div className="single-view">
        <div className="container">
          <div className="header">
            <span className='title'>{description}</span>
            <div className="stats-info">
              <div>
                Created on <span className="inset-text">{sentOn}</span>
              </div>
              <div>
                Status on <span className="inset-text">{parcelStatus}</span>
              </div>
            </div>
          </div>
          <div className="body row">
            <div className="info-sections column col-5">
              <div className="item">
                <div className="field">Present Location </div>
                <div className="value">
                  {currentLocation}
                </div>
                <div className="actions">
                  {/* <!-- {mapViewButton} --> */}
                </div>
              </div>

              {toSection}

              <div className="item">
                <div className="field">Pickup Location</div>
                <div className="value">
                  {from}
                </div>
              </div>
              <div className="item">
                <div className="field">Delivery Charge</div>
                <div className="value">
                  {cost}
                </div>
              </div>
              <div className="item">
                <div className="field">Parcel Weight</div>
                <div className="value">
                  {weight}
                </div>
              </div>
              <div className="item">
                <div className="field">Receiver's Email</div>
                <div className="value">
                  {contactEmail}
                </div>
              </div>
              <div className="item">
                <div className="field">Receiver's Phone</div>
                <div className="value">
                  {contactPhone}
                </div>
              </div>
              <div className="item actions">
                {cancelOrderButton}
              </div>
            </div>
            <div className="map-view column col-7">
              <div className='info-sections'>
                <div className="item" id="output"></div>
              </div>
              <div id="map"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  mapReady: state.elementStatuses.mapReady || false,
  mapDisplayStatus: state.elementStatuses.mapDisplayStatus || true,
});

export default connect(mapStateToProps)(SingleParcelEdit);