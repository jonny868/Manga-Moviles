import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo2.png")} />
      <View style={styles.card}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <FontAwesome
            style={styles.icon}
            name="envelope"
            size={24}
            color="#5A4AE3"
          />
          <TextInput
            autoFocus={true}
            style={styles.input}
            placeholder="email@email.com"
          />
        </View>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="lock"
            size={30}
            style={styles.icon}
            color="#5A4AE3"
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            ty
          />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.loginBtnText}>SIGN IN</Text>
        </TouchableOpacity>
        <Text style={styles.cardFooter}>
          Don't have an account?
          <TouchableWithoutFeedback>
            <Text style={styles.regBtn}> Register</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    marginVertical: 30,
    width: 397,
    height: 274,
  },
  card: {
    paddingVertical:30,
    backgroundColor: "#5A4AE3",
    width: 397,
    height: 450,
    borderRadius: 5,
    elevation: 9,
  },
  label: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 30,
    paddingTop: 10,
  },
  inputContainer: {
    backgroundColor: "#fff",
    width: 336,
    height: 50,
    flexDirection: "row",
    marginLeft: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  icon: {
    padding: 10,
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#fff",
    width: 200,
    height: 50,
    borderRadius: 5,
    elevation: 3,
    marginTop: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  loginBtnText: {
    fontWeight: "bold",
    color: "#5A4AE3",
    fontSize: 20
  },
  regBtn: {
    color: "#2F2492",
    fontWeight: "bold",
  },
  cardFooter: {
    marginTop: 40,
    color: "#fff",
    alignSelf: "center",
    fontSize: 20
  },
});
