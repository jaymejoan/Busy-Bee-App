/**
 * This array stores the inputted values the user enters when filling out text fields on the New Task Screen.
 * By storing these values in an array, they can be easily accessed by multiple different files within the app
 * and can be easily sent to the database once a user creates a new task.
 * Default values are provided to add consistency and avoid null errors.
 */

const taskData = {
  taskName: "default",
  dueDate: "N/A",
  details: "N/A",
  listName: "All Tasks",
  completed: false,
  image: "N/A",
};

export default taskData;
