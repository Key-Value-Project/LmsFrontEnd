import "../assets/styles/Library/library.style.scss"

import BorrowCard from "../components/library/BorrowCard";
import BorrowCardHead from "../components/library/BorrowCardHead";
import LibCard from "../components/library/LibCard";
import LibHead from "../components/library/LibHead";
import { useGetUserDetailsQuery } from "../api/employee/api.employee";

const borrowedData = [
  {
    user_id: 1,
    book_id: 2,
    borrowed_at: "28-05-2025",
    expected_return_date: "28-06-2025",
    returned: false,
    borrowed_shelf_id: 1,
    returned_shelf_id: null,
  },
  {
    user_id: 1,
    book_id: 3,
    borrowed_at: "28-05-2025",
    expected_return_date: "28-06-2025",
    returned: false,
    borrowed_shelf_id: 1,
    returned_shelf_id: null,
  },
];

const BorrowDetails = () => {
  const { data: userDetails, isSuccess } = useGetUserDetailsQuery();
  const Role = userDetails?.role;

  return (
    <>
      <div className="Dashboard">
        <div className="top-header-employee-details">
          <h1>Borrowed Books</h1>
          <div className="top-header-components"></div>
        </div>
        <div className="book-list">
          <BorrowCardHead />
          <div className="employee-list">
            {borrowedData.map((book, index) => (
              <BorrowCard key={index} {...book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BorrowDetails;
