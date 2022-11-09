import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import GlobalStyles from "../assets/GlobalStyles";
import Card from "../components/Card";

const HomeScreen = () => {
  return (
    <SafeAreaView style={[GlobalStyles.safeArea, backgroundColor]}>
      <ScrollView>
        {/* header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Feather name="menu" size={30} color={"#fff"} />
          </TouchableOpacity>
          <Text>Homepage</Text>
          <TouchableOpacity>
            <Fontisto name="search" size={30} color={"#fff"} />
          </TouchableOpacity>
          <Image
            source={require(".././assets/images/1.png")}
            style={styles.profilePic}
          />
        </View>
        {/* Section: Popular */}
        <View>
          <Text style={styles.title}>Popular</Text>
        </View>
        <Card
          source={require(".././assets/images/3.jpg")}
          title="HunterXHunter"
          episodes="65"
          chapters="23"
          pages="332"
        />
        <Card
          source={require(".././assets/images/3.jpg")}
          title="HunterXHunter"
          episodes="65"
          chapters="23"
          pages="332"
        />
        <Card
          source={require(".././assets/images/3.jpg")}
          title="HunterXHunter"
          episodes="65"
          chapters="23"
          pages="332"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: 400,
    backgroundColor: "#888",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: "#aaa",
    textAlign: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
});
