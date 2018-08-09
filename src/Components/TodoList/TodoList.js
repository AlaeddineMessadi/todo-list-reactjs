import React from 'react';

import './TodoList.css';

const TodoList = (props) => {

  return (
    <div className="main">
      <ul className="list">

        {
          Object.entries(props.todoList).forEach(([taskId, taskObj]) => {

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
