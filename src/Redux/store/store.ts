import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice"; // Adjust path if needed

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// Export RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
