/**
 * This file contains the code for the Cancel Button located in the
 * top-right corner when users create a new task.
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
