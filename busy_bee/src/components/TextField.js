/**
 * This file contains the code for the Text Fields used throughout the app.
 * Reference: https://reactnative.dev/docs/textinput
 */
import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import colors from "@styles/colors";

import taskData from "@data/utilities/storeTaskData";

/**
 * Stores inputted fields into taskData array.
 * These values will be sent to database once user creates the task.
 */
function storeTextInput(type, text) {
  if (text != null) {
    if (type == "taskName") return (taskData.taskName = text);
    if (type == "dueDate") return (taskData.dueDate = text);
    if (type == "details") return (taskData.details = text);
    if (type == "listName") return (taskData.listName = text);
  }
}

/**
 * Displays and stores text input.
 * @param {*} props
 * @returns
 */
const TextField = (props) => {
  const [text, onChangeText] = React.useState(null);
  storeTextInput(props.type, text);

  // changes text color based on whether the user is creating a new task or viewing/editing a task
  var placeholderColor = props.newTask ? colors.grey : colors.black;

  return (
    <View>
      <TextInput
        style={styles.layout}
        onChangeText={onChangeText}
        value={text}
        placeholder={props.placeholderText}
        placeholderTextColor={placeholderColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: colors.white,
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: colors.black,
    borderWidth: 1,
    fontSize: 20,
    fontFamily: "Montserrat",
  },
});

export default TextField;
