import { memo, useContext, useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext'
import type { ITask } from '../types/task'

interface ITaskItem {
	item: ITask
	onChange: (id: number) => void
	onDelete: (id: number) => void
	onEdit: (editedTitle: string, id: number) => void
}

function TaskItemComponent ({item, onChange, onDelete, onEdit}: ITaskItem) {

	const [isEditing, setIsEditing] = useState<boolean>(false)

	const [editText, setEditText] = useState<string>(item.title)

	const {theme} = useContext(ThemeContext)

	const editTitle = () => {
		onEdit(editText, item.id)
		setIsEditing(false)
	}

	const onCancel = () => {
		setIsEditing(false)
		setEditText(item.title)
	}

	return (
		<div className='flex items-center mb-3 relative'>
			
			{isEditing ? 
				(
					<div className='flex w-full'>
						<input 
							type="text"
							className='outline-0 bg-white text-black pl-3 mr-2 w-[56%]'
							value={editText}
							onChange={e => setEditText(e.target.value)}
						/>
						<div>
							<button
								className={`border px-1 sm:px-0 sm:w-16 mr-2 sm:mr-3 cursor-pointer ease duration-200
								${theme === 'light' ? 'hover:bg-green-400' : 'hover:bg-amber-300'}	
								`}
								onClick={editTitle}
							>
								Save
							</button>
							<button
								className='border px-1 sm:px-0 sm:w-16 cursor-pointer hover:bg-blue-400 ease duration-200'
								onClick={onCancel}
							>
								Cancel
							</button>
						</div>
					</div>
				) : 
				(
				<>
					<input
						className='cursor-pointer scale-120' 
						type="checkbox" 
						checked={item.completed}
						onChange={() => onChange(item.id)}
					/>
					<span 
						className={`mx-3 cursor-pointer 
							${item.completed  ? 'line-through' : ''}
							${theme === "light" && item.completed ? 'text-white/50' : ''}
							${theme === "light" && !item.completed ? 'text-white' : ''}
							${theme === "dark" && item.completed ? 'text-black/60' : ''}
							${theme === "dark" && !item.completed ? 'text-black' : ''}
							`}
						onClick={() => setIsEditing(true)}
					>
						{item.title}
					</span>
					<FaRegTrashAlt
						className='cursor-pointer hover:text-red-500 ease duration-200' 
						onClick={() => onDelete(item.id)}
					/>
				</>
				)
			}
		</div>
	)
}

export const TaskItem = memo(TaskItemComponent)