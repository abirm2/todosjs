import { ADDTASK, DELETETASK, DONETASK, EDITTASK } from "./types"


const initialState = {
    todos: [
        {
            id: 1,
            task: 'go to the gym',
            done: false
        },
        {      id:2 ,
            task: 'you should work more in you self ',
            done: false},

            {id: 3,
            task: 'only good vibes  ',
            done: false}
    ]
}
const TodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTASK:
            return {
                 ...state, todos:[...state.todos, action.payload]
            }

           case EDITTASK:
            return {
                 ...state, todos:state.todos.map(el=>el.id===action.id?{...el, task: action.payload}:el)} 
                 case DELETETASK:
                    return {
                         ...state, todos:state.todos.filter (el=>el.id!==action.payload)} 
                         case DONETASK:
                            return {
                                 ...state, 
                                 todos:state.todos.map(el=>el.id===action.payload?{...el, done:!el.done}:el)} 
        default:
            return state
    }
   
}

export default TodosReducer