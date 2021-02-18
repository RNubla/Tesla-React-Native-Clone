import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  button: {
    // backgroundColor: "white",
    height: 40,
    borderRadius: 20,
    justifyContent: "center", //aligns text to center vetically
    alignItems: "center", //aligns text to center horizontally
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});

export default style;
