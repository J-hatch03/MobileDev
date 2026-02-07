import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (newTask) => {
    newTask.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(newTask) => setInputValue(newTask.target.value)}
        placeholder="Add a new task..."
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '70%',
          marginRight: '10px'
        }}
      />
      <button 
        type="submit"
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;