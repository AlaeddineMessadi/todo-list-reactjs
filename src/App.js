import React, { Component } from 'react';

import './App.css';

/* Components */
import Header from './Components/Header/Header'
import Form from './Components/Form/Form';
import TodoList from './Components/TodoList/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: []
    }
  }

  addTaskToList = (task) => {
    const todoList = [...this.state.todoList]
    todoList.push(task);

    this.setState({ todoList: todoList });
    console.log(this.state)
  }

  removeFromListByIndex = (index) => {
    const todoList = [...this.state.todoList];
    todoList.splice(index, 1);
    
    this.setState({ todoList: todoList });
  }

  render() {
    return (
      <section className="wrapper">
        <Header />
        <Form updateList={this.addTaskToList} />
        <TodoList
          todoList={this.state.todoList}
          removeFromList={this.removeFromListByIndex}
        />
      </section>
    );
  }
}

export default App;
