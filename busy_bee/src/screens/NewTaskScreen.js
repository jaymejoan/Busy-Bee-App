/**
 * This file contains the code for the NewTask screen.
 */

import React from "react";
import { StyleSheet, Image, View, Button, Text } from "react-native";

import colors from "@styles/colors";

const NewTaskScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.topView}>
        <Text>New Task Screen!</Text>
      </View>
      <View style={styles.middleView}></View>
      <View style={styles.bottomView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.yellowBackground,
    flex: 1
  },
  bottomView: {
    backgroundColor: "gold",
    flex: 1,
  },
  middleView: {
    backgroundColor: "blue",
    flex: 1,
  },
  topView: {
    backgroundColor: "tomato",
    flex: 1,
  },
});

export default NewTaskScreen;
