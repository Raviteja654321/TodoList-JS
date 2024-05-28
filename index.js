import { renderTasks } from "./renderTasks.js";

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
      renderTasks(tasks, handleComplete, handleEdit, handleDelete);
    }

    function handleComplete(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks(tasks, handleComplete, handleEdit, handleDelete);
    }
  
    function handleEdit(index) {
      input.value = tasks[index].text;
      editingTaskIndex = index;
    }
  
    function handleDelete(index) {
      tasks.splice(index, 1);
      renderTasks(tasks, handleComplete, handleEdit, handleDelete);
    }
  });
  