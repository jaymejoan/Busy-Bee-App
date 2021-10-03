/**
 * This file contains the code for the Camera Icon located in the New Task Screen.
 * Reference: https://icons.expo.fyi/Ionicons/camera-outline
 */

 import React from "react";
 import { Ionicons } from '@expo/vector-icons';
 
 import icons from "@styles/icons";
 
 const CalendarIcon = () => {
   return (
     <Ionicons
       name={icons.camera.name}
       size={icons.camera.size}
       color={icons.camera.color}
     />
   );
 };
 
 export default CalendarIcon;
 