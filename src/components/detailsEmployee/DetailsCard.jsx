import React from "react";
import formatDate from "../../utils/FormatDate";
import { Status } from "../employeeList/status";

const DetailsCard = ({ emp = {} }) => {
	return (
		<div className="details-component" data-testid="test-details-card">
			<div className="details-card-item">
				<div className="details-card-item-label">Employee ID</div>
				<p>{emp.id}</p>
			</div>
			<div className="details-card-item">
				<div className="details-card-item-label">Employee Name</div>
				<p>{emp.name}</p>
			</div>
			<div className="details-card-item">
				<div className="details-card-item-label">Email</div>
				<p>{emp.email}</p>
			</div>
			<div className="details-card-item">
				<div className="details-card-item-label">Joining Date</div>
				<p>{formatDate(emp.createdAt)}</p>
			</div>
			<div className="details-card-item">
				<div className="details-card-item-label">Role</div>
				<p>{emp.role}</p>
			</div>
			<div className="details-card-item">
				<div className="details-card-item-label">Department</div>
				<p>{emp.department?.description}</p>
			</div>
			<div className="details-card-item">
				<div className="details-card-item-label">Status</div>
				<Status status={emp.status} />
			</div>
			<div className="details-card-item">
				<div className="details-card-item-label">Experience</div>
				<p>{emp.experience}</p>
			</div>
			<div className="details-card-item">
				<div className="details-card-item-label">Address</div>
				<p>
					{emp.address?.line1}, {emp.address?.pincode}
				</p>
			</div>
		</div>
	);
};

export default DetailsCard;
