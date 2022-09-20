import "./style.css";
import { Todo, Project } from "./models";
import { TodoView } from "./views";

const todo1 = new Todo(
  "clean the dishes",
  "clean the dishes twice",
  new Date(),
  0,
  false
);

// const todo2 = new Todo("clean", "clean twice", new Date(), 1, true);

document.body.append(new TodoView(todo1).getView());
