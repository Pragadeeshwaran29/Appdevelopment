import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux/userSlice"; // Import the userReducer correctly

const store = configureStore({
  reducer: {
    user: userReducer, // Use the userReducer you imported
  },
});

export default store;