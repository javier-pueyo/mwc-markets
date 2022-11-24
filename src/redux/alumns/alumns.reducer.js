import * as actions from "./alumns.actions";

const INITIAL_STATE = {
  alumns: JSON.parse(localStorage.getItem("alumns")) || [],
};

const alumnsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.CREATE_ALUMN: {
      localStorage.setItem('alumns', JSON.stringify([...state.alumns, payload]));
      
      return {
        ...state,
        alumns: [...state.alumns, payload],
      };
    }

    case actions.DELETE_ALUMN: {
      const filtered = state.alumns.filter(al => al !== payload);
      localStorage.setItem('alumns', JSON.stringify(filtered));

      return {
        ...state,
        alumns: filtered,
      };
    }

    case actions.EDIT_ALUMN: {
      const newAlumns = state.alumns.map(al => {
        if (al === payload.alumn) return payload.newAlumn;
        return al;
      });
      
      localStorage.setItem('alumns', JSON.stringify(newAlumns));

      return {
        ...state,
        alumns: newAlumns,
      }
    }

    default: {
      return state;
    }
  }
};

export default alumnsReducer;
