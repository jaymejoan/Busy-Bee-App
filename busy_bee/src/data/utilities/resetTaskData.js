/**
 * This function resets the Task Data array in storeTaskData.js to its default values.
 * This is called after the values in the array have been sent to the database - ensures the array is cleared for next task.
 */
import taskData from "@data/utilities/storeTaskData";

function resetTaskData() {
  taskData.taskName = "N/A";
  taskData.dueDate = "N/A";
  taskData.details = "N/A";
  taskData.listName = "N/A";
  printReset();
}

// helper function - can delete later
function printReset() {
  console.log("reset successful");
  console.log("reset taskName: " + taskData.taskName);
  console.log("reset dueDate: " + taskData.dueDate);
  console.log("reset details: " + taskData.details);
  console.log("reset listName: " + taskData.listName);
}

export default resetTaskData;
