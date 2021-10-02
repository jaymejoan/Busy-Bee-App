/**
 * This file contains the code for the Cancel Button located in the
 * top-right corner when users create a new task.
 */

import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import icons from "@styles/icons";

import deleteTask from "@data/utilities/deleteTask";

const DeleteButton = (props) => {
  const navigation = useNavigation();

  return (
    <AntDesign
      name={icons.deleteButton.name}
      size={icons.deleteButton.size}
      color={icons.deleteButton.color}
      onPress={() => deleteTask(props.taskName)}
    />
  );
};

export default DeleteButton;
