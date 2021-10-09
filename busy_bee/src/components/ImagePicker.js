/**
 * The ImagePicker provides access to the camera and photo gallery.
 * This allows the user to upload or take photos to include in their task.
 *
 * Reference:
 * https://docs.expo.dev/versions/latest/sdk/imagepicker/
 * https://reactnavigation.org/docs/use-is-focused/
 */
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useIsFocused } from "@react-navigation/native";

import colors from "@styles/colors";
import text from "@styles/text";

import taskData from "@data/utilities/storeTaskData";

export default function ImagePickerExample(props) {
  const [image, setImage] = useState(null);
  const [openGallery, setOpenGallery] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);
  const isFocused = useIsFocused();

  // if a task already has an image attached, the image is immediately displayed when users view the task
  useEffect(() => {
    setImage(props.task.image);
  }, [isFocused]);

  // changes text color based on whether the user is creating a new task or viewing/editing a task
  var placeholderText = props.newTask
    ? text.imageTextGrey
    : text.imageTextBlack;

  /**
   *  Requests permission to open the device's photo gallery.
   */
  function requestPhotoGalleryPermission() {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
          return setOpenGallery(false);
        }
        setOpenGallery(true);
        pickImage();
      }
    })();
  }

  /**
   *  Requests permission to open the camera on the device.
   */
  function requestCameraPermission() {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera permissions to make this work!");
          return setOpenCamera(false);
        }
        setOpenCamera(true);
        launchCamera();
      }
    })();
  }

  /**
   * Opens the device's camera. The image taken is stored in the database and displayed on the screen.
   */
  const launchCamera = async () => {
    let result = await ImagePicker.launchCameraAsync();

    // stores the image URI so it can be sent to the database
    if (!result.cancelled) {
      setImage(result.uri);
      if (props.newTask) taskData.image = result.uri;
      else props.task.image = result.uri;
    }
  };

  /**
   * Allows the user to pick an image from the photo gallery.
   */
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // stores the image URI so it can be sent to the database
    if (!result.cancelled) {
      setImage(result.uri);
      if (props.newTask) taskData.image = result.uri;
      else props.task.image = result.uri;
    }
  };

  /**
   * Displays an Alert message presenting the user with three options:
   * Take an image, Choose from the photo gallery or Cancel the actin.
   */
  const displayActions = () => {
    Alert.alert("Choose an action", "", [
      {
        text: "Take Photo", // opens the camera
        onPress: () => {
          if (!openCamera) requestCameraPermission();
          else launchCamera();
        },
      },
      {
        text: "Choose from photo gallery", // opens the photo gallery
        onPress: () => {
          if (!openGallery) requestPhotoGalleryPermission();
          else pickImage();
        },
      },
      {
        text: "Cancel", // exits the pop-up
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => displayActions()}>
        <Text style={placeholderText}>{props.text}</Text>
        {image && (
          <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
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
