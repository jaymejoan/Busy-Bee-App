/**
 * This file contains the code for the Floating Action Button (FAB) located in the centre of the Bottom Menu.
 * The FAB is used to add a new task.
 * References:
 * https://www.youtube.com/watch?v=IEyUouhcuNQ
 * https://rnfirebase.io/firestore/usage
 */

import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import icons from "@styles/icons";

const FloatingActionButton = () => {
  const navigation = useNavigation();

  return (
    <AntDesign
      name={icons.fab.name}
      size={icons.fab.size}
      color={icons.fab.color}
      onPress={() => navigation.navigate("New Task Screen")}
    />
  );
};

export default FloatingActionButton;
