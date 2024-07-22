import React, { useState } from "react";
import { Availability } from "./Availability";
import SubscribePopUp from "../employeeList/SubscribePopUp";
// import  from "../../utils/TokenDecode";
import LibHead from "./LibHead";

import LibCard from "./LibCard";

export const shelfData = [
  {
    id: 1,
    code: "A01",
    location: "First Floor, Left Wing",
  },
  {
    id: 2,
    code: "B02",
    location: "Second Floor, Right Wing",
  },
  {
    id: 3,
    code: "C03",
    location: "Ground Floor, Central Section",
  },
  {
    id: 4,
    code: "D04",
    location: "Third Floor, Left Wing",
  },
  {
    id: 5,
    code: "E05",
    location: "Basement, Storage Area",
  },
];

const BookDetailsCard = ({ emp = {}, Role }) => {
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
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick = true;
  };
  return (
    <>
      <div className="details-component" data-testid="test-details-card">
        <div className="details-card-item">
          <div className="details-card-item-label">Book ID</div>
          <p>{emp.id}</p>
        </div>
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

      {emp.status == "Available" ? (
        <div className="book-list">
          <LibHead
            heads={["Shelf Code", "Shelf Location", "", "", "Action"]}
            Role="ADMIN"
          />
          <div className="employee-list">
            {emp.shelfCode.map((code, index) => {
              const shelfInfo = shelfData.find((shelf) => shelf.code === code);
              return (
                <LibCard
                  key={index}
                  id={code}
                  title={shelfInfo.location}
                  author={""}
                  status={""}
                  Role={"borrow"}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
      <SubscribePopUp
        open={deleteDialog}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default BookDetailsCard;
