
type Task = {
    name: string,
    complete: boolean
}
const taskInput: HTMLInputElement = document.querySelector('.taskInput');

const taskButton: HTMLInputElement = document.querySelector('.taskButton');
const deleteAllChecked: HTMLButtonElement = document.querySelector('.deleteAllChecked')

const taskList: HTMLUListElement = document.querySelector('ul')

const addNewTask = () => {
    
    
    
    // create the new task item, add checkbox and set attributes
    let newTask = taskInput.value;
    let nextTask = document.createElement('li');
    
    let checkComplete = document.createElement('input');
    checkComplete.setAttribute('type', 'checkbox')
    checkComplete.setAttribute('id', 'complete')

//     // create label
    let labelComplete = document.createElement('label')
    labelComplete.setAttribute('for', 'complete')
    labelComplete.innerHTML = "Completed"

//     // create delete button
    let taskDelete = document.createElement('button')
    taskDelete.classList.add('taskDelete')
    taskDelete.innerHTML = 'Delete';

    
    taskDelete.addEventListener('click', () => {
        taskList.removeChild(nextTask)
    })
    
    nextTask.classList.add('taskItem')
    nextTask.innerHTML = newTask;
    nextTask.appendChild(labelComplete)
    nextTask.appendChild(checkComplete)
    nextTask.appendChild(taskDelete)
    taskList.appendChild(nextTask)

    // change color upon checking the box
    checkComplete.addEventListener('change', () => {
        if(checkComplete.checked === true){
            nextTask.style.backgroundColor = 'lightgreen'
        } else {
            nextTask.style.backgroundColor = ''
        }
    })

    // delete all complete tasks, will fix later

    deleteAllChecked.addEventListener('click', () => {
        let completedTasks = document.querySelectorAll('li')
    
        completedTasks.forEach(t => {
            if(checkComplete.checked){
                taskList.removeChild(t)
            }
        })
    })
    

}


taskButton.addEventListener('click', ()=> {
    addNewTask()
    
})


