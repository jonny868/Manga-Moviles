import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker"

const AddSerie = () => {
    const [image, setImage] = useState(null)
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
  return (
    <>
    <View>
      <Text>ASDNAOSNDA</Text>
    </View>
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Button title="Pick an image from camera roll" onPress={pickImage} />
     {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
   </View>
    </>
  );
};

const styles = StyleSheet.create({
  container_g: {},
  top_bar: {},
  content: {},
  content_title: {},
  borderbottom: {},
  content_image: {},
  content_description: {},
  borderbottom: {},
  content_btn: {},
});

export default AddSerie;
