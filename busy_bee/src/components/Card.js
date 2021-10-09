/**
 * This file contains the code to display the four Cards shown on the Home page.
 * Each card represents a screen within the app that users can navigate to (Top 3 Tasks, Create List, All Lists, All Tasks).
 * Once clicked, the user is navigated to the Card's corresponding screen. For example, clicking the "All Lists" card navigates the user
 * to the "All Lists" screen.
 * 
 * References:
 * https://github.com/talut/react-native-simple-card-view/blob/master/docs/en/cardviewwithicon.md
 * https://docs.expo.dev/guides/using-custom-fonts/
 * https://fonts.google.com/specimen/Montserrat
 * https://talut.medium.com/react-native-simple-card-view-8a39ac83b1e0
 */

import React from "react";
import { CardViewWithIcon } from "react-native-simple-card-view";
import { useNavigation } from "@react-navigation/native";

import colors from "@styles/colors";
import text from "@styles/text";

const Card = (props) => {
  const navigation = useNavigation();

  // styling for Card
  const miniCardStyle = {
    shadowColor: colors.black,
    shadowOffsetWidth: 5,
    shadowOffsetHeight: 5,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    bgColor: colors.white,
    padding: 5,
    margin: 10,
    borderRadius: 15,
    elevation: 5,
    width: 160,
  };

  return (
    <CardViewWithIcon
      style={miniCardStyle}
      androidIcon={props.iconName}
      iosIcon={props.iconName}
      iconBgColor={colors.white}
      iconColor={colors.yellow}
      title={props.title}
      titleFontFamily={text.cardTitle.fontFamily}
      titleFontSize={text.cardTitle.fontSize}
      borderRadius={50}
      onPress={() => navigation.navigate(props.nextPage)}
    />
  );
}

export default Card;
