import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import SplashScreen from './app/screens/SplashScreen';
import * as SplashScreenTiming from 'expo-splash-screen';

SplashScreenTiming.preventAutoHideAsync();
setTimeout(SplashScreenTiming.hideAsync, 3000);

export default function App() {
  return (
    <HomeScreen/>
  );
}
