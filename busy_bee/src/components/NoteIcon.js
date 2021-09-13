/**
 * This file contains the code for the Note Icon located in the New Task Screen.
 * Reference: https://icons.expo.fyi/FontAwesome/sticky-note-o
 */

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import icons from "@styles/icons";

const NoteIcon = () => {
  const navigation = useNavigation();

  return (
    <FontAwesome
      name={icons.note.name}
      size={icons.note.size}
      color={icons.note.color}
    />
  );
};

export default NoteIcon;
