import React from 'react';

import './TodoList.css';

const TodoList = (props) => {

  return (
    <div className="main">
      <ul className="list">

        {
          Object.keys(props.todoList).map((index) => {
            const taskObj = props.todoList[index];
            return (
              <li key={taskObj.id} className={taskObj.checked ? 'checked' : ''}>
                <input type="checkbox" onClick={() => props.checkedToggler(taskObj.id)} />
                <span>{taskObj.task}</span>
                <button className="remove"
                  onClick={() => props.removeFromList(taskObj.id)}
                >x</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );

}

export default TodoList;
