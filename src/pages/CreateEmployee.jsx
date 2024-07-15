/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import "../assets/styles/createEmployee/empcreate.styles.css";
import fields from "../utils/FormFields";
import EmployeeForm from "../components/createEmployee/employeeForm.jsx";
import { useNavigate } from "react-router";

const CreateEmployeeForm = ({ dispatch }) => {
	const [employeeDetails, setEmployeeDetails] = useState({
		employeeID: uuidv4(),
		employeeName: "",
		employeeEmail: "",
		joiningDate: "",
		role: "",
		status: "",
		experience: "",
		address: "",
		department: "",
	});

	const navigate = useNavigate();

	useEffect(() => {
		console.log(employeeDetails);
	}, [employeeDetails]);

	const handleInputChange = (inputName, inputValue) => {
		setEmployeeDetails((prevDetails) => ({
			...prevDetails,
			[inputName]: inputValue,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: "ADD_EMPLOYEE",
			payload: employeeDetails,
		});
		alert("Employee Added Successfully");
	};

	const resetContent = () => {
		navigate("/employee");
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
						formState={employeeDetails}
					/>
				</div>
			</div>
		</>
	);
};

export default CreateEmployeeForm;
