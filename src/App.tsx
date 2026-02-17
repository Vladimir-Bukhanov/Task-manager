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
    <div className='w-100 bg-gray-500 rounded p-5 mt-20 mx-auto'>
      <h1 className='text-center mb-3 text-xl'>
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

