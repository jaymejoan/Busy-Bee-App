/**
 * This file contains the code for the NewTask screen.
 * https://stackoverflow.com/questions/53463675/center-text-in-flatlist-next-to-icon-react-native
 */

import React from "react";
import { StyleSheet, Image, View, Button, Text } from "react-native";

import colors from "@styles/colors";
import text from "@styles/text";
import icons from "@styles/icons";

import CancelButton from "@components/CancelButton";
import TextField from "@components/TextField";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import TaskOptions from "@components/TaskOptions";

const NewTaskScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.topView}>
        <Text style={text.title}>New Task</Text>
        <View style={styles.cancelView}>
          <CancelButton />
        </View>
      </View>
      <View style={styles.taskNameView}>
        <Text style={text.normalText}>What would you like to achieve?</Text>
        <TextField placeholderText="Add task name" />
      </View>
      <View style={styles.textFieldsView}>
        <TaskOptions></TaskOptions>
        {/* <MaterialCommunityIcons name={icons.calendar.name} size={icons.calendar.size} color={icons.calendar.color} />
      <FontAwesome name={icons.note.name} size={icons.note.size} color={icons.note.color} />
      <Ionicons name={icons.list.name} size={icons.list.size} color={icons.list.color} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    flex: 1,
  },
  cancelView: {
    position: "absolute",
    right: 20,
  },
  taskNameView: {
    // backgroundColor: colors.yellow,
    padding: 20,
    flexDirection: "column",
    flex: 0.4,
  },
  textFieldsView: {
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  topView: {
    // backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 0.3,
  },
});

export default NewTaskScreen;
