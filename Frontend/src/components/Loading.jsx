import { View, Text, StyleSheet, Modal } from "react-native";
import React from "react";
import { Context } from "../controllers/context";
import { useContext, useState } from "react";

const Loading = () => {
  const { loader, text } = useContext(Context);
  

    return (
        <Modal 
            animationType="slide"
            transparent={true}
            visible={loader}
        >
            <View style={styles.container_g} >
                <View style={styles.modal} >
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
        </Modal>
    )
}

export default Loading;

const styles = StyleSheet.create({
  container_g: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",

  },
  text:{
    alignSelf: "center",
    color: "#fff",
    fontSize: 20,
  }
});
