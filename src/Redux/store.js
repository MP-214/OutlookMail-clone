import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './Reducers/index';

export default createStore(appReducer, applyMiddleware(thunk));