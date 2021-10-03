/**
 * This file contains the code for the NewTask screen.
 * https://stackoverflow.com/questions/53463675/center-text-in-flatlist-next-to-icon-react-native
 */

import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "@styles/colors";
import text from "@styles/text";

import CreateButton from "@buttons/CreateButton";

import TaskOptions from "@components/TaskOptions";

const ViewTaskScreen = ({ route }) => {
  const { taskName } = route.params;

  return (
    <View style={styles.background}>
      <View style={styles.topView}>
        <Text style={text.title}>{taskName}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.taskNameView}>
        <Text style={text.normalText}>Select a field to edit its value</Text>
      </View>
      <View style={styles.textFieldsView}>
        <TaskOptions />
      </View>
      <View style={{ flex: 0.1 }} />
      <View style={styles.confirmView}>
        <CreateButton
          title="CREATE TASK"
          nextPage="Success Screen"
          type="task"
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

export default ViewTaskScreen;