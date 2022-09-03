import React from 'react';

const AddNewBook = () => (
  <div>
    <h2>Add New Book</h2>
    <form>
      <label>
        <input
          type="text"
          htmlFor="Book Title"
          required
        />
        Book Title
      </label>
      <label>
        <input
          type="text"
          htmlFor="Book Author"
          required
        />
        Book Author
      </label>
      <button type="button">Add book</button>
    </form>

  </div>
);

export default AddNewBook;
