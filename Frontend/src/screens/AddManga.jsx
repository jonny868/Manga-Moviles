import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  FlatList
} from "react-native";

import React from "react";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker"

const AddManga = () => {
    const pickMainImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        aspect: [4, 3],
        quality: 1,
      })
    }
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Text style={styles.header}>Add new Serie!</Text>

        </View>
        <View style={styles.card}>
        <TouchableWithoutFeedback onPress={()=>pickMainImage()}>
            <Image style={styles.image}
            source={require('../../assets/default.png')}
            />

        </TouchableWithoutFeedback>
        <TextInput placeholder="Password" secureTextEntry={true} />
        <TextInput placeholder="Password" secureTextEntry={true} />
        <TextInput placeholder="Password" secureTextEntry={true} />
        <TextInput placeholder="Password" secureTextEntry={true} />
        </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ fontSize: 20, color: "#5A4AE3", fontWeight: "bold" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddManga;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  headerContainer:{
    backgroundColor:"#5A4AE3",
    width: Platform.OS === "android" ? 500: 400,
    alignItems: "center",
    marginBottom: 30
    
  },
  header:{
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginVertical: 30,
  },

  btn: {
    backgroundColor: "#fff",
    width: 200,
    height: 50,
    borderRadius: 5,
    elevation: 3,
    marginTop: 30,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 50
  },
  card: {
    width: 397,
    height: 499,
    backgroundColor: "#5A4AE3",
    borderRadius: 5,
    
    
  },
  image: {
    width: 180,
    height: 220,
    marginVertical: 30,
    alignSelf: "center",
    borderRadius: 5
  }
});
