import React from 'react';
import { useRef } from 'react';
import DownArrow from '../../assets/icons/down-arrow.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/filterSlice';

const FilterBar = () => {
  const selectRef = useRef(null);
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter.value);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleImageClick = () => {
    selectRef.current.click();
  };

  return (
    <div className="filter-bar">
      <p>Filter By</p>
      <div className="filter-dropdown">
        <select onChange={handleFilterChange} ref={selectRef} value={currentFilter}>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="In Active">In Active</option>
          <option value="On Leave">On Leave</option>
        </select>
        <img src={DownArrow} alt="down-arrow" onClick={handleImageClick} />
      </div>
    </div>
  );
};

export default FilterBar;
