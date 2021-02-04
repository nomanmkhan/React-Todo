import React, {useState} from 'react';
import './App.css';
// mock data 
import data from './data.json';

// components
import Header from './components/Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

 
function App() {

const [toDoList, setToDoList] = useState(data);

        // for checking and unchecking
        const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
          return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
      }
    //   DELETING 
        const handleFilter = () => {
        let filtered = toDoList.filter(task => {
          return !task.complete;
        });
        setToDoList(filtered);
      }

    // ADDING
    const addTask = (userInput) => {
        let copy = [...toDoList];
        copy.push({id: toDoList.length + 1, task: userInput, complete: false });
        setToDoList(copy);
      }


 return (
   <div className="App">
       <Header />
       <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
       <ToDoForm addTask={addTask}/>

       
   </div>
 );
}
 
export default App;






























// import React, { useState } from 'react';
// //mock data
// import data from "./data.json";
// //components
// import Header from "./Header";
// import ToDoList from "./ToDoList";
// import ToDoForm from './ToDoForm';

// function App() {
  
//   const [ toDoList, setToDoList ] = useState(data);

//   const handleToggle = (id) => {
//     let mapped = toDoList.map(task => {
//       return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
//     });
//     setToDoList(mapped);
//   }

//   const handleFilter = () => {
//     let filtered = toDoList.filter(task => {
//       return !task.complete;
//     });
//     setToDoList(filtered);
//   }

//   const addTask = (userInput ) => {
//     let copy = [...toDoList];
//     copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
//     setToDoList(copy);
//   }

//   return (
//     <div className="App">
//       <Header />
//       <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
//       <ToDoForm addTask={addTask}/>
//     </div>
//   );
// }

// export default App;


