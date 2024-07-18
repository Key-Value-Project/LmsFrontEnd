import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee.jsx";
import NotFound from "./pages/NotFound.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";
import EmployeeList from "./pages/EmployeeList.jsx";
import Login from "./pages/Login.jsx";
import EditEmployee from "./pages/EditEmployee.jsx";
import DetailsEmployee from "./pages/DetailsEmployee.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { ToastContainer } from "react-toastify";
import Profile from "./pages/Profile.jsx";

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
				{ path: "profile", element: <Profile /> },
			],
		},
	]);

	return (
		<Provider store={store}>
			<div>
				<RouterProvider router={router} />
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
				transition:Bounce
				style={{
					"--toastify-color-success": "#00aeef",
					"--toastify-text-color-success": "#ffffff",
					"--toastify-text-color-info": "white",
					"--toastify-text-color-error": "white",
					"--toastify-color-error": "#ed1846",
					"--toastify-color-warning": "black",
					"--toastify-text-color-warning": "white",
				}}
			/>
		</Provider>
	);
};

export default App;
