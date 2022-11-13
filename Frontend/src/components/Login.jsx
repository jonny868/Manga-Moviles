import { FontAwesome } from "@expo/vector-icons";
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";

export default function Login() {
  return (
    <KeyboardAvoidingView
    enabled keyboardVerticalOffset={90} behavior={ Platform.OS === 'ios' ? 'padding' : false } style={{ flex: 1 }}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Image
              style={styles.logo}
              source={require("../../assets/logo2.png")}
            />
            <View style={styles.card}>
              <Text style={styles.label}>Username</Text>
              <View style={styles.inputContainer}>
                <FontAwesome
                  style={styles.icon}
                  name="user"
                  size={30}
                  color="#5A4AE3"
                />
                <TextInput
                  value={inputs.username}
                  autoFocus={false}
                  placeholder="JohnDoe"
                  onChangeText={(text) => inputChange("username", text)}
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
                  value={inputs.password}
                  onChangeText={(text) => inputChange("password", text)}
                  secureTextEntry={true}
                  placeholder="Password"
                  ty
                />
              </View>
              <TouchableOpacity style={styles.btn} onPress={loginBtn}>
                <Text style={styles.loginBtnText}>SIGN IN</Text>
              </TouchableOpacity>
              <Text style={styles.cardFooter}>
                Don't have an account?
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate("Register");
                  }}
                >
                  <Text style={styles.regBtn}> Register</Text>
                </TouchableWithoutFeedback>
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    marginTop: 20,
    width: 397,
    height: 274,
  },
  card: {
    paddingVertical: 30,
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
    fontSize: 20,
  },
  regBtn: {
    color: "#2F2492",
    fontWeight: "bold",
  },
  cardFooter: {
    marginTop: 40,
    color: "#fff",
    alignSelf: "center",
    fontSize: 20,
  },
});
