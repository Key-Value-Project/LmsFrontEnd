import { useState } from 'react';
import del from '../../assets/icons/delete.svg';
import DeletePopUp from '../../components/employeeList/DeletePopUp.jsx';
import { Link } from 'react-router-dom';
import { Availability } from './Availability.jsx';
import getRole from '../../utils/TokenDecode.jsx';
import edt from '../../assets/icons/edit.svg';
const LibCard = (details) => {
  const [deleteDialog, setDeleteDialog] = useState(false);

  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDeleteDialog(true);
  };

  const handleDelete = () => {
    deleteEmployee(details.id);
    setDeleteDialog(false);
  };

  const handleClose = () => {
    setDeleteDialog(false);
  };

  const columns = [
    { label: 'ID', value: details.isbn },
    { label: 'Title', value: details.title },
    { label: 'Author', value: details.author },
    { label: 'Status', value: <Availability status={details.status} /> },
  ];

  return (
    <>
      <Link to={`details/${details.isbn}`} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="employee-list-items list-book">
          {columns.map((column, index) => (
            <div key={index} className="item">
              {column.value}
            </div>
          ))}

          {details.Role === 'borrow' ? (
            <div className="item Action">
              <button
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(details.data.isbn, details.shelf_id);
                  details.readnow({
                    isbn: details.data.isbn,
                    shelf_id: details.shelf_id,
                  });
                }}
              >
                Take Book
              </button>
            </div>
          ) : (
            <></>
          )}

          {getRole() === 'ADMIN' && details.Role === 'shelf' ? (
            <div className="item Action">
              <img src={del} alt="delete button" onClick={handleDeleteClick} />

              <Link to={`edit/${details.isbn}`}>
                <img src={edt} alt="edit button" />
              </Link>
            </div>
          ) : (
            <></>
          )}

          {getRole() === 'ADMIN' && details.Role === 'borrow' ? (
            <div className="item Action">
              <img src={del} alt="delete button" onClick={handleDeleteClick} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </Link>
      <DeletePopUp open={deleteDialog} handleClose={handleClose} handleDelete={handleDelete} />
    </>
  );
};

export default LibCard;
