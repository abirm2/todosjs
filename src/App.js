
import './App.css';
import React from 'react'
import TodosList from './componenets/TodosList.js';
import  AddTask  from './componenets/AddTask.js';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="App">
      <h1> MY TODO LIST </h1>
       <AddTask/>
      <TodosList />
  
     
    </div>
  );
}

export default App;
