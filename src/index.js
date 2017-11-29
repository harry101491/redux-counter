import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./components/Counter";
import reducer from "./reducer";

// create the redux store
const store = createStore(reducer);
const subscribeListener = () => {
    ReactDOM.render(
        <Counter 
            value={ store.getState() }
            onIncrement={ () => store.dispatch({ type: "INCREMENT"}) }
            onDecrement={ () => store.dispatch({ type: "DECREMENT"}) }
        />
        ,
        document.getElementById("root")
    );
};

// first time rendering of the component 
subscribeListener();

// every time whenever an action is dispatched to the reducer
store.subscribe(subscribeListener);