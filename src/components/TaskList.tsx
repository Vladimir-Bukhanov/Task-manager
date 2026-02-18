import type { ITask } from '../types/task'
import { TaskItem } from './TaskItem'


interface ITaskList {
	tasks: ITask[]
	toggleChange: (id: number) => void
	onDelete: (id: number) => void
}

export default function TaskList ({tasks, toggleChange, onDelete}: ITaskList) {

	if (tasks.length === 0) {
		return <p>You have no tasks</p>
	}

	return (
		<>
			{tasks.map(task => (
				<TaskItem 
					key={task.id}
					item={task}
					onChange={toggleChange}
					onDelete={onDelete}
				/>
			))}
		</>
	)
}