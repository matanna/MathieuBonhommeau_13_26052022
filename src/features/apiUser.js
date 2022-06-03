import * as axios from "axios";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  status: "void",
  user: {},
  error: {},
  initialValues: {
    firstName: "",
    lastName: "",
  },
};

/* Actions for apiUser feature */
export const apiUserPending = createAction("apiUser/pending");
export const apiUserResolved = createAction("apiUser/resolved");
export const apiUserRejected = createAction("apiUser/rejected");

export const apiUserLogout = createAction("apiUser/logout");

export const apiUserSave = createAction("apiUser/save");
export const apiUserCancel = createAction("apiUser/cancel");
export const apiUserUpdate = createAction(
  "apiUser/update",
  (fieldname, value) => ({
    payload: { fieldname, value },
  })
);

// Create a thunk with Redux thunk for use asynchronous function and get user datas
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

// Create a thunk with Redux thunk for use asynchronous function and set news user datas
export const setUserData = (firstname, lastname) => {
  return async (dispatch, getState) => {
    dispatch(apiUserPending);
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        {
          firstName: firstname,
          lastName: lastname,
        },
        {
          headers: {
            Authorization: "Bearer " + getState().login.token,
          },
        }
      );
      console.log(response);
      const updateUser = await response.data.body;
      dispatch(apiUserResolved(updateUser));
    } catch (e) {
      const error = e.response.data;
      dispatch(apiUserRejected(error));
    }
  };
};

/* Reducer */
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
    })
    .addCase(apiUserSave, (state) => {
      state.initialValues.firstName = state.user.firstName;
      state.initialValues.lastName = state.user.lastName;
    })
    .addCase(apiUserCancel, (state) => {
      state.user.firstName = state.initialValues.firstName;
      state.user.lastName = state.initialValues.lastName;
    })
    .addCase(apiUserUpdate, (state, action) => {
      state.user[action.payload.fieldname] = action.payload.value;
    });
});

export default reducer;
