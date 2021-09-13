/**
 * This file displays the Icon List shown on the New Task Screen.
 * The list displays the multiple different fields that can be added to a task (date,
 * details, list) as well as their corresponding icon on the right side of the text field.
 *
 * References: https://stackoverflow.com/questions/53463675/center-text-in-flatlist-next-to-icon-react-native
 * Helpful Links: https://reactnativeelements.com/docs/listitem/
 */
import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableHighlight,
  Text,
} from "react-native";

import SocialIcon from "react-native-vector-icons/AntDesign";
import BookingIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcons from "react-native-vector-icons/Feather";

export const bookIcon = (
  <BookingIcon name="pencil-square-o" size={40} color="purple" />
);
export const calendarIcon = (
  <SocialIcon name="calendar" size={40} color="purple" />
);
export const questionIcon = (
  <SocialIcon name="questioncircleo" size={40} color="purple" />
);
export const externalLinkIcon = (
  <FeatherIcons name="external-link" size={40} color="purple" />
);

import TextField from "@components/TextField";
import { colors } from "react-native-elements";
import CalendarIcon from "@components/CalendarIcon";
import NoteIcon from "@components/NoteIcon";
import ListIcon from "@components/ListIcon";

const TaskOptions = (props) => {
  //   const [text, onChangeText] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CalendarIcon />
        <View style={styles.spacer} />
        <TextField placeholderText="Add due date" />
      </View>
      <View style={styles.row}>
        <NoteIcon />
        <View style={styles.spacer} />
        <TextField placeholderText="Add details" />
      </View>
      <View style={styles.row}>
        <ListIcon />
        <View style={styles.spacer} />
        <TextField placeholderText="Add to list" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "tomato",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingTop: 20
  },
  row: {
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "80%",
  },
  spacer: {
    flex: 0.15,
  },
});

export default TaskOptions;
