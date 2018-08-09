import React from 'react';

import './TodoList.css';

const TodoList = (props) => {

  return (
    <div className="main">
      <ul className="list">

        {
          Object.keys(props.todoList).map((taskId) => {
            const taskObj = props.todoList[taskId];
            return (
              <li key={taskId} className={taskObj.checked ? 'checked' : ''}>
                <input type="checkbox" onClick={() => props.checkedToggler(taskId)} />
                <span>{taskObj.task}</span>
                <button className="remove"
                  onClick={() => props.removeFromList(taskId)}
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
