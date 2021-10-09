/**
 * This file contains the code for the List Icon located in the New Task Screen.
 * 
 * Reference: import { Ionicons } from '@expo/vector-icons';
 */

import React from "react";
import { Ionicons } from "@expo/vector-icons";

import icons from "@styles/icons";

const ListIcon = () => {
  return (
    <Ionicons
      name={icons.list.name}
      size={icons.list.size}
      color={icons.list.color}
    />
  );
};

export default ListIcon;
