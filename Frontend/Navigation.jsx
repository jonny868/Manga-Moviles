import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens

import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import BrowseScreen from "./src/screens/BrowseScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import AddManga from "./src/screens/AddManga";
import { FontAwesome } from "@expo/vector-icons";
import Favorites from "./src/screens/Favorites";
import ProfileScreen from "./src/screens/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function HomeNav() {
  return (
    <Tab.Navigator
      initialRouteName="Add"
      backBehavior="initialRoute"
      screenOptions={{
        tabBarActiveTintColor: "purple",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveBackgroundColor: "#8779FF",
        tabBarInactiveTintColor: "#5A4AE3",
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "#5A4AE3",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={BrowseScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-alt" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddManga}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus" size={30} color={color} />
          ),
          headerShown: true,
          headerTitle: "Add new Serie",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#5A4AE3",
          },
          headerTitleStyle:{
            color: "#fff",
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="star-o" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeNav} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          navigationBarHidden: false,
          headerShown: true,
          headerStyle: {
            backgroundColor: "#5A4AE3",
          },
          headerTintColor: "white",
          headerTitle: "Login",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          navigationBarHidden: false,
          headerShown: true,
          headerStyle: {
            backgroundColor: "#5A4AE3",
          },
          headerTintColor: "white",
          headerTitle: "Register",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
