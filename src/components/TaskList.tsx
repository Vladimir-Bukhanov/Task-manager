import type { ITask } from '../types/task'
import TaskItem from './TaskItem'

interface ITaskList {
	tasks: ITask[]
	toggleChange: (id: number) => void
	onDelete: (id: number) => void
}

export default function TaskList ({tasks, toggleChange, onDelete}: ITaskList) {
	<div>
		{tasks.map(task => (
			<TaskItem 
				key={task.id}
				item={task}
				onChange={toggleChange}
				onDelete={onDelete}
			/>
		))}
	</div>
}