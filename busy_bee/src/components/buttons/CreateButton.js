/**
 * This file contains the code for the Create buttons located at the bottom of the New Task, New List and Edit Task screens.
 * Depending on the screen, the text on the button is either "Create Task", "Create List" or "Update Task".
 * When clicked, the button executes the corresponding function to update the database. For example, on the New Task screen, the button is
 * "Create Task" and calls on the addNewTask() function to add a new task to the database.
 * 
 * Reference: https://blog.logrocket.com/creating-custom-buttons-in-react-native/
 */

import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "@styles/colors";
import text from "@styles/text";

import addNewTask from "@data/utilities/addNewTask";
import addNewList from "@data/utilities/addNewList";
import updateTask from "@data/utilities/updateTask";
import resetTaskData from "@data/utilities/resetTaskData";

const CreateButton = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        // creates a new task/list or updates task depending on type of action
        if (props.type == "task") addNewTask();
        else if (props.type == "list") addNewList();
        else if (props.type == "update") updateTask(props.task);

        resetTaskData();
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
