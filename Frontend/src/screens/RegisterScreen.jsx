import {
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import React, { useState, useContext } from 'react'
import { FontAwesome } from "@expo/vector-icons";

import { registerUser } from "../controllers/api";
import { Context } from "../controllers/context";

const RegisterScreen = ({ navigation }) => {
  const showToast = (message) => {
    ToastAndroid.show(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
      
    )
  }
  
    // Extraer datos del Context
    const { setUser } = useContext(Context)

    // Input del formulario del registro
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        adminCode: ''
    })

    // Estado para mostrar u ocultar el input con el AdminCode
    const [admin, setAdmin] = useState(false)


    // Funcion al presionar el boton de registro
    const register = async () => {
        
            // Funcion fetch para registrar usuario
            const res = await registerUser(inputs)


           
    }

    // Funcion para almacenar los datos en el estado dependiendo de el input en el que se escriba
    const inputChange = (name, data) => setInputs({ ...inputs, [name]: data });


  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.card}>
        <Text style={styles.headerText}>Become part of our family!</Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <FontAwesome
            style={{ paddingHorizontal: 10 }}
            name="envelope"
            size={24}
            color="#5A4AE3"
          />
          <TextInput placeholder="Email@email.com" onChangeText={(text) => inputChange('email', text)}/>
        </View>

        <Text style={styles.label}>Username</Text>
        <View style={styles.inputContainer}>
          <FontAwesome
            style={{ paddingHorizontal: 10 }}
            name="user"
            size={24}
            color="#5A4AE3"
          />
          <TextInput placeholder="Username" onChangeText={(text) => inputChange('username', text)} />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <FontAwesome
            style={{ paddingHorizontal: 10 }}
            name="user"
            size={24}
            color="#5A4AE3"
          />
          <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(text) => inputChange('password', text)} />
        </View>

        <Text style={styles.label}>Confirm password</Text>
        <View style={styles.inputContainer}>
          <FontAwesome
            style={{ paddingHorizontal: 10 }}
            name="user"
            size={24}
            color="#5A4AE3"
          />
          <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(text) => inputChange('confirmPassword', text)} />
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => register()}>
          <Text style={{ fontSize: 20, color: "#5A4AE3", fontWeight: "bold" }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
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
    marginVertical: 10,
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
