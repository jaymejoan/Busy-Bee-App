import React from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWihtoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "./colors";

/** Reference: https://www.youtube.com/watch?v=IEyUouhcuNQ */

export default class FloatingActionButton extends React.Component {
  render() {
    return (
      <AntDesign
        name="pluscircleo"
        size={70}
        color={colors.black}
        onPress={() => console.log("clicked FAB")}  // bring to new task page
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: colors.yellow,
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
  },
});
