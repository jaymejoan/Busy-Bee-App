/**
 * This file contains the code to display the Cards shown on the Home page.
 * Each card represents a key screen within the app that users can navigate to.
 * References:
 * https://github.com/talut/react-native-simple-card-view/blob/master/docs/en/cardviewwithicon.md
 * https://docs.expo.dev/guides/using-custom-fonts/
 * https://fonts.google.com/specimen/Montserrat
 */

import React from "react";
import { StyleSheet, Image, View, Button } from "react-native";
import { CardViewWithIcon } from "react-native-simple-card-view";
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/montserrat";
import { useNavigation } from "@react-navigation/native";

function Card(props) {
  let [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
  });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <CardViewWithIcon
        // androidIcon={"md-bonfire"}
        // iosIcon={"ios-bonfire-outline"}
        // width={20}
        // iconType="Entypo"
        // iconBgColor={"#b13757"}
        // iconColor={"#FFFFFF"}
        title={props.title}
        titleFontFamily={"Montserrat"}
        titleFontSize={20}
        borderRadius={50}
        onPress={() => navigation.navigate(props.nextPage)}
      />
    );
  }
}

export default Card;
