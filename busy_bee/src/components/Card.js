/**
 * This file contains the code to display the Cards shown on the Home page.
 * Each card represents a key screen within the app that users can navigate to.
 * References:
 * https://github.com/talut/react-native-simple-card-view/blob/master/docs/en/cardviewwithicon.md
 * https://docs.expo.dev/guides/using-custom-fonts/
 * https://fonts.google.com/specimen/Montserrat
 * https://talut.medium.com/react-native-simple-card-view-8a39ac83b1e0
 */

import React from "react";
import { StyleSheet, Image, View, Button } from "react-native";
import { CardViewWithIcon } from "react-native-simple-card-view";
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/montserrat";
import { useNavigation } from "@react-navigation/native";

import colors from "@styles/colors";

function Card(props) {
  let [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
  });

  const navigation = useNavigation();

  const miniCardStyle = {
    shadowColor: "#000000",
    shadowOffsetWidth: 5,
    shadowOffsetHeight: 5,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    bgColor: "#ffffff",
    padding: 5,
    margin: 10,
    borderRadius: 15,
    elevation: 5,
    width: 160,
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <CardViewWithIcon
        style={miniCardStyle}
        androidIcon={props.iconName}
        iosIcon={props.iconName}
        iconBgColor={colors.white}
        iconColor={colors.yellow}
        title={props.title}
        titleFontFamily={"Montserrat"}
        titleTextAlign={"left"}
        titleFontSize={20}
        borderRadius={50}
        onPress={() => navigation.navigate(props.nextPage)}
      />
    );
  }
}

export default Card;
