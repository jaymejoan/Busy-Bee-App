/**
 * The ImagePicker provides access to the photo library and camera.
 * This allows the user to upload or take photos to include in their task.
 *
 * Reference: https://docs.expo.dev/versions/latest/sdk/imagepicker/
 */
import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import colors from "@styles/colors";
import text from "@styles/text";

import taskData from "@data/utilities/storeTaskData";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  // Requests permission to open gallery
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  // Allows the user to pick an image from the gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    // store the image URI so it can be sent to the database
    if (!result.cancelled) {
      setImage(result.uri);
      taskData.image = result.uri;
      console.log("sent image to database: ", taskData.image);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={text.imageText}>Add an image</Text>
        {image && (
          <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
        )}
      </TouchableOpacity>
      {/* <Button title="Add an image" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    // backgroundColor: colors.yellow,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: "30%",
    paddingTop: 10,
    paddingLeft: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.black,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
