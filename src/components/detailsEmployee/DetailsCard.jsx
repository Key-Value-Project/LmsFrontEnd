import { Status } from "../employeeList/status";

/* eslint-disable react/prop-types */
const DetailsCard = ({ emp, id }) => {

    return (
        <div className="details-component">
				<div className="details-card-item">
					<div className="details-card-item-label">Employee ID</div>
					<p>{id}</p>
				</div>
				<div className="details-card-item">
					<div className="details-card-item-label">Employee Name</div>
					<p>{emp.employeeName}</p>
				</div>
				<div className="details-card-item">
					<div className="details-card-item-label">Email</div>
					<p>{emp.employeeEmail}</p>
				</div>
				<div className="details-card-item">
					<div className="details-card-item-label">Joining Date</div>
					<p>{emp.joiningDate}</p>
				</div>
				<div className="details-card-item">
					<div className="details-card-item-label">Role</div>
					<p>{emp.role}</p>
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
					<p>{emp.address}</p>
				</div>
			</div>
    )
};

export default DetailsCard;