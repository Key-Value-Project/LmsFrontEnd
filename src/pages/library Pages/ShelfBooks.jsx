import { useEffect, useState } from 'react';
import { useGetAllShelfBooksQuery } from '../../api/library/api.library';
import LibCard from '../../components/library/LibCard';
import LibHead from '../../components/library/LibHead';
import { notifyError } from '../../utils/Toast';
import { useParams } from 'react-router';

const ShelfBook = () => {
  const { id } = useParams();
  // API call
  const { data = [], isSuccess, isError, isLoading } = useGetAllShelfBooksQuery(id);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    if (isError) {
      notifyError('Failed to fetch data');
    }
    if (isSuccess) {
      setBookList(data.books);
    }
  }, [data, isError, isSuccess]);

  return (
    <div className="Dashboard">
      <div className="top-header-employee-list">
        <h1>Shelf Book List</h1>
        <div className="top-header-components"></div>
      </div>
      <LibHead heads={['ISBN', 'Title', 'Author', 'Available']} />
      <div className="employee-list">
        {bookList &&
          bookList.map((book, index) => (
            <LibCard
              key={index}
              isbn={book.bookDetail.isbn}
              title={book.bookDetail.title}
              author={book.bookDetail.author}
              status={book.isborrow ? 'Not Available' : 'Available'}
              Role="book"
            />
          ))}
      </div>
    </div>
  );
};

export default ShelfBook;
