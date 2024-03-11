// reducer

import { STORE_LOGIN_CREDENTIALS } from '../actions/ActionTypes';

const initialState = [];

function loginReducer(state = initialState, action: any) {
  switch (action.type) {
    case STORE_LOGIN_CREDENTIALS:
      console.log('>>>>payload', action.payload);
      return [
        ...state,
        {
          payload: action.payload,
        },
      ];

    default:
      return state;
  }
}

export default loginReducer;
