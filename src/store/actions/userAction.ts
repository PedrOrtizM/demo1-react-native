import { createAction } from "@reduxjs/toolkit";
import { IUser } from "@types";

export const loginAction = createAction('loginAction', (user: IUser) => {
  return {
    payload: {
      user
    }
  }
});

export const logoutAction = createAction('logoutAction');
