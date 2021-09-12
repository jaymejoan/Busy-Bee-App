/** 
 * This file contains the code for the Menu Button located in the left corner of the Bottom Menu.
 * The Menu Button displays a list of all the screens the user can navigate to.
 * Provides an alternate way to navigate screens instead of always having to return to the Home page.
 * Reference: https://www.youtube.com/watch?v=IEyUouhcuNQ 
 */

import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "../styles/colors";

const MenuButton = (props) => {
  const navigation = useNavigation();

  return (
    <Ionicons
      name="ios-menu-sharp"
      size={35}
      color={colors.black}
      onPress={() => navigation.navigate("NewTaskScreen")}
    />
  );
};

export default MenuButton;
