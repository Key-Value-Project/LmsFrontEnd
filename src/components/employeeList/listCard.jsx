/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import del from "../../assets/icons/delete.svg";
import edt from "../../assets/icons/edit.svg";
import DeletePopUp from "./DeletePopUp.jsx";
import { Status } from "./status.jsx";
import { Link } from "react-router-dom";
import formatDate from "../../utils/FormatDate.js";
import { useDeleteEmployeeMutation } from "../../api/employee/api.employee.jsx";
import { notifyError, notifySuccess } from "../../utils/Toast.js";
import getRole from "../../utils/TokenDecode.jsx";

const ListCard = (emp) => {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteEmployee, { isSuccess, isError, data, error }] =
    useDeleteEmployeeMutation();

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
      console.log("Employee deleted successfully", data);
      notifySuccess("Employee deleted successfully");
    } else if (isError) {
      console.log("Error deleting employee", error);
      let notification =
        error.data.message +
        (error.data.errors.length > 0
          ? ": " + error.data.errors.join(", ")
          : "");
      notifyError(notification);
    }
  }, [isSuccess, isError, error, data]);

  return (
    <>
      <Link
        to={`details/${emp.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="employee-list-items">
          <div className="item">{emp.name}</div>
          <div className="item">{emp.id}</div>
          <div className="item">{formatDate(emp.createdAt)}</div>
          <div className="item">{emp.role}</div>
          <div className="item">
            <Status status={emp.status} />
          </div>
          <div className="item">{emp.experience}</div>

          {getRole() === "ADMIN" ? (
            <div className="item Action">
              <img src={del} alt="delete button" onClick={handleDeleteClick} />

              <Link to={`edit/${emp.id}`}>
                <img src={edt} alt="edit button" />
              </Link>
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

export default ListCard;
