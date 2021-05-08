import React from "react";

import {Container,TaskCard,Task,TaskForm} from './style'

 
class ToDoList extends React.Component {
  state = {
    toDo: [],
    textToDo: " ",
    filter: "",
  };

  componentDidUpdate() {
    localStorage.setItem("task", JSON.stringify(this.state.toDo));
  }

  componentDidMount() {
    if (localStorage.getItem("toDo")) {
      this.setState({ toDo: JSON.parse(localStorage.getItem("task")) });
    }
  }

  onChangeInput = (event) => {
    this.setState({ textToDo: event.target.value });
  };

  createTask = () => {

    let taskObject = {
      id: Date.now(),
      text: this.state.textToDo,
      done: false,
    };

    const newTask = [taskObject, ...this.state.toDo];
    this.setState({ toDo: newTask });
  };

  selectTask = (id) => {
    const toDoList = this.state.toDo.map((task) => {
      if (id === task.id) {
        const newToDoList = {
          ...task,
          done: !task.done,
        };
        return newToDoList;
      } else {
        return task;
      }
    });
    this.setState({ toDo: toDoList });
  };

  onChangeFilter = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  render() {
    const options = this.state.toDo.filter((task) => {
      switch (this.state.filter) {
        case "pendentes":
          return !task.done;
        case "completas":
          return task.done;
        default:
          return true;
      }
    });

    return (
      <Container>
        <h1>Lista de toDo</h1>
        <TaskForm>
          <input value={this.state.textToDo} onChange={this.onChangeInput} />
          <button onClick={this.createTask}>Adicionar</button>
        </TaskForm>
        <br />

        <TaskForm>
          <label>filter</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </TaskForm>

        <TaskCard>
          {options.map((task) => {
            return (
              <Task
                done={task.done}
                onClick={() => this.selectTask(task.id)}
              >
                {task.text}
              </Task>
            );
          })}
        </TaskCard>
      </Container>
    );
  }
}

export default ToDoList;
