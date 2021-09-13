/** 
 * This file contains the code for the Menu Button located in the left corner of the Bottom Menu.
 * The Menu Button displays a list of all the screens the user can navigate to.
 * Provides an alternate way to navigate screens instead of always having to return to the Home page.
 * Reference: https://www.youtube.com/watch?v=IEyUouhcuNQ 
 */

import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import icons from "@styles/icons";

const MenuButton = (props) => {
  const navigation = useNavigation();

  return (
    <Ionicons
      name={icons.menuButton.name}
      size={icons.menuButton.size}
      color={icons.menuButton.color}
      onPress={() => navigation.navigate("NewTaskScreen")}
    />
  );
};

export default MenuButton;
