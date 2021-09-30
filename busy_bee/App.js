import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreenTiming from "expo-splash-screen";
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/montserrat";

import HomeScreen from "@screens/HomeScreen";
import SuccessScreen from "@screens/SuccessScreen";
import NewTaskScreen from "@screens/NewTaskScreen";
import NewListScreen from "@screens/NewListScreen";
import AllListsScreen from "@screens/AllListsScreen";
import AllTasksScreen from "@screens/AllTasksScreen";
import TopTasksScreen from "@screens/TopTasksScreen";

// Displays Splash Screen for 3 seconds
SplashScreenTiming.preventAutoHideAsync();
setTimeout(SplashScreenTiming.hideAsync, 3000);

export default function App() {
  // loads all the required fonts
  const customFonts = {
    Montserrat: require("@assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    MontserratBold: require("@assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    MontserratItalic: require("@assets/fonts/Montserrat/Montserrat-Italic.ttf"),
    MontserratExtraBold: require("@assets/fonts/Montserrat/Montserrat-ExtraBold.ttf"),
  };

  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    // implements navigation throughout the app
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}> */}
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Success Screen" component={SuccessScreen} />
          <Stack.Screen name="New Task Screen" component={NewTaskScreen} />
          <Stack.Screen name="New List Screen" component={NewListScreen} />
          <Stack.Screen name="All Lists Screen" component={AllListsScreen} />
          <Stack.Screen name="All Tasks Screen" component={AllTasksScreen} />
          <Stack.Screen name="Top Tasks Screen" component={TopTasksScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
