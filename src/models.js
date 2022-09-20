import { v4 as uuidv4 } from "uuid";

class Todo {
  constructor(title, description, dueDate, priority, isComplete) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isComplete = isComplete;
  }
}

class Project {
  constructor(title, todos = []) {
    this.id = uuidv4();
    this.title = title;
    this.todos = todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => {
      if (todo.id !== id) {
        return true;
      }
    });
  }

  changeTodo(id, modifiedTodo) {
    const todoIndex = this.todos.findIndex((todo) => {
      return todo.id === id;
    });

    if (todoIndex) {
      this.todos[todoIndex] = modifiedTodo;
    }
  }

  getTodo(id) {
    return this.todos.find((todo) => todo.id === id);
  }

  getAllTodos() {
    return this.todos;
  }
}

export { Todo, Project };
