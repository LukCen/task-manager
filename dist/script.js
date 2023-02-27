const taskInput = document.querySelector('.taskInput');
const taskButton = document.querySelector('.taskButton');
const taskList = document.querySelector('ul');
const addNewTask = () => {
    let newTask = taskInput.value;
    let nextTask = document.createElement('li');
    let checkComplete = document.createElement('input');
    checkComplete.setAttribute('type', 'checkbox');
    checkComplete.setAttribute('id', 'complete');
    let labelComplete = document.createElement('label');
    labelComplete.setAttribute('for', 'complete');
    labelComplete.innerHTML = "Completed";
    let taskDelete = document.createElement('button');
    taskDelete.classList.add('taskDelete');
    taskDelete.innerHTML = 'Delete';
    taskDelete.addEventListener('click', () => {
        taskList.removeChild(nextTask);
    });
    nextTask.classList.add('taskItem');
    nextTask.innerHTML = newTask;
    nextTask.appendChild(labelComplete);
    nextTask.appendChild(checkComplete);
    nextTask.appendChild(taskDelete);
    taskList.appendChild(nextTask);
};
taskButton.addEventListener('click', () => {
    addNewTask();
});
