import ListCard from "../components/employeeList/listCard.jsx";
import ListCardHead from "../components/employeeList/listHeader.jsx";
import "../assets/styles/employeeList/emplist.styles.css"

const employees = [
	{
		employeeName: "Shaheen",
		employeeID: "shaheen@fun.com",
		joiningDate: "2021-09-01",
		role: "Software Developer",
		status: "Active",
		experience: "2 years",
	},
	{
		employeeName: "Alex",
		employeeID: "alex@company.com",
		joiningDate: "2020-08-15",
		role: "Project Manager",
		status: "In Active",
		experience: "5 years",
	},
	{
		employeeName: "Jordan Son of Duke kazim Ali mohd",
		employeeID: "jordan@tech.com",
		joiningDate: "2019-04-22",
		role: "UI/UX Designer",
		status: "Active",
		experience: "3 years",
	},
	{
		employeeName: "Casey",
		employeeID: "a very very long email@innvate.com",
		joiningDate: "2022-01-10",
		role: "Marketing Specialist",
		status: "On Leave",
		experience: "1 year",
	},
	{
		employeeName: "Morgan",
		employeeID: "morgan@develop.com",
		joiningDate: "2018-07-19",
		role: "Backend Developer",
		status: "In Active",
		experience: "4 years",
	},
	{
		employeeName: "Jamie",
		employeeID: "jamie@create.com",
		joiningDate: "2021-03-03",
		role: "Frontend Developer",
		status: "Active",
		experience: "2 years",
	},
	{
		employeeName: "Taylor",
		employeeID: "taylor@solution.com",
		joiningDate: "2020-11-12",
		role: "Data Analyst",
		status: "On Leave",
		experience: "2 years",
	},
	{
		employeeName: "Drew",
		employeeID: "drew@enterprise.com",
		joiningDate: "2019-06-08",
		role: "System Administrator",
		status: "In Active",
		experience: "3 years",
	},
	{
		employeeName: "Pat",
		employeeID: "pat@network.com",
		joiningDate: "2022-02-20",
		role: "Network Engineer",
		status: "Active",
		experience: "1 year",
	},
	{
		employeeName: "Jordan",
		employeeID: "jordan@tech.com",
		joiningDate: "2019-04-22",
		role: "UI/UX Designer",
		status: "In Active",
		experience: "3 years",
	},
	{
		employeeName: "Casey",
		employeeID: "casey@innovate.com",
		joiningDate: "2022-01-10",
		role: "Marketing Specialist",
		status: "On Leave",
		experience: "1 year",
	},
	{
		employeeName: "Morgan",
		employeeID: "morgan@develop.com",
		joiningDate: "2018-07-19",
		role: "Backend Developer",
		status: "In Active",
		experience: "4 years",
	},
	{
		employeeName: "Jamie",
		employeeID: "jamie@create.com",
		joiningDate: "2021-03-03",
		role: "Frontend Developer",
		status: "Active",
		experience: "2 years",
	},
	{
		employeeName: "Sam",
		employeeID: "sam@cloud.com",
		joiningDate: "2021-05-16",
		role: "Cloud Solutions Architect",
		status: "On Leave",
		experience: "2 years",
	},
];

const EmployeeList = () => {
	return (
		<div className="Dashboard">
			<div className="top-header-create-employee">
				<h1>Employee List</h1>
				<div className="top-header-components">

				</div>
			</div>
			<ListCardHead />
			<div className="employee-list">
				{employees.map((employee, index) => (
					<ListCard key={index} {...employee} />
				))}
			</div>
		</div>
	);
};

export default EmployeeList;
