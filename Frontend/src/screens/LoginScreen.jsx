import { KeyboardAvoidingView, ScrollView } from "react-native";
import React, { useState, useContext } from "react";
import { loginUser } from "../controllers/api";
import { Context } from "../controllers/context";
import Login from "../components/Login";

const LoginScreen = ({ navigation }) => {
  const { setUser, setLoad } = useContext(Context);
  //  const [email, setEmail] = useState('')
  //  const [password, setPassword] = useState('')
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const inputChange = (name, data) => setInputs({ ...inputs, [name]: data });
  const loginBtn = async () => {
    setLoad(true);
    const res = await loginUser(inputs);
    if (res.status === 200) {
      // Desactiva la pantalla de carga
      setLoad(false);

      // Vacía el estado de los inputs
      setInputs({
        username: "",
        password: "",
      });

      setUser(res.data);
    }
    console.log(res.data);
  };
  return (
    
      <ScrollView pagingEnabled showsHorizontalScrollIndicator={true}>
        <Login />
      </ScrollView>

  );
};

export default LoginScreen;
