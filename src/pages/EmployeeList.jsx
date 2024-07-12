import ListCard from "../components/employeeList/listCard.jsx";
import ListCardHead from "../components/employeeList/listHeader.jsx";
import "../assets/styles/employeeList/emplist.styles.scss";
import FilterBar from "../components/employeeList/filterBar.jsx";
import { useState, useEffect } from "react";

const employees_list = [
	{	
		employeeID: 1,
		employeeName: "Shaheen",
		employeeEmail: "shaheen@fun.com",
		joiningDate: "2021-09-01",
		role: "Software Developer",
		status: "Active",
		experience: "2 years",
	},
	{
		employeeID: 2,
		employeeName: "Alex",
		employeeEmail: "alex@company.com",
		joiningDate: "2020-08-15",
		role: "Project Manager",
		status: "In Active",
		experience: "5 years",
	},
	{
		employeeID: 3,
		employeeName: "Jordan Son of Duke kazim Ali mohd",
		employeeEmail: "jordan@tech.com",
		joiningDate: "2019-04-22",
		role: "UI/UX Designer",
		status: "Active",
		experience: "3 years",
	},
	{
		employeeID: 4,
		employeeName: "Casey",
		employeeEmail: "a very very long email@innvate.com",
		joiningDate: "2022-01-10",
		role: "Marketing Specialist",
		status: "On Leave",
		experience: "1 year",
	},
	{
		employeeID: "1",
		employeeName: "Morgan",
		employeeEmail: "morgan@develop.com",
		joiningDate: "2018-07-19",
		role: "Backend Developer",
		status: "In Active",
		experience: "4 years",
	},
	{
		employeeID: "1",
		employeeName: "Jamie",
		employeeEmail: "jamie@create.com",
		joiningDate: "2021-03-03",
		role: "Frontend Developer",
		status: "Active",
		experience: "2 years",
	},
	{
		employeeID: 5,
		employeeName: "Taylor",
		employeeEmail: "taylor@solution.com",
		joiningDate: "2020-11-12",
		role: "Data Analyst",
		status: "On Leave",
		experience: "2 years",
	},
	{
		employeeID: 6,
		employeeName: "Drew",
		employeeEmail: "drew@enterprise.com",
		joiningDate: "2019-06-08",
		role: "System Administrator",
		status: "In Active",
		experience: "3 years",
	},
	{
		employeeID: 7,
		employeeName: "Pat",
		employeeEmail: "pat@network.com",
		joiningDate: "2022-02-20",
		role: "Network Engineer",
		status: "Active",
		experience: "1 year",
	},
	{
		employeeID: 8,
		employeeName: "Jordan",
		employeeEmail: "jordan@tech.com",
		joiningDate: "2019-04-22",
		role: "UI/UX Designer",
		status: "In Active",
		experience: "3 years",
	},
	{
		employeeID: 9,
		employeeName: "Casey",
		employeeEmail: "casey@innovate.com",
		joiningDate: "2022-01-10",
		role: "Marketing Specialist",
		status: "On Leave",
		experience: "1 year",
	},
	{
		employeeID: 10,
		employeeName: "Morgan",
		employeeEmail: "morgan@develop.com",
		joiningDate: "2018-07-19",
		role: "Backend Developer",
		status: "In Active",
		experience: "4 years",
	},
	{
		employeeID: 11,
		employeeName: "Jamie",
		employeeEmail: "jamie@create.com",
		joiningDate: "2021-03-03",
		role: "Frontend Developer",
		status: "Active",
		experience: "2 years",
	},
	{
		employeeID: 12,
		employeeName: "Sam",
		employeeEmail: "sam@cloud.com",
		joiningDate: "2021-05-16",
		role: "Cloud Solutions Architect",
		status: "On Leave",
		experience: "2 years",
	},
];

const EmployeeList = () => {
	// State to hold all employees
	const [employees, setEmployees] = useState([]);

	// State to hold the current filter
	const [filter, setFilter] = useState("Name");

	// State to hold filtered employees
	const [filteredEmployees, setFilteredEmployees] = useState([]);

	// Simulate fetching employees data
	useEffect(() => {
		const fetchEmployees = async () => {
			// Fetch employees from an API or define them here
			const employeesData = employees_list;
			setEmployees(employeesData);
		};
		fetchEmployees();
	}, []);

	// Effect to filter employees whenever the employees list or filter changes
	useEffect(() => {
		const filtered_list = employees.sort((a, b) => {
			if (filter === "Name") {
				return a.employeeName.localeCompare(b.employeeName);
			} else if (filter === "ID") {
				return a.employeeEmail.localeCompare(b.employeeEmail);
			} else if (filter === "Date") {
				return new Date(a.joiningDate) - new Date(b.joiningDate);
			} else if (filter === "Role") {
				return a.role.localeCompare(b.role);
			} else if (filter === "Status") {
				return a.status.localeCompare(b.status);
			}
		});
		setFilteredEmployees(filtered_list);
	}, [employees, filter]);

	return (
		<div className="Dashboard">
			<div className="top-header-employee-list">
				<h1>Employee List</h1>
				<div className="top-header-components">
					<FilterBar setFilter={setFilter} />
				</div>
			</div>
			<ListCardHead />
			<div className="employee-list">
				{filteredEmployees.map((employee, index) => (
					<ListCard key={index} {...employee} />
				))}
			</div>
		</div>
	);
};

export default EmployeeList;
