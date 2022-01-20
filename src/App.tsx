import AddTodo from '@components/AddTodo';
import Loader from '@components/Loader';
import Todo from '@components/Todo';
import React from 'react';
import { useQuery } from 'react-query';

export interface ITodo {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const { data } = useQuery<{ todos: ITodo[] }>(['/todos']);

  return (
    <div>
      <h1>Todo</h1>
      {data?.todos.map((todo) => (
        <Todo todo={todo} />
      ))}
      <AddTodo />
    </div>
  );
};

export default App;
