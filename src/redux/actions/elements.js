import {
  TOGGLE_MOBILE_MENU,
  SHOW_MOBILE_MENU_OVERLAY,
  ACTIVATE_MOBILE_MENU_OVERLAY,
  DEACTIVATE_MOBILE_MENU_OVERLAY,
  HIDE_MOBILE_MENU_OVERLAY
} from '../actionTypes';

export const toggleMobileMenu = (mobileMenuOpen) => dispatch => {
  dispatch({
    type: TOGGLE_MOBILE_MENU
  });

  if(!mobileMenuOpen) {
    dispatch({
      type: SHOW_MOBILE_MENU_OVERLAY
    });
    setTimeout(() => {
      dispatch({
        type: ACTIVATE_MOBILE_MENU_OVERLAY
      });
    }, 100)
  } else {
    dispatch({
      type: DEACTIVATE_MOBILE_MENU_OVERLAY
    });
    setTimeout(() => {
      dispatch({
        type: HIDE_MOBILE_MENU_OVERLAY
      });
    }, 500)
  }
}