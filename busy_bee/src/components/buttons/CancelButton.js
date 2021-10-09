/**
 * This file contains the code for the Cancel Button located in the top-right corner of the New Task and New List screens.
 * When clicked, the user is navigated back to the Home screen.
 * 
 * Reference: https://icons.expo.fyi/Entypo/cross
 */

import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import icons from "@styles/icons";

const CancelButton = () => {
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
