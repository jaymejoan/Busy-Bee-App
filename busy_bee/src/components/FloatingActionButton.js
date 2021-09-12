import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "../styles/colors";

/** Reference: https://www.youtube.com/watch?v=IEyUouhcuNQ */

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
