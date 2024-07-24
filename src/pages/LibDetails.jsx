import pencilIcon from '../assets/icons/pencil-circle.svg';
import BookDetailsCard from '../components/library/BookDetailsCard';
import getRole from '../utils/TokenDecode';
import Reviews from '../assets/icons/reviews.svg';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useGetBookDetailsByIdQuery } from '../api/library/api.library';
import { useRef } from 'react';
import { useState } from 'react';

import message from '../assets/icons/review-profile.svg';

const LibDetails = () => {
  const Role = getRole();
  const { isbn } = useParams();
  const boxRef = useRef(null);
  const [down, setDown] = useState(false);

  const { data: Bookdetails } = useGetBookDetailsByIdQuery(isbn);

  const toggleRev = () => {
    setDown(!down);
    if (boxRef.current) {
      if (down) {
        boxRef.current.style.height = '0px';
        boxRef.current.style.opacity = 0;
      } else {
        boxRef.current.style.height = '510px';
        boxRef.current.style.opacity = 1;
      }
    }
  };

  return (
    <div className="Dashboard">
      <div className="top-header-employee-details">
        <h1>Book Overview</h1>
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
