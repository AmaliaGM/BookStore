const ADD_BOOKS = 'bookstore/books/ADD_BOOKS';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

export const addBook = (payload) => ({
  type: ADD_BOOKS,
  payload,
});
export const deleteBook = (payload) => ({
  type: DELETE_BOOK,
  payload,
});
const initialState = [
  {
    id: 1231243,
    bookTitle: 'Huckleberry Finn Adventures',
    bookAuthor: 'Mark Twain',
  },
  {
    id: 123445,
    bookTitle: 'Tom Swayer Adventures',
    bookAuthor: 'Mark Twain',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BOOK:
      return state.filter(({ id }) => id !== action.payload);
    case ADD_BOOKS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default bookReducer;
