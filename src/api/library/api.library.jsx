import libraryApiWithTags from "../../services/library.api";

const libraryApi = libraryApiWithTags.injectEndpoints({
    endpoints: (builder) => ({
        getBookDetailsList: builder.query({
            query: () => "/book-details",
        }),
        getBookDetailsById: builder.query({
            query: (isbn) => `/book-details/${isbn}`,
        }),
    }),
});

export const { useGetBookDetailsListQuery, useGetBookDetailsByIdQuery } = libraryApi;
