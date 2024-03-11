import { STORE_LOGIN_CREDENTIALS } from './ActionTypes';

export function saveCredentials(payload: any) {
  console.log('>>>>>>>>>Action Payload', payload);
  return {
    type: STORE_LOGIN_CREDENTIALS,
    payload: payload,
  };
}
