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
 */
function addNewTask() {
  dbh.collection(taskData.listName).doc(taskData.taskName).set({
    taskName: taskData.taskName,
    dueDate: taskData.dueDate,
    details: taskData.details,
    listName: taskData.listName,
  });

  addToAllTasks();
  printNewTask();
}

/**
 * Adds task to All Tasks list.
 */
function addToAllTasks() {
  dbh.collection("All Tasks").doc(taskData.taskName).set({
    taskName: taskData.taskName,
    dueDate: taskData.dueDate,
    details: taskData.details,
    listName: taskData.listName,
  });
}

/**
 * Helper method to print task.
 */
function printNewTask() {
  console.log("sent to database");
  console.log("sent taskName: " + taskData.taskName);
  console.log("sent dueDate: " + taskData.dueDate);
  console.log("sent details: " + taskData.details);
  console.log("sent listName: " + taskData.listName);
}

export default addNewTask;

// dbh
//     .collection("reports")
//     .add({
//       date: null,
//       region: null,
//       areaOfInjury: null,
//       severity: null,
//       equipmentInvolved: null,
//     })
//     .then((docRef) => {
//       console.log("Document written with ID: ", docRef.id);
//       reportID = docRef.id;
//     })
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });
