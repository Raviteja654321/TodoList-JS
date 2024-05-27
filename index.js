document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const input = document.getElementById('input');
    const taskList = document.getElementById('task-list');
    let tasks = [];
    let editingTaskIndex = null;
  
    todoForm.addEventListener('submit', handleSubmit);
  
    function handleSubmit(event) {
      event.preventDefault();
      const value = input.value.trim();
      if (!value) return;
  
      if (editingTaskIndex !== null) {
        tasks[editingTaskIndex].text = value;
        editingTaskIndex = null;
      } else {
        tasks.push({ text: value, completed: false });
      }
  
      input.value = '';
      renderTasks();
    }
  
    function renderTasks() {
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
  
    function handleComplete(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    }
  
    function handleEdit(index) {
      input.value = tasks[index].text;
      editingTaskIndex = index;
    }
  
    function handleDelete(index) {
      tasks.splice(index, 1);
      renderTasks();
    }
  });
  