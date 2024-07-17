import { useEffect } from "react";
import { useGetEmployeeDetailsQuery, useGetUserDetailsQuery } from "../api/employee/api.employee";
import { Link } from "react-router-dom";
import pencilIcon from "../assets/icons/pencil-circle.svg";
import DetailsCard from "../components/detailsEmployee/DetailsCard";

const Profile = () => {
	const { data: userDetails, isSuccess } = useGetUserDetailsQuery();
	const { data: employeeDetails, isSuccess: employeeSuccess } = useGetEmployeeDetailsQuery(userDetails?.id);

	return (
		<div className="Dashboard">
			<div className="top-header-employee-details">
				<h1>Profile</h1>
				<div className="top-header-components">
					<Link to={`/employee/edit/${userDetails?.id}`} style={{ textDecoration: "none", color: "black" }}>
						<div className="edit-button-emp">
							<img src={pencilIcon} alt="edit button" />
							<span>Edit</span>
						</div>
					</Link>
				</div>
			</div>
			<DetailsCard emp={employeeDetails} />
		</div>
	);
};

export default Profile;
