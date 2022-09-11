document.querySelector('form').addEventListener('submit', (e) => {
    // Get submitted task
    const formData = new FormData(e.target);
    const task = formData.get('newTask');

    // Clear input field
    document.querySelector('input').value = '';

    // Stop form submission
    e.preventDefault();
    
    const taskDiv = addTask(task);

    // Get children nodes of taskDiv
    const children = taskDiv.childNodes;
    
    // Complete a task
    const checkBox = children[0].firstChild;
    checkBox.addEventListener('click', () => {
        // Toggle check button
        checkBox.classList.toggle('remove_border');
        const checkImg = checkBox.firstChild;
        checkImg.classList.toggle('hide');

        // Toggle line thorugh task
        const taskP = children[1].firstChild;
        taskP.classList.toggle('line-through');
       
    });

    // Delete a task
    const deleteImg = children[3].firstChild;
    deleteImg.addEventListener('click', () => {
        const tasks = document.querySelector('#list');
        tasks.removeChild(taskDiv);
    });

    // Edit a task
    const editDiv = children[2].firstChild;
    editDiv.addEventListener('click', () => {
        const taskP = children[1].firstChild;
        taskP.focus();
    })
});

// Delete all tasks
document.querySelector('#clear').addEventListener('click', () => {
    document.querySelector('#list').replaceChildren();
});

function addTask(task) {
    const tasks = document.querySelector('#list');

    // Create elements
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    // Check box
    let div = document.createElement('div');
    
    let checkBox = document.createElement('div');
    checkBox.classList.add('check-box');
    
    let checkImg = document.createElement('img');
    checkImg.classList.add('check');
    checkImg.classList.add('hide');
    checkImg.src = 'img/check-mark.png';
    checkImg.alt = 'check';

    checkBox.appendChild(checkImg);
    div.appendChild(checkBox);
    taskDiv.appendChild(div);

    // Task
    let textDiv = document.createElement('div');
    textDiv.classList.add('text');
    
    let p = document.createElement('p');
    p.innerText = task;
    p.contentEditable = true;

    textDiv.appendChild(p);
    taskDiv.appendChild(textDiv);

    // Edit button
    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button');

    let btn = document.createElement('button');
    btn.innerText = 'Edit';

    buttonDiv.appendChild(btn);
    taskDiv.appendChild(buttonDiv);

    // Delete button
    div = document.createElement('div');
    let deleteImg = document.createElement('img');
    deleteImg.src = 'img/Red-Close-Button-Transparent.png';
    deleteImg.alt = 'delete';

    div.appendChild(deleteImg);
    taskDiv.appendChild(div);
    
    // Add task
    tasks.appendChild(taskDiv);

    return taskDiv
}