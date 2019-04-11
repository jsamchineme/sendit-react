import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleParcel from './SingleParcel';
import { fetchParcel } from '../../redux/actions/parcel';

class ParcelEntry extends Component {

  componentDidMount() {
    const { match: { params: { parcelId }}, fetchParcel } = this.props;
    fetchParcel(parcelId);
    
  }

  render() {
    let { parcels } = this.props;
    const { match: { params: { parcelId }} } = this.props;

    let parcel = parcels.find(item => item.id === Number(parcelId));

    return (
      <div>
        <SingleParcel {...parcel} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form,
  serverErrorMessage: state.serverErrors.orderCreate || undefined,
  parcels: state.parcels || []
});

const mapDispatchToProps = dispatch => {
  return {
    fetchParcel: (parcelId) => dispatch(fetchParcel(parcelId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ParcelEntry);