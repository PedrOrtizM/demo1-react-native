import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    flex: 1,
  },
  header: {
    alignItems: "center",
    marginTop: 80,
  },
  titleText: {
    fontSize: 20, 
    fontWeight: "600", 
    marginVertical: 15,
    color: "#333", 
    textAlign: "center",
    marginBottom: 50
  },
  buttonGroup: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30, 
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    padding: 10,
  }
});
