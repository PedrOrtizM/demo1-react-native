import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { StorageService, UserService } from "@services";
import { InputController, CustomButton } from "@components";
import { IUserForm } from "@types";
import { userConfig } from "./LoginForm";
import { useUserActions } from "src/hooks/useUserActions";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { globalStyles } from "src/styles/global";

const LoginScreen = () => {
  const { control, handleSubmit } = useForm(userConfig);
  const router = useRouter();
  const userSessionAction = useUserActions();

  const login = (userForm: IUserForm) => {
    UserService.login(userForm)
      .then((user) => {
        userSessionAction.userLogin(user);
        StorageService.setItem('token', user.token);
        router.replace('/(home)');
      });
  };

  const navigateRegister = () => {
    router.push({ pathname: `register` });
  };

  return (
    <View style={globalStyles.screenContainer}>
      <View style={globalStyles.header}>
        <MaterialIcons name="airplane-ticket" size={80} color="#6662de" />
        <Text style={globalStyles.titleText}> MyTinerary APP </Text>
      </View>

      <InputController control={control} placeholder="Email" name="email" />
      <InputController
        secureTextEntry
        control={control}
        placeholder="Password"
        name="password"
      />

      <View style={globalStyles.buttonGroup}>
        <CustomButton
          text="Login"
          type="primary"
          onPress={handleSubmit(login)}
        />
        <CustomButton
          text="Register"
          type="secondary"
          onPress={navigateRegister}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
