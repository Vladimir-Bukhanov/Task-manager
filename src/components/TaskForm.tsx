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
			addTask(title)

		}


	return (
		<form 
			onSubmit={handleSubmit}
		>
			<input 
				type="text" 
				value={title}
				onChange={handleChange}	
			/>
			<button 
				type="submit"
			>
				Add Task
			</button>
			{error && <p>{error}</p>}
		</form>
	)
}