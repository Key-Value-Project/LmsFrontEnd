import apiWithTag from "../../services/employee.api";

const employeeApi = apiWithTag.injectEndpoints({
	endpoints: (builder) => ({
		getEmployeeList: builder.query({
			query: () => "/employee",
			providesTags: ["Employee_List"],
		}),
		getEmployeeDetails: builder.query({
			query: (id) => `/employee/${id}`,
			providesTags: ["Employee_Details"],
		}),
		addEmployee: builder.mutation({
			query: (payload) => ({
				url: "/employee",
				method: "POST",
				body: payload,
            }),
            invalidatesTags: ["Employee_List"],
        }),
        updateEmployee: builder.mutation({
            query: (payload) => ({
                url: `/employee/${payload.id}`,
                method: "PUT",
                body: payload,
            }),
        }),
        updateEmployeeRelation: builder.mutation({
            query: (payload) => ({
                url: `/employee/${payload.id}`,
                method: "PATCH",
                body: payload,
            }),
            invalidatesTags: ["Employee_List"],
        }),
        deleteEmployee: builder.mutation({
            query: (id) => ({
                url: `/employee/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Employee_List"],
        }),
	}),
});

export const {
	useGetEmployeeListQuery, // query hook has no trigger function only {data & status}
	useLazyGetEmployeeListQuery, // lazy query hook with trigger function, {data & status}
    useGetEmployeeDetailsQuery,
    useAddEmployeeMutation,
    useUpdateEmployeeMutation,
    useUpdateEmployeeRelationMutation,
    useDeleteEmployeeMutation,
} = employeeApi;
