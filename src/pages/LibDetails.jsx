import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import pencilIcon from '../assets/icons/pencil-circle.svg';
import BookDetailsCard from '../components/library/BookDetailsCard';
import getRole from '../utils/TokenDecode';
import { useGetBookDetailsByIdQuery } from '../api/library/api.library';
const LibDetails = () => {
  const Role = getRole();
  const { isbn } = useParams();
  const { data: Bookdetails } = useGetBookDetailsByIdQuery(isbn);

  return (
    <div className="Dashboard">
      <div className="top-header-employee-details">
        <h1>Book Details</h1>
        <div className="top-header-components">
          <Link to={`/library/edit/${isbn}`} style={{ textDecoration: 'none', color: 'black' }}>
            {Role === 'ADMIN' ? (
              <div className="edit-button-emp">
                <img src={pencilIcon} alt="edit button" />
                <span>Edit</span>
              </div>
            ) : (
              <></>
            )}
          </Link>
        </div>
      </div>
      {Bookdetails && <BookDetailsCard emp={Bookdetails[0]} Role={Role} />}
    </div>
  );
};

export default LibDetails;
