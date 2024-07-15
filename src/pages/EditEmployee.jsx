/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router";
import EmployeeForm from "../components/createEmployee/employeeForm";
import fields from "../utils/FormFields";
import { useState } from "react";

const EditEmployee = ({ state, dispatch }) => {
	let { id } = useParams();
	const navigate = useNavigate();

	const initialFormState = {
		// get copy of employee object from state having employeeID same as id
		...state.employees.find((employee) => employee.employeeID === parseInt(id)),
	};

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
		dispatch({
			type: "UPDATE_EMPLOYEE",
			payload: formState,
		});
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
