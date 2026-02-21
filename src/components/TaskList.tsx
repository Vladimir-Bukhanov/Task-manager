import { AnimatePresence, motion } from 'framer-motion'
import type { ITask } from '../types/task'
import { TaskItem } from './TaskItem'


interface ITaskList {
	tasks: ITask[]
	toggleChange: (id: number) => void
	onDelete: (id: number) => void
	onEdit: (editedTitle: string, id: number) => void
}

export default function TaskList ({tasks, toggleChange, onDelete, onEdit}: ITaskList) {

	if (tasks.length === 0) {
		return <p className='mb-3'>You have no tasks</p>
	}

	return (
		<AnimatePresence>
			{tasks.map(task => (
				<motion.li
					key={task.id}
					className='list-none'
					initial={{ opacity:0, x: 10 }}
					animate={{ opacity:1, x: 0 }}
					exit={{ opacity:0, y:-10 }}
					transition={{ duration: 0.2 }}
				>
					<TaskItem 
						item={task}
						onChange={toggleChange}
						onDelete={onDelete}
						onEdit={onEdit}
					/>
				</motion.li>
			))}
		</AnimatePresence>
	)
}