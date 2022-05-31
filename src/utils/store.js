import { configureStore } from "@reduxjs/toolkit";
import { apiUserReducer, loginReducer } from "../features";

const store = configureStore({
  reducer: {
    login: loginReducer,
    apiUser: apiUserReducer,
  },
});

export default store;
