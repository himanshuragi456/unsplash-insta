import { configureStore } from "@reduxjs/toolkit";
import rootReducer from '../reducers/rootReducer'

const store = configureStore({
  // having main logic in root reducer because we don't need any other reducer
  reducer: rootReducer,
});

export default store;