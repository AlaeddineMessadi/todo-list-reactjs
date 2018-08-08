import React, { Component } from 'react';

import './App.css';

/* Components */
import Header from './Components/Header/Header'
import Form from './Components/Widgets/Form/Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList : []
    }
  }

  addTaskToList = (task) => {
    const todoList = [...this.setState.todoList]
    todoList.push(task);

    this.setState({todoList : todoList});
  }

  render() {
    return (
      <section className="wrapper">
        <Header />
        <Form updateList={this.addTaskToList}/>
      </section>
    );
  }
}

export default App;
