// actions/moviesActions.js

export const setMoviesData = (movies) => {
    return {
      type: 'SET_MOVIES_DATA',
      payload: movies,
    };
  };
  