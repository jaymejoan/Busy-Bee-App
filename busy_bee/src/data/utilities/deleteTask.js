/**
 * Deletes a task from the database.
 * Once deleted, the task disappears from the screen.
 *
 * Reference: https://firebase.google.com/docs/firestore/manage-data/delete-data
 */
import dbh from "@data/service-agents/firebaseConfigs.js";

/**
 * Deletes a task from a list.
 */
function deleteTask(taskName) {
  dbh
    .collection("All Tasks")
    .doc(taskName)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
}

export default deleteTask;
