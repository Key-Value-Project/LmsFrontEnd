/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router";
import EmployeeForm from "../components/createEmployee/employeeForm";
import fields from "../utils/FormFields";
import { useEffect, useState } from "react";
import {
	useGetEmployeeDetailsQuery,
	useUpdateEmployeeMutation,
	useUpdateEmployeeRelationMutation,
} from "../api/employee/api.employee";
import { convertToData, convertToPayload } from "../utils/ConvertData";

const EditEmployee = () => {
	let { id } = useParams();
	const [formState, setFormState] = useState({});
	const navigate = useNavigate();

	const [updateEmployee, { isSuccess: updateSuccess, isError, data: updateData, error }] =
		useUpdateEmployeeMutation();
	const [
		updateEmployeeRelation,
		{ isSuccess: updateSuccessRelation, isErrorRelation, data: updateDataRelation, errorRelation },
	] = useUpdateEmployeeRelationMutation();

	const { data, isSuccess } = useGetEmployeeDetailsQuery(id);
	useEffect(() => {
		if (isSuccess) {
			const initialFormState = convertToData(data);
			setFormState(initialFormState);
		}
	}, [data, isSuccess]);

	const handleInputChange = (name, value) => {
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const resetContent = () => {
		navigate("/employee");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const payload = convertToPayload(formState);
		payload.id = id;
		await updateEmployee(payload);
		await updateEmployeeRelation(payload);
	};

	useEffect(() => {
		if (updateSuccess || updateSuccessRelation) {
			console.log(updateData, " entity");
			console.log(updateDataRelation, " relation");
			alert("Employee Updated Successfully");
		} else if (isError || isErrorRelation) {
			console.log(error, "entity");
			console.log(errorRelation, "relation");
			alert("Error Updating Employee");
		}
	}, [isError, updateSuccess, updateSuccessRelation, isErrorRelation]);

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
