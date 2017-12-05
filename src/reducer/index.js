// reducers for the todo app
import { FILTERS } from "../actions/actionTypes";

const initialState = { 
    todos: [],
    visibilityFilter: FILTERS.SHOW_ALL
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        
    }
}



// import { INCREMENT, DECREMENT } from "../actions/actionTypes";

// export default (state = 0, action) => {
//     switch(action.type) {
//         case "INCREMENT":
//            return state+1;
//         case "DECREMENT":
//             return state-1;
//         default:
//             return state;
//     }
// }