/**
 * This function resets the taskData array in storeTaskData.js to its default values.
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
  taskData.completed = false;
  taskData.image = "N/A";
  // printReset();
}

/**
 * Helper method used to print the contents of the reset and check reset was successful.
 *
function printReset() {
  console.log("reset successful");
  console.log("reset taskName: " + taskData.taskName);
  console.log("reset dueDate: " + taskData.dueDate);
  console.log("reset details: " + taskData.details);
  console.log("reset listName: " + taskData.listName);
  console.log("reset completed: " + taskData.completed);
} 
*/

export default resetTaskData;
