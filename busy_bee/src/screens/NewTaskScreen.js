/**
 * This file contains the code for the NewTask screen.
 */

import React from "react";
import { StyleSheet, Image, View, Button, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "@styles/colors";
import text from "@styles/text";
import icons from "@styles/icons";

const NewTaskScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.topView}>
        <Text style={text.title}>New Task</Text>
        <Entypo
          name={icons.cancelButton.name}
          size={icons.cancelButton.size}
          color={icons.cancelButton.color}
          onPress={() => navigation.navigate("NewTaskScreen")}
        />
      </View>
      <View style={styles.middleView}></View>
      <View style={styles.bottomView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.yellowBackground,
    flex: 1,
  },
  bottomView: {
    backgroundColor: "gold",
    flex: 1,
  },
  middleView: {
    backgroundColor: "blue",
    flex: 2,
  },
  topView: {
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
});

export default NewTaskScreen;
