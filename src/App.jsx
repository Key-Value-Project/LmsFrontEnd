import CreateEmployee from './pages/employee pages/CreateEmployee.jsx';
import NotFound from './pages/NotFound.jsx';
import HomeLayout from './layouts/HomeLayout.jsx';
import Login from './pages/Login.jsx';
import EditEmployee from './pages/employee pages/EditEmployee.jsx';
import DetailsEmployee from './pages/employee pages/DetailsEmployee.jsx';
import store from './store/store.js';
import Profile from './pages/employee pages/Profile.jsx';
import LibSearch from './pages/LibSearch.jsx';
import LibDetails from './pages/LibDetails.jsx';
import BorrowDetails from './pages/BorrowDetails.jsx';
import BookEdit from './pages/BookEdit.jsx';
import CreateBook from './pages/CreateBook.jsx';
import CreateShelf from './pages/CreateShelf.jsx';
import Scan from './components/library/Scan.jsx';
import ShelfDetails from './pages/ShelfDetails.jsx';
import AddBook from './pages/Addbook.jsx';
import Insights from './pages/Insights.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import EditShelf from './pages/EditShelf.jsx';
import EmployeeList from './pages/employee pages/EmployeeList.jsx';
import ShelfBook from './pages/library Pages/ShelfBooks.jsx';
import Reports from './pages/employee pages/Reports.jsx';
import { BarcodeScanner } from './components/library/Barcode.jsx';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: '/employee',
      element: <HomeLayout />,
      children: [
        { index: true, element: <EmployeeList /> },
        { path: 'create', element: <CreateEmployee /> },
        { path: 'edit/:id', element: <EditEmployee /> },
        { path: 'details/:id', element: <DetailsEmployee /> },
        { path: 'profile', element: <Profile /> },
        { path: 'report/:id', element: <Reports /> },
      ],
    },
    {
      path: '/library',
      element: <HomeLayout />,
      children: [
        { index: true, element: <LibSearch /> }, //component to show all books
        { path: 'details/:isbn', element: <LibDetails /> }, //component to show each book details
        { path: 'addbook', element: <AddBook /> }, //component to add new books
        { path: 'borrow', element: <BorrowDetails /> },
        { path: 'edit/:id', element: <BookEdit /> },
        { path: 'create', element: <CreateBook /> },
        { path: 'shelf', element: <ShelfDetails /> },
        { path: 'shelf/details/:id', element: <ShelfBook /> },
        { path: 'createshelf', element: <CreateShelf /> },
        { path: 'scan', element: <Scan /> },
        { path: 'insights', element: <Insights /> },
        { path: 'shelf/edit/:id/:code/:location', element: <EditShelf /> },
        { path: 'barcode/:type', element: <BarcodeScanner /> },
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
          '--toastify-color-success': '#00aeef',
          '--toastify-text-color-success': '#ffffff',
          '--toastify-text-color-info': 'white',
          '--toastify-text-color-error': 'white',
          '--toastify-color-error': '#ed1846',
          '--toastify-color-warning': 'black',
          '--toastify-text-color-warning': 'white',
        }}
      />
    </Provider>
  );
};

export default App;
