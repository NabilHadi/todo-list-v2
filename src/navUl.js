import { createElement } from "./utils";

export const navUl = (function () {
  const view = createElement({
    tag: "ul",
    attributes: {
      id: "navUl",
    },
  });

  function addProject(id, title) {
    view.append(
      createElement({
        tag: "li",
        textContent: title,
        dataset: {
          id: id,
        },
      })
    );
  }

  function removeProject(id) {
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

  return { view, addProject, removeProject, bindEvent };
})();
