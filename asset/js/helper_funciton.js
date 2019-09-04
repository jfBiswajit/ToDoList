function deleteTask(e) {
  if (e.target.parentElement.parentElement.classList.contains('delete-task')) {
    e.target.parentElement.parentElement.remove();
  }
}

function addNewTask(e) {
  if (newTask.value !== '') {
    let li = document.createElement('li');
    let a = document.createElement('a');
    let i = document.createElement('i');

    li.classList.add('task-item', 'delete-task');
    a.setAttribute('href', '#');
    i.classList.add('fa', 'fa-check', 'delete-btn');
    li.innerText = newTask.value;
    li.appendChild(a);
    a.appendChild(i);
    taskList.appendChild(li);
    console.log(li);
    newTask.value = '';
  } else {
    alert('No Task is added');
  }

  e.preventDefault();
}
