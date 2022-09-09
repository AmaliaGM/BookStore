import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categories } from '../Redux/Categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.categoryReducer);

  const handleSubmit = () => dispatch(categories());
  return (
    <div>
      <h2>{store}</h2>
      Categories
      <button onClick={handleSubmit} type="button">CHECK STATUS</button>
    </div>
  );
};

export default Categories;
