/**
 * This file contains the code for the NewTask screen.
 * https://stackoverflow.com/questions/53463675/center-text-in-flatlist-next-to-icon-react-native
 */

import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "@styles/colors";
import text from "@styles/text";

import CancelButton from "@buttons/CancelButton";
import TextField from "@components/TextField";
import TaskOptions from "@components/TaskOptions";

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
        <View style={{ flex: 0.3 }} />
        <TextField placeholderText="Add task name" />
      </View>
      <View style={styles.textFieldsView}>
        <TaskOptions></TaskOptions>
      </View>
      <View style={{ flex: 0.4 }} />
      <View style={styles.confirmView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.yellowBackground,
    flex: 1,
  },
  confirmView: {
    backgroundColor: colors.yellow,
    position: "absolute",
    width: "100%",
    height: 80,
    bottom: 0,
    zIndex: 1,
    // flex: 0.3
  },
  cancelView: {
    position: "absolute",
    right: 20,
  },
  taskNameView: {
    padding: 20,
    flexDirection: "column",
    flex: 0.35,
  },
  textFieldsView: {
    backgroundColor: colors.yellowBackground,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  topView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 0.3,
  },
});

export default NewTaskScreen;
