/**
 * This file contains the code for the Calendar Icon located in the New Task Screen.
 * 
 * Reference: https://icons.expo.fyi/MaterialCommunityIcons/calendar-check
 */

import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import icons from "@styles/icons";

const CalendarIcon = () => {
  return (
    <MaterialCommunityIcons
      name={icons.calendar.name}
      size={icons.calendar.size}
      color={icons.calendar.color}
    />
  );
};

export default CalendarIcon;
