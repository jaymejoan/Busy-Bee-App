/**
 * This file contains the code for the Confirm buttons located at the bottom of the New Task/List screens.
 * The text on the button is either "Create Task" or "Create List" which indicates to users that
 * they want to confirm their actions.
 */
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "@styles/colors";
import text from "@styles/text";

const ConfirmButton = ({ onPress, title }) => (
  <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    backgroundColor: colors.yellow,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontFamily: text.cardTitle.fontFamily,
    fontSize: text.cardTitle.fontSize,
    color: colors.black,
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

// cardTitle: {
//     fontFamily: "MontserratBold",
//     fontSize: 20,
//   },
