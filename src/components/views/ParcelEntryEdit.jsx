import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchParcel , editDestination} from '../../redux/actions/parcel';
import SingleParcelEdit from './SingleParcelEdit';
import { modal } from '../common/ConfirmModal';
import { toast } from '../common/Toast';

class ParcelEntryEdit extends Component {

  componentDidMount() {
    const { match: { params: { parcelId }}, fetchParcel } = this.props;
    fetchParcel(parcelId);
  }

  handleEditSubmit = (e) => {
    e.preventDefault();
    let { 
      form: { destinationEdit },
      editDestination,
    } = this.props;
    const { values } = destinationEdit;
    const { match: { params: { parcelId }} } = this.props;

    const confirmAction = () => editDestination(values, parcelId);

    modal.show({
      title: '',
      description: 'This action cannot be undone. Do you wish to continue?',
      yesAction: confirmAction,
    })
  }

  render() {
    let { parcels } = this.props;
    const { match: { params: { parcelId }} } = this.props;

    let parcel = parcels.find(item => item.id === Number(parcelId));

    return (
      <div>
        <SingleParcelEdit
          handleEditSubmit={this.handleEditSubmit}
          {...parcel} />
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
    fetchParcel: (parcelId) => dispatch(fetchParcel(parcelId)),
    editDestination: (data, parcelId) => dispatch(editDestination(data, parcelId)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ParcelEntryEdit);