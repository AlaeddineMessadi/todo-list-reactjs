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
        event.preventDefault();
        if (event.keyCode === 13){
            this.props.updateList(this.state.task);
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
                    <button type="submit">+</button>
                </div>
                <p className="clear-button">Clear</p>
            </div>
        );
    }
}

export default Form;