import React, { Component } from 'react';

import './App.css';

/* Components */
import Header from '../../Components/Header/Header'
import Form from '../../Components/Form/Form';
import TodoList from '../../Components/TodoList/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: ['Go to gym', 'Clean house']
    }
  }

  addTaskToList = (task) => {
    console.log('Add task: before: ', this.state.todoList)

    const todoListClone = [...this.state.todoList]
    todoListClone.push(task);

    this.setState({ todoList: todoListClone });
    console.log('Add task: After: ', this.state.todoList)

  }

  removeFromListByIndex = (index) => {
    const todoListClone = [...this.state.todoList];
    todoListClone.splice(index, 1);

    this.setState({ todoList: todoListClone });
  }

  clearTodoList = () => (this.setState({ todoList: [] }))

  render() {
    return (
      <section className="wrapper">
        <Header />
        <Form
          updateList={this.addTaskToList}
          clearTodoList={this.clearTodoList}
        />
        <TodoList
          todoList={this.state.todoList}
          removeFromList={this.removeFromListByIndex}
        />
      </section>
    );
  }
}

export default App;
