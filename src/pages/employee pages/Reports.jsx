import { useParams } from 'react-router';
import { useGetBorrowedBooksByUserQuery, useGetOverdueBooksByUserQuery, useGetReturnedBooksByUserQuery } from '../../api/library/api.analytics';
import { BarChart } from 'recharts';
const Reports = () => {
  let { id } = useParams();
  const { data: BorrowedBooksUser, isLoading: isBorrowedBooksLoading } = useGetBorrowedBooksByUserQuery(id);
  const { data: ReturnedBooksUser, isLoading: isReturnedBooksLoading } = useGetReturnedBooksByUserQuery(id);
  const { data: OverdueBooksUser, isLoading: isOverdueBooksLoading } = useGetOverdueBooksByUserQuery(id);
  console.log(OverdueBooksUser);

  if (isBorrowedBooksLoading || isReturnedBooksLoading || isOverdueBooksLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {' '}
      <div className="containers">
        <div className="each__card">
          <div>
            <h1>Most Borrowed Books Report</h1>
          </div>

          <div className="card">
            <div className="card-content card__wrap">
              <ul className="borrow-history">
                {BorrowedBooksUser.slice(0, 10).map((item) => (
                  <li key={item.id} className="borrow-history-item">
                    <div className="borrowed-info">
                      <span className="borrowed-date">{new Date(item.borrowed_at).toLocaleString()}</span>
                      <span className="borrowed-book">{item.book.bookDetail.isbn}</span>
                      <span className="borrowed-user">{item.book.bookDetail.title}</span>
                      <span className="borrowed-user">{item.user.expected_return_date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="each__card">
          <div>
            <h1>Returned Books Report</h1>
          </div>

          <div className="card">
            <div className="card-content card__wrap">
              <ul className="borrow-history">
                {ReturnedBooksUser.slice(0, 10).map((item) => (
                  <li key={item.id} className="borrow-history-item">
                    <div className="borrowed-info">
                      <span className="borrowed-date">{new Date(item.borrowed_at).toLocaleString()}</span>
                      <span className="borrowed-book">{item.book.bookDetail.isbn}</span>
                      <span className="borrowed-user">{item.book.bookDetail.title}</span>
                      <span className="borrowed-user">{item.user.expected_return_date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="each__card">
          <div>
            <h1>Overdue Books Report</h1>
          </div>

          <div className="card">
            <div className="card-content card__wrap">
              <ul className="borrow-history">
                {OverdueBooksUser.slice(0, 10).map((item) => (
                  <li key={item.id} className="borrow-history-item">
                    <div className="borrowed-info">
                      <span className="borrowed-date">{new Date(item.borrowed_at).toLocaleString()}</span>
                      <span className="borrowed-book">{item.book.bookDetail.isbn}</span>
                      <span className="borrowed-user">{item.book.bookDetail.title}</span>
                      <span className="borrowed-user">{item.user.expected_return_date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
