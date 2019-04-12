import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Parcel from '../../components/common/Parcel';

class PaginatedParcelList extends Component {
  state = {
    numberPerPage: 8, 
    currentPage: 1,
    parcels: [],
    scope: '' // user/admin
  }

  componentDidMount() {
    console.log(this.props);
    const { numberPerPage, currentPage, parcels, scope } = this.props;
    this.setState({
      numberPerPage: numberPerPage || this.state.numberPerPage,
      currentPage: currentPage || this.state.currentPage,
      scope: scope || this.state.scope,
      parcels,
    });
  }

  getPageParcels = (parcels, currentPage, numberPerPage) => {
    let pageParcels = [];
    // since currentPage starts from 1, we normalise it to reduce by 1 due to array structure
    currentPage--; 
  
    let startPoint = currentPage * numberPerPage;
    for(let i = startPoint; i < (startPoint + numberPerPage); i++) {
      if(i - startPoint >= numberPerPage) 
        break; // stop when fetched items are up to the number per page
      
      let parcel = parcels[i];
      if(parcel) {
        pageParcels.push(parcel);
      }
    }
    return pageParcels;
  }

  changePage = (currentPage) => {
    this.setState({
      currentPage
    })
  }

  getViewHTML = (parcels, scope) => {
    let parcelList;
    if(parcels.length > 0) {
      const parcelList = parcels.map(parcel => {
        parcel.scope = scope;
        return <Parcel key={parcel.id} {...parcel} />
      });
      return parcelList;
    }

    return (
      <div className="item column col-3">
        <div className="container">
          <div className="upper-section">
            <div className="description">
              <span>No record found</span>
            </div>
          </div>
          <div className="lower-section">
            <div className="quick-info">
              <div className="item">
              </div>
              <div className="item">
              </div>
            </div>
            <div className="actions">
              <NavLink to="/dashboard/make-order" className="btn medium-btn">Create New Order</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }

  paginationNav = (numberPerPage, list, currentPage) => {
    let pageNums = Math.ceil(list.length / numberPerPage);
    // prepare the page target buttons
    let pageTargetHTML = [];
    if(pageNums > 1) {
      for(let serial = 1; serial <= pageNums; serial++) {
        let activeStatus = '';
        if (Number(currentPage) === serial) { 
          activeStatus = ' active';
        }
        pageTargetHTML.push(<button key={serial}
          className={`paginated-view-btn ${activeStatus}`}
          onClick={() => this.changePage(serial)}>
            {serial}
        </button>);
      }
    }
  
    return <div className="item column col-12">{pageTargetHTML}</div>;
  }

  render() {
    const { numberPerPage, currentPage, scope } = this.state;
    const { parcels } = this.props;

    let pageParcels = this.getPageParcels(parcels, currentPage, numberPerPage);

    let parcelHTML = this.getViewHTML(pageParcels, scope);

    const paginationNav = this.paginationNav(numberPerPage, parcels, currentPage);

    return <div className="body row auto-container gutter-20" id='orders-list'>
      {parcelHTML}{paginationNav}
    </div>
  }
}


export default PaginatedParcelList;