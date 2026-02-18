import { useEffect, useState } from 'react'
import TaskList from './components/TaskList'
import type { ITask } from './types/task'
import TaskForm from './components/TaskForm'
import FilterButtons from './components/FilterButtons'
import type { FilterType } from './types/filter'

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

  const [tasks, setTasks] = useState<ITask[]>(() => {
    
    const saved = localStorage.getItem('tasks')

    if (saved) {
      const parsed = JSON.parse(saved)
      return parsed.length > 0 ? parsed : initialTasks
    }

    return initialTasks

  })

  const [filter, setFilter] = useState<FilterType>("all")

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

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

  const addTask = (title: string) => {
   
    const newTask: ITask = {
      id: Date.now(),
      completed: false,
      title
    }

    setTasks(prev => [...prev, newTask])
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") {
      return !task.completed
    } else if (filter === "completed") {
      return task.completed
    } else {
      return true
    }

  })

  const onEdit = (editedTitle: string, id: number) => {
    setTasks(prev => prev.map(task => (
      task.id === id ? {...task, title: editedTitle} : task
    )))
  }

  const clear = () => {
    setTasks(prev => prev.filter(task => !task.completed))
  }


  return (
    <div className='w-100 bg-gray-500 rounded p-5 mt-20 mx-auto'>
      <h1 className='text-center mb-3 text-xl'>
        Task Manager
      </h1>
      <TaskForm 
        addTask={addTask}
      />
      <TaskList
        tasks={filteredTasks}
        onDelete={onDelete}
        toggleChange={toggleCompleted}
        onEdit={onEdit}
      />
      <FilterButtons 
        onFilterChange={setFilter}
        currentBtn={filter}
      />
      <button
        className='cursor-pointer border px-2 hover:bg-gray-400 ease duration-200 mb-3'
        onClick={clear}
      >
        Clear completed
      </button>
    </div>
  )
}

