
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee.jsx";
import NotFound from "./pages/NotFound.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";
import EmployeeList from "./pages/EmployeeList.jsx";
import Login from "./pages/Login";

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
