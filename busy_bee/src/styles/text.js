/**
 * This file contains all the text sizes used throughout the app.
 * References: https://www.youtube.com/watch?v=IY5OBeL9LNE
 */
// const fonts = () => {
//   let [fontsLoaded] = useFonts({
//     Montserrat: require("../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
//   });

import { Montserrat_700Bold } from "@expo-google-fonts/montserrat";

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   } else {
//     return fontsLoaded;
//   }
// };

export default {
  cardTitle: {
    fontSize: 20,
    fontFamily: "Montserrat",
  },
  quoteText: 25,
  normalText: 15,
};
