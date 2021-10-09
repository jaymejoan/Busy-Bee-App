/**
 * This file contains all different type of text formats used throughout the app.
 * 
 * Reference: https://www.youtube.com/watch?v=IY5OBeL9LNE
 */
import colors from "@styles/colors";

export default {
  cardTitle: {
    fontFamily: "MontserratBold",
    fontSize: 20,
  },
  completedTask: {
    fontFamily: "MontserratBold",
    fontSize: 20,
    textDecorationLine: "line-through",
  },
  normalText: {
    fontFamily: "Montserrat",
    fontSize: 17,
  },
  imageTextBlack: {
    fontFamily: "Montserrat",
    fontSize: 20,
    color: colors.black,
  },
  imageTextGrey: {
    fontFamily: "Montserrat",
    fontSize: 20,
    color: colors.grey,
  },
  quote: {
    fontFamily: "MontserratItalic",
    fontSize: 25,
  },
  title: {
    fontFamily: "MontserratExtraBold",
    fontSize: 25,
  },
};
