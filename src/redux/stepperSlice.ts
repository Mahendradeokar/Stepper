import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TRootState } from "../../store";

type TSteeperVal = number;

const initialState: TSteeperVal = 0;

export const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    increaseOrDecreaseBy: (state, action: PayloadAction<number>) => {
      return (state = state + (action.payload));
    },
  },
});

export const getStepper = (store: TRootState) => store.stepper;

export const { increaseOrDecreaseBy } = stepperSlice.actions;
export const stepperReducer = stepperSlice.reducer;
