import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import * as actionTypes from '../reducers/constant'
import * as dotProp from 'dot-prop-immutable';

const initialState = {
  films: [],
  searchedValue: "",
  loaded: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_films_SUCCESS:
      return {...state, films: action.payload, loaded: true};
    case actionTypes.FETCH_LOCAL_films_SUCCESS:
      return {...state, films: action.payload, loaded: true};
    case actionTypes.SEARCH_FILM:
      return {...state, searchedValue: action.value};
    case actionTypes.ADD_MY_FILM:
      const searchedToAdd = state.films.findIndex(film => film.id.videoId === action.film.id.videoId);
      let NewStore = dotProp.set(state, `films.${searchedToAdd}.isFavorites`, true);
      let localData = JSON.stringify(NewStore.films);
      localStorage.setItem('films', localData);
      return NewStore;
    case actionTypes.REMOVE_MY_FILM:
      const searchedToRemove = state.films.findIndex(film => film.id.videoId=== action.film.id.videoId);
      let NewStore2= dotProp.set(state, `films.${searchedToRemove}.isFavorites`, false);
      let newData = JSON.stringify(NewStore2.films);
      localStorage.setItem('films', newData);
      return NewStore2;
    default:
      return state;
  }
};

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store