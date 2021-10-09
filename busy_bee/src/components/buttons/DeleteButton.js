/**
 * This file contains the code for the Delete Button located next to each task.
 * The button allows users to delete a task by calling on deleteTask() which deletes the task from the database.
 * 
 * Reference: https://icons.expo.fyi/AntDesign/delete
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
