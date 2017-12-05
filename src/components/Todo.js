// Todo Component ( Presentational Component ).
import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
    // constructure
    constructor(props) {
        super(props);
    }

    // render function
    render() {
        return (
            <li 
                onClick={ this.props.onTodoClick() }
                style={{ textDecoration: this.props.completed ? "line-through" : "none" }}
            >
                {this.props.text}
            </li>
        );
    }
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    onTodoClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired 
}

export default Todo;