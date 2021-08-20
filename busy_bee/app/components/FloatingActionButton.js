import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";

/** Reference: https://www.youtube.com/watch?v=IEyUouhcuNQ */

class FloatingActionButton extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback>
          <Animated.View styles={[styles.fab, styles.highlight]}>
            <AntDesign
              name="pluscircleo"
              size={70}
              color={colors.black}
              onPress={() => console.log("clicked FAB")} // bring to new task page
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  fab: {
    width: 70,
    height: 70,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: colors.yellow,
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
  },
  highlight: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.yellow,
  },
});

export default FloatingActionButton;
