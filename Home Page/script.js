////adding task
function addTask() {
    const newTaskInput = document.getElementById("newTask");
    const taskList = document.getElementById("taskList");

    if (newTaskInput.value.trim() !== "") {
        const task = document.createElement("div");
        task.classList.add("task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            toggleTaskStatus(task, checkbox);
        });

        const taskText = document.createElement("span");
        taskText.textContent = newTaskInput.value;

        task.appendChild(checkbox);
        task.appendChild(taskText);

        taskList.appendChild(task);
        newTaskInput.value = "";
    }
}

///complete task
function toggleTaskStatus(task, checkbox) {
    const taskText = task.querySelector("span");

    if (checkbox.checked) {
        taskText.classList.add("completed");
        moveTaskToCompleted(task);
    } else {
        taskText.classList.remove("completed");
    }
}

///move task
function moveTaskToCompleted(task) {
    const completedTaskList = document.getElementById("completedTaskList");
    completedTaskList.appendChild(task);
}

///nav
document.addEventListener("DOMContentLoaded", function () {
    var currentPath = window.location.pathname;
    var links = document.querySelectorAll('.navbar a');

    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('href') === currentPath) {
            links[i].parentNode.classList.add('active');
        }
    }
});