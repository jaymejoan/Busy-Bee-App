/**
 * This file contains the code for the CheckBox shown next to tasks.
 * When clicked, the task is marked as completed and moved to the "Completed" list.
 *
 * References:
 * https://reactnativeelements.com/docs/checkbox/#checked
 * https://github.com/react-native-checkbox/react-native-checkbox
 */

import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";

import colors from "@styles/colors";

import updateTask from "@data/utilities/updateTask";

const CheckBoxButton = ({ task }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(task.completed);

  return (
    <CheckBox
      containerStyle={styles.container}
      iconRight={false}
      checkedIcon="check"
      uncheckedIcon="circle-o"
      uncheckedColor={colors.black}
      checkedColor={colors.black}
      checked={toggleCheckBox}
      size={30}
      onPress={(check) => {
        setToggleCheckBox(!toggleCheckBox);
        task.completed = !task.completed;
        updateTask(task);
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.yellow,
    justifyContent: "center",
    alignItems: "center",
    // height: "70%",
    // borderRadius: 90,
    marginTop: 10,
  },
});
export default CheckBoxButton;