import React from 'react';
import AddNewBook from './BookInput';

const Books = () => {
  return (
   <div>
    <div>

      <div>
        <span className='Author'>Mark Twain</span>
        <span className='BookTitle'> Huckleberry Finn Adventures</span>
      </div>
      <div>
        <span className='Comments'>
          Comments
        </span>
        <span>
          Remove
        </span>
        <span>
          Edit
        </span>
      </div>
      <div>
        <span>
          {/* <CircularProgressbar value{...percentage} /> */}
        </span>
        <span>
          64%
        </span>
        <span>
          completed
        </span>
      </div>
      <AddNewBook />
        
    </div>
  </div>
  )
}

export default Books