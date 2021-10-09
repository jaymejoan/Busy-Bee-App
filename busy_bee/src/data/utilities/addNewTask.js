/**
 * After a user has created a new task, the task and its details are saved in the external database.
 * Each task is a document that is stored in the All Tasks collection. Tasks can be retrieved and filtered by the
 * listName field within each document.
 *
 * Reference: https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-8
 */
import dbh from "@data/service-agents/firebaseConfigs.js";
import taskData from "@data/utilities/storeTaskData";

/**
 * Adds task to All Tasks list.
 */
function addNewTask() {
  dbh.collection("All Tasks").doc(taskData.taskName).set({
    taskName: taskData.taskName,
    dueDate: taskData.dueDate,
    details: taskData.details,
    listName: taskData.listName,
    completed: taskData.completed,
    image: taskData.image,
  });
  // printNewTask();
}

/**
 * Helper method used to print the contents of the add task and check adding the task was successful.
 *
function printNewTask() {
  console.log("sent task to database");
  console.log("sent taskName: " + taskData.taskName);
  console.log("sent dueDate: " + taskData.dueDate);
  console.log("sent details: " + taskData.details);
  console.log("sent listName: " + taskData.listName);
  console.log("sent completed: " + taskData.completed);
  console.log("sent image: " + taskData.image);
}
*/

export default addNewTask;
