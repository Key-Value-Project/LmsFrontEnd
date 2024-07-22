import { useState } from "react";
import del from "../../assets/icons/delete.svg";
import edt from "../../assets/icons/edit.svg";
import DeletePopUp from "../../components/employeeList/DeletePopUp.jsx";
import { Link } from "react-router-dom";
import { Availability } from "./Availability.jsx";
import getRole from "../../utils/TokenDecode.jsx";
const LibCard = (details) => {
  const [deleteDialog, setDeleteDialog] = useState(false);

  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDeleteDialog(true);
  };

  const handleDelete = () => {
    deleteEmployee(details.id);
    setDeleteDialog(false);
  };

  const handleClose = () => {
    setDeleteDialog(false);
  };

  const columns = [
    { label: "ID", value: details.id },
    { label: "Title", value: details.title },
    { label: "Author", value: details.author },
    { label: "Status", value: <Availability status={details.status} /> },
  ];

  return (
    <>
      <Link
        to={`details/${details.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="employee-list-items list-book">
          {columns.map((column, index) => (
            <div key={index} className="item">
              {column.value}
            </div>
          ))}
          {getRole() === "ADMIN" ? (
            <div className="item Action">
              <img src={del} alt="delete button" onClick={handleDeleteClick} />

              <Link to={`edit/${details.id}`}>
                <img src={edt} alt="edit button" />
              </Link>
            </div>
          ) : (
            <></>
          )}

          {details.Role === "borrow" ? (
            <div className="item Action">
              <button className="btn">Read Now !</button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Link>
      <DeletePopUp
        open={deleteDialog}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default LibCard;
