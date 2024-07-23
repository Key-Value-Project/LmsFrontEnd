import { Link } from "react-router-dom";
import { format } from "date-fns";

const BorrowCard = (emp) => {
    return (
        <>
            <Link to={`details/${emp.id}`} style={{ textDecoration: "none", color: "black" }}>
                <div className="employee-list-items list-book">
                    <div className="item">{emp.book.bookDetail.isbn}</div>
                    <div className="item">{emp.book.bookDetail.title}</div>
                    <div className="item">{format(new Date(emp.borrowed_at), "dd-MM-yyyy")}</div>

                    <div className="item">{format(new Date(emp.expected_return_date), "dd-MM-yyyy")}</div>
                </div>
            </Link>
        </>
    );
};

export default BorrowCard;
