const ADD_BOOKS = 'bookstore/books/ADD_BOOKS';

export const addBook = (payload) => ({
  type: ADD_BOOKS,
  payload,
});

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default bookReducer;
