/**
 * This file contains the code for the Delete Button displayed next to list/task.
 * The button calls on deleteTask() when clicked which deletes the task from the collection.
 */

import React from "react";
import { AntDesign } from "@expo/vector-icons";

import icons from "@styles/icons";

import deleteTask from "@data/utilities/deleteTask";

const DeleteButton = (props) => {
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
