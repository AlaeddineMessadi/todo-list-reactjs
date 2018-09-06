import React, { Component } from 'react';

import './App.css';

/* Components */
import Header from '../../Components/Header/Header'
import Form from '../../Components/Form/Form';
import TodoList from '../../Components/TodoList/TodoList';

import idGenerator from '../../Utils/idGenerator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        {
          id: 'A3eEpk',
          checked: false,
          task: 'Smile :)'
        },
        {
          id : 'rEut8m',
          checked: true,
          task: 'Clean house'
        }
      ]
    }
  }

  addTaskToList = (task) => {
    let taskId;
    do {
      taskId = idGenerator(6);
    } while (taskId in this.state.todoList)

    let todoListClone = [
      ...this.state.todoList,
      {
        id: taskId,
        checked: false,
        task: task
      }
    ];

    this.setState({todoList: todoListClone})
  }

  removeFromListByIndex = (taskId) => {
    const todoListClone = [...this.state.todoList];
    const foundTaskIdex = todoListClone.findIndex(o => o.id === taskId)
    todoListClone.splice(foundTaskIdex, 1)

    this.setState({ todoList: todoListClone });
  }

  clearTodoList = () => (this.setState({ todoList: [] }))

  checkedToggler = (taskId) => {
    const todoListClone = [...this.state.todoList];
    const indexFound = todoListClone.findIndex(o => o.id === taskId)

    todoListClone[indexFound].checked = !todoListClone[indexFound].checked;

    this.setState({
      todoList: todoListClone
    })
  }

  render() {
    return (
      <section className="wrapper">
        <Header />
        <Form
          addTaskToList={this.addTaskToList}
          clearTodoList={this.clearTodoList}
        />
        <TodoList
          todoList={this.state.todoList}
          removeFromList={this.removeFromListByIndex}
          checkedToggler={this.checkedToggler}
        />
      </section>
    );
  }
}

export default App;
