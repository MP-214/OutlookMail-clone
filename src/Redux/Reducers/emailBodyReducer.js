import {
    GET_EMAIL_BODY_STARTED, GET_EMAIL_BODY_SUCCESS, GET_EMAIL_BODY_FAILURE
  } from "../actions/actionTypes";
  
  // define initial state of user
  const initialState = {
    data: [],
    loading: false,
    error: null
  }
  
  // update store based on type and payload and return the state
  export default function common(state = initialState, action) {
    switch (action.type) {
      case GET_EMAIL_BODY_STARTED:
        return {
          ...state,
          loading: true
        }
      case GET_EMAIL_BODY_SUCCESS:
        const { data } = action.payload;
        return {
          ...state,
          data,
          loading: false
        }
      case GET_EMAIL_BODY_FAILURE:
        const { error } = action.payload;
        return {
          ...state,
          error
        }
      default:
        return state
    }
  }