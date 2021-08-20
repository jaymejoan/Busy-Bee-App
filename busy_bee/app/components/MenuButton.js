import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";

/** Reference: https://www.youtube.com/watch?v=IEyUouhcuNQ */

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
