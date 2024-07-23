import '../assets/styles/Library/library.style.scss';
import { useState, useEffect } from 'react';
import LibCard from '../components/library/LibCard.jsx';
import Searchicon from '../assets/icons/search-icon.svg';
import LibHead from '../components/library/LibHead.jsx';
import notify from '../assets/icons/notify.svg';
import { Link } from 'react-router-dom';
import { useGetUserDetailsQuery } from '../api/employee/api.employee.jsx';
import { useGetBookDetailsListQuery, useGetSearchByTitleMutation } from '../api/library/api.library.jsx';
import { useRef } from 'react';
import getRole from '../utils/TokenDecode.jsx';
import { useDebounce } from 'use-debounce';
import ShowModal from '../components/library/ShowModal.jsx';

const LibSearch = () => {
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, 500);
  const [books, setBooks] = useState([]);
  const { data: userDetails } = useGetUserDetailsQuery();
  const { data: booksDetail, isSuccess } = useGetBookDetailsListQuery();

  const [showModal, setShowModal] = useState(false);

  const toggalModal = () => {
    setShowModal(!showModal);
  };

  console.log(showModal);

  const [getSearchByTitle] = useGetSearchByTitleMutation();
  // const [getSearchByTitle] =  useGetSearchByTitleQuery();

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
  const [down, setDown] = useState(false);
  const boxRef = useRef(null);
  const Role = userDetails?.role;
  const [available, setavailable] = useState('');

  var box = document.getElementById('box');

  function toggleNotifi() {
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
  }
  return (
    <div className="main__body">
      <div className="main__head">
        <div className="button-class">
          {getRole() === 'ADMIN' ? (
            <div>
              <Link to="create">
                <button className="btn">Add Books</button>
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
        <LibHead heads={['ISBN', 'Title', 'Author', 'Availability']} Role={Role} />
        <div className="employee-list">{books && books.map((book, index) => <LibCard key={index} {...book} Role={Role} />)}</div>
      </div>
    </div>
  );
};

export default LibSearch;
