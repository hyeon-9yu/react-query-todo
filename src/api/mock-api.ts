import { ITodo } from 'App';
import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { v4 as uuid } from 'uuid';

const getTodos = (): ITodo[] => JSON.parse(localStorage.getItem('todos') || '[]');
const saveTodos = (todos: ITodo[]) => localStorage.setItem('todos', JSON.stringify(todos));

export const runMock = () => {
  const mock = new MockAdapter(axios, { delayResponse: 3000 });

  mock.onGet('/todos').reply(200, { todos: getTodos() });

  mock.onDelete('/todos').reply((req: AxiosRequestConfig): [number, any?] => {
    const data = JSON.parse(req.data);
    const todos = getTodos();
    if (typeof data.id !== 'string') {
      return [400, { message: '유효하지 않은 값입니다.' }];
    }

    const idx = todos.findIndex(({ id }) => id === data.id);
    if (idx === -1) {
      return [400, { message: '삭제하려는 값이 존재하지 않습니다.' }];
    }

    todos.splice(idx, 1);
    saveTodos(todos);
    return [204];
  });

  mock.onPost('/todos').reply((req: AxiosRequestConfig): [number, any?] => {
    const data = JSON.parse(req.data);
    const todos = getTodos();
    if (!data.text) {
      return [400, { message: '유효하지 않은 값입니다.' }];
    }

    const newTodo = { id: uuid(), text: data.text };
    saveTodos([...todos, { id: uuid(), text: data.text }]);
    return [201, newTodo];
  });
};
