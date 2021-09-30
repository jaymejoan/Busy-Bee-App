/**
 * This file contains the code for the Home page screen.
 */

import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

import colors from "@styles/colors";
import text from "@styles/text";
import icons from "@styles/icons";

import BottomMenu from "@components/BottomMenu";
import Card from "@components/Card.js";

const HomeScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.topView}>
        <Image style={styles.image} source={require("../assets/beehive.png")} />
      </View>
      <View style={styles.quoteView}>
        <Text style={text.quote}>"Motivational Quote"</Text>
      </View>
      <View style={styles.cardView}>
        <Card
          title="Top 3 Tasks"
          nextPage="Top Tasks Screen"
          iconName={icons.topTasks}
        />
        <Card
          title="All Lists"
          nextPage="All Lists Screen"
          iconName={icons.allList}
        />
        <Card
          title="Create List"
          nextPage="New List Screen"
          iconName={icons.createList}
        />
        <Card
          title="All Tasks"
          nextPage="All Tasks Screen"
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
    backgroundColor: colors.yellowBackground,
    flex: 1,
  },
  bottomView: {
    flex: 0.5,
  },
  cardView: {
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 0.1,
  },
  topView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 15,
    flex: 0.6,
  },
});

export default HomeScreen;
