import { useParams } from 'react-router';
import { useGetBorrowedBooksByUserQuery, useGetOverdueBooksByUserQuery, useGetReturnedBooksByUserQuery } from '../../api/library/api.analytics';
import { BarChart } from 'recharts';
const Reports = () => {
  let { id } = useParams();
  const { data: BorrowedBooksUser, isLoading: isBorrowedBooksLoading } = useGetBorrowedBooksByUserQuery(id);
  const { data: ReturnedBooksUser, isLoading: isReturnedBooksLoading } = useGetReturnedBooksByUserQuery(id);
  const { data: OverdueBooksUser, isLoading: isOverdueBooksLoading } = useGetOverdueBooksByUserQuery(id);
  console.log(ReturnedBooksUser);

  if (isBorrowedBooksLoading || isReturnedBooksLoading || isOverdueBooksLoading) {
    return <div>Loading...</div>;
  }
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      {' '}
      <div className="containers">
        <div className="each__card">
          <div>
            <h1>Most Borrowed Books Report</h1>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="report-list">
                {BorrowedBooksUser.slice(0, 10).map((item) => (
                  <div key={item.id} className="report-item">
                    <div className="report-details">
                      <div className="report-row">
                        <span className="report-label">Borrowed At:</span>
                        <span className="report-value">{formatDate(item.borrowed_at)}</span>
                      </div>
                      <div className="report-row">
                        <span className="report-label">ISBN:</span>
                        <span className="report-value">{item.book.bookDetail.isbn}</span>
                      </div>
                      <div className="report-row">
                        <span className="report-label">Book Title:</span>
                        <span className="report-value">{item.book.bookDetail.title}</span>
                      </div>
                      <div className="report-row">
                        <span className="report-label">Expected Return Date:</span>
                        <span className="report-value">{formatDate(item.expected_return_date)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="each__card">
          <div>
            <h1>Returned Books Report</h1>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="report-list">
                {ReturnedBooksUser.slice(0, 10).map((item) => (
                  <div key={item.id} className="report-item">
                    <div className="report-details">
                      <div className="report-row">
                        <span className="report-label">Borrowed At:</span>
                        <span className="report-value">{formatDate(item.borrowed_at)}</span>
                      </div>
                      <div className="report-row">
                        <span className="report-label">ISBN:</span>
                        <span className="report-value">{item.book.bookDetail.isbn}</span>
                      </div>
                      <div className="report-row">
                        <span className="report-label">Book Title:</span>
                        <span className="report-value">{item.book.bookDetail.title}</span>
                      </div>
                      <div className="report-row">
                        <span className="report-label">Expected Return Date:</span>
                        <span className="report-value">{formatDate(item.return_date)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="each__card">
          <div>
            <h1>Overdue Books Report</h1>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="report-list">
                {OverdueBooksUser.slice(0, 10).map((item) => (
                  <div key={item.id} className="report-item">
                    <div className="report-details">
                      <div className="report-row">
                        <span className="report-label">Borrowed At:</span>
                        <span className="report-value">{formatDate(item.borrowed_at)}</span>
                      </div>
                      <div className="report-row">
                        <span className="report-label">ISBN:</span>
                        <span className="report-value">{item.book.bookDetail.isbn}</span>
                      </div>
                      <div className="report-row">
                        <span className="report-label">Book Title:</span>
                        <span className="report-value">{item.book.bookDetail.title}</span>
                      </div>
                      <div className="report-row">
                        <span className="report-label">Expected Return Date:</span>
                        <span className="report-value">{formatDate(item.expected_return_date)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
