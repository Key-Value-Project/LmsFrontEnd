import DropDownMenu from '../components/createEmployee/DropDownMenu';
import TextField from '../components/createEmployee/TextField';
import TextArea from '../components/library/TeaxtArea';
const ShelfField = [
  {
    type: 'text',
    id: 'code',
    name: 'code',
    required: 'code',
    text: 'Shelf Code',
    Component: TextField,
  },
  {
    type: 'text',
    id: 'location',
    name: 'location',
    required: 'location',
    text: 'Location',
    Component: TextField,
  },
];

export default ShelfField;
