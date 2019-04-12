import '@babel/polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { userLogin, userSignup } from '../user';
import { 
  USER_LOGIN_REQUEST, 
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS, 
  CLEAR_SERVER_ERROR, 
  USER_LOGIN_FAILURE,
  SHOW_SERVER_ERROR,
} from '../../actionTypes';
import { authUser } from '../../../__mocks__/user';
import * as AuthLocalStorage from '../../../utils/localStorage';

jest.mock('../../../utils/localStorage');

const createMockStore = configureMockStore([thunk]);


describe('Test cases for userLogin Action', () => {

  beforeEach(() => {
    localStorage.clear();
    fetch.resetMocks();
  });

  it('Should log in user with correct details', async () => {
    const store = createMockStore({});
    const loginData = {
      email: authUser.email,
      password: 'secretpass'
    };

    fetch.mockResponseOnce(JSON.stringify({data: authUser}));
    
    await store.dispatch(userLogin(loginData));

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('https://johnnysam-sendit.herokuapp.com/api/v1/auth/login');
  
    const actions = store.getActions();
  
    expect(actions).toEqual([
      { type: USER_LOGIN_REQUEST },
      { type: USER_LOGIN_SUCCESS, payload: authUser },
      { type: CLEAR_SERVER_ERROR, payload: { process: 'userLogin' } }
    ]);
  
    expect(AuthLocalStorage.persistAuthUser).toHaveBeenLastCalledWith(authUser);
  });

  it('Should fail to login user with incorrect details', async () => {
    const store = createMockStore({});
    const loginData = {
      email: 'asdsdsd',
      password: 'secretpass'
    };
    const response = {
      message: "Provide correct login credentials"
    }

    fetch.mockRejectOnce(response);
    
    await store.dispatch(userLogin(loginData));

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('https://johnnysam-sendit.herokuapp.com/api/v1/auth/login');
  
    const actions = store.getActions();
  
    expect(actions).toEqual([
      { type: USER_LOGIN_REQUEST },
      { type: USER_LOGIN_FAILURE, payload: response.message  },
      { type: SHOW_SERVER_ERROR, payload: { message: response.message, process: 'userLogin' } }
    ]);
  
    expect(AuthLocalStorage.persistAuthUser).toHaveBeenLastCalledWith(authUser);
  });
})

describe('Test cases for userSignup Action', () => {

  beforeEach(() => {
    localStorage.clear();
    fetch.resetMocks();
  });

  it('Should signup user with correct details', async () => {
    const store = createMockStore({});
    const signupData = {
      email: authUser.email,
      password: 'secretpass'
    };

    fetch.mockResponseOnce(JSON.stringify({data: authUser}));
    
    await store.dispatch(userSignup(signupData));

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('https://johnnysam-sendit.herokuapp.com/api/v1/auth/signup');
  
    const actions = store.getActions();
  
    expect(actions).toEqual([
      { type: USER_SIGNUP_REQUEST },
      { type: USER_SIGNUP_SUCCESS, payload: authUser },
      { type: CLEAR_SERVER_ERROR, payload: { process: 'userSignup' } }
    ]);
  });

  it('Should fail to signup user with incorrect details', async () => {
    const store = createMockStore({});
    const signupData = {
      email: 'asdsdsd',
      password: 'secretpass'
    };
    const response = {
      message: "Provide correct signup credentials"
    }

    fetch.mockRejectOnce(response);
    
    await store.dispatch(userSignup(signupData));

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('https://johnnysam-sendit.herokuapp.com/api/v1/auth/signup');
  
    const actions = store.getActions();
  
    expect(actions).toEqual([
      { type: USER_SIGNUP_REQUEST },
      { type: USER_SIGNUP_FAILURE, payload: response.message  },
      { type: SHOW_SERVER_ERROR, payload: { message: response.message, process: 'userSignup' } }
    ]);
  });
})


