import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";

/** Reference: https://www.youtube.com/watch?v=IEyUouhcuNQ */

class FloatingActionButton extends Component {
  render() {
    return (
      <AntDesign
        name="pluscircleo"
        size={70}
        color={colors.black}
        onPress={() => console.log("clicked FAB")} // bring to new task page
      />
    );
  }
}

export default FloatingActionButton;
