/**
 * This file contains the code to display the Cards shown on the Home page.
 * Each card represents a key screen within the app that users can navigate to.
 * Reference: https://github.com/talut/react-native-simple-card-view/blob/master/docs/en/cardviewwithicon.md
 */

import React from "react";
import { StyleSheet, Image, View, Button } from "react-native";
import { CardViewWithIcon } from "react-native-simple-card-view";

function Card(props) {
  return (
    <CardViewWithIcon
      androidIcon={"md-bonfire"}
      iosIcon={"ios-bonfire-outline"}
      iconBgColor={"#b13757"}
      iconColor={"#FFFFFF"}
      title={props.title}
    //   content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
    />
  );
}

export default Card;
