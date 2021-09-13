/**
 * This file contains the code for the Home page screen.
 */

import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

import colors from "@styles/colors";
import icons from "@styles/icons";

import BottomMenu from "@components/BottomMenu";
import Card from "@components/Card.js";

const HomeScreen = (props) => {
  return (
    <View style={styles.background}>
      <View style={styles.topView}>
        <Image style={styles.image} source={require("../assets/beehive.png")} />
      </View>
      <View style={styles.quoteView}>
        <Text>"Motivational Quote"</Text>
      </View>
      <View style={styles.cardView}>
        <Card
          title="Top 3 Tasks"
          nextPage="NewTaskScreen"
          iconName={icons.topTasks}
        />
        <Card
          title="All Lists"
          nextPage="NewTaskScreen"
          iconName={icons.allList}
        />
        <Card
          title="Create List"
          nextPage="NewTaskScreen"
          iconName={icons.createList}
        />
        <Card
          title="All Tasks"
          nextPage="NewTaskScreen"
          iconName={icons.allTasks}
        />
      </View>
      <View style={styles.bottomView}>
        <BottomMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFF4CA",
    // backgroundColor: colors.white,
    flex: 1,
  },
  bottomView: {
    flex: 0.5,
  },
  cardView: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 25,
  },
  image: {
    width: 180,
    height: 190,
    resizeMode: "cover",
  },
  quoteView: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 0.1,
  },
  topView: {
    // backgroundColor: "#FFF4CA", // FFF4CA // FDF9DA
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
    flex: 0.6,
  },
});

export default HomeScreen;
