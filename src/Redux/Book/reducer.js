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
const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BOOK:
      return state.map((book) => (book.id !== action.id));
    case ADD_BOOKS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default bookReducer;
