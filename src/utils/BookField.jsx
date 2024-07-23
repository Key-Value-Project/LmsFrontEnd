import DropDownMenu from '../components/createEmployee/DropDownMenu';
import TextField from '../components/createEmployee/TextField';
import TextArea from '../components/library/TeaxtArea';
const BookField = [
  {
    type: 'text',
    id: 'isbn',
    name: 'isbn',
    required: 'isbn',
    text: 'ISBN',
    Component: TextField,
  },
  {
    type: 'text',
    id: 'title',
    name: 'title',
    required: 'Title',
    text: 'Book Title',
    Component: TextField,
  },
  {
    type: 'text',
    id: 'author',
    name: 'author',
    required: 'Author',
    text: 'Author',
    Component: TextField,
  },
  {
    type: 'text',
    id: 'description',
    name: 'description',
    required: 'Description',
    text: 'Description',
    Component: TextArea,
  },
];

export default BookField;
