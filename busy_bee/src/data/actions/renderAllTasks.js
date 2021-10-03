/**
 * This file renders all the tasks stored in the All Tasks collection within the database.
 * All tasks are displayed regardless of the list they belong to.
 * Displayed when the user navigates to the All Tasks screen from the Home page.
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

import DeleteButton from "@buttons/DeleteButton";
import EditButton from "@buttons/EditButton";

const Item = ({ item, onPress, textStyle }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={textStyle}>{item.taskName}</Text>
    <View style={{ flex: 1 }} />
    <View style={styles.buttons}>
      <EditButton taskName={item.taskName} />
      <DeleteButton taskName={item.taskName} />
    </View>
  </TouchableOpacity>
);

/**
 * Renders all the tasks stored in the database by displaying the task names.
 * @returns a Flatlist containing every task stored within in the database, regardless of the list they belong to.
 */
const renderAllTasks = () => {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);

  // Gets all the tasks within the All Tasks collection
  useEffect(() => {
    dbh.collection("All Tasks").onSnapshot((querySnapshot) => {
      const taskData = []; // tasks stored in database
      querySnapshot.forEach((documentSnapshot) => {
        taskData.push({
          taskName: documentSnapshot.data().taskName,
          dueDate: documentSnapshot.data().dueDate,
          details: documentSnapshot.data().details,
          listName: documentSnapshot.data().listName,
          completed: documentSnapshot.data().completed,
          image: documentSnapshot.data().image,
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
          onPress={() =>
            navigation.navigate("View Task Screen", { task: item })
          }
          textStyle={item.completed ? text.completedTask : text.cardTitle}
        />
      </View>
    );
  };

  // Displays all the tasks in the All Tasks collection
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
  buttons: {
    // backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "relative",
    width: 85,
  },
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
    flexDirection: "row",
    alignItems: "stretch",
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

export default renderAllTasks;
