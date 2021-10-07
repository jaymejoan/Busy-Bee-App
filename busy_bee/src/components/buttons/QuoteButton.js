/**
 * This file contains the code for the Quote Button located in the right corner of the Bottom Menu.
 * The Quote Button displays a random motivational quote to the user within an Alert message.
 * Reference:
 * https://icons.expo.fyi/MaterialCommunityIcons/comment-quote-outline
 * https://7summitpathways.com/blog/mental-health-quotes/ (for quotes)
 */

import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import icons from "@styles/icons";

const QuoteButton = () => {
  const navigation = useNavigation();

  return (
    <MaterialCommunityIcons
      name={icons.quoteButton.name}
      size={icons.quoteButton.size}
      color={icons.quoteButton.color}
      onPress={() => displayQuote()}
    />
  );
};

/**
 * Displays an alert message which displays a motivational quote to the user.
 */
const displayQuote = () => {
  let quotes = [
    "“Your future is created by what you do today, not tomorrow.” - Anon.",
    "“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney",
    "“Happiness is not something ready made. It comes from your own actions.” ― Dalai Lama XIV",
    "“If we have the attitude that it’s going to be a great day it usually is.” – Catherine Pulsifier",
    "“Sometimes you climb out of bed in the morning and you think, I’m not going to make it, but you laugh inside — remembering all the times you’ve felt that way.” — Charles Bukowski",
  ];

  let randomIndex = Math.floor(Math.random() * 4) + 0; // https://reactnativecode.com/generate-random-number/

  Alert.alert("Motivation for the Day", quotes[randomIndex], [
    { text: "OK", onPress: () => console.log("") },
  ]);
};

export default QuoteButton;
