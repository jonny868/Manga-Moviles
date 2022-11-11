import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens

import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import BrowseScreen from './src/screens/BrowseScreen'
import RegisterScreen from "./src/screens/RegisterScreen";

const Tab = createBottomTabNavigator()


export default function MyTabs() {
  return (
    <Tab.Navigator scre initialRouteName="Home" backBehavior="initialRoute" screenOptions={{tabBarActiveBackgroundColor: 'purple', headerShown:false}}>
        <Tab.Screen  name="Home" component={HomeScreen}/>
        <Tab.Screen name="Browse" component={BrowseScreen}/>
        <Tab.Screen name="Login" component={LoginScreen}/>
        <Tab.Screen name="Register" component={RegisterScreen}/>
    </Tab.Navigator>
  )
}