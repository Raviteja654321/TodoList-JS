function renderTasks(tasks, handleComplete, handleEdit, handleDelete) {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
      const taskItem = document.createElement('li');
      taskItem.className = `task ${task.completed ? 'task-completed' : ''}`;

      const completeButton = document.createElement('input');
      completeButton.type = 'checkbox';
      completeButton.className = 'checkbox';
      completeButton.checked = task.completed;
      completeButton.addEventListener('change', () => handleComplete(index));
      taskItem.appendChild(completeButton);

      const taskText = document.createElement('span');
      taskText.className = 'task-text';
      taskText.textContent = task.text;
      taskItem.appendChild(taskText);

      const taskButtons = document.createElement('div');
      taskButtons.className = 'task-buttons';

      const editButton = document.createElement('button');
      editButton.className = 'edit-btn';
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => handleEdit(index));
      taskButtons.appendChild(editButton);

      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete-btn';
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => handleDelete(index));
      taskButtons.appendChild(deleteButton);

      taskItem.appendChild(taskButtons);
      taskList.appendChild(taskItem);
  });
}
