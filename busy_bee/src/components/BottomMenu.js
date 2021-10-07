/**
 * This file contains the code for the Bottom Menu displayed at the bottom of the app.
 * Reference: https://medium.com/@prolongservices.com/inset-fab-in-bottomnavigation-react-native-ef239810419
 */

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import colors from "@styles/colors";

import FAB from "@buttons/FloatingActionButton";
import HomeButton from "@buttons/HomeButton";
import QuoteButton from "@buttons/QuoteButton";
// import OptionsButton from "@buttons/OptionsButton";

const BottomMenu = () => {
  return (
    <View style={styles.background}>
      <View style={styles.fab}>
        <FAB />
      </View>
      <View style={styles.bottomContainer}>
        <HomeButton />
        <QuoteButton />
        {/* <OptionsButton /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
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
