import apiWithTag from '../../services/employee.api';

export const loginApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: `/employee/login`,
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
