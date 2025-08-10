import { Redirect } from "expo-router";
import { useUserActions } from "src/hooks/useUserActions";

interface ISessionGuardProps {
  children: JSX.Element;
}

export const SessionGuard = ({ children }: ISessionGuardProps) => {
  const { user } = useUserActions();

  return user.token ? children : <Redirect href="login" />;
};
