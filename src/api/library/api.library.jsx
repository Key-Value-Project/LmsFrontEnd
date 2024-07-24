import libraryApiWithTags from '../../services/library.api';

const libraryApi = libraryApiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getBookDetailsList: builder.query({
      query: () => '/book-details',
      providesTags: ['Library'],
    }),
    getBookDetailsById: builder.query({
      query: (isbn) => `/book-details/${isbn}`,
      providesTags: ['Library'],
    }),
    getBorrowHistory: builder.query({
      query: () => `/books/borrowhistory`,
      providesTags: ['Library'],
    }),
    getSearchByTitle: builder.mutation({
      query: (title) => ({ url: `book-details/searchby/${title}`, method: 'GET' }),
      invalidatesTags: ['Library'],
    }),
    borrowBook: builder.mutation({
      query: (body) => ({ url: `/books/borrow/`, method: 'POST', body }),
      invalidatesTags: ['Library'],
    }),
    returnBook: builder.mutation({
      query: (body) => ({ url: `/books/return/`, method: 'POST', body }),
      invalidatesTags: ['Library'],
    }),
    getAllShelves: builder.query({
      query: () => ({ url: `/shelf`, method: 'GET' }),
      providesTags: ['Library'],
    }),
    createBookDetails: builder.mutation({
      query: (body) => ({ url: '/book-details/create', method: 'POST', body }),
    }),
    createBook: builder.mutation({
      query: (body) => ({ url: '/books/create', method: 'POST', body }),
    }),
    createShelf: builder.mutation({
      query: (body) => ({ url: '/shelf/create', method: 'POST', body }),
      invalidatesTags: ['Library'],
    }),
    editShelf: builder.mutation({
      query: ({ id, formState }) => ({ url: `/shelf/update/${id}`, method: 'PUT', body: formState }),
    }),
    deleteShelf: builder.mutation({
      query: (id) => ({ url: `/shelf/delete/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Library'],
    }),
    setSubscribe: builder.mutation({
      query: (body) => ({ url: `/notify`, method: 'PUT', body }),
    }),
    checkSubscription: builder.query({
      query: (body) => ({ url: `/notify/issubscribed`, method: 'POST', body }),
    }),
  }),
});

export const {
  useGetBookDetailsListQuery,
  useGetBookDetailsByIdQuery,
  useGetBorrowHistoryQuery,
  useGetSearchByTitleMutation,
  useBorrowBookMutation,
  useReturnBookMutation,
  useGetAllShelvesQuery,
  useCreateBookDetailsMutation,
  useCreateBookMutation,
  useCreateShelfMutation,
  useEditShelfMutation,
  useDeleteShelfMutation,
  useSetSubscribeMutation,
  useCheckSubscriptionQuery,
} = libraryApi;
