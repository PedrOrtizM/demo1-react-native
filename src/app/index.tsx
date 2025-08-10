import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { StorageService, UserService } from "@services";
import { useUserActions } from "src/hooks/useUserActions";
import { Text } from "react-native";

const index = () => {
  const userActions = useUserActions();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    validateSession();
  }, []);

  const validateSession = () => {
    StorageService.getItem('token').then((token: string) => {
      if (!token) return setIsAuthorized(true);

      UserService.tokenLogin(token)
        .then((user) => {
          userActions.userLogin(user);
          StorageService.setItem('token', user.token);
        })
        .finally(() => setIsAuthorized(true));
    });
  };

  if (!isAuthorized) {
    return <Text>Loading</Text>;
  }

  return <Redirect href="(home)" />;
};

export default index;
