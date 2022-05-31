import { createAction, createReducer } from "@reduxjs/toolkit";
import * as axios from "axios";

const initialState = {
  isLogged: false,
  token: "",
  user: {
    status: "void",
    email: "",
    password: "",
    rememberMe: false,
    error: {},
  },
};

export const setIsLogged = createAction("login/setIsLogged");

export const setField = createAction("login/setField", (nameField, value) => ({
  payload: { nameField, value },
}));

export const loginPending = createAction("login/pending");
export const loginResolved = createAction("login/resolved");
export const loginRejected = createAction("login/rejected");

// Create a thunk with Redux thunk for use asynchronous function and get a token
export const loginUser = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(loginPending);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email: email,
          password: password,
        }
      );
      const token = await response.data.body.token;
      dispatch(loginResolved(token));
      dispatch(setIsLogged());

      if (!getState().login.user.rememberMe) {
        dispatch(setField("email", ""));
        dispatch(setField("password", ""));
      }
    } catch (e) {
      const error = e.response.data;
      dispatch(loginRejected(error));
    }
  };
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setIsLogged, (state) => {
      if (state.isLogged) state.token = "";
      state.isLogged = !state.isLogged;
    })
    .addCase(setField, (state, action) => {
      state.user[action.payload.nameField] = action.payload.value;
    })
    .addCase(loginPending, (state) => {
      state.user.status = "pending";
    })
    .addCase(loginResolved, (state, action) => {
      state.user.status = "resolved";
      state.token = action.payload;
    })
    .addCase(loginRejected, (state, action) => {
      state.user.status = "rejected";
      state.user.error = action.payload;
    });
});

export default reducer;
