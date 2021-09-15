/**
 * After a user has created a new task, the task and its details are saved in the external database.
 * Each task is a document that will be saved under the collection with the same name as the specified list name.
 * If no list name is specified, the task will be saved in a default collection called "allTasks".
 */
import dbh from "@data/service-agents/firebaseConfigs.js";

function addNewTask(tName, date, info, lName) {
  //   dbh.collection(listName).doc(taskName).set({
  dbh.collection("allTasks").doc("test-task").set({
    taskName: tName,
    dueDate: date,
    details: info,
    list: lName,
  });
  console.log("sent to database");
}

export default addNewTask;