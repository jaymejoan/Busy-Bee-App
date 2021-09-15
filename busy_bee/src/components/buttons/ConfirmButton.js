/**
 * This file contains the code for the Confirm buttons located at the bottom of the New Task/List screens.
 * The text on the button is either "Create Task" or "Create List" which indicates to users that
 * they want to confirm their actions.
 * Reference: https://blog.logrocket.com/creating-custom-buttons-in-react-native/
 */

import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "@styles/colors";
import text from "@styles/text";

const ConfirmButton = ({ title, nextPage }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => navigation.navigate(nextPage)}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.yellow,
    elevation: 8,
    position: "absolute",
    width: "100%",
    height: 100,
    // height: 80,
    bottom: 0,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: text.cardTitle.fontFamily,
    fontSize: text.cardTitle.fontSize,
    color: colors.black,
    alignSelf: "center",
  },
});

export default ConfirmButton;
