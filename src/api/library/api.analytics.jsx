import libraryApiWithTags from '../../services/library.api';

const analyticsApi = libraryApiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getMostBorrowedBooks: builder.query({
      query: () => '/most-borrowed-books',
    }),
    getPopularGenres: builder.query({
      query: () => '/popular-genres',
    }),
    getUserActivity: builder.query({
      query: () => '/user-activity',
    }),
    getBorrowingReport: builder.query({
      query: () => '/borrowing-report',
    }),
    getReturnReport: builder.query({
      query: () => '/return-report',
    }),
    getOverdueBooksReport: builder.query({
      query: () => '/overdue-books-report',
    }),
    getBorrowedBooksByUser: builder.query({
      query: (userId) => `/borrowed-books/${userId}`,
    }),
    getReturnedBooksByUser: builder.query({
      query: (userId) => `/returned-books/${userId}`,
    }),
    getOverdueBooksByUser: builder.query({
      query: (userId) => `/overdue-books/${userId}`,
    }),
  }),
});

export const {
  useGetMostBorrowedBooksQuery,
  useGetPopularGenresQuery,
  useGetUserActivityQuery,
  useGetBorrowingReportQuery,
  useGetReturnReportQuery,
  useGetOverdueBooksReportQuery,
  useGetBorrowedBooksByUserQuery,
  useGetReturnedBooksByUserQuery,
  useGetOverdueBooksByUserQuery,
} = analyticsApi;
