import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AddNewBook from './BookInput';
import { deleteBook, fetchData } from '../Redux/Book/reducer';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const books = useSelector((store) => store.bookReducer);
   console.log('books components', books);

  return (
    <div className="container">
      {
        books.map((book) => (
          <div className="mediumCont" key={book.id}>
            <div className="smallCont">
              <div className="Book">
                <span className="Categorie">Adventures</span>
                <span className="BookTitle">{book.bookTitle}</span>
                <span className="Author">{book.bookAuthor}</span>
              </div>
              <div className="TitleFoot">
                <span className="Comments">
                  Comments
                </span>
                <span>
                  <button onClick={() => dispatch(deleteBook(book.id))} type="button">Remove</button>
                </span>
                <span>
                  Edit
                </span>
              </div>
            </div>
            <div className="progress">
              <span>
                {/* <CircularProgressbar value{...percentage} /> */}
              </span>
              <div className="percentage">
                <span>
                  64%
                </span>
                <span>
                  completed
                </span>
              </div>
            </div>
          </div>
        ))
      }
      <div className="AddNewBook">
        <AddNewBook />
      </div>
    </div>

  );
};

export default Books;
