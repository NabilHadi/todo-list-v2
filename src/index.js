import { HomePageView } from "./homePage";
import "./style.css";
import { createElement } from "./utils";
import { Project, Todo } from "./models";

const project1 = new Project("first project", [
  new Todo("hello world"),
  new Todo("hello world2"),
  new Todo("hello worl3"),
]);
const project2 = new Project("2 project");
const project3 = new Project("3 project");
const project4 = new Project("4 project");

const projects = [project1, project2, project3, project4];

const root = createElement({
  tag: "div",
  attributes: {
    id: "root",
  },
});

const homePage = new HomePageView(root, projects);
homePage.render(project1);

document.body.append(root);
