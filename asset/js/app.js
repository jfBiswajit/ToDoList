const taskInput = document.querySelector('#task');
const ul = document.querySelector('ul');
const form = document.querySelector('form');

// Call event listener
form.addEventListener('submit', addTask);
taskInput.addEventListener('keyup', filterTask);

// Add new task
function addTask(e) {
  if (taskInput.value !== '') {
    const li = document.createElement('li');
    li.className = 'task-item delete-task';
    const task = document.createTextNode(taskInput.value);
    li.appendChild(task);
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.innerHTML = `<i class="fa fa-check"></i>`;
    li.appendChild(link);
    ul.appendChild(li);
    taskInput.value = '';
  } else {
    alert('Please add a task');
  }
  e.preventDefault();
}
// Filter task
taskInput.addEventListener('keyup', filterTask);
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  const lis = document.querySelectorAll('.task-item');
  lis.forEach(task => {
    if (task.textContent.indexOf(text) === -1) {
      task.style.display = 'none';
    } else {
      task.style.display = 'block';
    }
  });
}
