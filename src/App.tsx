import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export interface Todo {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Buy groceries",
      description: "Milk, Bread, Cheese, Eggs, Butter",
    },
    {
      id: 2,
      title: "Call mom",
      description: "Ask how she is doing and update her about the recent events",
    },
    {
      id: 3,
      title: "Finish React project",
      description: "Complete the todo list project for the React course",
    },
    {
      id: 4,
      title: "Workout",
      description: "Go for a 30-minute run and do some strength training",
    },
    {
      id: 5,
      title: "Read a book",
      description: "Read at least 50 pages of 'The Pragmatic Programmer'",
    }
  ]);

  const addTodo = (newTodo: Omit<Todo, 'id'>) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: prevTodos.length + 1, ...newTodo }
    ]);
  };

  const deleteTodo = (id: number) => {
    const newTodoData = todos.filter(item => item.id !== id);
    setTodos(newTodoData);
  };

  return (
    <main style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0', 
      margin: '0'
    }}>
      <TodoInput addTodo={addTodo} />
      <div style={{
         width: '100%',
         maxWidth: '800px',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         boxSizing: 'border-box',
         padding: '10px'
      }}>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </main>
  );
}

export default App;
