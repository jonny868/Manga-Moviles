import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.headerText}>Become part of our family!</Text>
        
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <FontAwesome style={{paddingHorizontal: 10}} name="envelope" size={24} color="#5A4AE3" />
          <TextInput placeholder="Email@email.com"/>
        </View>

        <Text style={styles.label}>Username</Text>
        <View style={styles.inputContainer}>
          <FontAwesome style={{paddingHorizontal: 10}} name="user" size={24} color="#5A4AE3" />
          <TextInput placeholder="Username"/>
        </View>
        
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <FontAwesome style={{paddingHorizontal: 10}} name="user" size={24} color="#5A4AE3" />
          <TextInput placeholder="Password" secureTextEntry={true}/>
        </View>

        <Text style={styles.label}>Confirm password</Text>
        <View style={styles.inputContainer}>
          <FontAwesome style={{paddingHorizontal: 10}} name="user" size={24} color="#5A4AE3" />
          <TextInput placeholder="Password" secureTextEntry={true}/>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ fontSize: 20, color: "#5A4AE3", fontWeight: "bold" }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  card: {
    marginTop: 30,
    paddingVertical: 30,
    backgroundColor: "#5A4AE3",
    width: 397,
    height: 680,
    borderRadius: 5,
    elevation: 9,
  },
  headerText: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10
  },
  inputContainer: {
    backgroundColor: "#fff",
    marginVertical: 10,
    width: 336,
    alignSelf: "center",
    flexDirection: "row",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
  },
  icon: {
    padding: 10,
    alignSelf: "center",
  },
  label: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 30,
    paddingTop: 10,
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
});
