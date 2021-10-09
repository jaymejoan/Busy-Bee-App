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
}

export default resetTaskData;
