/**
 * Deletes a task from the database.
 * Once deleted, the task disappears from the screen and an alert message is shown
 * to inform the user the task has been successfully deleted.
 *
 * References:
 * https://firebase.google.com/docs/firestore/manage-data/delete-data
 * https://reactnative.dev/docs/alert
 */
import dbh from "@data/service-agents/firebaseConfigs.js";
import { Alert } from "react-native";

/**
 * Deletes a task from a list within the database.
 */
function deleteTask(taskName) {
  dbh
    .collection("All Tasks")
    .doc(taskName)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
      displayAlert(taskName);
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
}

/**
 * Displays an alert message which informs the user the task has been successfully deleted.
 */
const displayAlert = (taskName) => {
  let message = "'" + taskName + "' was successfully deleted!";

  Alert.alert("Task Deleted", message, [
    { text: "OK", onPress: () => console.log("") },
  ]);
};

export default deleteTask;
