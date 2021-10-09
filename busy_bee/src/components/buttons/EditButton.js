/**
 * This file contains the code for the Edit Button located next to each task.
 * The button allows users to edit a task by navigating to the Edit Task screen which allows users to edit the selected task.
 * 
 * Reference: https://icons.expo.fyi/AntDesign/edit
 */

import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import icons from "@styles/icons";

const EditButton = (props) => {
  const navigation = useNavigation();

  return (
    <AntDesign
      name={icons.editButton.name}
      size={icons.editButton.size}
      color={icons.editButton.color}
      onPress={() => {
        navigation.navigate("Edit Task Screen", {
          task: props.task,
        });
      }}
    />
  );
};

export default EditButton;
