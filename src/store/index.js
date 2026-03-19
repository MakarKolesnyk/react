import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counterSlice";
import todoSliceReducer from "./todoSlice";
import usersSliceReducer from "./UsersSlice";

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    todo: todoSliceReducer,
    users: usersSliceReducer,
  },
});

export default store;
