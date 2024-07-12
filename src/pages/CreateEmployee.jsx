import { useEffect, useState } from "react";
import "../assets/styles/createEmployee/empcreate.styles.css";
import fields from "../utils/FormFields";
import EmployeeForm from "../components/createEmployee/employeeForm.jsx";

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
	}, [employeeDetails]);

	const handleInputChange = (inputName, inputValue) => {
		setEmployeeDetails((prevDetails) => ({
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
					<EmployeeForm
						fields={fields}
						handleSubmit={handleSubmit}
						handleInputChange={handleInputChange}
						resetContent={resetContent}
					/>
				</div>
			</div>
		</>
	);
};

export default CreateEmployeeForm;
