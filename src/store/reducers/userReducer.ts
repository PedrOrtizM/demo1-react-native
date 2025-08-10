import { createReducer } from "@reduxjs/toolkit"
import { loginAction, logoutAction } from "../actions/userAction";

const initialState = {
  user: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    image: '',
    token: '',
  }
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginAction, (state, action) => {
      const { email, token, country, firstName, id, image, lastName } = action.payload.user;
      return { ...state, user: { email, token, country, firstName, id, image, lastName } };
    })
    .addCase(logoutAction, () => {
      return initialState;
    })
})
