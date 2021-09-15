/**
 * This file displays the Icon List shown on the New Task Screen.
 * The list displays the multiple different fields that can be added to a task (date,
 * details, list) as well as their corresponding icon on the right side of the text field.
 *
 * References: https://stackoverflow.com/questions/53463675/center-text-in-flatlist-next-to-icon-react-native
 * Helpful Links: https://reactnativeelements.com/docs/listitem/
 */
import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableHighlight,
  Text,
} from "react-native";

import colors from "@styles/colors";

import TextField from "@components/TextField";
import CalendarIcon from "@components/CalendarIcon";
import NoteIcon from "@components/NoteIcon";
import ListIcon from "@components/ListIcon";

const TaskOptions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <CalendarIcon />
        </View>
        <View style={styles.spacer} />
        <View style={styles.field}>
          <TextField placeholderText="Add due date" type="dueDate" />
        </View>
      </View>
      <View style={styles.colSpacer}></View>
      <View style={styles.row}>
        <View style={styles.icon}>
          <NoteIcon />
        </View>
        <View style={styles.spacer} />
        <View style={styles.field}>
          <TextField placeholderText="Add details" type="details" />
        </View>
      </View>
      <View style={styles.colSpacer}></View>
      <View style={styles.row}>
        <View style={styles.icon}>
          <ListIcon />
        </View>
        <View style={styles.spacer} />
        <View style={styles.field}>
          <TextField placeholderText="Add to list" type="listName" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colSpacer: {
    flex: 0.1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "90%",
    height: "10%",
    paddingTop: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.black,
  },
  field: {
    width: "80%",
  },
  icon: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "80%",
  },
  spacer: {
    flex: 0.5,
  },
});

export default TaskOptions;
