import { useState, type ChangeEvent, type FormEvent } from 'react'

interface ITaskForm {
	addTask: (title: string) => void
}

export default function TaskForm({addTask}: ITaskForm) {

		const [title, setTitle] = useState<string>('')
		const [error, setError] = useState<string>('')
		

		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			setError('')
			setTitle(e.target.value)
		}

		const handleSubmit = (e: FormEvent) => {
			e.preventDefault()

			if (title.trim() === "") {
				setError("You can't add an empty task")
				return
			}

			setError('')
			setTitle('')
			addTask(title)

		}


	return (
		<form 
			onSubmit={handleSubmit}
		>
			<input 
				type="text"
				placeholder='Enter your task...'
				className='w-full text-black bg-white outline-0 rounded mb-3 px-3' 
				value={title}
				onChange={handleChange}	
			/>
			<button 
				type="submit"
				className='border rounded cursor-pointer mb-3 px-3 hover:bg-blue-400 duration-200'
			>
				Add Task
			</button>
			{error && <p className='text-red-500 mt-0 mb-3'>{error}</p>}
		</form>
	)
}