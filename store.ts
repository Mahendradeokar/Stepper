import { stepperReducer, userReducer } from "@/redux";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    stepper: stepperReducer,
    user: userReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
