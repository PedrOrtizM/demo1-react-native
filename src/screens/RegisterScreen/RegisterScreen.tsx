import { View, Text } from "react-native";
import { useForm } from "react-hook-form";
import { useRouter } from "expo-router";
import { StorageService, UserService } from "@services";
import { userRegisterConfig } from "./RegisterForm";
import { useUserActions } from "src/hooks/useUserActions";
import { IUserRegister } from "src/services/UserService/types";
import { CustomButton, InputController } from "@components";
import { globalStyles } from "src/styles/global";

const RegisterScreen = () => {

  const { control, handleSubmit } = useForm(userRegisterConfig);
  const router = useRouter();
  const { userLogin } = useUserActions();

  const register = (user: IUserRegister) => {
    UserService.register(user).then((user) => {
      userLogin(user);
      StorageService.setItem('token', user.token);
      router.replace('/(home)');
    });
  };

  return (
    <View style={globalStyles.screenContainer}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.titleText}> Register </Text>
      </View>

      <InputController control={control} placeholder="FirstName" name="firstName" />
      <InputController control={control} placeholder="LastName" name="lastName" />
      <InputController control={control} placeholder="Email" name="email" />
      <InputController secureTextEntry control={control} placeholder="Password" name="password" />
      <InputController control={control} placeholder="Country" name="country" />

      <View style={globalStyles.buttonGroup}>
        <CustomButton text="Register" type="primary" onPress={handleSubmit(register)} />
      </View>
    </View>
  );
};
 
export default RegisterScreen;
