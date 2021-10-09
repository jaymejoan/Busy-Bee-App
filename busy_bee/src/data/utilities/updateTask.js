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
}

export default updateTask;
