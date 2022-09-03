import React from 'react';

const AddNewBook = () => (
  <div>
    <h2>Add New Book</h2>
    <form>
      <label htmlFor="BookTitle">
        <input
          type="text"
          id="BookTitle"
          required
        />
        Book Title
      </label>

      <input
        type="text"
        htmlFor="Book Author"
        required
      />
      Book Author

      <button type="button">Add book</button>
    </form>

  </div>
);

export default AddNewBook;
