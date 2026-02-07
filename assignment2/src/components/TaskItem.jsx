function TaskItem({ task, onToggle }) {
  return (
    <li style={{ marginBottom: '10px' }}>
      <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={task.isChecked}
          onChange={() => onToggle(task.id)}
          style={{ marginRight: '10px', width: '20px', height: '20px' }}
        />
        <span style={{ 
          textDecoration: task.isChecked ? 'line-through' : 'none',
          fontSize: '18px'
        }}>
          {task.text}
        </span>
      </label>
    </li>
  );
}

export default TaskItem;