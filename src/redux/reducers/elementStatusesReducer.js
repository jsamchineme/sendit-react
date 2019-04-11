import {
  TOGGLE_MOBILE_MENU,
  SHOW_MOBILE_MENU_OVERLAY,
  HIDE_MOBILE_MENU_OVERLAY,
  ACTIVATE_MOBILE_MENU_OVERLAY,
  DEACTIVATE_MOBILE_MENU_OVERLAY
} from '../actionTypes';

const initialState = {
  mobileMenuOpen: false,
  menuActiveOverlayStatus: ''
};

const elementStatusesReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_MOBILE_MENU:
      return {
        ...state, mobileMenuOpen: !state.mobileMenuOpen
      }
    case SHOW_MOBILE_MENU_OVERLAY:
      return {
        ...state, 
        menuActiveOverlayStatus: 'shown'
      }
    case ACTIVATE_MOBILE_MENU_OVERLAY:
      return {
        ...state, 
        menuActiveOverlayStatus: 'shown active'
      }
    case DEACTIVATE_MOBILE_MENU_OVERLAY:
      return {
        ...state, 
        menuActiveOverlayStatus: 'shown'
      }
    case HIDE_MOBILE_MENU_OVERLAY:
      return {
        ...state, 
        menuActiveOverlayStatus: ''
      }
    default: 
      return state;
  }
}

export default elementStatusesReducer;