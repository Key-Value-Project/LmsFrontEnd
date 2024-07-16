/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router";
import EmployeeForm from "../components/createEmployee/employeeForm";
import fields from "../utils/FormFields";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "../store/employeeReducer";

const EditEmployee = () => {
	let { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const employee = useSelector((state) => state.employees.list.find((emp) => emp.employeeID === parseInt(id)));

	const initialFormState = {...employee};

	const [formState, setFormState] = useState(initialFormState);

	const handleInputChange = (name, value) => {
		console.log(name, value);
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const resetContent = () => {
		navigate("/employee");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateEmployee(formState));
		// dispatch({
		// 	type: "UPDATE_EMPLOYEE",
		// 	payload: formState,
		// });
		alert("Employee Updated Successfully");
	};

	return (
		<>
			<div className="Dashboard">
				<div className="top-header-create-employee">
					<h1>Edit Employee</h1>
				</div>
				<div className="component-create-employee">
					<EmployeeForm
						fields={fields}
						handleSubmit={handleSubmit}
						handleInputChange={handleInputChange}
						resetContent={resetContent}
						isEdit={true}
						empID={id}
						formState={formState}
					/>
				</div>
			</div>
		</>
	);
};

export default EditEmployee;
