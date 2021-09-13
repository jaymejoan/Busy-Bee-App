/** 
 * This file contains the code for the Floating Action Button (FAB) located in the centre of the Bottom Menu.
 * The FAB is used to add a new task.
 * Reference: https://www.youtube.com/watch?v=IEyUouhcuNQ 
 */

import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "@styles/colors";

const FloatingActionButton = (props) => {
  const navigation = useNavigation();

  return (
    <AntDesign
      name="pluscircleo"
      size={70}
      color={colors.black}
      onPress={() => navigation.navigate("NewTaskScreen")}
    />
  );
};

export default FloatingActionButton;
