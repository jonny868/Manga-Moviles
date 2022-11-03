import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Image source={props.source} style={styles.cardImg} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{props.title}</Text>

        <Text>Episodes:{props.episodes}</Text>
        <Text>Chapters:{props.chapters}</Text>
        <Text>Pages:{props.pages}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 400,
    backgroundColor: "#888",
    flexDirection: "row",
    padding: 20,
    borderRadius: 4,
    marginVertical: 10
  },
  cardImg: {
    width: 100,
    height: 190,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  cardTitle: {
    marginHorizontal: 10,
    fontSize: 20,
    color: "#f3f3f3",
    fontWeight: "bold",
  },
  cardInfo:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    borderLeftWidth: 2,
    borderLeftColor: "#999",
    marginLeft: 30
  }
});
