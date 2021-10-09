/**
 * This file contains the code to view or edit a task.
 * Displayed after a user selects a specific task to view it or when the user clicks on the "Edit" button next to each task.
 *
 */

import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "@styles/colors";
import text from "@styles/text";

import CreateButton from "@buttons/CreateButton";

import TaskOptions from "@components/TaskOptions";
import TextField from "@components/TextField";

const EditTaskScreen = ({ route }) => {
  const { task } = route.params;

  return (
    <View style={styles.background}>
      <View style={styles.topView}>
        <Text style={text.title}>{task.taskName}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.taskNameView}>
        <Text style={text.normalText}>Select a field to edit its value</Text>
        <View style={{ flex: 0.3 }} />
        <TextField
          placeholderText={task.taskName}
          type="taskName"
          newTask={false}
        />
      </View>
      <View style={styles.textFieldsView}>
        <TaskOptions newTask={false} task={task} />
      </View>
      <View style={{ flex: 0.1 }} />
      <View style={styles.confirmView}>
        <CreateButton
          title="UPDATE TASK"
          nextPage="Success Screen"
          type="update"
          task={task}
        />
      </View>
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
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelView: {
    position: "absolute",
    right: 20,
  },
  divider: {
    borderBottomColor: colors.yellow,
    borderBottomWidth: 3,
    width: "90%",
    alignSelf: "center",
  },
  taskNameView: {
    padding: 20,
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

export default EditTaskScreen;
