import { FaRegTrashAlt } from 'react-icons/fa'
import type { ITask } from '../types/task'

interface ITaskItem {
	item: ITask
	onChange: (id: number) => void
	onDelete: (id: number) => void
}

export default function TaskItem ({item, onChange, onDelete}: ITaskItem) {


	return (
		<div>
			<input type="checkbox" 
				checked={item.completed}
				onChange={() => onChange(item.id)}
			/>
			<span>{item.title}</span>
			<FaRegTrashAlt 
				onClick={() => onDelete(item.id)}
			/>
		</div>
	)
}