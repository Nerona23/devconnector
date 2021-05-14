import axios from "axios";
// import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import { setPostLoading } from "./postActions";

import {
  GET_USERS,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  DELETE_USER,
  SET_CURRENT_USER,
} from "./types";

export const getUsers = () => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get("/api/users/all")
    .then((res) =>
      dispatch({
        type: GET_USERS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_USERS,
        payload: null,
      })
    );
};

export const deleteUsers = (id) => (dispatch) => {
  axios
    .delete(`/api/users/user/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_USER,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_USER,
        payload: err.response.data,
      })
    );
};
// export const editUsers= (id) =>(dispatch) =>{
//     console.log("==================",id);
//     return{
//       render(){
        
//       }
//     }
// }

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING,
  };
};
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
  };
};
