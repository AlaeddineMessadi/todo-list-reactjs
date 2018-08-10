import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }

    }

    updateTask = (event) => {
        this.setState({
            task: event.target.value
        })
    }

    addTaskToListHandler = (event) => {
        if (!this.state.task) return;
        
        // if Enter key or Submit button
        if (event.keyCode === 13 || event.target.type === 'submit') {
            this.props.addTaskToList(this.state.task);
            this.setState({ task: ''})
        }
    }

    render() {
        return (
            <div className="main-form">
                <div className="form-input">
                    <input
                        type="text"
                        name="input"
                        placeholder="What needs to be done today?"
                        value={this.state.task}
                        onChange={this.updateTask}
                        onKeyUp={this.addTaskToListHandler}
                    />
                    <button onClick={this.addTaskToListHandler}>+</button>
                </div>
                <p className="clear-button" onClick={ () => this.props.clearTodoList()}>Clear</p>
            </div>
        );
    }
}

export default Form;