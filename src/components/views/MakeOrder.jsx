import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderCreateForm from '../forms/OrderCreateForm';
import { createOrder } from '../../redux/actions/parcel';

const MakeOrder = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    let { 
      form: { orderCreate },
      createOrder,
      history
    } = props;

    const { values } = orderCreate;
    const onSuccess = (data) => {
      history.push(`/dashboard/orders/${data.id}`);
    }
    createOrder(values, onSuccess);
  }

  let { serverErrorMessage } = props;

  return (
    <div>
      <section className="page-section single">
        <div className="header">
          <div className="order-info heading">
            <span>New Order </span>
          </div>
        </div>
        <div className="single-view">
          <div className="container">
            <div className="body row">
              <OrderCreateForm
                serverErrorMessage={serverErrorMessage}
                handleSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  form: state.form,
  serverErrorMessage: state.serverErrors.orderCreate || undefined
});

const mapDispatchToProps = dispatch => {
  return {
    createOrder: (data, onSuccess) => dispatch(createOrder(data, onSuccess))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MakeOrder);