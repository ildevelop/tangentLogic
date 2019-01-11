import * as mainConstanst from '../reducers/constant'
import {items} from './response'
export const initState = () => dispatch => {
  const localfilms = JSON.parse(localStorage.getItem("films"));
  if (localStorage.getItem("films")) {
    dispatch({
      type: mainConstanst.FETCH_LOCAL_films_SUCCESS,
      payload: localfilms
    });
  } else {
    dispatch({
      type: mainConstanst.FETCH_films_SUCCESS,
      payload: items
    });
  }
};


export const clearSearchData = ()=>{
  let resetFilms = JSON.stringify(items)
  localStorage.setItem('films', resetFilms);
  return {
    type: mainConstanst.FETCH_films_SUCCESS,
    payload: items
  };
};


export const closeModal = () => {
  return {
    type: mainConstanst.FETCH_NEW_FILM_ERROR,
  };
};
export const searchfilms = value => {
  return {
    type: mainConstanst.SEARCH_FILM,
    value
  };
};
export const removeFilm = film => {
  return {
    type: mainConstanst.REMOVE_MY_FILM,
    film
  };
};
export const addFilm = film => {
  return {
    type: mainConstanst.ADD_MY_FILM,
    film
  };
};

