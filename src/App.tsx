import AddTodo from '@components/AddTodo';
import Todo from '@components/Todo';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

export interface ITodo {
  id: string;
  text: string;
}

const post = async () => {
  const data = await axios.post('/todos', { text: 'hihi' });
};

const App: React.FC = () => {
  const { data } = useQuery<{ todos: ITodo[] }>(['/todos']);
  console.log(data?.todos);

  return (
    <div>
      <h1>Todo</h1>
      {data?.todos.map((todo) => (
        <Todo todo={todo} />
      ))}
      <AddTodo />
      <button onClick={post}>d</button>
    </div>
  );
};

export default App;
