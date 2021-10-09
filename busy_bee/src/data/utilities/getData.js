/**
 * This file contains the various functions to retrieve the list and task data stored in the database.
 * This data is required to display the lists and tasks to the user on the All Lists, All Tasks, Top 3 Tasks and Tasks screen.
 */

import dbh from "@data/service-agents/firebaseConfigs.js";

/**
 * Retrieves all the lists stored within the database.
 * This data is displayed on the All Lists screen where each list name is shown.
 * @param {*} setListNames -- a state that allows the list names to be dynamically rendered.
 */
export function getAllListData(setListNames) {
  dbh.collection("All Lists").onSnapshot((querySnapshot) => {
    const names = []; // list names stored in database
    querySnapshot.forEach((documentSnapshot) => {
      names.push({
        id: documentSnapshot.data().listName,
        name: documentSnapshot.data().listName,
      });
    });
    setListNames(names);
  });
}

/**
 * Retrieves all the tasks stored within the database.
 * This data is displayed on the All Tasks screen where all tasks, regardless of their list, is shown.
 * @param {*} setTasks -- a state that allows the tasks to be dynamically rendered.
 * @returns
 */
export function getAllTasksData(setTasks) {
  let mounted = true; // ensures tasks is only updated if it needs to be mounted (re-displayed)

  if (mounted) {
    dbh.collection("All Tasks").onSnapshot((querySnapshot) => {
      const taskData = []; // tasks stored in database
      querySnapshot.forEach((documentSnapshot) => {
        taskData.push({
          taskName: documentSnapshot.data().taskName,
          dueDate: documentSnapshot.data().dueDate,
          details: documentSnapshot.data().details,
          listName: documentSnapshot.data().listName,
          completed: documentSnapshot.data().completed,
          image: documentSnapshot.data().image,
        });
      });
      setTasks(taskData);
    });
  }
  return () => {
    mounted = false;
  };
}

/**
 * Retrieves all the tasks within a specific list from the database. For example, retrieving all the tasks stored within the "Groceries" list.
 * This data is displayed on the Tasks screen where tasks within the specified list is shown.
 * @param {*} setTasks -- a state that allows the tasks to be dynamically rendered.
 * @param {*} listName -- the list to retrieve the tasks from.
 */
export function getTaskFromList(setTasks, listName) {
  dbh
    .collection("All Tasks")
    .where("listName", "==", listName.listName)
    .onSnapshot((querySnapshot) => {
      const taskData = []; // tasks stored in database
      querySnapshot.forEach((documentSnapshot) => {
        taskData.push({
          taskName: documentSnapshot.data().taskName,
          dueDate: documentSnapshot.data().dueDate,
          details: documentSnapshot.data().details,
          listName: documentSnapshot.data().listName,
          completed: documentSnapshot.data().completed,
          image: documentSnapshot.data().image,
        });
      });
      setTasks(taskData);
    });
}

/**
 * Retrieves all the tasks stored in the Top 3 Tasks list within the database.
 * This data is displayed on the Top 3 Tasks screen where the user's top 3 tasks are shown.
 * @param {*} setTasks -- a state that allows the tasks to be dynamically rendered.
 */
export function getTopTasks(setTasks) {
  dbh
    .collection("All Tasks")
    .where("listName", "==", "Top 3 Tasks")
    .onSnapshot((querySnapshot) => {
      const taskData = []; // tasks stored in database
      querySnapshot.forEach((documentSnapshot) => {
        taskData.push({
          taskName: documentSnapshot.data().taskName,
          dueDate: documentSnapshot.data().dueDate,
          details: documentSnapshot.data().details,
          listName: documentSnapshot.data().listName,
          completed: documentSnapshot.data().completed,
          image: documentSnapshot.data().image,
        });
      });
      setTasks(taskData);
    });
}
