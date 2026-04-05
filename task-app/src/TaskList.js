import React, { Component } from "react";
import "./styles.css";

class TaskList extends Component {
  static tasks = [
    { id: 1, text: "Вивчити React" },
    { id: 2, text: "Написати домашнє завдання" },
    { id: 3, text: "Прочитати документацію" },
  ];

  deleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);
    this.forceUpdate(); 
  };

  render() {
    return (
      <ul>
        {TaskList.tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => this.deleteTask(task.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TaskList;