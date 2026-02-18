import type { FilterType } from '../types/filter'

interface IFilterButtons {
	onFilterChange: (item: FilterType) => void
}

export default function FilterButtons({onFilterChange}: IFilterButtons) {


	return (
		<div>
			{(["all", "active", "completed"] as FilterType[]).map(filterBtn => (
				<button
					key={filterBtn}
					onClick={() => onFilterChange(filterBtn)}
				>
					{filterBtn}
				</button>
			))}
		</div>
	)
}