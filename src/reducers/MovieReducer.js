// reducers/moviesReducer.js

const initialState = {
    moviesData: [],
    error: null,
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MOVIES_DATA':
        return {
          ...state,
          moviesData: action.payload,
          error: null,
        };
      // Diğer durumları ekleyebilirsiniz.
      default:
        return state;
    }
  };
  
  export default moviesReducer;
  