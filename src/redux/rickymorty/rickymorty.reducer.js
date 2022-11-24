import * as actions from './rickymorty.actions';

const INITIAL_STATE = {
  characters: [],
  info: {},
  isLoading: false,
  error: null,
  page: 1,
};

const rickymortyReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch(type) {
    case actions.FETCH_CHARACTERS: {
      return { ...state, isLoading: true };
    }
    case actions.FETCH_CHARACTERS_OK: {
      return {
        ...state,
        info: payload.info,
        characters: payload.results,
        page: payload.page,
        isLoading: false,
      };
    }
    case actions.FETCH_CHARACTERS_ERROR: {
      return { ...state, error: payload, isLoading: false };
    }
    default: {
      return state;
    }
  };
};

export default rickymortyReducer;