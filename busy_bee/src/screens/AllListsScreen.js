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

const AllListsScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.topView}>
        <Text style={text.title}>All Lists</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.taskNameView}>
        <Text style={text.normalText}>What would you like to achieve?</Text>
        <View style={{ flex: 0.3 }} />
        <TextField placeholderText="Add task name" type="taskName" />
      </View>
      <View style={styles.textFieldsView}>
        <TaskOptions />
      </View>
      <View style={{ flex: 0.1 }} />
      <View style={styles.confirmView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.yellowBackground,
    flex: 1,
  },
  bottomView: {
    backgroundColor: colors.yellow,
    flex: 0.3,
  },
  divider: {
    borderBottomColor: colors.yellow,
    borderBottomWidth: 3,
    width: "90%",
    alignSelf: "center",
  },
  listView: {
    // backgroundColor: colors.white,
    flex: 2,
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
    // backgroundColor: colors.white,
    justifyContent: "space-evenly",
    alignItems: "stretch",
    flexDirection: "column",
    padding: 25,
    // paddingTop: 25,
    // paddingLeft: 50,
    flex: 0.1,
  },
});

export default AllListsScreen;
