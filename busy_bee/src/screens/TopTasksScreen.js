/**
 * This file contains the code for the NewTask screen.
 * https://stackoverflow.com/questions/53463675/center-text-in-flatlist-next-to-icon-react-native
 */

import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import colors from "@styles/colors";
import text from "@styles/text";

import BottomMenu from "@components/BottomMenu";
// import Dropdown from "@components/Dropdown";

import TopTasks from "@data/actions/renderTopTasks";

const TopTasksScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.topView}>
        <Text style={text.title}>Top 3 Tasks</Text>
        {/* <Text style={text.completedTask}>Top 3 Tasks</Text>  */}
      </View>
      <View style={styles.divider} />
      <View style={styles.listView}>
        <TopTasks />
      </View>
      <View style={styles.divider} />
      <View style={styles.completedTasksView}>
        <Text style={text.cardTitle}>Completed</Text>
        {/* <Dropdown></Dropdown> */}
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
  completedTasksView: {
    backgroundColor: colors.white,
    padding: 20,
    flex: 0.8,
  },
  divider: {
    borderBottomColor: colors.yellow,
    borderBottomWidth: 3,
    width: "90%",
    alignSelf: "center",
  },
  divider2: {
    borderBottomColor: colors.yellow,
    borderBottomWidth: 3,
    width: "100%",
    alignSelf: "center",
  },
  listView: {
    paddingTop: 10,
    flex: 1,
  },
  topView: {
    justifyContent: "space-evenly",
    alignItems: "stretch",
    flexDirection: "column",
    padding: 25,
    flex: 0.1,
  },
});

export default TopTasksScreen;
