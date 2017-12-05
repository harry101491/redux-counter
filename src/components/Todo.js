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
                onClick={ this.props.onClick() }
                style={{ textDecoration: this.props.completed ? "line-through" : "none" }}
            >
                {this.props.text}
            </li>
        );
    }
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired 
}

export default Todo;