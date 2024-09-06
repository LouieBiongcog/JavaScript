document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.className = 'editButton';

            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'removeButton';

           
            removeButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            
            editButton.addEventListener('click', () => {
               
                if (editButton.textContent === 'Edit') {
                    const newTaskText = prompt('Edit task:', li.firstChild.textContent);
                    if (newTaskText !== null && newTaskText.trim() !== '') {
                        li.firstChild.textContent = newTaskText.trim();
                    }
                    editButton.textContent = 'Save';
                } else {
                    editButton.textContent = 'Edit';
                }
            });

            
            li.appendChild(editButton);
            li.appendChild(removeButton);

           
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
