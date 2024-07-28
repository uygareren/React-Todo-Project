import React from 'react';
import { Todo, TodoListProps } from '../../types';

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <div style={{
      width: "100%",
      boxSizing: "border-box",
      padding: "10px",
      maxHeight: '400px', 
      overflowY: 'auto', 
    }}>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: '100%',
      }}>
        {todos.map((todo: Todo) => (
          <li key={todo.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            borderBottom: '1px solid #ccc'
          }}>
            <div style={{ padding: '10px', width: '100%' }}>
              <h3 style={{ margin: '0 0 5px 0' }}>{todo.title}</h3>
              <p style={{ margin: '0' }}>{todo.description}</p>
            </div>
            <button 
              onClick={() => deleteTodo(todo.id)}
              style={{
                marginLeft: "10px",
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "4px",
                cursor: "pointer",
              }}>
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
