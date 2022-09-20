import { createElement } from "./utils";

class HomePageView {
  constructor(root, projects = []) {
    this.root = root;
    this.projects = projects;
    this.pageContainer = createElement({
      attributes: {
        id: "page-container",
      },
    });

    this.sideBarContaier = createElement({
      attributes: {
        id: "side-bar",
      },
    });

    this.mainContainer = createElement({
      attributes: {
        id: "main-container",
      },
    });

    this.pageContainer.append(this.sideBarContaier, this.mainContainer);
    this.root.append(this.pageContainer);
  }

  render(currProject) {
    this.renderSideBar(currProject.id);
    this.renderMainContent(currProject);
  }

  renderSideBar(currProjectId) {
    if (!this.sideBarUl) {
      this.sideBarUl = createElement({
        tag: "ul",
        attributes: {
          id: "projects-list",
        },
      });
      this.sideBarContaier.appendChild(this.sideBarUl);
    } else {
      this.sideBarUl.innerHTML = "";
    }

    this.projects.forEach((project) => {
      const item = createElement({
        tag: "li",
        textContent: project.title,
        dataset: {
          id: project.id,
        },
      });

      if (project.id === currProjectId) {
        console.log(project);
        item.classList.add("active-project");
      }

      this.sideBarUl.appendChild(item);
    });
  }

  renderMainContent(project) {
    if (!this.mainContentUl) {
      this.mainContentUl = createElement({
        tag: "ul",
        attributes: {
          id: "todos-list",
        },
      });
      this.mainContainer.appendChild(this.mainContentUl);
    } else {
      this.mainContentUl.innerHTML = "";
    }

    project.getAllTodos().forEach((todo) => {
      const item = createElement({
        tag: "li",
        dataset: {
          id: todo.id,
          isComplete: todo.isComplete,
        },
      });

      const todoTitle = createElement({
        tag: "div",
        classNames: ["todo-title"],
        textContent: todo.title,
      });

      const todoDueDate = createElement({
        tag: "div",
        classNames: ["todo-due-date"],
        textContent: todo.dueDate,
      });

      item.append(todoTitle, todoDueDate);
      this.mainContentUl.appendChild(item);
    });
  }
}

export { HomePageView };
