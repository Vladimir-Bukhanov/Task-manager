import { useContext, useEffect, useState } from 'react'
import TaskList from './components/TaskList'
import type { ITask } from './types/task'
import TaskForm from './components/TaskForm'
import FilterButtons from './components/FilterButtons'
import type { FilterType } from './types/filter'
import type { SortType } from './types/sort'
import SortedButtons from './components/SortedButtons'
import { ThemeContext } from './context/ThemeContext'

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

  const [filter, setFilter] = useState<FilterType>(() => {
    
    return (localStorage.getItem('filter') as FilterType || "all")
  })

  const [sort, setSort] = useState<SortType>("date")

  const {theme, toggleTheme} = useContext(ThemeContext)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('filter', filter)
  }, [filter])

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

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    
    if (sort === "alphabet") {
      return a.title.localeCompare(b.title)
    }
    return b.id - a.id
  })

  const clear = () => {
    setTasks(prev => prev.filter(task => !task.completed))
  }

  const activeTasks = tasks.filter(task => !task.completed).length

  return (
    <div className={`max-w-110 w-full rounded sm:p-5 py-5 px-2 mt-20 mx-auto
    ${theme === "light" ? "bg-gray-600" : "bg-green-500"}`}>
      <h1 className='text-center mb-3 text-xl'>
        Task Manager
      </h1>
      <TaskForm 
        addTask={addTask}
      />
      <TaskList
        tasks={sortedTasks}
        onDelete={onDelete}
        toggleChange={toggleCompleted}
        onEdit={onEdit}
      />
      <FilterButtons 
        onFilterChange={setFilter}
        currentBtn={filter}
      />
      <SortedButtons 
        onSort={setSort}
        currentSort={sort}
      />
      <button
        className={`cursor-pointer border block px-2 ease duration-200 mb-3 ${theme === "light" ? "hover:bg-gray-800 hover:border-gray-200" : "hover:bg-yellow-400 hover:border-yellow-400"}`}
        onClick={clear}
      >
        Clear completed
      </button>
      <button
        className={`mb-3 border px-3 cursor-pointer duration-300 ease w-full
          ${theme === "light" ? "hover:bg-blue-700" : "hover:bg-pink-400 hover:border-pink-400"}`}
        onClick={toggleTheme}
      >
        Toggle theme
      </button>
      <p>You have {activeTasks} active tasks</p>
    </div>
  )
}

