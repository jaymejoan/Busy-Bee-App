/**
 * This file contains the code for the NewTask screen.
 * https://stackoverflow.com/questions/53463675/center-text-in-flatlist-next-to-icon-react-native
 */

 import React from "react";
 import { StyleSheet, View, Text, FlatList } from "react-native";
 
 import colors from "@styles/colors";
 import text from "@styles/text";

 import BottomMenu from "@components/BottomMenu";
 
 import RenderAllTasks from "@data/actions/renderAllTasks";
 
 const AllListsScreen = () => {
   return (
     <View style={styles.background}>
       <View style={styles.topView}>
         <Text style={text.title}>All Tasks</Text>
       </View>
       <View style={styles.divider} />
       <View style={styles.listView}>
         <RenderAllTasks />
       </View>
       <View style={styles.bottomView}>
         <BottomMenu />
       </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   background: {
     backgroundColor: colors.yellowBackground,
     flex: 1,
   },
   bottomView: {
     backgroundColor: colors.yellow,
     flex: 0.2,
   },
   divider: {
     borderBottomColor: colors.yellow,
     borderBottomWidth: 3,
     width: "90%",
     alignSelf: "center",
   },
   listView: {
     paddingTop: 10,
     // alignItems: "center",
     flex: 2,
   },
   topView: {
     // backgroundColor: colors.white,
     justifyContent: "space-evenly",
     alignItems: "stretch",
     flexDirection: "column",
     padding: 25,
     // paddingTop: 25,
     // paddingLeft: 50,
     flex: 0.1,
   },
 });
 
 export default AllListsScreen;
 