// Import the configureStore function from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import account and customer reducers
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// Create the store and connect the reducers
const store = configureStore({
  reducer: {
    account: accountReducer, // Handles account-related state
    customer: customerReducer, // Handles customer-related state
  },
});

// Export the store to use in the app
export default store;
