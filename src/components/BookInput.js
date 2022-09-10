import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, postData } from '../Redux/Book/reducer';

const AddNewBook = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: new Date().getTime().toString(), bookTitle, bookAuthor };
    dispatch(addBook(book));
    postData(book);
  };

  return (
    <div className="NewBookCont">
      <h2 className="AddNewBook">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="BookTitle">
          <input
            className="BookTitle"
            type="text"
            id="BookTitle"
            onChange={(e) => setBookTitle(e.target.value)}
            required
            placeholder="Book Title"
          />
        </label>
        <input
          className="Author"
          type="text"
          htmlFor="Book Author"
          required
          onChange={(e) => setBookAuthor(e.target.value)}
          placeholder="Author"
        />
        <button className="AddButton" type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddNewBook;
