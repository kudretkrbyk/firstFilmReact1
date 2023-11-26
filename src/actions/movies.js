// src/actions/movies.js
export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const addMovie = (id, title, imageUrl, description) => ({
  type: ADD_MOVIE,
  payload: {
    id,
    title,
    imageUrl,
    description,
  },
});


