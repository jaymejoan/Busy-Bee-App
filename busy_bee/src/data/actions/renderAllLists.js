/**
 * This file renders all the lists stored within the all Lists collection in the database.
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

const renderLists = () => {
  const navigation = useNavigation();
  const [listNames, setListNames] = useState([]);

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

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() =>
          navigation.navigate("Tasks Screen", {
            listName: item.name,
          })
        }
      />
    );
  };

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
  },
  title: {
    fontSize: 32,
  },
});

export default renderLists;
