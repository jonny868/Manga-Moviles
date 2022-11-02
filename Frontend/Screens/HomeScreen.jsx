import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

import GlobalStyles from "../assets/GlobalStyles";


const HomeScreen = () => {
  return (
    <View style={GlobalStyles.safeArea}>
        {/* header */}
      <View style={styles.header}>
        <Feather name="menu" size={30} color={"#fff"} />
        <Text>Homepage</Text>
        <Image
          source={require(".././assets/images/1.png")}
          style={styles.profilePic}
        />
      </View>
      {/* Section: Popular */}
      <View>
        <Text>
            Popular
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
});
