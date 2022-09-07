const initialState = {
  bookTitle: 'Huckleberry Finn Adventures',
  bookAuthor: 'Mark Twain',
};
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default reducers;
