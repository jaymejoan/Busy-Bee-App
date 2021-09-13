/**
 * This file contains the code for the NewTask screen.
 */

import React from "react";
import { StyleSheet, Image, View, Button, Text } from "react-native";

import colors from "@styles/colors";
import text from "@styles/text";

import CancelButton from "@components/CancelButton";
import TextField from "@components/TextField";

const NewTaskScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.topView}>
        <Text style={text.title}>New Task</Text>
        <View style={styles.cancelView}>
          <CancelButton />
        </View>
      </View>
      <View style={styles.taskNameView}>
        <Text style={text.normalText}>What would you like to achieve?</Text>
        <TextField placeholderText="Enter task name" />
      </View>
      <View style={styles.textFieldsView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    flex: 1,
  },
  cancelView: {
    position: "absolute",
    right: 20,
  },
  taskNameView: {
    // backgroundColor: colors.yellow,
    padding: 20,
    flexDirection: "column",
    flex: 0.4,
  },
  textFieldsView: {
    backgroundColor: colors.grey,
    flex: 2,
  },
  topView: {
    // backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 0.3,
  },
});

export default NewTaskScreen;
