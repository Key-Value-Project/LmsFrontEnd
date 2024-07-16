/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import "../assets/styles/createEmployee/empcreate.styles.css";
import fields from "../utils/FormFields";
import EmployeeForm from "../components/createEmployee/employeeForm.jsx";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store/employeeReducer.js";

const CreateEmployeeForm = () => {
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
	const dispatch = useDispatch();

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
		dispatch(addEmployee(employeeDetails));
		// dispatch({                               
		// 	type: "ADD_EMPLOYEE",
		// 	payload: employeeDetails,             // depreciated due to the use of redux toolkit
		// });
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
