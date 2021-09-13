import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreenTiming from "expo-splash-screen";
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/montserrat";

import HomeScreen from "./src/screens/HomeScreen";
import NewTaskScreen from "./src/screens/NewTaskScreen";

// Displays Splash Screen for 3 seconds
SplashScreenTiming.preventAutoHideAsync();
setTimeout(SplashScreenTiming.hideAsync, 3000);

export default function App() {
  // loads all the fonts required in the app
  const customFonts = {
    Montserrat: require("@assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    MontserratItalic: require("@assets/fonts/Montserrat/Montserrat-Italic.ttf"),
  };

  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NewTaskScreen" component={NewTaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  // implements navigation throughout the app
  // const Stack = createStackNavigator();
  // return (
  //     <NavigationContainer>
  //     <Stack.Navigator initialRouteName="Home">
  //       <Stack.Screen name="Home" component={HomeScreen} />
  //       <Stack.Screen name="NewTaskScreen" component={NewTaskScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
}
