import { View, Text, StyleSheet } from "react-native";
import { useUserActions } from "src/hooks/useUserActions";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { CustomButton } from "@components";
import { globalStyles } from "src/styles/global";
import { StorageService } from "@services";

const ProfileScreen = () => {
  const { userLogout, user } = useUserActions();

  const logout = () => {
    userLogout();
    StorageService.removeItem('token');
  };

  return (
    <View style={[globalStyles.card, styles.container]}>
      <FontAwesome name="user" size={50} color="#6662de" />
      <Text style={[styles.text, styles.textName]}>
        {user.firstName} {user.lastName}
      </Text>
      <Text style={styles.text}>{user.country}</Text>
      <Text style={[styles.text, styles.textEmail]}>{user.email}</Text>

      <CustomButton
        style={styles.logoutButton}
        text="Logout"
        type="link"
        onPress={logout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 100,
  },
  textName: {
    fontWeight: "bold",
  },
  text: {
    marginTop: 10,
    fontSize: 18,
  },
  textEmail: {
    textDecorationLine: "underline",
  },
  logoutButton: {
    marginTop: 50,
  },
});

export default ProfileScreen;
