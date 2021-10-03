/**
 * After a user has created a new task, the task and its details are saved in the external database.
 * Each task is a document that will be saved under the collection with the same name as the specified list name.
 * If no list name is specified, the task will be saved in a default collection called "allTasks".
 * Reference: https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-8
 */
import dbh from "@data/service-agents/firebaseConfigs.js";
import taskData from "@data/utilities/storeTaskData";

/**
 * Adds task to list specified by user.
 * If no list has been specified, task is added to All Tasks list by default.
 * Redundant function as don't want to create a new collection for each list!
 */
// function addNewTask() {
//   dbh.collection(taskData.listName).doc(taskData.taskName).set({
//     taskName: taskData.taskName,
//     dueDate: taskData.dueDate,
//     details: taskData.details,
//     listName: taskData.listName,
//     completed: taskData.completed,
//   });

//   addToAllTasks();
//   printNewTask();
// }

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

  printNewTask();
}

/**
 * Helper method to print task.
 */
function printNewTask() {
  console.log("sent task to database");
  console.log("sent taskName: " + taskData.taskName);
  console.log("sent dueDate: " + taskData.dueDate);
  console.log("sent details: " + taskData.details);
  console.log("sent listName: " + taskData.listName);
  console.log("sent completed: " + taskData.completed);
  console.log("sent image: " + taskData.image);
}

export default addNewTask;
