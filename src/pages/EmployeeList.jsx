/* eslint-disable react/prop-types */
import ListCard from "../components/employeeList/listCard.jsx";
import ListCardHead from "../components/employeeList/listHeader.jsx";
import "../assets/styles/employeeList/emplist.styles.scss";
import FilterBar from "../components/employeeList/filterBar.jsx";
import { useState, useEffect } from "react";
import plusIcon from "../assets/icons/plus-circle.svg";
import { Link } from "react-router-dom";

const EmployeeList = ({ state, dispatch }) => {
	// State to hold all employees
	const [employees, setEmployees] = useState([]);

	// State to hold the current filter
	const [filter, setFilter] = useState("All");

	// State to hold filtered employees
	const [filteredEmployees, setFilteredEmployees] = useState([]);

	// Simulate fetching employees data
	useEffect(() => {
		const fetchEmployees = async () => {
			// Fetch employees from an API or define them here
			console.log(state.employees);
			const employeesData = state.employees;
			setEmployees(employeesData);
		};
		fetchEmployees();
	}, [state.employees]);

	// Effect to filter employees whenever the employees list or filter changes
	useEffect(() => {
		const filtered_list = employees.filter((employee) => {
			if (filter === "All") return true;
			return employee.status === filter;
		});
		setFilteredEmployees(filtered_list);
	}, [employees, filter]);

	return (
		<div className="Dashboard">
			<div className="top-header-employee-list">
				<h1>Employee List</h1>
				<div className="top-header-components">
					<FilterBar setFilter={setFilter} />
					<Link to="create" style={{ textDecoration: "none", color: "black" }}>
						<div className="create-button-emp">
							<img src={plusIcon} alt="create button" />
							<span>Create Employee</span>
						</div>
					</Link>
				</div>
			</div>
			<ListCardHead />
			<div className="employee-list">
				{filteredEmployees.map((employee, index) => (
					<ListCard key={index} {...employee} dispatch={dispatch} />
				))}
			</div>
		</div>
	);
};

export default EmployeeList;
