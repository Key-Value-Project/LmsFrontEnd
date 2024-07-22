import { Link } from "react-router-dom";

const BorrowCard = (emp) => {


  return (
    <>
      <Link
        to={`details/${emp.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="employee-list-items list-book">
          <div className="item">{emp.book_id}</div>
          <div className="item">{emp.borrowed_at}</div>

          <div className="item">{emp.expected_return_date}</div>
          <div className="item">{emp.returned == false ? "false" : "true"}</div>

          <div className="item">{emp.borrowed_shelf_id}</div>
          <div className="item">
            {emp.returned_shelf_id === null
              ? "not returned"
              : emp.returned_shelf_id}
          </div>
        </div>
      </Link>
 
    </>
  );
};

export default BorrowCard;
