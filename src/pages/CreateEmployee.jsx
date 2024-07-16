/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../assets/styles/createEmployee/empcreate.styles.css";
import fields from "../utils/FormFields";
import EmployeeForm from "../components/createEmployee/employeeForm.jsx";
import { useNavigate } from "react-router";
import { useAddEmployeeMutation } from "../api/employee/api.employee.jsx";

const CreateEmployeeForm = () => {
	const [addEmployee, { isSuccess, isError, data, error }] = useAddEmployeeMutation();
	const [employeeDetails, setEmployeeDetails] = useState({
		name: "",
		email: "",
		joiningDate: "",
		role: "",
		status: "",
		experience: "",
		address: "",
		pincode: "",
		department: "",
		employeePassword: "",
	});

	const navigate = useNavigate();

	useEffect(() => {
		console.log(employeeDetails);
	}, [employeeDetails]);

	useEffect(() => {
		if (isSuccess) {
			console.log(data);
			navigate("/employee");
		}
		if (isError) {
			console.log(error);
		}
	}, [isSuccess, isError]);

	const handleInputChange = (inputName, inputValue) => {
		setEmployeeDetails((prevDetails) => ({
			...prevDetails,
			[inputName]: inputValue,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, experience, status, address, pincode, department, employeePassword, role } =
			employeeDetails;
		const payload = {
			name,
			email,
			experience: Number(experience),
			status,
			address: {
				line1: address,
				pincode,
			},
			department: {
				name: department,
			},
			password: employeePassword,
			role,
		};
		addEmployee(payload);
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
						isCreate={true}
					/>
				</div>
			</div>
		</>
	);
};

export default CreateEmployeeForm;
