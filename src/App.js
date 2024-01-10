import {useState} from "react";
import Todo from "./todo";
import TodoForm from "./todoForm";

function App() {
  const [todos,setTodos] = useState([])

  const addTask = (userInput) => {
      if(userInput) {
          const newItem = {
              id: Math.random().toString(36).substring(2,9),
              task: userInput,
              complete: false,
          }
          setTodos([...todos,newItem])
      }
  }

  const removeTask = (id) => {
      // setTodos([...todos.filter((todo) => todo.id !== id )])

      const updatedList = todos.filter((todo) => todo.id !== id);
      console.log(updatedList)
      setTodos([]);
  }

  const handleToggle = (id) => {
      setTodos([
          ...todos.map((todo) =>
            todo.id === id ? {...todo,complete: !todo.complete } : {...todo})
      ])
  }

  return (
    <div className="App">
      <heager>
          <h1>Todo: {todos.length}</h1>
      </heager>
      <TodoForm addTask={addTask}/>
      {todos.map((todo) =>

          (<Todo
                todo={todo}
                key={todo.id + todo.task}
                togleTask={handleToggle}
                removeTask={removeTask}/>
        )
      )}
        <button onClick={removeTask}>del all</button>

    </div>
  );
}

export default App;
