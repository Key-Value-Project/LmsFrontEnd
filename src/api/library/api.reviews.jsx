import libraryApiWithTags from '../../services/library.api';

const analyticsApi = libraryApiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      query: () => '/reviews',
    }),

    getReviewsByUserId: builder.query({
      query: (id) => `/reviews/user/${id}`,
    }),

    getReviewsByBookId: builder.query({
      query: (isbn) => `/reviews/book/${isbn}`,
    }),

    createReview: builder.mutation({
      query: (review) => ({
        url: '/reviews',
        method: 'POST',
        body: review,
      }),
    }),
  }),
});

export const { useGetAllReviewsQuery, useGetReviewsByUserIdQuery, useGetReviewsByBookIdQuery, useCreateReviewMutation } = analyticsApi;
