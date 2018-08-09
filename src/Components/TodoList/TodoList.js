import React, { Component } from 'react';

import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    }
  }

  checkedToggler = () => {
    return this.setState({ checked: !this.state.checked });
  }




  render() {
    return (
      <div className="main">
        <ul className="list">

          {
            this.props.todoList.map((task, index) => {
              return (
                <li key={index} className={this.state.checked ? 'checked' : ''}>
                  <input type="checkbox" onClick={this.checkedToggler} />
                  <span>{task}</span>
                  <button className="remove"
                    onClick={() => this.props.removeFromList(index)}
                  >x</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
