import libraryApiWithTags from '../../services/library.api';

const analyticsApi = libraryApiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getMostBorrowedBooks: builder.query({
      query: () => '/analytics/most-borrowed-books',
    }),
    getPopularGenres: builder.query({
      query: () => '/analytics/popular-genres',
    }),
    getUserActivity: builder.query({
      query: () => '/analytics/user-activity',
    }),
    getBorrowingReport: builder.query({
      query: () => '/analytics/borrowing-report',
    }),
    getReturnReport: builder.query({
      query: () => '/analytics/return-report',
    }),
    getOverdueBooksReport: builder.query({
      query: () => '/analytics/overdue-books-report',
    }),
    getBorrowedBooksByUser: builder.query({
      query: (userId) => `/analytics/borrowed-books/${userId}`,
    }),
    getReturnedBooksByUser: builder.query({
      query: (userId) => `/analytics/returned-books/${userId}`,
    }),
    getOverdueBooksByUser: builder.query({
      query: (userId) => `/analytics/overdue-books/${userId}`,
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
