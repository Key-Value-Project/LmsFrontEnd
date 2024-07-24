import getRole from '../utils/TokenDecode';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import plusIcon from '../assets/icons/plus-circle.svg';
import LibHead from '../components/library/LibHead';
import { useGetAllShelvesQuery } from '../api/library/api.library';
import LibCard from '../components/library/LibCard';

const ShelfDetails = () => {
  //Getting all the shelf data
  const { data: ShelvesData } = useGetAllShelvesQuery();
  useEffect(() => {
    console.log(ShelvesData);
  }, [ShelvesData]);

  return (
    <>
      <div className="Dashboard">
        <div className="top-header-employee-list">
          <h1>Shelf Overview</h1>
          <div className="top-header-components">
            {getRole() === 'ADMIN' ? (
              <Link to="/library/createshelf" style={{ textDecoration: 'none', color: 'black' }}>
                <div className="create-button-emp">
                  <img src={plusIcon} alt="create button" />
                  <span>Create Shelf</span>
                </div>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
        <LibHead heads={['Shelf code', 'Shelf Location', 'Books Count', '']} />
        <div className="employee-list">
          {ShelvesData &&
            ShelvesData.map((shelf, index) => (
              <LibCard
                key={index}
                shelf_id={shelf.id}
                isbn={shelf.code}
                title={shelf.location}
                author={shelf.books.length}
                status={null}
                Role="shelf"
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ShelfDetails;
