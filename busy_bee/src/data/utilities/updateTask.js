/**
 * This code is called whenever a document within the databse needs to be updated.
 * This occurs when a user marks a document completed or edits the document.
 */
import dbh from "@data/service-agents/firebaseConfigs.js";

/**
 * Updates a document within the database.
 */
function updateTask(item) {
  dbh.collection("All Tasks").doc(item.taskName).update({
    taskName: item.taskName,
    dueDate: item.dueDate,
    details: item.details,
    listName: item.listName,
    completed: item.completed,
  });
}

export default updateTask;
