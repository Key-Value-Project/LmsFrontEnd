import del from "../../assets/icons/delete.svg";
import edt from "../../assets/icons/edit.svg";
import { Status } from "./status.jsx";

const ListCard = (emp) => {
	return (
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
				<img src={del} alt="delete button" />
				<img src={edt} alt="edit button" />
			</div>
		</div>
	);
};

export default ListCard;
