/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import del from "../../assets/icons/delete.svg";
import edt from "../../assets/icons/edit.svg";
import DeletePopUp from "./DeletePopUp.jsx";
import { Status } from "./status.jsx";
import { Link } from "react-router-dom";
import formatDate from "../../utils/FormatDate.js";
import { useDeleteEmployeeMutation } from "../../api/employee/api.employee.jsx";

const ListCard = (emp) => {
	const [deleteDialog, setDeleteDialog] = useState(false);
	const [deleteEmployee, { isSuccess, isError, data, error }] = useDeleteEmployeeMutation();

	const handleDeleteClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDeleteDialog(true);
	};

	const handleDelete = () => {
		deleteEmployee(emp.id);
		setDeleteDialog(false);
	};

	const handleClose = () => {
		setDeleteDialog(false);
	};

	useEffect(() => {
		if (isSuccess) {
			console.log("Employee deleted successfully");
			console.log(data);
		}
		if (isError) {
			console.log("Error deleting employee", error);
			console.log(data);
		}
	}, [isSuccess, isError]);

	return (
		<>
			<Link to={`details/${emp.id}`} style={{ textDecoration: "none", color: "black" }}>
				<div className="employee-list-items">
					<div className="EmployeeName">{emp.name}</div>
					<div className="EmployeeID">{emp.id}</div>
					<div className="JoiningDate">{formatDate(emp.createdAt)}</div>
					<div className="Role">{emp.role}</div>
					<div className="Status">
						<Status status={emp.status} />
					</div>
					<div className="Experience">{emp.experience}</div>
					<div className="Action">
						<img src={del} alt="delete button" onClick={handleDeleteClick} />

						<Link to={`edit/${emp.id}`}>
							<img src={edt} alt="edit button" />
						</Link>
					</div>
				</div>
			</Link>
			<DeletePopUp open={deleteDialog} handleClose={handleClose} handleDelete={handleDelete} />
		</>
	);
};

export default ListCard;
