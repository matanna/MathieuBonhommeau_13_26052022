import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "../utils/axios-conf";

const initialState = {
  isLogged: false,
  token: "",
  user: {
    status: "void",
    email: "",
    password: "",
    rememberMe: false,
    error: "",
  },
};

export const setIsLogged = createAction("login/setIsLogged");
export const setToken = createAction("login/setToken");

export const setField = createAction("login/setField", (nameField, value) => ({
  payload: { nameField, value },
}));

export const loginUserPending = createAction("login/userPending");
export const loginUserResolved = createAction("login/userResolved");
export const loginUserRejected = createAction("login/userRejected");

// Create a thunk with Redux thunk for use asynchronous function
export const loginUser = (email, password) => {
  console.log(email, password);
  return async (dispatch, getState) => {
    dispatch(loginUserPending);
    try {
      const response = await axios.post("/user/login", {
        email: email,
        password: password,
      });
      const token = await response.json();
      dispatch(loginUserResolved(token));
    } catch (err) {
      dispatch(loginUserRejected(err));
    }
  };
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setIsLogged, (state) => {
      state.isLogged = !state.isLogged;
    })
    .addCase(setToken, (state, action) => {
      state.token = action.payload;
    })
    .addCase(setField, (state, action) => {
      state.user[action.payload.nameField] = action.payload.value;
    })
    .addCase(loginUserPending, (state) => {
      state.user.status = "pending";
    })
    .addCase(loginUserResolved, (state, action) => {
      state.user.status = "resolved";
      state.token = action.payload;
    })
    .addCase(loginUserRejected, (state, action) => {
      state.user.status = "rejected";
      state.user.error = action.payload;
    });
});

export default reducer;
