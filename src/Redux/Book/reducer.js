const ADD_BOOKS = 'bookstore/books/ADD_BOOKS';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7Qdz6p3vp4ymDH6hhInP/books';

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

export const getBooksList = () => async (dispatch) => {
  const booksList = await fetch(`${baseURL}`)
    .then((response) => response.json());
  const booksID = Object.keys(booksList);
  const formatedBooks = [];
  booksID.map((key) => formatedBooks.push({
    id: key,
    title: booksList[key][0].title,
    category: booksList[key][0].category,
  }));
  dispatch(addBook(formatedBooks));
};

export const postBook = (newBook) => async (dispatch) => {
  await fetch(`${baseURL}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: newBook.id,
      title: newBook.title,
      category: newBook.category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(addBook(newBook));
};
/*
  deleteBook = (id) => async (dispatch) => {
  await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(removeBook(id));
}; */

export default bookReducer;
