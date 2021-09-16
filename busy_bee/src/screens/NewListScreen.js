/**
 * This file contains the code for the New List screen.
 * Once users enter a list name, a new collection is created in the database with that name.
 * A default document filled with default values is automatically assigned to the collection as per Firebase requirements.
 */

import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "@styles/colors";
import text from "@styles/text";

import CancelButton from "@buttons/CancelButton";
import CreateButton from "@buttons/CreateButton";

import TextField from "@components/TextField";

const NewTaskScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.topView}>
        <Text style={text.title}>New List</Text>
        <View style={styles.cancelView}>
          <CancelButton />
        </View>
      </View>
      <View style={styles.taskNameView}>
        <Text style={text.normalText}>
          What would you like to name your list?
        </Text>
        <View style={{ flex: 0.3 }} />
        <TextField placeholderText="Add list name" type="listName" />
      </View>
      <View style={styles.textFieldsView} />
      <View style={styles.confirmView}>
        <CreateButton title="CREATE LIST" nextPage="Home" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.yellowBackground,
    flex: 1,
  },
  cancelView: {
    position: "absolute",
    right: 20,
  },
  confirmView: {
    backgroundColor: colors.yellow,
    width: "100%",
    // height: 100,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  taskNameView: {
    padding: 20,
    flexDirection: "column",
    flex: 0.35,
  },
  textFieldsView: {
    backgroundColor: colors.yellowBackground,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  topView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 0.3,
  },
});

export default NewTaskScreen;
