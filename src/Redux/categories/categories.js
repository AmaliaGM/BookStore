const DEFAULT = 'BOOKSTORE/CATEGORIES/DEFAULT';

export const categories = (payload) => ({
  type: DEFAULT,
  payload,
});

const initialState = '';
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT:
      return 'under construction';
    default:
      return state;
  }
};

export default categoryReducer;
