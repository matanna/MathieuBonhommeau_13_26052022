import { createAction } from "@reduxjs/toolkit";

export const toggle = createAction("theme/toggle");

/*export const reducer = createReducer("light", (builder) => {
  builder.addCase(toggle, (state) => {
    return state === "light" ? "dark" : "light";
  });
});*/

/*const { actions, reducers } = createSlice({
  name: "bg",
  initialSTate: "light",
  reducers: {
    toggle: (state) => {
      return state === "light" ? "dark" : "light";
    },
  },
});

export const { toggle } = actions;

export default reducers;*/
