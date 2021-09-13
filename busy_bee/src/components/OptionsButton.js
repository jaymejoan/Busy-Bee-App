/** 
 * This file contains the code for the Options Button located in the left corner of the Bottom Menu.
 * The Options Button displays a list of all the options the user can select (eg. filter list).
 * Reference: https://www.youtube.com/watch?v=IEyUouhcuNQ
 */

import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "@styles/colors";

const OptionsButton = (props) => {
  const navigation = useNavigation();

  return (
    <Entypo
      name="dots-three-horizontal"
      size={35}
      color={colors.black}
      onPress={() => navigation.navigate("NewTaskScreen")}
    />
  );
};

export default OptionsButton;
