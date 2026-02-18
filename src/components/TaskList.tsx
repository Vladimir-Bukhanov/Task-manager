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
		<>
			{tasks.map(task => (
				<TaskItem 
					key={task.id}
					item={task}
					onChange={toggleChange}
					onDelete={onDelete}
					onEdit={onEdit}
				/>
			))}
		</>
	)
}