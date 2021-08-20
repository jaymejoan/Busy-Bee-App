import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreenTiming from "expo-splash-screen";

import HomeScreen from "./app/screens/HomeScreen";
import SplashScreen from "./app/screens/SplashScreen";

// Displays Splash Screen for 3 seconds
SplashScreenTiming.preventAutoHideAsync();
setTimeout(SplashScreenTiming.hideAsync, 3000);

export default function App() {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
