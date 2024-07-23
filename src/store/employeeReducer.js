// // depreciated due to the use of redux toolkit

// import { createAction, createReducer } from "@reduxjs/toolkit";

// const addEmployee = createAction("ADD_EMPLOYEE");
// const deleteEmployee = createAction("DELETE_EMPLOYEE");
// const updateEmployee = createAction("UPDATE_EMPLOYEE");

// // Sample data
// const employees_list = [
// 	{
// 		employeeID: 1,
// 		employeeName: "Shaheen",
// 		employeeEmail: "shaheen@fun.com",
// 		joiningDate: "2021-09-01",
// 		role: "Software Developer",
// 		status: "Active",
// 		experience: "2 years",
// 		address: "123, ABC Street, XYZ City",
// 		department: "DEV",
// 	},
// 	{
// 		employeeID: 2,
// 		employeeName: "Alex",
// 		employeeEmail: "alex@company.com",
// 		joiningDate: "2020-08-15",
// 		role: "Project Manager",
// 		status: "In Active",
// 		experience: "5 years",
// 		address: "456, DEF Street, XYZ City",
// 		department: "DEV",
// 	},
// 	{
// 		employeeID: 3,
// 		employeeName: "Jordan Son of Duke kazim Ali mohd",
// 		employeeEmail: "jordan@tech.com",
// 		joiningDate: "2019-04-22",
// 		role: "UI/UX Designer",
// 		status: "Active",
// 		experience: "3 years",
// 		address: "789, GHI Street, XYZ City",
// 		department: "IT",
// 	},
// 	{
// 		employeeID: 4,
// 		employeeName: "Casey",
// 		employeeEmail: "a very very long email@innvate.com",
// 		joiningDate: "2022-01-10",
// 		role: "Marketing Specialist",
// 		status: "On Leave",
// 		experience: "1 year",
// 		address: "101, JKL Street, XYZ City",
// 		department: "MKT",
// 	},
// 	{
// 		employeeID: "1",
// 		employeeName: "Morgan",
// 		employeeEmail: "morgan@develop.com",
// 		joiningDate: "2018-07-19",
// 		role: "Backend Developer",
// 		status: "In Active",
// 		experience: "4 years",
// 		address: "112, MNO Street, XYZ City",
// 		department: "DEV",
// 	},
// 	{
// 		employeeID: "1",
// 		employeeName: "Jamie",
// 		employeeEmail: "jamie@create.com",
// 		joiningDate: "2021-03-03",
// 		role: "Frontend Developer",
// 		status: "Active",
// 		experience: "2 years",
// 		address: "131, PQR Street, XYZ City",
// 		department: "DEV",
// 	},
// 	{
// 		employeeID: 5,
// 		employeeName: "Taylor",
// 		employeeEmail: "taylor@solution.com",
// 		joiningDate: "2020-11-12",
// 		role: "Data Analyst",
// 		status: "On Leave",
// 		experience: "2 years",
// 		address: "141, STU Street, XYZ City",
// 		department: "IT",
// 	},
// 	{
// 		employeeID: 6,
// 		employeeName: "Drew",
// 		employeeEmail: "drew@enterprise.com",
// 		joiningDate: "2019-06-08",
// 		role: "System Administrator",
// 		status: "In Active",
// 		experience: "3 years",
// 		address: "151, VWX Street, XYZ City",
// 		department: "IT",
// 	},
// 	{
// 		employeeID: 7,
// 		employeeName: "Pat",
// 		employeeEmail: "pat@network.com",
// 		joiningDate: "2022-02-20",
// 		role: "Network Engineer",
// 		status: "Active",
// 		experience: "1 year",
// 		address: "161, YZA Street, XYZ City",
// 		department: "IT",
// 	},
// 	{
// 		employeeID: 8,
// 		employeeName: "Jordan",
// 		employeeEmail: "jordan@tech.com",
// 		joiningDate: "2019-04-22",
// 		role: "UI/UX Designer",
// 		status: "In Active",
// 		experience: "3 years",
// 		address: "171, BCD Street, XYZ City",
// 		department: "IT",
// 	},
// 	{
// 		employeeID: 9,
// 		employeeName: "Casey",
// 		employeeEmail: "casey@innovate.com",
// 		joiningDate: "2022-01-10",
// 		role: "Marketing Specialist",
// 		status: "On Leave",
// 		experience: "1 year",
// 		address: "181, EFG Street, XYZ City",
// 		department: "MKT",
// 	},
// 	{
// 		employeeID: 10,
// 		employeeName: "Morgan",
// 		employeeEmail: "morgan@develop.com",
// 		joiningDate: "2018-07-19",
// 		role: "Backend Developer",
// 		status: "In Active",
// 		experience: "4 years",
// 		address: "191, HIJ Street, XYZ City",
// 		department: "DEV",
// 	},
// 	{
// 		employeeID: 11,
// 		employeeName: "Jamie",
// 		employeeEmail: "jamie@create.com",
// 		joiningDate: "2021-03-03",
// 		role: "Frontend Developer",
// 		status: "Active",
// 		experience: "2 years",
// 		address: "201, KLM Street, XYZ City",
// 		department: "DEV",
// 	},
// 	{
// 		employeeID: 12,
// 		employeeName: "Sam",
// 		employeeEmail: "sam@cloud.com",
// 		joiningDate: "2021-05-16",
// 		role: "Cloud Solutions Architect",
// 		status: "On Leave",
// 		experience: "2 years",
// 		address: "211, NOP Street, XYZ City",
// 		department: "IT",
// 	},
// ];

// const employeeReducer = createReducer({ list: employees_list, emp_filter: "All" }, (builder) => {
// 	builder.addCase(addEmployee, (state, action) => {
// 		state.list.push(action.payload);
// 	});

// 	builder.addCase(deleteEmployee, (state, action) => {
// 		state.list = state.list.filter((employee) => employee.employeeID !== action.payload);
// 	});

// 	builder.addCase(updateEmployee, (state, action) => {
// 		state.list = state.list.map((employee) => {
// 			if (employee.employeeID === action.payload.employeeID) {
// 				return action.payload;
// 			}
// 			return employee;
// 		});
// 	});
// });

// export { employeeReducer as default, addEmployee, deleteEmployee, updateEmployee };
