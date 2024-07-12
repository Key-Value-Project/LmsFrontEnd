import { useState } from "react";
import del from "../../assets/icons/delete.svg";
import edt from "../../assets/icons/edit.svg";
import DeletePopUp from "./DeletePopUp.jsx";
import { Status } from "./status.jsx";
import { Link } from "react-router-dom";

const ListCard = (emp) => {
	const [deleteDialog, setDeleteDialog] = useState(false);

	const handleDeleteClick = (e) => {
		console.log(e);
		e.preventDefault();
		e.stopPropagation();
		setDeleteDialog(true);
		console.log("Delete clicked");
	};

	return (
		<>
			<Link to={`details/${emp.employeeID}`} style={{ textDecoration: "none", color: "black" }}>
				<div className="employee-list-items">
					<div className="EmployeeName">{emp.employeeName}</div>
					<div className="EmployeeID">{emp.employeeID}</div>
					<div className="JoiningDate">{emp.joiningDate}</div>
					<div className="Role">{emp.role}</div>
					<div className="Status">
						<Status status={emp.status} />
					</div>
					<div className="Experience">{emp.experience}</div>
					<div className="Action">
						
						<img src={del} alt="delete button" onClick={handleDeleteClick} />

						<Link to={`edit/${emp.employeeID}`}>
							<img src={edt} alt="edit button" />
						</Link>
					</div>
				</div>
			</Link>
			<DeletePopUp
				open={deleteDialog}
				handleClose={() => setDeleteDialog(false)}
				handleDelete={() => console.log("Delete")}
			/>
		</>
	);
};

export default ListCard;
