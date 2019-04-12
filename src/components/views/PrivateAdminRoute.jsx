import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PrivateAdminRoute = ({
  component: Component,
  auth,
  ...rest,
}) => {
  return (
    auth.isAuthenticated && auth.authUser.isAdmin
    ? <Route component={Component} {...rest} />
    : <Redirect to='/login' />
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth || {}
  }
}

export default connect(mapStateToProps)(PrivateAdminRoute);