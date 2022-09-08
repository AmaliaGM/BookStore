const ADD_BOOKS = 'bookstore/books/ADD_BOOKS';
const FILTER_BOOKS = 'bookstore/books/FILTER_BOOKS';

export const addBook = (payload) => ({
  type: ADD_BOOKS,
  payload,
});
export const filterBooks = (payload) => ({
  type: FILTER_BOOKS,
  payload,
});
const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BOOKS:
      return { ...state, filterBooks: action.filter };
    case ADD_BOOKS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default bookReducer;
