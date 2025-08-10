import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { loginAction, logoutAction } from "../store/actions/userAction"
import { IUser } from "@types";

export const useUserActions = () => {

  const { user } = useSelector((store: RootState) => store.userReducer);
  const dispatch = useDispatch();

  const userLogin = (user: IUser) => dispatch(loginAction(user));
  const userLogout = () => dispatch(logoutAction());
  
  return { userLogin, userLogout, user };
}
