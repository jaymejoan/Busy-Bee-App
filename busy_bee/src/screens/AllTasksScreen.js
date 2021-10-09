/**
 * This file contains the code for the All Tasks screen.
 * This screen displays all the tasks stored in the database, regardless of the list they belong to.
 */

import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "@styles/colors";
import text from "@styles/text";

import BottomMenu from "@components/BottomMenu";

import RenderAllTasks from "@data/actions/renderAllTasks";

const AllTasksScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.topView}>
        <Text style={text.title}>All Tasks</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.listView}>
        <RenderAllTasks />
      </View>
      <View style={styles.bottomView}>
        <BottomMenu />
      </View>
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
    flex: 0.2,
  },
  divider: {
    borderBottomColor: colors.yellow,
    borderBottomWidth: 3,
    width: "90%",
    alignSelf: "center",
  },
  listView: {
    paddingTop: 10,
    flex: 2,
  },
  topView: {
    justifyContent: "space-evenly",
    alignItems: "stretch",
    flexDirection: "column",
    padding: 25,
    flex: 0.1,
  },
});

export default AllTasksScreen;
