import React, { Component } from "react";

class List extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const arr = [1, 2, 3, 4];
        const listElements = arr.map((value, index) => {
            return <li>{value}</li>;
        });
        return(
            <div>
                <ul>{listElements}</ul>
            </div>
         );
    }
}

export default List;