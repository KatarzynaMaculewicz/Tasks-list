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
          <li class="tasks__content"
          >
            <button class="tasks__button tasks__button--toggleDone js-done">
              ${task.done ? "✔" : ""}
            </button>
            <span class="tasks__name${task.done ? "tasks__name tasks__name--done" : ""}">
              ${task.content}
            </span>
            <button class="tasks__button tasks__button--remove js-remove">
              🗑
            </button>
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
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
