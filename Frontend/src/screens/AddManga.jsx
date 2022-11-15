import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";

import React from "react";
import { useState, useContext, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { ScrollView } from "react-native-gesture-handler";
import { Context } from "../controllers/context";
import Loading from "../components/Loading";
import thumbUri from " ../../../assets/66731-loading.json";

const AddManga = ({ navigation, route }) => {
  const { user, setText, setLoad } = useContext(Context);

  const [inputs, setInputs] = useState({
    title: "titleee",
    description: "desc",
    image: {
      name: "randomname.jpg",
      uri: thumbUri,
      type: "image/jpg",
    },
    ownerId: user.id,
  });

  const [edit, setEdit] = useState(false);
  useEffect(() => {
    if (typeof route.params === "object") {
      if (route.params.prevData !== undefined) {
        setEdit(true);

        const { title, description, picture, picture_public_id } =
          route.params.prevData;
        setInputs({
          ...inputs,
          title,
          description,
          image: {
            name: "randomname.jpg",
            type: "image/jpg",
            uri: picture,
          },
          id: picture_public_id,
        });
      }

      if (route.params.upload !== undefined) {
        setInputs({ ...inputs, image: route.params.upload[0] });
      }
    }
  }, [route]);
  const inputChange = (name, data) => setInputs({ ...inputs, [name]: data });

  const pickMainImage = async () => {
    if (
      inputs.image.uri === thumbUri ||
      inputs.title === "" ||
      inputs.description === ""
    ) {
      setText("Please enter a valid data");
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
      }, 3000);
    } else {
      if (edit) {
        setEdit(false);

        setLoad(true);

        const res = await editSerie({ ...inputs });

        if (res.status === 200) {
          setLoad(false);
          setText("Success");
          navigation.navigate("Profile", { id: user.id });

          // En caso de error
        } else {
          setLoad(false);
          console.log(res.status);
        }
      }else {
        setLoad(true)
        const res = await addSerie(inputs)
        if (res.status === 200) {
            setLoad(false)
            setText('Success')
            navigation.navigate('Profile', { id: user.id })
        } else {
            setLoad(false)
            console.log(res.status)
        }
    }
    }
  };
  return (
    <ScrollView>
      <Loading />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.frontPageText}>Select Front Page</Text>
          <TouchableWithoutFeedback onPress={() => pickMainImage()}>
            <Image
              style={styles.image}
              source={require("../../assets/default.png")}
            />
          </TouchableWithoutFeedback>
          <View style={styles.inputContainer}>
            <View style={styles.inputLabelContainer}>
              <Text style={styles.inputLabelText}>Title</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Hunter X Hunter"
              placeholderTextColor={"#ccc"}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputLabelContainer}>
              <Text style={styles.inputLabelText}>Description</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Description"
              placeholderTextColor={"#ccc"}
            />
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text
              style={{ fontSize: 20, color: "#5A4AE3", fontWeight: "bold" }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddManga;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  headerContainer: {
    backgroundColor: "#5A4AE3",
    width: Platform.OS === "android" ? 500 : 400,
    alignItems: "center",
    marginBottom: 30,
  },
  header: {
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
    marginBottom: 50,
  },
  card: {
    width: 397,
    height: 550,
    backgroundColor: "#5A4AE3",
    borderRadius: 5,
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 180,
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 5,
  },
  frontPageText: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  inputContainer: {
    width: 357,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    flexDirection: "row",
    marginVertical: 10,
  },
  inputLabelContainer: {
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputLabelText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 15,
  },
  input: {
    fontSize: 15,
    paddingHorizontal: 10,
  },
});
