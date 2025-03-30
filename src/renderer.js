document.addEventListener('DOMContentLoaded', () => {
    console.log("hey script started");

    const taskInput = document.getElementById('inputTask');
    const taskCounter = document.getElementById('counter');
    const listItems = document.querySelector('.listItems');
    const procrastinateBtn = document.getElementById('proCast');
    const deleteBtn = document.getElementById('delete');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Load tasks from localStorage
    function updateCounter() {
        taskCounter.textContent = tasks.length
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
        listItems.innerHTML = '';
        tasks.forEach((taskText) => {
            const li = document.createElement("li");
            li.textContent = taskText;
            const removeBtn = document.createElement("button");
            li.appendChild(removeBtn);
            listItems.appendChild(li);
            removeBtn.textContent = "❌"
            removeBtn.classList.add('remove');
            removeBtn.addEventListener('click', function removeTask() {
                const index = tasks.indexOf(taskText);
                if (index !== -1) {
                    tasks.splice(index, 1);
                }
                saveTasks();
                renderTasks();


            });

        })
        updateCounter();
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
        if (tasks.includes(taskText)) {
            alert('task already exists!');
            return;

        }

        tasks.push(taskText);//new task is pushed to tasks array
        saveTasks();
        taskInput.value = '';
        renderTasks();
        updateCounter();
    }

    function deleteTask() {
        tasks = []; //empty the task array and update the counter and local storage
        saveTasks();
        renderTasks();
    }

    procrastinateBtn.addEventListener('click', addTask);
    deleteBtn.addEventListener('click', deleteTask);
    renderTasks();
})