/**
 * This file contains the code for the Top Tasks screen.
 * This screen displays the tasks within the Top 3 Tasks list.
 *
 * Reference: https://stackoverflow.com/questions/53463675/center-text-in-flatlist-next-to-icon-react-native
 */

import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "@styles/colors";
import text from "@styles/text";

import BottomMenu from "@components/BottomMenu";

import TopTasks from "@data/actions/renderTopTasks";

const TopTasksScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.topView}>
        <Text style={text.title}>Top 3 Tasks</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.listView}>
        <TopTasks />
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
    backgroundColor: colors.yellowBackground,
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
