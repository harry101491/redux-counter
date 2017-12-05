// action creators in the todo list
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, FILTERS } from "./actionTypes";

export const addTodo = (text) => {
    return { type: ADD_TODO, text: text};
}

export const toggleTodo = (index) => {
    return { type: TOGGLE_TODO, index: index };
}

export const setVisibilityFilter = (filter) => {
    return { type: SET_VISIBILITY_FILTER, filter: filter };
}

// import { INCREMENT, DECREMENT } from "./actionTypes";

// // defining the action creators for the counter-redux app
// export const incrementAction = () => {
//     return {
//         type: INCREMENT
//     };
// }

// export const decrementAction = () => {
//     return {
//         type: DECREMENT
//     };
// }