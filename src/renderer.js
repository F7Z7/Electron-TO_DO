document.addEventListener('DOMContentLoaded', () => {
    const task = document.getElementById('inputTask');
    const taskCounter = document.getElementById('taskCounter');
    const listItems = document.getElementsByClassName('listItems');

    function add() {

        if (task.value.trim() == '') {
            alert('Please enter a task!');
        }

    }
})