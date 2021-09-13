/**
 * This file contains the code for the Home page screen.
 */

import React from "react";
import { StyleSheet, Image, View, Button } from "react-native";

import colors from "@styles/colors";
import BottomMenu from "@components/BottomMenu";
import Card from "@components/Card.js";

const HomeScreen = (props) => {
  return (
    <View style={styles.background}>
      <View style={styles.topView}></View>
      <View style={styles.cardView}>
        <Card title="Top 3 Tasks" nextPage="NewTaskScreen"/>
        <Card title="All Lists" nextPage="NewTaskScreen"/>
        <Card title="Create List" nextPage="NewTaskScreen"/>
        <Card title="Top 3 Tasks" nextPage="NewTaskScreen"/>
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
    backgroundColor: colors.white,
    flex: 2,
  },
  bottomView: {
    backgroundColor: "tomato",
    flex: 0.4,
  },
});

export default HomeScreen;
