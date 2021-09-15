/**
 * This file contains the code for the Create buttons located at the bottom of the New Task/List screens.
 * The text on the button is either "Create Task" or "Create List" which indicates to users that
 * they want to confirm their actions.
 * Reference: https://blog.logrocket.com/creating-custom-buttons-in-react-native/
 */

import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "@styles/colors";
import text from "@styles/text";

import addNewTask from "@data/utilities/addNewTask";

const CreateButton = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        addNewTask();
        navigation.navigate(props.nextPage);
      }}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.yellow,
    width: "75%",
    height: 80,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: text.cardTitle.fontFamily,
    fontSize: text.cardTitle.fontSize,
    color: colors.black,
    alignSelf: "center",
  },
});

export default CreateButton;
