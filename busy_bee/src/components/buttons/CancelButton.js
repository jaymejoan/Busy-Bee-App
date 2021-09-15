/**
 * This file contains the code for the Cancel Button located in the
 * top-right corner when users create a new task.
 */

import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import icons from "@styles/icons";

const CancelButton = (props) => {
  const navigation = useNavigation();

  return (
    <Entypo
      name={icons.cancelButton.name}
      size={icons.cancelButton.size}
      color={icons.cancelButton.color}
      onPress={() => navigation.navigate("Home")}
    />
  );
};

export default CancelButton;
