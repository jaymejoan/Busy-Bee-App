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

const Item = ({ item, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={text.cardTitle}>{item.taskName}</Text>
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
          });
        });
        setTasks(taskData);
      });
  }, []);

  // Renders each individual item within the list
  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => navigation.navigate("Home")} />;
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
    flex: 1,
    backgroundColor: colors.yellowBackground,
  },
  item: {
    backgroundColor: colors.yellow,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default renderTasks;
