/**
 * This file contains the code for the Calendar Icon located in the New Task Screen.
 * Reference: https://icons.expo.fyi/MaterialCommunityIcons/calendar-check
 */

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import icons from "@styles/icons";

const CalendarIcon = () => {
  const navigation = useNavigation();

  return (
    <MaterialCommunityIcons
      name={icons.calendar.name}
      size={icons.calendar.size}
      color={icons.calendar.color}
    />
  );
};

export default CalendarIcon;
