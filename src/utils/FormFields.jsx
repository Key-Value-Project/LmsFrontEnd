import DropDownMenu from "../components/createEmployee/DropDownMenu";
import TextField from "../components/createEmployee/TextField";

const fields = [
	{
		type: "text",
		id: "name",
		name: "name",
		required: "Name",
		text: "Employee Name",
		Component: TextField,
	},
	{
		type: "email",
		id: "email",
		name: "email",
		required: "Email",
		text: "Employee Email",
		Component: TextField,
	},
	{
		type: "date",
		id: "joining-date",
		name: "joining-date",
		text: "Join Date",
		Component: TextField,
	},
	{
		id: "role",
		name: "role",
		options: [
			{ value: "Software Developer", label: "Software Developer" },
			{ value: "Quality Assurance", label: "Quality Assurance" },
			{ value: "Project Manager", label: "Project Manager" },
			{ value: "Business Analyst", label: "Business Analyst" },
		],
		Component: DropDownMenu,
	},
	{
		id: "status",
		name: "Status",
		options: [
			{ value: "Active", label: "Active" },
			{ value: "Inactive", label: "Inactive" },
			{ value: "On Leave", label: "On Leave" },
		],
		Component: DropDownMenu,
	},
	{
		type: "text",
		id: "experience",
		name: "experience",
		required: "Experience",
		text: "Experience",
		Component: TextField,
	},
	{
		type: "text",
		id: "department",
		name: "department",
		required: "Department",
		text: "Department",
		Component: TextField,
	
	},
	{
		type: "text",
		id: "address",
		name: "address",
		required: "Address",
		text: "Address",
		Component: TextField,
	},
];

export default fields;