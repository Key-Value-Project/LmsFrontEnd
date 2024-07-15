/* eslint-disable react/prop-types */
import { useParams } from "react-router";
import "../assets/styles/detailsEmployee/detailEmp.scss";
import { Link } from "react-router-dom";
import pencilIcon from "../assets/icons/pencil-circle.svg";
import DetailsCard from "../components/detailsEmployee/DetailsCard";

const DetailsEmployee = ({ state }) => {
	const { id } = useParams();

	// get employee details from state having employeeID equal to id
	const Data = state.employees;
	const dummyData = Data.find((emp) => emp.employeeID === parseInt(id));

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
