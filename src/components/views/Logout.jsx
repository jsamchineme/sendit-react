import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions/user';

class Logout extends Component {
  componentDidMount() {
    let { history, dispatch } = this.props;
    dispatch(userLogout());
    history.replace('/login');
  }

  render() {
    return (
      <div className="wrapper">
        Logging out
      </div>
    );
  }
}

export default connect()(Logout);