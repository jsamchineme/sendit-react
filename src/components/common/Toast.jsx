import React from 'react';

class Toast extends React.Component {
  state = {
    message: '',
    type: 'success',
    autoHide: () => null,
    hideAfter: () => null,
    toastActive: true,
    className: '',
    typeClassName: '',
  }

  show({ 
    message = this.state.message, 
    type = this.state.type, 
    autoHide = this.state.autoHide, 
    hideAfter = this.state.hideAfter 
  }) {
    let className = 'toast-box';
    className += type === 'success' ? ' success' : ' warning';
    let classNames = {
      success: 'success',
      failure: 'error',
      error: 'error',
      pending: 'error',
      undefined: 'error',
    }
    
    this.hideTimeoutSeconds = hideAfter === undefined ? 3000 : hideAfter;

    let styleClassName = classNames[type];
    // if the type passed does not match any class value
    // then use pending as default

    this.setState({
      message,
      type,
      autoHide,
      hideAfter,
      toastActive: true,
      typeClassName: styleClassName
    });

    this.animateToastIn();
    if(autoHide !== false) {
      this.initiateToastHide();
    }
  }

  onToastClick = () => {
    clearTimeout(this.toastHideTimeout);
    this.toastHide();
  }

  toastHide() {
    this.setState({
      className: `toast-box ${this.state.typeClassName}`,
      toastActive: false,
    });
  }

  animateToastIn() {
    clearTimeout(this.timeToAppear);
    let timeout = 100;
    const _this = this;
    _this.timeToAppear = setTimeout(() => {
      _this.setState({
        className: `toast-box ${this.state.typeClassName} active`
      })
    }, timeout);
  }

  initiateToastHide() {
    clearTimeout(this.toastHideTimeout);
    const _this = this;
    _this.toastHideTimeout = setTimeout(() => {
      _this.toastHide();
    }, _this.hideTimeoutSeconds);
  }

  render() {
    let { className, message } = this.state;
    let toastPlaceHolderPadding = this.state.toastActive ? '20px' : '0px';

    return (
      <div id="toast-place-holder" style={{padding: toastPlaceHolderPadding}}>
        <div className={className} onClick={this.onToastClick}>
          {message}
        </div>
      </div>
    );
  }
}

/**
 * ReactRef to toast
 */
export let toast = {
  /**
   * @param {Object} options - The Options provided for the toast
   * @param {String} options.type - The type of people
   * @param {Boolean} options.autoHide - flag to know if auto hide should be enabled
   * @param {Boolean} options.hideAfter - hide toast after a boolean flag
   */
  show: (options) => null  
};

const ToastContainer = () => {
 return <Toast ref={(ref) => toast = ref} />;
}

export default ToastContainer;