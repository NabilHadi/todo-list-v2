const { createElement } = require("./utils");

class TodoView {
  constructor(todo = {}) {
    this.todo = todo;

    this.containerView = createElement({
      tag: "div",
      classNames: ["todo-container"],
      dataset: {
        todoId: todo.id,
        isComplete: todo.isComplete,
      },
    });

    this.titleView = createElement({
      tag: "div",
      classNames: ["todo-title"],
      textContent: todo.title,
    });

    this.descriptionView = createElement({
      tag: "p",
      classNames: ["todo-description"],
      textContent: todo.description,
    });

    this.dueDateView = createElement({
      tag: "div",
      classNames: ["todo-due-date"],
      textContent: todo.dueDate,
    });

    this.priorityView = createElement({
      tag: "div",
      classNames: ["todo-priority"],
      textContent: todo.priority,
    });

    this.containerView.append(
      this.titleView,
      this.descriptionView,
      this.dueDateView,
      this.priorityView
    );
  }

  getView() {
    return this.containerView;
  }
}

export { TodoView };
