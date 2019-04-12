import React from 'react';
import delay from "../../utils/delay";

export class ConfirmModalBox extends React.Component {
  state = {
    modalActive: false,
    title: 'Modal Title',
    description: 'Modal Description',
    yesAction: () => null,
    noAction: () => null
  }

  modalConfirmAction = (yes) => {
    this.close();
    let { yesAction } = this.state;
  
    if (typeof yesAction === 'function') {
      yesAction();
    }
  }

  modalCancelAction = (yes) => {
    this.close();
    let { noAction } = this.state;
  
    if (typeof noAction === 'function') {
      noAction();
    }
  }

  show({
    title = this.state.title,
    description = this.state.description,
    yesAction = this.state.yesAction,
    noAction = this.state.noAction,
  }) {
    this.setState({
      title,
      description,
      yesAction,
      noAction,
      modalActive: true
    });
  }

  close() {
    this.setState({
      modalActive: false
    })
  }

  render() {
    let { title, description, modalActive} = this.state;
    let className = modalActive ? 'modal-view active' : 'modal-window modal-view';

    return (
      <div className={className}>
        <div className='confirm-modal'>
          <div className='box'>
            <header>
              <div className='title'>{title}</div>
            </header>
            <div>
              <div className='description'>{description}</div>
              <div className='actions'>
                <button className='btn confirm-modal-btn' onClick={this.modalConfirmAction}>Yes</button>
                <button className='btn decline-modal-btn' onClick={this.modalCancelAction}>No</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * ReactRef to ConfirmModalBox
 */
export let modal = {
  /**
   * @param {Object} options - The Options provided for the modal
   * @param {String} options.title - The title of the modal
   * @param {String} options.description - The description of the modal
   * @param {String} options.yesAction - The function to be called on confirmation of the action
   * @param {String} options.noAction - The function to be called on cancel of the action
   * @returns {void}
   */
  show: (options) => null
};

const ConfirmModalContainer = () => {
 return <ConfirmModalBox ref={(t) => modal = t} />;
}

export default ConfirmModalContainer;