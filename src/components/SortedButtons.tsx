
import type { SortType } from '../types/sort'

interface ISort {
	onSort: (sortItem: SortType) => void
}

export default function SortedButtons({onSort}: ISort) {
	
	return (
		<div>
			{(["date", "alphabet"] as SortType[]).map(sortItem => 
			<button
				key={sortItem}
				onClick={() => onSort(sortItem)}
			>
				{sortItem}
			</button>
			)}
		</div>
	)
}