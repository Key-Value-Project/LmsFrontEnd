import libraryApiWithTags from "../../services/library.api";

const libraryApi = libraryApiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getBookDetailsList: builder.query({
      query: () => "/book-details",
    }),
    getBookDetailsById: builder.query({
      query: (isbn) => `/book-details/${isbn}`,
    }),
    getBorrowHistory: builder.query({
      query: () => `/books/borrowhistory`,
    }),
  }),
});

export const {
  useGetBookDetailsListQuery,
  useGetBookDetailsByIdQuery,
  useGetBorrowHistoryQuery,
} = libraryApi;
