import getRole from '../utils/TokenDecode';
import { Link } from 'react-router-dom';
import { useGetEmployeeListQuery } from '../api/employee/api.employee';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import FilterBar from '../components/employeeList/filterBar';
import plusIcon from '../assets/icons/plus-circle.svg';
import ListCardHead from '../components/employeeList/listHeader';
import ListCard from '../components/employeeList/listCard';
import LibHead from '../components/library/LibHead';
import { useGetAllShelvesQuery } from '../api/library/api.library';
const ShelfDetails = () => {
  const { data = [], isSuccess } = useGetEmployeeListQuery();

  // State to hold all employees
  const [employees, setEmployees] = useState([]);

  // State to hold the current filter
  const filter = useSelector((state) => state.filter.value);

  // State to hold filtered employees
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  // Simulate fetching employees data
  useEffect(() => {
    if (isSuccess) {
      // console.log(data);
      setEmployees(data);
    }
  }, [data, isSuccess]);

  //getting the shelf data
  const { data: ShelvesData } = useGetAllShelvesQuery();
  useEffect(() => {
    console.log(ShelvesData);
  }, [ShelvesData]);

  // Effect to filter employees whenever the employees list or filter changes
  useEffect(() => {
    const filtered_list = employees.filter((employee) => {
      if (filter === 'All') return true;
      return employee.status === filter;
    });
    setFilteredEmployees(filtered_list);
  }, [employees, filter]);
  return (
    <>
      <div className="Dashboard">
        <div className="top-header-employee-list">
          <h1>Shelf List</h1>
          <div className="top-header-components">
            {getRole() === 'ADMIN' ? (
              <Link to="/library/createshelf" style={{ textDecoration: 'none', color: 'black' }}>
                <div className="create-button-emp">
                  <img src={plusIcon} alt="create button" />
                  <span>Create Shelf</span>
                </div>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
        <LibHead heads={['Shelf code', 'Shelf Location', 'Books Count', 'Action']} />
        <div className="employee-list">
          {filteredEmployees.map((employee, index) => (
            <ListCard {...employee} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShelfDetails;
