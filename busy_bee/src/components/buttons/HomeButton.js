/**
 * This file contains the code for the Home Button located in the left corner of the Bottom Menu.
 * The Home Button navigates the user back to the Home page from any location in the app.
 * Reference: https://icons.expo.fyi/Entypo/home
 */

import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import icons from "@styles/icons";

const MenuButton = () => {
  const navigation = useNavigation();

  return (
    <Entypo
      name={icons.homeButton.name}
      size={icons.homeButton.size}
      color={icons.homeButton.color}
      onPress={() => navigation.navigate("Home")}
    />
  );
};

export default MenuButton;
