import { useContext } from 'react'
import type { FilterType } from '../types/filter'
import { ThemeContext } from '../context/ThemeContext'

interface IFilterButtons {
	onFilterChange: (item: FilterType) => void
	currentBtn: FilterType
}

export default function FilterButtons({onFilterChange, currentBtn}: IFilterButtons) {

	const {theme} = useContext(ThemeContext)

	return (
		<div className='flex mb-5'>
			{(["all", "active", "completed"] as FilterType[]).map(filterBtn => (
				<button
					key={filterBtn}
					className={`w-100 border mr-3 cursor-pointer ease duration-200 
					${currentBtn === filterBtn && theme === "light" ? 'bg-blue-700 border-blue-400' : ''}
					${currentBtn === filterBtn && theme === "dark" ? 'bg-white/60 border-white' : ''} 
					${theme === "light" ? "hover:border-blue-400" : "hover:border-white"}
					`}
					onClick={() => onFilterChange(filterBtn)}
				>
					{filterBtn}
				</button>
			))}
		</div>
	)
}