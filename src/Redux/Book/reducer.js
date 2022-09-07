const ADD_BOOKS = 'bookstore/books/ADD_BOOKS';

export const addBook = (payload) => ({
  type: ADD_BOOKS,
  payload,
});

const initialState = [
  {
    id: 1,
    bookTitle: 'The three little pigs',
    bookAuthor: 'Graham Brothers',
  },
  {
    id: 2,
    bookTitle: 'Tom Sawyer Adventures',
    bookAuthor: 'Mark Twain',
  },
  {
    id: 3,
    bookTitle: 'Huckleberry Finn Adventures',
    bookAuthor: 'Mark Twain',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default bookReducer;
