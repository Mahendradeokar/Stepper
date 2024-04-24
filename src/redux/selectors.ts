import { TRootState } from "../../store";

export const getUserSignUpDetails = (store: TRootState) => store.user.signUp;
export const getPersonalInfo = (store: TRootState) => store.user.personalInfo;
export const getInterestInfo = (store: TRootState) => store.user.interest;
export const getUserInfo = (store: TRootState) => store.user;