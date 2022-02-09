import {
    GET_USER_LIST_STARTED, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE,GET_EMAIL_BODY_STARTED,GET_EMAIL_BODY_SUCCESS
    ,GET_EMAIL_BODY_FAILURE
  } from "./actionTypes";
  
  // to get the list of users - started
  export const getUserListStarted = () => {
    return {
      type: GET_USER_LIST_STARTED
    }
  }
  
  // to get the list of users - success
  export const getUserListSuccess = data => {
    return {
      type: GET_USER_LIST_SUCCESS,
      payload: {
        data
      }
    }
  }
  
  // to get the list of users - failure
  export const getUserListFailure = error => {
    return {
      type: GET_USER_LIST_FAILURE,
      payload: {
        error
      }
    }
  }
  export const getEmailBodyStarted = () => {
    return {
      type: GET_EMAIL_BODY_STARTED
    }
  }
  
  // to get the list of users - success
  export const getEmailBodySuccess = data => {
    return {
      type: GET_EMAIL_BODY_SUCCESS,
      payload: {
        data
      }
    }
  }
  
  // to get the list of users - failure
  export const getEmailBodyFailure = error => {
    return {
      type: GET_EMAIL_BODY_FAILURE,
      payload: {
        error
      }
    }
  }