import {
    getUserListStarted, getUserListSuccess, getUserListFailure,getEmailBodyStarted,
    getEmailBodySuccess, getEmailBodyFailure
  } from "../Redux/actions/userAction";
  
  
  export const getUserList = (page = 1) => async dispatch => {
    dispatch(getUserListStarted());
    try {
      const res = await fetch(`https://flipkart-email-mock.now.sh/?page=${page}`);
      const data = await res.json();
      dispatch(getUserListSuccess(data["list"]));
    } catch (err) {
      dispatch(getUserListFailure(err.message));
    }
  }
  export const getEmailBody = (id) => async dispatch => {
    dispatch(getEmailBodyStarted());
    try {
      const res = await fetch(`https://flipkart-email-mock.now.sh/?id=${id}`);
      const data = await res.json();
      dispatch(getEmailBodySuccess(data.body));
    } catch (err) {
      dispatch(getEmailBodyFailure(err.message));
    }
  }