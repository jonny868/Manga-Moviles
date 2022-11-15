import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import MangaCard from "../components/MangaCard";
import { Context } from "../controllers/context";
import { useContext, useState } from "react";
import Loading from "../components/Loading";
import ProfileScreen from "./ProfileScreen";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { load, setLoad, user } = useContext(Context);
  const handleProfile = () => {

    // si el usuario del context es diferente de '', va a profile, sino va a login
    if (user.username !=='') {
      console.log(user)
      navigation.navigate('Profile')
    }
    else{
      navigation.navigate("Login");
  }
  };
  return (
    <>
    <Loading />
      <View style={styles.header}>
        <Entypo name="magnifying-glass" size={40} color="#fff" />
        <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "bold" }}>
          Guest
        </Text>
        <TouchableWithoutFeedback onPress={() => handleProfile()}>
          <FontAwesome name="user-circle-o" size={40} color="#fff" />
        </TouchableWithoutFeedback>
      </View>
      <ScrollView>
        <View style={styles.container}>
          {/* Popular Mangas */}
          <Text style={{ color: "#8779FF", fontSize: 20, marginTop: -30 }}>
            Popular
          </Text>
          <MangaCard name="Bleach" episodes="22" chapters="22" comments="2" />
          <MangaCard name="Bleach" episodes="22" chapters="22" comments="2" />
          <MangaCard name="Bleach" episodes="22" chapters="22" comments="2" />
          <MangaCard name="Bleach" episodes="22" chapters="22" comments="2" />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#5A4AE3",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 420,
    height: 100,
  },
});
