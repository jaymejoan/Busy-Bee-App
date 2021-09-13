/**
 * This file contains the code for the Home page screen.
 */

import React from "react";
import { StyleSheet, Image, View, Button } from "react-native";

import colors from "@styles/colors";
import BottomMenu from "@components/BottomMenu";

const HomeScreen = (props) => {
  return (
    <View style={styles.background}>
      <View style={styles.topView}></View>
      <View style={styles.cardView}></View>
      <View style={styles.bottomView}>
        <BottomMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    flex: 1,
  },
  topView: {
    backgroundColor: colors.green,
    flex: 0.5,
  },
  cardView: {
    backgroundColor: colors.white,
    flex: 2,
  },
  bottomView: {
    backgroundColor: "tomato",
    flex: 0.4,
  },
});

export default HomeScreen;
