import { connect } from 'react-redux';
import React, { useState } from 'react';
import store from './store';
import addData from '../action';
import data from './data';

const AddNewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author };
  };
  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit()}>
        <label htmlFor="BookTitle">
          <input
            type="text"
            id="BookTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Book Title"
          />
        </label>
        <input
          type="text"
          htmlFor="Book Author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />

        <button onClick={addData} type="submit">Add book</button>
        <p>{ title }</p>
        <p>{ author }</p>
      </form>

    </div>
  );
};

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) => ({
  addData: () => dispatch(addData),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewBook);
