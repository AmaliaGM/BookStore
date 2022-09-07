import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from './Books.js';

const AddNewBook = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: new Date().getTime().toString(), bookTitle, bookAuthor };
    dispatch(addBook(book));
  };
  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="BookTitle">
          <input
            type="text"
            id="BookTitle"
            onChange={(e) => setBookTitle(e.target.value)}
            required
            placeholder="Book Title"
          />
        </label>
        <input
          type="text"
          htmlFor="Book Author"
          required
          onChange={(e) => setBookAuthor(e.target.value)}
          placeholder="Author"
        />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddNewBook;
