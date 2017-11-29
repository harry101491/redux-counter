import { INCREMENT, DECREMENT } from "./actionTypes";

// defining the action creators for the counter-redux app
export const incrementAction = () => {
    return {
        type: INCREMENT
    };
}

export const decrementAction = () => {
    return {
        type: DECREMENT
    };
}