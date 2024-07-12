import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee.jsx";
import NotFound from "./pages/NotFound.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";
import EmployeeList from "./pages/EmployeeList.jsx";
import Login from "./pages/Login";
import EditEmployee from "./pages/EditEmployee.jsx";
import DetailsEmployee from "./pages/DetailsEmployee.jsx";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
			errorElement: <NotFound />,
		},
		{
			path: "/employee",
			element: <HomeLayout />,
			children: [
				{ index: true, element: <EmployeeList /> },
				{ path: "create", element: <CreateEmployee /> },
				{ path: "edit/:id", element: <EditEmployee /> },
				{ path: "details/:id", element: <DetailsEmployee /> },
			],
		},
	]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
