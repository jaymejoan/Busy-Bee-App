/**
 * This file contains the code for the Home page screen.
 */

import React from "react";
import { StyleSheet, Image, View, Button } from "react-native";

import colors from "@styles/colors";
import icons from "@styles/icons";

import BottomMenu from "@components/BottomMenu";
import Card from "@components/Card.js";
import { DebugInstructions } from "react-native/Libraries/NewAppScreen";

const HomeScreen = (props) => {
  return (
    <View style={styles.background}>
      <View style={styles.topView}></View>
      <View style={styles.cardView}>
        <Card
          title="Top 3 Tasks"
          nextPage="NewTaskScreen"
          iconName={icons.topTasks}
        />
        <Card
          title="All Lists"
          nextPage="NewTaskScreen"
          iconName={icons.allList}
        />
        <Card
          title="Create List"
          nextPage="NewTaskScreen"
          iconName={icons.createList}
        />
        <Card
          title="All Tasks"
          nextPage="NewTaskScreen"
          iconName={icons.allTasks}
        />
      </View>
      <View style={styles.bottomView}>
        <BottomMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    flex: 1,
  },
  topView: {
    backgroundColor: "blue",
    flex: 0.5,
  },
  cardView: {
    backgroundColor: colors.blue,
    flex: 2,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 25,
    justifyContent: "space-evenly"
  },
  bottomView: {
    backgroundColor: "tomato",
    flex: 0.4,
  },
});

export default HomeScreen;
