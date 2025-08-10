import { StyleSheet, Text, TextInput, View } from "react-native";
import { Controller } from "react-hook-form";

const InputController = ({ control, name, placeholder, secureTextEntry = false }) => {
  return (
    <Controller
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error }
      }) => (
        <View style={styles.container}>
          <TextInput
            autoCapitalize="none"
            secureTextEntry={ secureTextEntry }
            style={styles.input}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
      name={name}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 12,
    paddingHorizontal: 20
  },
  input: {
    height: 48,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
    paddingLeft: 5,
  },
});

export default InputController;
