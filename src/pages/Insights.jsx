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
          <div className="card-content card__wrap">
            <ul className="borrow-history">
              {BorrowingReport.slice(0, 10).map((item) => (
                <li key={item.id} className="borrow-history-item">
                  <div className="borrowed-info">
                    <span className="borrowed-date">{new Date(item.borrowed_at).toLocaleString()}</span>
                    <span className="borrowed-book">{item.book.bookDetail.title}</span>
                    <span className="borrowed-user">{item.user.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="each__card">
        <div>
          <h1>Return Report</h1>
        </div>

        <div className="card">
          <div className="card-content card__wrap">
            <ul className="borrow-history">
              {ReturnReport.slice(0, 10).map((item) => (
                <li key={item.id} className="borrow-history-item">
                  <div className="borrowed-info">
                    <span className="borrowed-date">{new Date(item.borrowed_at).toLocaleString()}</span>
                    <span className="borrowed-book">{item.return_date}</span>
                    <span className="borrowed-user">{item.book.bookDetail.title}</span>
                    <span className="borrowed-user">{item.user.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="each__card">
        <div>
          <h1>OverDue Report</h1>
        </div>

        <div className="card">
          <div className="card-content card__wrap">
            <ul className="borrow-history">
              {ReturnReport.slice(0, 10).map((item) => (
                <li key={item.id} className="borrow-history-item">
                  <div className="borrowed-info">
                    <span className="borrowed-date">{new Date(item.borrowed_at).toLocaleString()}</span>
                    <span className="borrowed-book">{item.return_date}</span>
                    <span className="borrowed-user">{item.book.bookDetail.title}</span>
                    <span className="borrowed-user">{item.user.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
