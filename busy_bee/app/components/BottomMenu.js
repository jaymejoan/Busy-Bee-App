import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

import colors from "../config/colors";
import FAB from "./FloatingActionButton";

/** Reference: https://medium.com/@prolongservices.com/inset-fab-in-bottomnavigation-react-native-ef239810419 */

class BottomMenu extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.fab}>
          <FAB />
        </View>
        <View style={styles.bottomContainer}>
          <Icon name="menu" type="material" color="#000" size={35} onPress={() => {}} />
          <Icon name="search" type="material" color="#000" size={35}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    flexDirection: "column",
    flex: 1,
  },
  bottomContainer: {
    position: "absolute",
    backgroundColor: colors.yellow,
    bottom: 0,
    zIndex: 1,
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  fab: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: colors.white,
    width: 70,
    height: 70,
    borderRadius: 35,
    bottom: 45,
    zIndex: 10,
  },
});

export default BottomMenu;
