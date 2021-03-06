/**
 * This file contains the code to display all the tasks within a specific list.
 * Displayed when the user selects a specific list from the All List screen.
 *
 * References:
 * https://stackoverflow.com/questions/53463675/center-text-in-flatlist-next-to-icon-react-native
 * https://github.com/react-native-checkbox/react-native-checkbox
 */

import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "@styles/colors";
import text from "@styles/text";

import RenderTasks from "@business/renderTasks";

import BottomMenu from "@components/BottomMenu";

const TasksScreen = ({ route }) => {
  const { listName } = route.params;

  return (
    <View style={styles.background}>
      <View style={styles.topView}>
        <Text style={text.title}>{listName}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.listView}>
        <RenderTasks listName={listName} />
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

export default TasksScreen;
