import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TPersonalInfo, TSignUpSchema } from "@/validations";
import { TInterestInfo } from "@/validations/InterestInfoSchema";

interface IUser {
  signUp: TSignUpSchema;
  personalInfo: TPersonalInfo;
  interest: TInterestInfo;
}

const initialState: IUser = {
  signUp: {
    username: "",
    address: "",
    email: "",
    password: "",
    number: "",
    cPassword: "",
  },
  personalInfo: {
    DOB: "",
    relationshipStatus: "",
    countryOfOrigin: "DEFAULT",
  },
  interest: {
    description: "",
    travelPreference: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSignUpDetails: (state, action: PayloadAction<TSignUpSchema>) => {
      state.signUp = action.payload;
      return state;
    },

    setPersonalInfo: (state, action: PayloadAction<TPersonalInfo>) => {
      state.personalInfo = action.payload;
      return state;
    },

    setInterest: (state, action: PayloadAction<TInterestInfo>) => {
      state.interest = action.payload;
      return state;
    },
  },
});

export const { setSignUpDetails, setPersonalInfo, setInterest } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
