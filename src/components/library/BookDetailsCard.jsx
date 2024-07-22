import React, { useState } from "react";
import { Availability } from "./Availability";
import SubscribePopUp from "../employeeList/SubscribePopUp";
import LibHead from "./LibHead";

import LibCard from "./LibCard";

const BookDetailsCard = ({ emp = {}, Role }) => {
  let shelves = [];
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

  if (emp) {
    shelves = emp.books.map((book) => book.shelf);
    console.log(shelves);
  }

  console.log(emp.status);
  return (
    <>
      <div className="details-component" data-testid="test-details-card">
        <div className="details-card-item">
          <div className="details-card-item-label">ISBN</div>
          <p>{emp.isbn}</p>
        </div>
        <div className="details-card-item">
          <div className="details-card-item-label">Employee title</div>
          <p>{emp.title}</p>
        </div>
        <div className="details-card-item">
          <div className="details-card-item-label">Author</div>
          <p>{emp.author}</p>
        </div>
        <div className="details-card-item">
          <div className="details-card-item-label">Description</div>
          <p>{emp.description}</p>
        </div>

        <div className="details-card-item">
          <div className="details-card-item-label">Availability</div>
          <Availability status={emp.status} />
        </div>

        {emp.status == "Available" ? (
          <> </>
        ) : (
          <div className="btns">
            <button
              type="submit"
              className="subscribe"
              onClick={handleDeleteClick}
            >
              Subscribe
            </button>
          </div>
        )}
      </div>

      <div className="book-list">
        <LibHead
          heads={["Shelf Code", "Shelf Location", "", "", "", "Action"]}
          Role="det"
        />
        <div className="employee-list">
          {shelves.map((shelf, index) => {
            console.log("shefl", shelf.code);
            return (
              <LibCard
                key={index}
                isbn={shelf.code}
                title={shelf.location}
                Role={"borrow"}
              />
            );
          })}
        </div>
      </div>

      <SubscribePopUp
        open={deleteDialog}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default BookDetailsCard;
