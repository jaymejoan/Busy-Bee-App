/**
 * This file renders all the tasks stored in the Top 3 Tasks collection in database.
 * Displayed when the user navigates to the Top 3 Tasks screen from the Home page or
 * when they select the Top 3 Tasks list from the All Lists page.
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

const Item = ({ item, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={text.cardTitle}>{item.taskName}</Text>
  </TouchableOpacity>
);

/**
 * Renders all the tasks related to the Top 3 Tasks list in the database.
 * @returns a Flatlist containing every task related to the Top 3 Tasks list within the database.
 */
const renderTopTasks = () => {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);

  // Gets all the tasks within the Top 3 Tasks list
  useEffect(() => {
    dbh
      .collection("All Tasks")
      .where("listName", "==", "Top 3 Tasks")
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
        <Item item={item} onPress={() => navigation.navigate("Home")} />
      </View>
    );
  };

  // Displays all the tasks within the Top 3 Tasks list
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

export default renderTopTasks;
