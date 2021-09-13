/**
 * This file displays the Icon List shown on the New Task Screen.
 * The list displays the multiple different fields that can be added to a task (date,
 * details, list) as well as their corresponding icon on the right side of the text field.
 *
 * References: https://stackoverflow.com/questions/53463675/center-text-in-flatlist-next-to-icon-react-native
 * Helpful Links: https://reactnativeelements.com/docs/listitem/
 */
import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableHighlight,
  Text,
} from "react-native";

import SocialIcon from "react-native-vector-icons/AntDesign";
import BookingIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcons from "react-native-vector-icons/Feather";

export const bookIcon = (
  <BookingIcon name="pencil-square-o" size={40} color="purple" />
);
export const calendarIcon = (
  <SocialIcon name="calendar" size={40} color="purple" />
);
export const questionIcon = (
  <SocialIcon name="questioncircleo" size={40} color="purple" />
);
export const externalLinkIcon = (
  <FeatherIcons name="external-link" size={40} color="purple" />
);

import TextField from "@components/TextField";
import { colors } from "react-native-elements";
import CalendarIcon from "@components/CalendarIcon";
import NoteIcon from "@components/NoteIcon";
import ListIcon from "@components/ListIcon";

const TaskOptions = (props) => {
  //   const [text, onChangeText] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CalendarIcon />
        <TextField placeholderText="Add due date"/>
      </View>
      <View style={styles.row}>
        <NoteIcon />
        <TextField placeholderText="Add details"/>
      </View>
      <View style={styles.row}>
        <ListIcon />
        <TextField placeholderText="Add to list"/>
      </View>
    </View>

    //   <View style={styles.layout}>
    //     <FlatList
    //       contentContainerStyle={styles.listItem}
    //       data={[
    //         { key: <TextField placeholderText="Add due date"/>, icon: bookIcon },
    //         { key: <TextField placeholderText="Add details"/>, icon: calendarIcon },
    //         { key: <TextField placeholderText="Add to list"/>, icon: questionIcon },
    //       ]}
    //       renderItem={({ item }) => {
    //         return (
    //           <TouchableHighlight onPress={() => console.log("clicked button")}>
    //             <Text>
    //               {item.icon}
    //               {item.key}
    //             </Text>
    //           </TouchableHighlight>
    //         );
    //       }}
    //     />
    //   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
  },
  row: {
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  // layout: {
  //   // flex: 4,
  //   backgroundColor: "orange",
  //   padding: 20,
  //   width: "100%",
  //   height: "100%",
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  // listItem: {
  //   backgroundColor: colors.white,
  //   justifyContent: "space-evenly",
  //   alignItems: "center",
  //   paddingHorizontal: 100
  // },
  // text: {
  //   fontSize: 20,
  // },
});

export default TaskOptions;

// import SocialIcon from 'react-native-vector-icons/AntDesign';
// import BookingIcon from 'react-native-vector-icons/FontAwesome';
// import FeatherIcons from 'react-native-vector-icons/Feather';

// export const bookIcon = (<BookingIcon name="pencil-square-o" size={40} color="purple" />);
// export const calendarIcon = (<SocialIcon name="calendar" size={40} color="purple" />);
// export const questionIcon = (<SocialIcon name="questioncircleo" size={40} color="purple" />);
// export const externalLinkIcon = (<FeatherIcons name="external-link" size={40} color="purple" />);

// class AboutMe extends Component {
//   static navigationOptions = {
//     title: "About Me",
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.topBox}>
//           <View style={styles.circleOuter} />
//           <View style={styles.circle} />
//         </View>
//         <View style={styles.middleBox}></View>
//         <View style={styles.bottomBox}>
//           <FlatList
//             contentContainerStyle={styles.listItem}
//             data={[
//               { key: "Book a free appointment", page: "Book", icon: bookIcon },
//               { key: "Availability", page: "Availability", icon: calendarIcon },
//               { key: "FAQ", page: "Faq", icon: questionIcon },
//               { key: "Useful Links", page: "Links", icon: externalLinkIcon },
//             ]}
//             onPress={() => this.props.navigation.navigate("Book")}
//             renderItem={({ item }) => {
//               return (
//                 <TouchableHighlight
//                   onPress={() => this.props.navigation.navigate(`${item.page}`)}
//                 >
//                   <Text>
//                     {item.icon}
//                     {item.key}
//                   </Text>
//                 </TouchableHighlight>
//               );
//             }}
//           />
//         </View>
//       </View>
//     );
//   }
// }
