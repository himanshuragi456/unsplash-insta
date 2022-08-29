import { createReducer } from "@reduxjs/toolkit";
import {
  onGrabData,
  resetData,
  setData,
} from "../actions/rootActions";

const initialState = {
  loading: false,
  currentPage: 1,
  data: [],
};

// having main logic in root reducer because we don't need any other reducer
const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setData, (state, action) => {
      return { ...state, ...action.payload };
    })
    .addCase(onGrabData, (state, action) => {
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload.data],
        currentPage: state.currentPage + 1
      };
    })
    .addCase(resetData, (state, action) => {
      return initialState
    })
});

export default rootReducer;
