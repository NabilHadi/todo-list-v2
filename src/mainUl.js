import { createElement } from "./utils";

export const mainUl = (function () {
  const view = createElement({
    tag: "ul",
    attributes: {
      id: "mainUl",
    },
  });

  function addTodo(todo) {
    view.append(
      createElement({
        tag: "li",
        textContent: todo.title,
        classNames: ["clickable"],
        dataset: {
          id: todo.id,
        },
      })
    );
  }

  function removeTodo(id) {
    const listItem = Array.from(view.children).find(
      (item) => item.dataset.id === id
    );
    if (listItem) {
      listItem.remove();
    }
  }

  function bindEvent(type, handler) {
    view.addEventListener(type, handler);
  }

  function clearUl() {
    Array.from(view.children).forEach((item) => item.remove());
  }

  return { view, addTodo, removeTodo, bindEvent, clearUl };
})();
