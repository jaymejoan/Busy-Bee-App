/**
 * This file contains the code for the Options Button located in the left corner of the Bottom Menu.
 * The Options Button displays a list of all the options the user can select (eg. filter list).
 * Reference: https://www.youtube.com/watch?v=IEyUouhcuNQ
 */

import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import icons from "@styles/icons";

const OptionsButton = (props) => {
  const navigation = useNavigation();

  return (
    <Entypo
      name={icons.optionsButton.name}
      size={icons.optionsButton.size}
      color={icons.optionsButton.color}
      onPress={() => navigation.navigate("New Task Screen")}
    />
  );
};

export default OptionsButton;
