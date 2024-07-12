import { useParams } from "react-router";
import "../assets/styles/detailsEmployee/detailEmp.scss";
import { Link } from "react-router-dom";
import pencilIcon from "../assets/icons/pencil-circle.svg";
import DetailsCard from "../components/detailsEmployee/DetailsCard";

const dummyData = {
	employeeID: 1,
	employeeName: "Shaheen",
	employeeEmail: "shaheen@fun.com",
	joiningDate: "2021-09-01",
	role: "Software Developer",
	status: "Active",
	experience: "2 years",
	address: "123, abc street, xyz city",
};

const DetailsEmployee = () => {
	const { id } = useParams();

	return (
		<div className="Dashboard">
			<div className="top-header-employee-details">
				<h1>Employee Details</h1>
				<div className="top-header-components">
					<Link to={`/employee/edit/${id}`} style={{ textDecoration: "none", color: "black" }}>
						<div className="edit-button-emp">
							<img src={pencilIcon} alt="edit button" />
							<span>Edit</span>
						</div>
					</Link>
				</div>
			</div>
			<DetailsCard emp={dummyData} id={id} />
		</div>
	);
};

export default DetailsEmployee;
