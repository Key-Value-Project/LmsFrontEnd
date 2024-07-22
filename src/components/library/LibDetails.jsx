import { useParams } from "react-router";
import { Link } from "react-router-dom";
import pencilIcon from "../../assets/icons/pencil-circle.svg";
import BookDetailsCard from "./BookDetailsCard";
import { booksData } from "./LibSearch";
import { useGetUserDetailsQuery } from "../../api/employee/api.employee";
const LibDetails = () => {
  const { data: userDetails, isSuccess } = useGetUserDetailsQuery();
  const Role = userDetails?.role;
  const { id } = useParams();

  return (
    <div className="Dashboard">
      <div className="top-header-employee-details">
        <h1>Book Details</h1>
        <div className="top-header-components">
          <Link
            to={`/library/edit/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            {Role === "ADMIN" ? (
              <div className="edit-button-emp">
                <img src={pencilIcon} alt="edit button" />
                <span>Edit</span>
              </div>
            ) : (
              <></>
            )}
          </Link>
        </div>
      </div>
      <BookDetailsCard emp={booksData[id - 1]} Role={Role} />
    </div>
  );
};

export default LibDetails;
