import * as axios from "axios";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  status: "void",
  user: {},
  error: {},
};

export const apiUserPending = createAction("apiUser/pending");
export const apiUserResolved = createAction("apiUser/resolved");
export const apiUserRejected = createAction("apiUser/rejected");

export const apiUserLogout = createAction("apiUser/logout");

export const getUserData = () => {
  return async (dispatch, getState) => {
    dispatch(apiUserPending);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: "Bearer " + getState().login.token,
          },
        }
      );
      const fetchedUser = await response.data.body;
      dispatch(apiUserResolved(fetchedUser));
    } catch (e) {
      const error = e.response.data;
      dispatch(apiUserRejected(error));
    }
  };
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(apiUserPending, (state) => {
      state.status = "pending";
    })
    .addCase(apiUserResolved, (state, action) => {
      state.status = "resolved";
      state.user = action.payload;
    })
    .addCase(apiUserRejected, (state, action) => {
      state.status = "rejected";
      state.user.error = action.payload;
    })
    .addCase(apiUserLogout, (state) => {
      state.status = "void";
      state.user = {};
      state.error = {};
    });
});

export default reducer;
