const ADD_BOOKS = 'bookstore/books/ADD_BOOKS';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';
const ADD_ALL_BOOKS = 'bookstore/books/ADD_ALL_BOOKS';
//  const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7Qdz6p3vp4ymDH6hhInP/books';

export const addBook = (payload) => ({
  type: ADD_BOOKS,
  payload,
});
export const deleteBook = (payload) => ({
  type: DELETE_BOOK,
  payload,
});
const fetchBooks = (payload) => ({
  type: ADD_ALL_BOOKS,
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
    case ADD_ALL_BOOKS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const fetchData = async () => {
  const data = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/L6NHScQcAZ5wrzaBikCo/books');
  const response = await data.json();
  console.log(response);
  const bookArray = Object.entries(response);
  const array = [];
  bookArray.map(([key, value]) => {
    const obj = {}
    obj.id = key;
    obj.title = value[0].title;
    obj.author = value[0].author;
    obj.category = value[0].category;
    return array.push(obj);
  })
  console.log(array);
  console.log(bookArray);
  /* return dispatch => {
    dispatch(fetchBooks(array));
  } */
 };

export const postData = async ({ id, bookTitle, bookAuthor }) => {
  const data = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/L6NHScQcAZ5wrzaBikCo/books', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title: bookTitle,
      author: bookAuthor,
      category: 'adventure',
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const response = await data.text();
  localStorage.setItem('items', JSON.stringify(response));
};

export default bookReducer;
