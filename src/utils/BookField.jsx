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

  {
    id: 'role',
    name: 'role',
    options: [
      { value: 'UI', label: 'UI' },
      { value: 'UX', label: 'UX' },
      { value: 'DEVELOPER', label: 'DEVELOPER' },
      { value: 'TESTER', label: 'TESTER' },
      { value: 'HR', label: 'HR' },
      { value: 'ADMIN', label: 'ADMIN' },
    ],
    Component: DropDownMenu,
  },
];

export default BookField;
