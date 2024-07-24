import del from '../../assets/icons/delete.svg';
import DeletePopUp from '../../components/employeeList/DeletePopUp.jsx';
import getRole from '../../utils/TokenDecode.jsx';
import edt from '../../assets/icons/edit.svg';
import starIcon from '../../assets/icons/starIcon.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Availability } from './Availability.jsx';
import { useDeleteShelfMutation } from '../../api/library/api.library.jsx';
import { notifyError, notifySuccess } from '../../utils/Toast.js';

const LibCard = (details) => {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const rating = 3; // dummy rating value

  const [deleteshelf] = useDeleteShelfMutation();
  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDeleteDialog(true);
  };

  const handleDelete = async () => {
    console.log('id of the shelf', details.shelf_id);
    const response = await deleteshelf(details.shelf_id);
    if (response.error) {
      notifyError(response.error.data.errors[0]);
    } else {
      notifySuccess(`Shelf ${details.isbn} deleted successfully`);
    }

    setDeleteDialog(false);
  };

  const handleClose = () => {
    setDeleteDialog(false);
  };

  const avail = details.status === null ? null : <Availability status={details.status} />;
  const linkValue = details.status === null ? null : `details/${details.isbn}`;
  const columns = [
    { label: 'ID', value: details.isbn },
    { label: 'Title', value: details.title },
    { label: 'Author', value: details.author },
    { label: 'Status', value: avail },
  ];

  return (
    <>
      <Link to={linkValue} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="employee-list-items list-book">
          {columns.map(
            (column, index) =>
              column.value !== null && (
                <div key={index} className="item">
                  {console.log(column.value, column.label)}
                  {column.value}
                </div>
              )
          )}

          {details.Role === 'borrow' ? (
            <div className="item Action">
              <button
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  details.readnow({
                    isbn: parseInt(details.data.isbn),
                    shelf_id: details.shelf_id,
                  });
                }}
              >
                Checkout
              </button>
            </div>
          ) : (
            <></>
          )}

          {getRole() === 'ADMIN' && details.Role === 'shelf' ? (
            <div className="item Action">
              <img src={del} alt="delete button" onClick={handleDeleteClick} />

              <Link to={`edit/${details.shelf_id}`}>
                <img src={edt} alt="edit button" />
              </Link>
            </div>
          ) : (
            <></>
          )}

          {details.page === 'libS' ? (
            <div className="item rating">
              {[...Array(rating)].map((_, i) => (
                <>
                  <img key={i} src={starIcon} alt="star" />
                </>
              ))}
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
