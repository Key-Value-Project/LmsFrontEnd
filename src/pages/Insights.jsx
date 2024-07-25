import {
  useGetBorrowingReportQuery,
  useGetMostBorrowedBooksQuery,
  useGetOverdueBooksReportQuery,
  useGetPopularGenresQuery,
  useGetReturnReportQuery,
  useGetUserActivityQuery,
} from '../api/library/api.analytics';
import BarChart from '../components/library/BarChart';
import Podium from '../components/library/Podium';
import { useState } from 'react';
import { useEffect } from 'react';

const Insights = () => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  const { data: MostBorrowedBooks, isLoading: isMostBorrowedBooksLoading } = useGetMostBorrowedBooksQuery();
  const { data: PopularGenres, isLoading: isPopularGenresLoading } = useGetPopularGenresQuery();
  const { data: BorrowingReport, isLoading: isBorrowingReportLoading } = useGetBorrowingReportQuery();
  const { data: UserActivity, isLoading: isUserActivityLoading } = useGetUserActivityQuery();
  const { data: ReturnReport, isLoading: isReturnReportLoading } = useGetReturnReportQuery();
  const { data: OverdueReport, isLoading: isOverdueReportLoading } = useGetOverdueBooksReportQuery();
  console.log(OverdueReport);

  const [top5Users, setTop5Users] = useState([
    { user_name: '', activityCount: 0 },
    { user_name: '', activityCount: 0 },
    { user_name: '', activityCount: 0 },
    { user_name: '', activityCount: 0 },
    { user_name: '', activityCount: 0 },
  ]);

  useEffect(() => {
    if (UserActivity) {
      const sortedUsers = UserActivity.slice()
        .sort((a, b) => b.activityCount - a.activityCount)
        .slice(0, 5);
      setTop5Users(sortedUsers);
    }
  }, [UserActivity]);

  if (
    isBorrowingReportLoading ||
    isMostBorrowedBooksLoading ||
    isOverdueReportLoading ||
    isPopularGenresLoading ||
    isReturnReportLoading ||
    isUserActivityLoading
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div className="containers">
      <div className="each__card">
        <div>
          <h1>Activity Leaderboard</h1>
        </div>

        <div className="card">
          <div className="card-content">
            <Podium data={top5Users} />
            <div className="podium">
              <div className="user">{top5Users[3] ? top5Users[3].user_name : ''}</div>
              <div className="user">{top5Users[1] ? top5Users[1].user_name : ''}</div>
              <div className="user"> {top5Users[0] ? top5Users[0].user_name : ''}</div>
              <div className="user">{top5Users[2] ? top5Users[2].user_name : ''}</div>
              <div className="user">{top5Users[4] ? top5Users[4].user_name : ''}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="each__card">
        <div>
          <h1>Most Borrowed Books</h1>
        </div>

        <div className="card">
          <div className="card-content card__wrap">
            <BarChart data={MostBorrowedBooks} x="bookDetail_title" y="borrowCount" />
          </div>
        </div>
      </div>

      <div className="each__card">
        <div>
          <h1>Most Popular Genre</h1>
        </div>

        <div className="card">
          <div className="card-content card__wrap">
            <BarChart data={PopularGenres} x="genre_name" y="genre_count" />
          </div>
        </div>
      </div>

      <div className="each__card">
        <div>
          <h1>Borrowed Report</h1>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card__wrap">
              <ul className="report-list">
                {BorrowingReport.slice(0, 10).map((item) => (
                  <li key={item.id} className="report-item">
                    <div className="report-details">
                      <div className="report-row">
                        <span className="report-label">Borrowed At:</span>
                        <span className="report-value">{formatDate(item.borrowed_at)}</span>
                      </div>
                      <div className="report-row">
                        <span className="report-label">Book Title:</span>
                        <span className="report-value">{item.book.bookDetail.title}</span>
                      </div>
                      <div className="report-row">
                        <span className="report-label">User Name:</span>
                        <span className="report-value">{item.user.name}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="each__card">
        <div>
          <h1>Return Report</h1>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card__wrap">
              <ul className="report-list">
                {ReturnReport.slice(0, 10).map((item) => (
                  <li key={item.id} className="report-item">
                    <div className="report-details">
                      <div className="report-row">
                        <span className="report-label">Borrowed At:</span>
                        <span className="report-value">{formatDate(item.borrowed_at)}</span>
                      </div>
                      <div className="report-row">
                        <span className="report-label">Return Date:</span>
                        <span className="report-value">{formatDate(item.return_date)}</span>
                      </div>
                      <div className="report-row">
                        <span className="report-label">Book Title:</span>
                        <span className="report-value">{item.book.bookDetail.title}</span>
                      </div>
                      <div className="report-row">
                        <span className="report-label">User Name:</span>
                        <span className="report-value">{item.user.name}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="each__card">
        <div>
          <h1>OverDue Report</h1>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="report-list">
              {OverdueReport.slice(0, 10).map((item) => (
                <div key={item.id} className="report-item">
                  <div className="report-details">
                    <div className="report-row">
                      <span className="report-label">Borrowed At:</span>
                      <span className="report-value">{formatDate(item.borrowed_at)}</span>
                    </div>
                    <div className="report-row">
                      <span className="report-label">Return Date:</span>
                      <span className="report-value">{item.return_date}</span>
                    </div>
                    <div className="report-row">
                      <span className="report-label">Book Title:</span>
                      <span className="report-value">{item.book.bookDetail.title}</span>
                    </div>
                    <div className="report-row">
                      <span className="report-label">User Name:</span>
                      <span className="report-value">{item.user.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
