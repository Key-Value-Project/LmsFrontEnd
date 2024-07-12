import DownArrow from "../../assets/icons/down-arrow.svg";

// eslint-disable-next-line react/prop-types
const FilterBar = ({ setFilter }) => {
	const handleFilterChange = (e) => {
		setFilter(e.target.value);
	};

	return (
		<div className="filter-bar">
			<p>Filter By</p>
			<div className="filter-dropdown">
				<select onChange={handleFilterChange}>
					<option value="Name">Name</option>
					<option value="ID">ID</option>
					<option value="Date">Join Date</option>
					<option value="Role">Role</option>
					<option value="Status">Status</option>
				</select>
				<img src={DownArrow} alt="down-arrow" />
			</div>
		</div>
	);
};

export default FilterBar;
