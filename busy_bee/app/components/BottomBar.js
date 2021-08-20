import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

import colors from "../config/colors";
import FAB from "./FloatingActionButton";
import MenuBotton from "./MenuButton";
import OptionsButton from "./OptionsButton";

/** Reference: https://medium.com/@prolongservices.com/inset-fab-in-bottomnavigation-react-native-ef239810419 */

const BottomMenu = () => {
  return (
    <View style={styles.background}>
      <View style={styles.fab}>
        <FAB />
      </View>
      <View style={styles.bottomContainer}>
        <MenuBotton />
        <OptionsButton />
      </View>
    </View>
  );
};

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
