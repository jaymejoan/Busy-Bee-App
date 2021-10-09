/**
 * This file contains the code to update a task within the database.
 * The updateTask() function is called whenever a document within the databse needs to be updated.
 * This occurs when a user marks a task completed or edits a task.
 */

import dbh from "@data/service-agents/firebaseConfigs.js";

/**
 * Updates a document within the database.
 */
function updateTask(task) {
  dbh.collection("All Tasks").doc(task.taskName).update({
    taskName: task.taskName,
    dueDate: task.dueDate,
    details: task.details,
    listName: task.listName,
    completed: task.completed,
    image: task.image,
  });
  // printUpdateTask(task);
}

/**
 * Helper method used to print the contents of the update and check update was successful.
 *
function printUpdateTask(task) {
  console.log("sent task to database");
  console.log("update taskName: " + task.taskName);
  console.log("update dueDate: " + task.dueDate);
  console.log("update details: " + task.details);
  console.log("update listName: " + task.listName);
  console.log("update completed: " + task.completed);
  console.log("update image: " + task.image);
}
*/

export default updateTask;
