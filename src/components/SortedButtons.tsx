
import { useContext } from 'react'
import type { SortType } from '../types/sort'
import { ThemeContext } from '../context/ThemeContext'

interface ISort {
	onSort: (sortItem: SortType) => void
	currentSort: SortType
}

export default function SortedButtons({onSort, currentSort}: ISort) {
	
	const {theme} = useContext(ThemeContext)

	return (
		<div className='flex mb-5'>
			{(["date", "alphabet"] as SortType[]).map(sortItem => 
			<button
				key={sortItem}
				onClick={() => onSort(sortItem)}
				className={`border mr-3 w-38 cursor-pointer ease duration-200 
				${currentSort === sortItem && theme === "light" ? 'bg-orange-600 border-orange-600' : ''}
				${currentSort === sortItem && theme === "dark" ? 'bg-orange-300 border-orange-300' : ''}
				${theme === "light" ? 'hover:border-orange-600' : 'hover:border-orange-300'}
				`}
			>
				Sorted by {sortItem}
			</button>
			)}
		</div>
	)
}