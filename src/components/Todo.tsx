import { ITodo } from 'App';
import React, { useCallback } from 'react';
import { useMutation } from 'react-query';

interface Props {
  todo: ITodo;
}
const Todo: React.FC<Props> = ({ todo }) => {
  const deleteTodo = useCallback(() => {
    // mutate todo
  }, [todo]);

  return (
    <ul>
      <li>
        {todo.text} &nbsp;{' '}
        <button type="button" onClick={deleteTodo}>
          삭제하기
        </button>
      </li>
    </ul>
  );
};

export default Todo;
