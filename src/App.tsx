import { useState } from 'react'
import TaskList from './components/TaskList'
import type { ITask } from './types/task'

const initialTasks: ITask[] = [
  {
    id: 1,
    completed: false,
    title: "Workout"
  },
  {
    id: 2,
    completed: true,
    title: "Walk with dog"
  }
]

export default function App() {

  const [tasks, setTasks] = useState<ITask[]>(initialTasks)

  const onDelete = (id: number) => {
    setTasks(prev => prev.filter(task => (
      task.id !== id
    )))
  }

  const toggleCompleted = (id: number) => {
    setTasks(prev => prev.map(task => (
      task.id === id ? {...task, completed: !task.completed} : task
    )))
  }

  return (
    <div>
      <h1>
        Task Manager
      </h1>
      <TaskList
        tasks={tasks}
        onDelete={onDelete}
        toggleChange={toggleCompleted}
        
      />
    </div>
  )
}

