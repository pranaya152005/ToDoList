let taskList = document.getElementById('task-list');
let taskInput = document.getElementById('task-input');
let addTaskBtn = document.getElementById('add-task-btn');

let tasks = [];

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let task = {
            text: taskText,
            completed: false
        };
        tasks.push(task);
        renderTaskList();
        taskInput.value = '';
    }
}

function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        let taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <span>${task.text}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskItem);

        taskItem.querySelector('input[type="checkbox"]').addEventListener('change', () => {
            task.completed = !task.completed;
            renderTaskList();
        });

        taskItem.querySelector('.delete-btn').addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTaskList();
        });
    });
}
