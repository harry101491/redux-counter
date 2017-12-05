import React, { Component } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import _ from "lodash";

class TodoList extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                { _.map(this.props.todos, (todo, index) => {
                        <Todo key={index} {...todo} onClick={() => this.props.onTodoClick(index)} />
                    })
                }
            </ul>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList;