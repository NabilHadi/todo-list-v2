import "./style.css";
import { createElement } from "./utils";
import { Todo, Project } from "./models";

const todo1 = new Todo(
  "clean the dishes",
  "clean the dishes twice",
  new Date(),
  0,
  false
);

document.body.append(
  createElement({ tag: "h1", textContent: todo1.title }),
  createElement({ tag: "p", textContent: todo1.description }),
  createElement({ tag: "div", textContent: todo1.dueDate }),
  createElement({ tag: "div", textContent: todo1.priority }),
  createElement({ tag: "div", textContent: "completed: " + todo1.isComplete })
);
