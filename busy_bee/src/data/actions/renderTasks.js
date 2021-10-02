/**
 * This file renders all the tasks within a selected list.
 * Displayed when the user selects a list from the All List screen.
 *
 * Reference: https://reactnative.dev/docs/flatlist
 */
import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "@styles/colors";
import text from "@styles/text";

import dbh from "@data/service-agents/firebaseConfigs.js";

import CheckBoxButton from "@components/CheckBox";

const Item = ({ item, onPress, textStyle }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={textStyle}>{item.taskName}</Text>
  </TouchableOpacity>
);

/**
 * Renders all the tasks within a selected list by displaying the task names.
 * @returns a Flatlist containing every task related to a selected list within the database.
 * */
const renderTasks = (listName) => {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);

  // Gets all the tasks related to the selected listName
  useEffect(() => {
    dbh
      .collection("All Tasks")
      .where("listName", "==", listName.listName)
      .onSnapshot((querySnapshot) => {
        const taskData = []; // tasks stored in database
        querySnapshot.forEach((documentSnapshot) => {
          taskData.push({
            taskName: documentSnapshot.data().taskName,
            dueDate: documentSnapshot.data().dueDate,
            details: documentSnapshot.data().details,
            listName: documentSnapshot.data().listName,
            completed: documentSnapshot.data().completed,
          });
        });
        setTasks(taskData);
      });
  }, []);

  // Renders each individual item within the list
  const renderItem = ({ item }) => {
    return (
      <View style={styles.taskView}>
        <CheckBoxButton task={item} />
        <Item
          item={item}
          onPress={() => navigation.navigate("Home")}
          textStyle={item.completed ? text.completedTask : text.cardTitle}
        />
      </View>
    );
  };

  // Displays all the tasks within a selected list
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.taskName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellowBackground,
    flex: 1,
  },
  item: {
    backgroundColor: colors.yellow,
    padding: 20,
    marginVertical: 8,
    width: "80%",
    borderRadius: 50,
  },
  taskView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: 20,
  },
  title: {
    fontSize: 32,
  },
});

export default renderTasks;
