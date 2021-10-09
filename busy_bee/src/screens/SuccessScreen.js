/**
 * The Success Screen confirms the user has created or updated their task/list.
 * Displayed after the user selects the Create Button from the New Task, New List and Edit Task screen.
 * The screen displays an image of the app logo and text indicating the action was successful.
 */

import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

import colors from "@styles/colors";
import text from "@styles/text";

import CreateButton from "@buttons/CreateButton";

const SuccessScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.imageView}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/beeLogo.png")}
        />
      </View>
      <View style={styles.text}>
        <Text style={text.cardTitle}>Success!</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.confirmView}>
        <CreateButton title="RETURN TO HOME" nextPage="Home" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.yellow,
    flex: 1,
  },
  confirmView: {
    backgroundColor: colors.yellow,
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    width: "100%",
  },
  image: {
    width: 150,
    height: 150,
  },
  imageView: {
    flex: 1.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    flex: 1,
    alignItems: "center",
    paddingTop: 25,
  },
});

export default SuccessScreen;
