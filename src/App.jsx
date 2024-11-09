import { useState } from 'react'
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'

function App() {
  const [tasks, setTasks] = useState([]);


  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const handleEdit = (taskId, newText) => {
      setTasks(tasks.map(task =>
        task.id === taskId 
      ? {...task, text: newText}
      : task
      ));
  };

  return (
    <>
      <TaskInput tasks={tasks} setTasks={setTasks}></TaskInput>
      <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit}></TaskList>
    </>
  )
}

export default App
