import type { FilterType } from '../types/filter'

interface IFilterButtons {
	onFilterChange: (item: FilterType) => void
}

export default function FilterButtons({onFilterChange}: IFilterButtons) {


	return (
		<div className='flex'>
			{(["all", "active", "completed"] as FilterType[]).map(filterBtn => (
				<button
					key={filterBtn}
					className='w-100 border mr-3 cursor-pointer hover:border-blue-400 ease duration-200'
					onClick={() => onFilterChange(filterBtn)}
				>
					{filterBtn}
				</button>
			))}
		</div>
	)
}