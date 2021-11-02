# Busy_Bee_App

This is a To-Do list app for SWEN325 Assignment 2.

## How to set up the dev environment
**Pre-requisites:**
- Node version 12 or higher installed
- Visual Studio Code (VS Code) installed

1. Install Expo CLI globally: `(sudo) npm install -g expo-cli`
2. Clone the repository
3. Open cloned repository in VS Code

Reference: [ReactNative YouTube Tutorial](https://www.youtube.com/watch?v=0-S5a0eXPoc)

## Running on an iOS simulator
**Pre-requisites:**
- XCode installed including latest command line tools (see tutorial video for instructions)

1. Open XCode > Open Developer Tool > Simulator
2. Within terminal window on VS Code, run `npm start`
3. Type `i` in the terminal to launch the app on the iOS simulator

## Running on an Android emulator
**Pre-requisites:**
- Android Studio installed and Android SDK Tools properly configured (see tutorial video for instructions)

1. Open Android Studio > AVD Manager > Select an Android emulator
2. Within terminal window on VS Code, run `npm start`
3. Type `a` in the terminal to launch the app on the Android emulator

## Running on a Physical Device
1. Download Expo Client from the App Store or Google Playstore (depending on device)
2. Within terminal window on VS Code, run `npm start`
3. Scan the QR code that appears on the browser with your device's camera
4. This will open the app on the Expo Client app
