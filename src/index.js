import { Project, Todo } from "./models";
import { createElement } from "./utils";
import "./style.css";
import { navUl } from "./navUl";
import { mainUl } from "./mainUl";

let currProject;

const root = createElement({ tag: "div", attributes: { id: "root" } });
document.body.append(root);

const nav = createElement({ tag: "div", attributes: { id: "nav" } });
root.append(nav);
nav.append(navUl.view);

const main = createElement({ tag: "div", attributes: { id: "main" } });
root.append(main);
main.append(mainUl.view);

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
  navUl.addProject(project.id, project.title);
}

navUl.bindEvent("click", (e) => {
  const id = e.target.dataset.id;
  if (!id) return;

  const project = projects.find((project) => project.id === id);
  if (project) {
    mainUl.clearUl();
    for (const todo of project.getAllTodos()) {
      mainUl.addTodo(todo.id, todo.title);
    }
    currProject = project;
  }
});

nav.append(
  createElement({
    tag: "input",
    eventHandlers: {
      keydown: function (event) {
        if (event.keyCode !== 13 || event.target.value === "") {
          return;
        }

        const newProject = new Project(event.target.value);
        projects.push(newProject);
        console.log(projects);
        navUl.addProject(newProject.id, newProject.title);

        event.target.value = "";
      },
    },
  })
);

main.append(
  createElement({
    tag: "input",
    eventHandlers: {
      keydown: function (event) {
        if (event.keyCode !== 13 || event.target.value === "") {
          return;
        }

        const newTodo = new Todo(event.target.value);
        currProject.addTodo(newTodo);
        mainUl.addTodo(newTodo.id, newTodo.title);

        event.target.value = "";
      },
    },
  })
);
