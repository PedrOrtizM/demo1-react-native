import { Text, Pressable, StyleSheet } from "react-native";

interface CustomButtonProps {
  text: string;
  onPress: () => void;
  type?: 'primary' | 'secondary' | 'link';
  style?: any;
}

const CustomButton = ({ type = 'primary', onPress, text, style }: CustomButtonProps) => {
  return (
    <Pressable style={[styles.button, styles[type], style]} onPress={onPress}>
      <Text
        style={[
          styles.text,
          type === 'secondary' && styles.textSecondary,
          type === 'link' && styles.textLink,
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    width: "50%",
    height: 45,
  },
  primary: {
    backgroundColor: "#6662de",
  },
  secondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#6662de",
  },
  textLink: {
    color: "#6662de",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  textSecondary: {
    color: "#6662de",
  },
});
export default CustomButton;
