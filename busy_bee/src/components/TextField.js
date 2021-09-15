/**
 * This file contains the code for the Text Fields used throughout the app.
 * Reference: https://reactnative.dev/docs/textinput
 */
import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import colors from "@styles/colors"

const TextField = (props) => {
  const [text, onChangeText] = React.useState(null);

  return (
    <View>
      <TextInput
        style={styles.layout}
        onChangeText={onChangeText}
        value={text}
        placeholder={props.placeholderText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: colors.white,
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: colors.black,
    borderWidth: 1,
    fontSize: 20,
    fontFamily: "Montserrat",
  },
});

export default TextField;
