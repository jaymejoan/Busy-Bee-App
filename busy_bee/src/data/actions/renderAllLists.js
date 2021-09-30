/**
 * This file renders all the lists stored within the All Lists collection in the database.
 * Displayed when the user navigates to the All Lists screen.
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
    <Text style={text.cardTitle}>{item.name}</Text>
  </TouchableOpacity>
);

/**
 * Renders all the lists stored in the database by displaying the list names.
 * @returns a Flatlist containing the list names of every list in the database.
 */
const renderLists = () => {
  const navigation = useNavigation();
  const [listNames, setListNames] = useState([]);

  // Gets all the data from the All Lists collection
  useEffect(() => {
    dbh.collection("All Lists").onSnapshot((querySnapshot) => {
      const names = []; // list names stored in database
      querySnapshot.forEach((documentSnapshot) => {
        names.push({
          id: documentSnapshot.data().listName,
          name: documentSnapshot.data().listName,
        });
      });
      setListNames(names);
    });
  }, []);

  // Renders each individual list within the All Lists collection.
  // If the user selects the All Tasks list, the app will navigate to the All Tasks screen
  // otherwise it will navigate to the Tasks screen which displays only the tasks linked to the selected list.
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          item.name == "All Tasks"
            ? navigation.navigate("All Tasks Screen")
            : navigation.navigate("Tasks Screen", {
                listName: item.name,
              });
        }}
      />
    );
  };

  // Displays all the lists in the All List collection
  return (
    <View style={styles.container}>
      <FlatList
        data={listNames}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    borderRadius: 30,
  },
  title: {
    fontSize: 32,
  },
});

export default renderLists;
