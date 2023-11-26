import { ADD_SERIE } from "../actions/series";

const initialState = {
    series: [],
  };

  const seriesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_SERIE:
        return {
            ...state,
            series: [...state.series, action.payload],
          };
          default:
      return state;
    }



  }

  export default seriesReducer;