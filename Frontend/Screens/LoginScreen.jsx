import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import colorPalette from "../assets/colorPallete";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 60, paddingTop: 80,}}>Manga Reader</Text>
        </View>
        <Text>{windowHeight}</Text>
        <Text>{windowWidth}</Text>
        {/* login cardd */}
        <View style={styles.loginCard}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.input} placeholder="name@email.com" />
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.input} placeholder="Password" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign-in</Text>
          </TouchableOpacity>
          <Text style={styles.registerText}>
            Don't have an account?
            <TouchableWithoutFeedback>
              <Text style={{color:"#fff"}}>Register</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: windowWidth,
    padding: 40,
    height: windowHeight,
    backgroundColor: "#fff",
  },
  loginCard: {
    position: "absolute",
    top: 300,
    borderRadius: 10,
    backgroundColor: colorPalette.mainPurple,
    width: windowWidth * 0.9,
    height: windowHeight * 0.6,
  },
  input: {
    fontSize: 20,
    color: colorPalette.lightPurple,
    width: 400,
    backgroundColor: colorPalette.harmony,
    alignSelf: "center",
    marginVertical: 10,
    height: 70,
    borderRadius: 5,
    paddingLeft: 10,
  },
  inputLabel: {
    marginLeft: 30,
    marginTop: 30,
    color: "#fff",
    fontSize: 25,
  },
  button: {
    backgroundColor: colorPalette.lightPurple,
    width: 200,
    marginTop: 40,
    height: 70,
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 30,
    justifyContent: "center",
  },
  registerText: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    fontSize: 20
  }
});
