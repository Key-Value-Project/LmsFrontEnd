import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const libraryBaseApi = createApi({
    reducerPath: "libraryApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});
const libraryApiWithTags = libraryBaseApi.enhanceEndpoints({
    addTagTypes: ["Library"],
});
export default libraryApiWithTags;
