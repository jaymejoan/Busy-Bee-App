/**
 * This file renders all the Lists stored in the database. Data and Business Layer?
 * Displayed when the user navigates to the AllLists screen.
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

const renderTasks = (listName) => {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);

  // gets all the tasks within the specified listName
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

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => navigation.navigate("Home")} />;
  };

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
