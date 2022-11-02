import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons"

import GlobalStyles from "../assets/GlobalStyles";


const HomeScreen = () => {
  return (
    <View style={GlobalStyles.safeArea}>
        {/* header */}
      <View style={styles.header}>
        <TouchableOpacity>
        <Feather name="menu" size={30} color={"#fff"}  />
        </TouchableOpacity>
        <Text>Homepage</Text>
        <TouchableOpacity>
          <Fontisto
          name="search"
          size={30}
          color={"#fff"}
          />
        </TouchableOpacity>
        <Image
          source={require(".././assets/images/1.png")}
          style={styles.profilePic}
        />
      </View>
      {/* Section: Popular */}
      <View>
        <Text style={styles.title}>
            Popular
        </Text>
      </View>
      <View style={styles.card}>
        <Image
        source={require(".././assets/images/3.jpg")}
        style={styles.cardImg}
        />
        <Text style={styles.cardTitle}>
          Hunter X Hunter
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#3e3e3e",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
  },
  title:{
    fontSize: 20,
    marginTop: 10,
    color: "#3e3e3e3",
    textAlign: "center"
  },
  card:{
    width:400,
    backgroundColor: "#3e3e3e",
    flexDirection: "row",
    padding: 20
  },
  cardImg:{
    width: 100,
    height: 190,
    borderRadius: 5,
    marginHorizontal: 10
  },
  cardTitle:{
    marginHorizontal: 10,
    fontSize: 20,
    color:"#f3f3f3",
    fontWeight: "bold"
  }
});
