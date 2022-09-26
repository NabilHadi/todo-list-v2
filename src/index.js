import { Project, Todo } from "./models";
import { createElement } from "./utils";
import "./style.css";

const root = createElement({ tag: "div", attributes: { id: "root" } });
document.body.append(root);

const nav = createElement({ tag: "div", attributes: { id: "nav" } });
root.append(nav);

const main = createElement({ tag: "div", attributes: { id: "main" } });
root.append(main);

const projects = [
  new Project("first project", [
    new Todo("first todo", "first todo description", new Date(), 1, false),
    new Todo("second todo", "second todo description", new Date(), 2, true),
    new Todo("third todo", "third todo description", new Date(), 3, false),
  ]),
  new Project("second project", [
    new Todo("forth todo", "forth todo description", new Date(), 4, true),
    new Todo("fifth todo", "fifth todo description", new Date(), 5, false),
    new Todo("sixth todo", "sixth todo description", new Date(), 6, true),
  ]),
  new Project("third project", [
    new Todo("seventh todo", "seventh todo description", new Date(), 7, false),
    new Todo("eighth todo", "eighth todo description", new Date(), 8, true),
    new Todo("ninth todo", "ninth todo description", new Date(), 9, false),
  ]),
];

for (const project of projects) {
  nav.append(
    createElement({
      textContent: project.title,
      eventHandlers: {
        click: function () {
          main.innerHTML = "";
          for (const todo of project.getAllTodos()) {
            main.append(createElement({ textContent: todo.title }));
          }
        },
      },
    })
  );
}
