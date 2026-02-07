import Header from "./components/header.jsx";
import { useState } from "react";
import { myList } from "./components/TaskList.jsx";
import TaskItem from "./components/TaskItem.jsx";
import TaskForm from "./components/TaskForm.jsx";


function App() {
  const [items, setItems] = useState(myList);

  const toggleTask = (id)=> {
    setItems(items.map(item =>
      item.id === id ? { ...item, isChecked:!item.isChecked } : item
    ));
  };
  const addTask = (text) => {
    const newTask = {
      id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1,
      text: text,
      isChecked: false
    };
    setItems([...items, newTask]);
  };

  const totalTasks = items.length;
  const completedTasks = items.filter(item => item.isChecked).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div style={{ 
      maxWidth: '500px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Header />
      
      <main>
        <TaskForm onAddTask={addTask} />
        
        <div style={{ 
          backgroundColor: '#0b0a48', 
          padding: '15px', 
          borderRadius: '5px',
          marginBottom: '20px'
        }}>
          <p><strong>Total Tasks:</strong> {totalTasks}</p>
          <p><strong>Completed:</strong> {completedTasks}</p>
          <p><strong>Remaining:</strong> {remainingTasks}</p>
        </div>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {items.map(item => (
            <TaskItem 
              key={item.id} 
              task={item} 
              onToggle={toggleTask}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
