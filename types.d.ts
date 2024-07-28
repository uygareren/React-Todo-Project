export interface Todo {
    id: number;
    title: string;
    description: string;
  }
  
  export interface TodoInputProps {
    addTodo: (newTodo: Omit<Todo, 'id'>) => void;
  }
  
  export interface TodoListProps {
    todos: Todo[];
    deleteTodo: (id: number) => void;
  }
  