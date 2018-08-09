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

    enterButtonHandler = (event) => {
        // if Enter key or Submit button
        if (event.keyCode === 13 || event.target.type === 'submit') {
            this.props.updateList({checked: false, task: this.state.task});
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
                        onKeyUp={this.enterButtonHandler}
                    />
                    <button onClick={this.enterButtonHandler}>+</button>
                </div>
                <p className="clear-button" onClick={ () => this.props.clearTodoList()}>Clear</p>
            </div>
        );
    }
}

export default Form;