import { createStore } from 'redux'
import TodosReducer from '../todos/reducer.js'

const store = createStore(TodosReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;