/**
 * This function resets the Task Data array in storeTaskData.js to its default values.
 * This is called after the values in the array have been sent to the database - ensures the array is cleared for next task.
 */
import taskData from "@data/utilities/storeTaskData";

/**
 * Resets taskData array to default values.
 */
function resetTaskData() {
  taskData.taskName = "default";
  taskData.dueDate = "N/A";
  taskData.details = "N/A";
  taskData.listName = "All Tasks";
  printReset();
}

/**
 * Helper method to check reset was successful.
 */ 
function printReset() {
  console.log("reset successful");
  console.log("reset taskName: " + taskData.taskName);
  console.log("reset dueDate: " + taskData.dueDate);
  console.log("reset details: " + taskData.details);
  console.log("reset listName: " + taskData.listName);
}

export default resetTaskData;
