import { v4 as uuidv4 } from "uuid";

class Todo {
  constructor(_title, _description, _dueDate, _priority, _isComplete) {
    Object.defineProperties(this, {
      id: {
        value: uuidv4(),
        enumerable: true,
      },
      title: {
        value: _title,
        enumerable: true,
      },
      description: {
        value: _description,
        enumerable: true,
      },
      dueDate: {
        value: _dueDate,
        enumerable: true,
      },
      priority: {
        value: _priority,
        enumerable: true,
      },
      isComplete: {
        value: _isComplete,
        enumerable: true,
      },
    });
  }
}

class Project {
  #todos;

  constructor(_title, _todos = []) {
    Object.defineProperties(this, {
      id: {
        value: uuidv4(),
        enumerable: true,
      },
      title: {
        value: _title,
        enumerable: true,
      },
    });

    this.#todos = _todos;
  }

  bindOnTodoChangeHandler(handler) {
    this.onTodosChange = handler;
  }

  addTodo(todo) {
    this.#todos.push(todo);

    this.onTodosChange(this.#todos);
  }

  deleteTodo(id) {
    this.#todos = this.#todos.filter((todo) => {
      if (todo.id !== id) {
        return true;
      }
    });

    this.onTodosChange(this.#todos);
  }

  changeTodo(id, newState = {}) {
    const todoIndex = this.#todos.findIndex((todo) => {
      return todo.id === id;
    });

    if (todoIndex) {
      this.#todos[todoIndex] = { ...this.#todos[todoIndex], ...newState };
      this.onTodosChange(this.#todos);
    }
  }

  getTodo(id) {
    return this.#todos.find((todo) => todo.id === id);
  }

  getAllTodos() {
    return [...this.#todos];
  }
}

export { Todo, Project };
