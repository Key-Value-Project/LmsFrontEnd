import { useEffect, useState } from "react";
import "../assets/styles/createEmployee/empcreate.styles.css"
import DropDownMenu from "../components/createEmployee/DropDownMenu.jsx";
import TextField from "../components/createEmployee/TextField.jsx";

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
		id: "address",
		name: "address",
		required: "Address",
		text: "Address",
		Component: TextField,
	},
];

const CreateEmployeeForm = () => {
	// const [data, setData] = useState("");
	const [employeeDetails, setEmployeeDetails] = useState({
		name: "",
		email: "",
		joiningDate: "",
		role: "",
		status: "",
		experience: "",
		address: "",
	});

	useEffect(() => {
		console.log(employeeDetails);
	}
	, [employeeDetails]);

	const handleInputChange = (inputName, inputValue) => {
        setEmployeeDetails(prevDetails => ({
            ...prevDetails,
            [inputName]: inputValue,
        }));
    };
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = document.getElementById("form-create-employee");
		const formData = new FormData(form);
		const data = {};
		for (let [key, value] of formData.entries()) {
			data[key] = value;
		}
		alert(JSON.stringify(data));
	};

	const resetContent = (event) => {
		event.preventDefault();
		const form = document.getElementById("form-create-employee");
		form.reset();
	};

	return (
		<>
			<div className="Dashboard">
				<div className="top-header-create-employee">
					<h1>Create Employee</h1>
				</div>
				<div className="component-create-employee">
					<form id="form-create-employee">
						<div className="form-inputs">
							{fields.map((field) => {
								return (
									<field.Component key={field.id} {...field} employeedetails={handleInputChange} />
								);
							})}
						</div>
						<div className="form-button">
							<button onClick={handleSubmit} type="submit">
								Create
							</button>
							<button onClick={resetContent} type="button">
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CreateEmployeeForm;
