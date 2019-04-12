import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaginatedList from '../common/PaginatedList';

const OrdersListContainer = ({
  type = 'all',
  parcels: allParcels,
}) => {
  const listHeaders = {
    all: (<div className="header"><span>All Orders</span></div>),
    cancelled: (<div className="header"><span>Orders <strong>Cancelled</strong></span></div>),
    delivered: (<div className="header"><span>Orders <strong>Delivered</strong></span></div>),
    pending: (<div className="header"><span>Orders <strong>Pending Delivery</strong></span></div>),
  }

  const header = listHeaders[type];

  const parcelsToList = {
    all: allParcels,
    cancelled: allParcels.filter(item => item.status === 'cancelled'),
    delivered: allParcels.filter(item => item.status === 'delivered'),
    pending: allParcels.filter(item => item.status === 'transiting' || item.status === 'placed'),
  }

  const parcels = parcelsToList[type];
  return (
    <section className="page-section items-list all-parcels">
      {header}
      <PaginatedList parcels={parcels} scope='user' />
    </section>
  );
}

const mapStateToProps = state => {
  return {
    parcels: state.parcels || []
  }
}

export default connect(mapStateToProps)(OrdersListContainer);