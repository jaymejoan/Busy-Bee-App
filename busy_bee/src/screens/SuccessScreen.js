/**
 * This file contains the code for the Splash screen.
 * Note: Redundant code as splash screen is loaded from App.js
 */

import React from "react";
import { StyleSheet, Image, View } from "react-native";

import colors from "@styles/colors";

function SuccessScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/beeLogo.png")
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 220,
    height: 220,
  },
});

export default SuccessScreen;
