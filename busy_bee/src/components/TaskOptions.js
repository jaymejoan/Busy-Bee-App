/**
 * This file displays the Icon List shown on the New Task Screen.
 * The list displays the multiple different fields that can be added to a task (date,
 * details, list, image) as well as their corresponding icon on the right side of the text field.
 *
 * References: 
 * https://stackoverflow.com/questions/53463675/center-text-in-flatlist-next-to-icon-react-native
 * https://reactnativeelements.com/docs/listitem/
 */
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import colors from "@styles/colors";

import TextField from "@components/TextField";
import ImagePicker from "@components/ImagePicker";

import CalendarIcon from "@assets/icons/CalendarIcon";
import CameraIcon from "@assets/icons/CameraIcon";
import NoteIcon from "@assets/icons/NoteIcon";
import ListIcon from "@assets/icons/ListIcon";

const TaskOptions = (props) => {
  var task = props.newTask ? "" : props.task; // allows task to be udpated if user is editing an existing task

  // default placeholder values for New Task screen
  const [text, setText] = useState({
    dueDate: "Add due date",
    details: "Add details",
    listName: "Add to list",
    image: "Add an image",
  });

  // displays existing values stored in database when on Edit Task screen
  useEffect(() => {
    if (!props.newTask) {
      setText({
        dueDate: task.dueDate,
        details: task.details,
        listName: task.listName,
        image: task.image,
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      {/*Due Date field*/}
      <View style={styles.row}>
        <View style={styles.icon}>
          <CalendarIcon />
        </View>
        <View style={styles.spacer} />
        <View style={styles.field}>
          <TextField
            placeholderText={text.dueDate}
            type="dueDate"
            newTask={props.newTask}
            task={task}
          />
        </View>
      </View>
      <View style={styles.colSpacer} />
      {/*Details field*/}
      <View style={styles.row}>
        <View style={styles.icon}>
          <NoteIcon />
        </View>
        <View style={styles.spacer} />
        <View style={styles.field}>
          <TextField
            placeholderText={text.details}
            type="details"
            newTask={props.newTask}
            task={task}
          />
        </View>
      </View>
      <View style={styles.colSpacer} />
      {/*List field*/}
      <View style={styles.row}>
        <View style={styles.icon}>
          <ListIcon />
        </View>
        <View style={styles.spacer} />
        <View style={styles.field}>
          <TextField
            placeholderText={text.listName} // displays list name field
            type="listName"
            newTask={props.newTask}
            task={task}
          />
        </View>
      </View>
      <View style={styles.colSpacer} />
      {/*Image field*/}
      <View style={styles.row}>
        <View style={styles.icon}>
          <CameraIcon />
        </View>
        <View style={styles.spacer} />
        <View style={styles.field}>
          <ImagePicker text={text.image} newTask={props.newTask} task={task} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colSpacer: {
    flex: 0.1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "90%",
    height: "10%",
    paddingTop: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.black,
  },
  field: {
    width: "80%",
  },
  icon: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "80%",
  },
  spacer: {
    flex: 0.5,
  },
});

export default TaskOptions;
