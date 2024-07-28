import React, { useState } from 'react';
import { TodoInputProps } from '../../types';

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleAdd = () => {
    if (title && description) {
      addTodo({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <header style={{ 
      width: '80%', 
      position: 'fixed', 
      top: 0, 
      left: '50%', 
      transform: 'translateX(-50%)',
      backgroundColor: 'white', 
      padding: '10px', 
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <input 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add Todo Title.." 
          style={{
            flex: 1,
            fontSize: '18px',
            padding: '10px',
            marginRight: '10px',
            borderWidth: '3px',
            border: '3px solid black',
            borderRadius: '4px'
          }}
        />
        <input 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add Todo Description.." 
          style={{
            flex: 1,
            fontSize: '18px',
            padding: '10px',
            marginRight: '10px',
            borderWidth: '3px',
            border: '3px solid black',
            borderRadius: '4px'
          }}
        />
        <button onClick={handleAdd} style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Add
        </button>
      </div>
    </header>
  );
};

export default TodoInput;
