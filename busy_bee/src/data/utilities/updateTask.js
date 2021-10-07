/**
 * This code is called whenever a document within the databse needs to be updated.
 * This occurs when a user marks a document completed or edits the document.
 */
import dbh from "@data/service-agents/firebaseConfigs.js";

/**
 * Updates a document within the database.
 */
function updateTask(task) {
  console.log("task: ", task);
  dbh.collection("All Tasks").doc(task.taskName).update({
    taskName: task.taskName,
    dueDate: task.dueDate,
    details: task.details,
    listName: task.listName,
    completed: task.completed,
    image: task.image,
  });

  printUpdateTask(task);
}

/**
 * Helper method to print task.
 */
function printUpdateTask(task) {
  console.log("sent task to database");
  console.log("update taskName: " + task.taskName);
  console.log("update dueDate: " + task.dueDate);
  console.log("update details: " + task.details);
  console.log("update listName: " + task.listName);
  console.log("update completed: " + task.completed);
  console.log("update image: " + task.image);
}

export default updateTask;
