/**
 * After a user has created a new list, the list is saved in the external database.
 * The new list contains a default document as per the Firebase configurations however this document is not displayed to the user.
 * Reference: https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-8
 */
import dbh from "@data/service-agents/firebaseConfigs.js";
import taskData from "@data/utilities/storeTaskData";

/**
 * Adds task to list specified by user.
 * If no list has been specified, task is added to All Tasks list by default.
 */
function addNewList() {
  console.log(taskData.listName);
  dbh.collection("All Lists").doc(taskData.listName).set({
    listName: taskData.listName,
  });
  printList();
}

/**
 * Helper method to print list.
 */
function printList() {
  console.log("sent list to database");
  console.log("sent listName: " + taskData.listName);
}

export default addNewList;
