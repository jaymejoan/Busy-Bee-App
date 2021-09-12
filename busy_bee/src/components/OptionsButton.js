import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "../styles/colors";

/** Reference: https://www.youtube.com/watch?v=IEyUouhcuNQ */

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
