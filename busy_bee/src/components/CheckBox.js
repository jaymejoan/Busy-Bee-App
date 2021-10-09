/**
 * This file contains the code for the CheckBox component shown next to each task.
 * When clicked, the task is marked as completed which is shown by the empty circle turning into a tick and
 * the task name being "crossed off" (ie. line is drawn over text).
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
  const [toggleCheckBox, setToggleCheckBox] = useState(task.completed); // allows CheckBox to change between empty circle and tick

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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
export default CheckBoxButton;
