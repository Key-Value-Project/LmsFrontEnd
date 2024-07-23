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
    id: 'shelfCode',
    name: 'shelfCode',
    required: 'shelfCode',
    text: 'Shelf Code',
    Component: TextField,
  },
];

export default BookField;
