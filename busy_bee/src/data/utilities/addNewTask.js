/**
 * After a user has created a new task, the task and its details are saved in the external database.
 * Each task is a document that will be saved under the collection with the same name as the specified list name.
 * If no list name is specified, the task will be saved in a default collection called "allTasks".
 */
import dbh from "@data/service-agents/firebaseConfigs.js";
import taskData from "@data/utilities/storeTaskData";

function addNewTask() {
  dbh.collection("list-test").doc("task-test").set({
    taskName: taskData.taskName,
    dueDate: taskData.dueDate,
    details: taskData.details,
    listName: taskData.listName,
  });
  printNewTask();
}

function printNewTask() {
  console.log("sent to database");
  console.log("sent taskName: " + taskData.taskName);
  console.log("sent dueDate: " + taskData.dueDate);
  console.log("sent details: " + taskData.details);
  console.log("sent listName: " + taskData.listName);
}

export default addNewTask;
