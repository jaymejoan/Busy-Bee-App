/**
 * After a user has created a new list, the list is saved in the external database.
 * The list name is stored in the All Lists collection.
 *
 * Reference: https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-8
 */
import dbh from "@data/service-agents/firebaseConfigs.js";
import taskData from "@data/utilities/storeTaskData";

/**
 * Adds a new list to the database by adding the listName to the All Lists collection.
 */
function addNewList() {
  dbh.collection("All Lists").doc(taskData.listName).set({
    listName: taskData.listName,
  });
  printList();
}

/**
 * Helper method used to print the contents of the list check adding the list was successful.
 *
function printList() {
  console.log("sent list to database");
  console.log("sent listName: " + taskData.listName);
}
*/

export default addNewList;
