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
      <BottomMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    flex: 1
  },
});

export default HomeScreen;
