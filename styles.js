import { StatusBar, StyleSheet } from "react-native";

//This is the StyleSheet Creation for Frontend
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    alignItems: "left",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "#595959",
    marginHorizontal: 100,
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
    Color: "white",
  },
});

//This is export default on what appears in this screen
export default styles;