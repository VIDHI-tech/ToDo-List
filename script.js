document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");
   
    // Update the theme based on the slider value
    

    addButton.addEventListener("click", function() {
        const taskText = taskInput.value;
        if (taskText.trim() === "") {
            alert("Please enter a task.");
        } else {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });

    taskList.addEventListener("click", function(event) {
        const listItem = event.target.closest("li");

        if (event.target.classList.contains("delete-button")) {
            listItem.remove();
        } else if (event.target.classList.contains("edit-button")) {
            editTask(listItem);
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(li);
    }

    function editTask(listItem) {
        const span = listItem.querySelector("span");
        const editText = document.createElement("input");
        editText.type = "text";
        editText.value = span.textContent;
        editText.className = "edit-text";
        listItem.replaceChild(editText, span);

        editText.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                span.textContent = editText.value;
                listItem.replaceChild(span, editText);
            }
        });
    }
});
