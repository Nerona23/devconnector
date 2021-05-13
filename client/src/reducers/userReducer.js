import {
    GET_USERS,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE
  } from '../actions/types';
  
  const initialState = {
    user: null,
    users: null,
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case PROFILE_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_USERS:
        return {
          ...state,
          user: action.payload,
          loading: false
        };
      case GET_USERS:
        return {
          ...state,
          users: action.payload,
          loading: false
        };
      case CLEAR_CURRENT_PROFILE:
        return {
          ...state,
          user: null
        };
      default:
        return state;
    }
  }
  