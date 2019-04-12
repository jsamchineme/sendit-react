import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PrivateUserRoute = ({
  component: Component,
  isAuthenticated,
  authUser,
  ...rest,
}) => {
  return (
    isAuthenticated && authUser.isAdmin === false
    ? <Route component={Component} {...rest} />
    : <Redirect to='/login' />
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated || false,
    authUser: state.auth.authUser || { isAdmin: false }
  }
}

export default connect(mapStateToProps)(PrivateUserRoute);