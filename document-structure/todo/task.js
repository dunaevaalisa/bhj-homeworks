const tasksInput = document.querySelector('.tasks__input');
const addTaskBtn = document.querySelector('.tasks__add');

const tasksList = document.querySelector('.tasks__list');

tasksInput.addEventListener('keyup', addTask);

addTaskBtn.addEventListener('click', addTask);

function addTask (e) {
    const html = `<div class="task">
                    <div class="task__title">
                        ${tasksInput.value}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                </div>`;

    if (e.key === 'Enter' || e.type === 'click') {

        if (tasksInput.value.trim() !== '') {

            tasksList.insertAdjacentHTML('afterBegin', html);

            getTasksStored(tasksList)
            
            tasksInput.value = '';
        };
    };
    
    e.preventDefault();
};

tasksList.addEventListener('click', removeTask);

function removeTask (e) {
    if (e.target.className === 'task__remove') 
        e.target.closest('.task').remove();

    getTasksStored(tasksList)

    e.preventDefault();
};

window.addEventListener('load', () => { 
    tasksList.innerHTML = JSON.parse(localStorage.getItem('tasks'));
});

function getTasksStored(tasksList) {
    try {
        localStorage.setItem('tasks', JSON.stringify(tasksList.innerHTML));
    } catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
            alert('Превышен лимит');
        };
    };
}
