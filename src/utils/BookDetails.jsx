import DropDownMenu from '../components/createEmployee/DropDownMenu';
import TextField from '../components/createEmployee/TextField';
import TextArea from '../components/library/TeaxtArea';
import { Genre } from './Genre';

const BookDetails = [
  {
    type: 'number',
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
    id: 'description',
    name: 'description',
    required: 'Description',
    text: 'Description',
    Component: TextArea,
  },

  {
    id: 'genre',
    name: 'genre',
    options: [
      { value: Genre.ACTION, label: 'Action' },
      { value: Genre.ADVENTURE, label: 'Adventure' },
      { value: Genre.AUTOBIOGRAPHY, label: 'Autobiography' },
      { value: Genre.COMEDY, label: 'Comedy' },
      { value: Genre.CRIME, label: 'Crime' },
      { value: Genre.DRAMA, label: 'Drama' },
      { value: Genre.FANTASY, label: 'Fantasy' },
      { value: Genre.FICTION, label: 'Fiction' },
      { value: Genre.FOLKLORE, label: 'Folklore' },
      { value: Genre.FAIRY_TALE, label: 'Fairy Tale' },
      { value: Genre.HISTORY, label: 'History' },
      { value: Genre.HORROR, label: 'Horror' },
      { value: Genre.INFORMATIONAL, label: 'Informational' },
      { value: Genre.MYSTERY, label: 'Mystery' },
      { value: Genre.NON_FICTION, label: 'Non-Fiction' },
      { value: Genre.PHILOSOPHY, label: 'Philosophy' },
      { value: Genre.ROMANCE, label: 'Romance' },
      { value: Genre.RELIGION, label: 'Religion' },
      { value: Genre.SATIRE, label: 'Satire' },
      { value: Genre.SCIENCE_FICTION, label: 'Science Fiction' },
      { value: Genre.THRILLER, label: 'Thriller' },
      { value: Genre.TECHNOLOGY, label: 'Technology' },
      { value: Genre.WESTERN, label: 'Western' },
      { value: Genre.OTHER, label: 'Other' },
      { value: Genre.YOUNG_ADULT, label: 'Young Adult' },
    ],
    Component: DropDownMenu,
  },

  {
    type: 'text',
    id: 'author',
    name: 'author',
    required: 'Author',
    text: 'Author',
    Component: TextField,
  },
];

export default BookDetails;
