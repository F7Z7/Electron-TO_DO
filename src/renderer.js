document.addEventListener('DOMContentLoaded', () => {
    console.log("hey script started");

    const taskInput = document.getElementById('inputTask');
    const taskCounter = document.getElementById('counter');
    const listItems = document.querySelector('.listItems');
    const procrastinateBtn = document.getElementById('proCast');
    const deleteBtn = document.getElementById('delete');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Load tasks from localStorage

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
    }
})