import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Context } from "./src/controllers/context";
import MyTabs from "./Navigation";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  // Estado para administrar los mensajes
  // - text = texto
  // - display = si se muestra o no el mensaje
  // - type = Si es true un ganchito verde, si es false X roja
  const [msg, setMsg] = useState({
    text: "Error",
    display: false,
    type: true,
  });

  // Estado con los datos del usuario
  const [user, setUser] = useState({
    username: "",
    email: "",
    admin: false,
    id: "",
    profile_pic: "",
  });

  // Estado para mostrar o no la pantalla de carga
  const [load, setLoad] = useState(false);
  return (
    <Context.Provider
      value={{
        user,
        setUser,
        load,
        setLoad,
      }}
    >
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Context.Provider>
  );
}
