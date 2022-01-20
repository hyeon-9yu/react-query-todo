import React, { useCallback, useState } from 'react';

const AddTodo: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const addTodo = useCallback(() => {
    // mutate todo
  }, [inputText]);

  return (
    <div>
      <input type="text" onChange={handleInput} />
      <button type="button" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
