import React from 'react';
import AddNewBook from './BookInput';

const Books = () => (
  <div className="container">
    <div className="mediumCont">
      <div className="smallCont">
        <div className="Book">
          <span className="Categorie">Adventures</span>
          <span className="BookTitle"> Huckleberry Finn Adventures</span>
          <span className="Author">Mark Twain</span>
        </div>
        <div className="TitleFoot">
          <span className="Comments">
            Comments
          </span>
          <span>
            Remove
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
    <div className="AddNewBook">
      <AddNewBook />
    </div>
  </div>

);

export default Books;
