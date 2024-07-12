import { useRef } from "react";
import DownArrow from "../../assets/icons/down-arrow.svg";

// eslint-disable-next-line react/prop-types
const FilterBar = ({ setFilter }) => {
	const selectRef = useRef(null);

	const handleFilterChange = (e) => {
		setFilter(e.target.value);
	};

	const handleImageClick = () => {
		selectRef.current.click();
	}

	return (
		<div className="filter-bar">
			<p>Filter By</p>
			<div className="filter-dropdown">
				<select onChange={handleFilterChange} ref={selectRef}>
					<option value="All">All</option>
					<option value="Active">Active</option>
					<option value="In Active">In Active</option>
					<option value="On Leave">On Leave</option>
					{/* <option value="Role">Role</option> */}
					{/* <option value="Status">Status</option> */}
				</select>
				<img src={DownArrow} alt="down-arrow" onClick={handleImageClick}/>
			</div>
		</div>
	);
};

export default FilterBar;
