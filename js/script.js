{
  const tasks = [];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
          <li class="tasks_content">
          <button class="tasks_button tasks_button--toggleDone js-done">
          ${task.done ? "✔" : ""}</button>
          <span class="tasks_name${
            task.done ? "tasks_name tasks_name--done" : ""
          }">${task.content}</span>
          <button class="tasks_button tasks_button--remove js-remove">🗑</button>
          </li>
          `;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskSubject = document.querySelector(".js-newTask");
    const newTaskContent = newTaskSubject.value.trim();

    if (newTaskContent !== "") {
      addNewTask(newTaskContent);
      newTaskSubject.value = "";
    }

    newTaskSubject.focus();
  };

  const init = () => {
    console.log("hello");
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
