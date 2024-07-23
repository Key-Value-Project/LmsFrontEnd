import '../assets/styles/Library/library.style.scss';
import LibCard from '../components/library/LibCard.jsx';
import Searchicon from '../assets/icons/search-icon.svg';
import LibHead from '../components/library/LibHead.jsx';
import notify from '../assets/icons/notify.svg';
import message from '../assets/icons/message.svg';
import getRole from '../utils/TokenDecode.jsx';
import ShowModal from '../components/library/ShowModal.jsx';
import plusIcon from '../assets/icons/plus-circle.svg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useDebounce } from 'use-debounce';
import { useGetUserDetailsQuery } from '../api/employee/api.employee.jsx';
import { useGetBookDetailsListQuery, useGetSearchByTitleMutation } from '../api/library/api.library.jsx';

const LibSearch = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [down, setDown] = useState(false);

  const boxRef = useRef(null);

  const [debouncedSearch] = useDebounce(search, 500);

  const [getSearchByTitle] = useGetSearchByTitleMutation();
  const { data: userDetails } = useGetUserDetailsQuery();
  const { data: booksDetail, isSuccess } = useGetBookDetailsListQuery();

  const toggalModal = () => {
    setShowModal(!showModal);
  };

  const toggleNotifi = () => {
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

  useEffect(() => {
    const fetchBooks = async () => {
      if (debouncedSearch === '' && booksDetail) {
        setBooks(booksDetail);
      } else if (booksDetail) {
        const { data } = await getSearchByTitle(debouncedSearch);
        setBooks(data);
      }
    };
    fetchBooks();
  }, [debouncedSearch, isSuccess]);

  return (
    <div className="main__body">
      <div className="main__head">
        <div className="button-class">
          {getRole() === 'ADMIN' ? ( //Add Books button only available for ADMIN
            <div>
              <Link to="create" className="text__dec">
                <div className="create-button-emp">
                  <img src={plusIcon} alt="create button" />
                  <span>Add Books</span>
                </div>
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="notify-bar">
          <img src={notify} className="notify" onClick={toggleNotifi} />
          <div
            className="notify-body"
            ref={boxRef}
            id="box"
            style={{
              height: down ? '510px' : '0px',
              opacity: down ? 1 : 0,
            }}
          >
            <h1>Notifications</h1>
            <div className="notify-content">
              <img src={message} />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam debitis molestias vitae cumque nesciunt. Quos consequuntur aliquam
                inventore quae mollitia quo autem ullam soluta totam, voluptate voluptatem, similique placeat voluptatibus.
              </p>
            </div>
            <div className="notify-content">
              <img src={message} />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam debitis molestias vitae cumque nesciunt. Quos consequuntur aliquam
                inventore quae mollitia quo autem ullam soluta totam, voluptate voluptatem, similique placeat voluptatibus.
              </p>
            </div>
            <div className="notify-content">
              <img src={message} />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam debitis molestias vitae cumque nesciunt. Quos consequuntur aliquam
                inventore quae mollitia quo autem ullam soluta totam, voluptate voluptatem, similique placeat voluptatibus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lib__container">
        <form>
          <input type="text" placeholder="Search Books by title" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type="submit">
            <span>
              <img src={Searchicon} alt="Search icon" />
            </span>
          </button>
        </form>
        <div className="scan">
          <button className="btn" title="You can scan your ISBN here and enter shelf number" onClick={toggalModal}>
            Scan
          </button>

          {showModal && <ShowModal onclose={toggalModal} />}
        </div>
      </div>
      <div className="book-list">
        <LibHead heads={['ISBN', 'Title', 'Author', 'Availability']} />
        <div className="employee-list">{books && books.map((book, index) => <LibCard key={index} {...book} />)}</div>
      </div>
    </div>
  );
};

export default LibSearch;
