/**
 * This file contains the code for the Quote Button located in the right corner of the Bottom Menu.
 * The Quote Button displays a random motivational quote to the user within an Alert message.
 * Reference: https://icons.expo.fyi/MaterialCommunityIcons/comment-quote-outline
 */

import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import icons from "@styles/icons";

const QuoteButton = () => {
  const navigation = useNavigation();

  return (
    <MaterialCommunityIcons
      name={icons.quoteButton.name}
      size={icons.quoteButton.size}
      color={icons.quoteButton.color}
      onPress={() => navigation.navigate("Home")}
    />
  );
};

export default QuoteButton;
