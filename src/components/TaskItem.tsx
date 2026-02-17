import { FaRegTrashAlt } from 'react-icons/fa'
import type { ITask } from '../types/task'

interface ITaskItem {
	item: ITask
	onChange: (id: number) => void
	onDelete: (id: number) => void
}

export default function TaskItem ({item, onChange, onDelete}: ITaskItem) {


	return (
		<div className='flex items-center mb-3'>
			<input
				className='cursor-pointer' 
				type="checkbox" 
				checked={item.completed}
				onChange={() => onChange(item.id)}
			/>
			<span className={`mx-3 cursor-pointer ${item.completed ? 'line-through text-white/50' : ''}`}
			>
				{item.title}
			</span>
			<FaRegTrashAlt
				className='cursor-pointer hover:text-red-500 ease duration-200' 
				onClick={() => onDelete(item.id)}
			/>
		</div>
	)
}