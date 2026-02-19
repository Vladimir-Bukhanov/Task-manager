
import type { SortType } from '../types/sort'

interface ISort {
	onSort: (sortItem: SortType) => void
	currentSort: SortType
}

export default function SortedButtons({onSort, currentSort}: ISort) {
	
	return (
		<div className='flex mb-5'>
			{(["date", "alphabet"] as SortType[]).map(sortItem => 
			<button
				key={sortItem}
				onClick={() => onSort(sortItem)}
				className={`border mr-3 w-26 cursor-pointer hover:border-orange-400 ease duration-200 ${currentSort === sortItem ? 'bg-orange-400 border-orange-400' : ''}`}
			>
				{sortItem}
			</button>
			)}
		</div>
	)
}