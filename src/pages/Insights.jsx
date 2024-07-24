import {
  useGetBorrowingReportQuery,
  useGetMostBorrowedBooksQuery,
  useGetPopularGenresQuery,
  useGetUserActivityQuery,
} from '../api/library/api.analytics';
import BarChart from '../components/library/BarChart';

const Insights = () => {
  const { data: MostBorrowedBooks } = useGetMostBorrowedBooksQuery();
  const { data: PopularGenres } = useGetPopularGenresQuery();
  const { data: BorrowingReport } = useGetBorrowingReportQuery();
  const { data: UserActivity } = useGetUserActivityQuery();
  console.log(UserActivity);

  if (!MostBorrowedBooks) {
    return <div>Loading...</div>;
  }

  return (
    <div className="containers">
      <div className="each__card">
        <div>
          <h1>User Activity </h1>
        </div>

        <div className="card">
          <div className="card-content">
            {UserActivity ? (
              <ul>
                {[...UserActivity] // Create a copy of the array
                  .sort((a, b) => b.activityCount - a.activityCount)
                  .map((user) => (
                    <li key={user.user_id}>{user.user_name}</li>
                  ))}
              </ul>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>

      <div className="each__card">
        <div>
          <h1>Most Borrowed Books</h1>
        </div>

        <div className="card">
          <div className="card-content">
            <BarChart data={MostBorrowedBooks} x="bookDetail_title" y="borrowCount" />
          </div>
        </div>
      </div>

      <div className="each__card">
        <div>
          <h1>Most Popular Genre</h1>
        </div>

        <div className="card">
          <div className="card-content">
            <BarChart data={PopularGenres} x="genre_name" y="genre_count" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
