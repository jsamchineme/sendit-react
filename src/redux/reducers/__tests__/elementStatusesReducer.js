import '@babel/polyfill';
import elementStatusesReducer from '../elementStatusesReducer';
import {
  TOGGLE_MOBILE_MENU,
  SHOW_MOBILE_MENU_OVERLAY,
  ACTIVATE_MOBILE_MENU_OVERLAY,
  DEACTIVATE_MOBILE_MENU_OVERLAY,
  HIDE_MOBILE_MENU_OVERLAY
} from '../../actionTypes';

it('Should handle TOGGLE_MOBILE_MENU', () => {
  const initialState = {
    mobileMenuOpen: false,
    menuActiveOverlayStatus: ''
  };
  const state = elementStatusesReducer(initialState, {
    type: TOGGLE_MOBILE_MENU,
    payload: {}
  });
  expect(state.mobileMenuOpen).toEqual(true);
});

it('Should handle SHOW_MOBILE_MENU_OVERLAY', () => {
  const initialState = {
    mobileMenuOpen: false,
    menuActiveOverlayStatus: ''
  };
  const state = elementStatusesReducer(initialState, {
    type: SHOW_MOBILE_MENU_OVERLAY,
    payload: {}
  });
  expect(state.menuActiveOverlayStatus).toEqual('shown');
});

it('Should handle ACTIVATE_MOBILE_MENU_OVERLAY', () => {
  const initialState = {
    mobileMenuOpen: false,
    menuActiveOverlayStatus: ''
  };
  const state = elementStatusesReducer(initialState, {
    type: ACTIVATE_MOBILE_MENU_OVERLAY,
    payload: {}
  });
  expect(state.menuActiveOverlayStatus).toEqual('shown active');
});

it('Should handle DEACTIVATE_MOBILE_MENU_OVERLAY', () => {
  const initialState = {
    mobileMenuOpen: false,
    menuActiveOverlayStatus: ''
  };
  const state = elementStatusesReducer(initialState, {
    type: DEACTIVATE_MOBILE_MENU_OVERLAY,
    payload: {}
  });
  expect(state.menuActiveOverlayStatus).toEqual('shown');
});

it('Should handle HIDE_MOBILE_MENU_OVERLAY', () => {
  const initialState = {
    mobileMenuOpen: false,
    menuActiveOverlayStatus: ''
  };
  const state = elementStatusesReducer(initialState, {
    type: HIDE_MOBILE_MENU_OVERLAY,
    payload: {}
  });
  expect(state.menuActiveOverlayStatus).toEqual('');
});