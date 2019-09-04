let taskList = document.querySelector('#taskList');
let newTask = document.querySelector('#task');
let formTask = document.querySelector('#task-form');

taskList.addEventListener('click', deleteTask);
formTask.addEventListener('submit', addNewTask);
