import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <div>
                <p> 
                    Current Value: { this.props.value }
                    { " " }
                    <button onClick={ this.props.onIncrement }>
                        +
                    </button>
                    { " " }
                    <button onClick={ this.props.onDecrement }>
                        -
                    </button>
                </p>
            </div>
        );
    }
}

// type declerations of the properties in the counter component
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter;
