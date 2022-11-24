export const CREATE_ALUMN = "CREATE_ALUMN";
export const DELETE_ALUMN = "DELETE_ALUMN";
export const EDIT_ALUMN = "EDIT_ALUMN";

export const createAlumn = (newAlumn, redirect) => dispatch => {
  console.log('Create Alumn action', newAlumn);
  const action = {
    type: CREATE_ALUMN,
    payload: newAlumn,
  }

  dispatch(action);
  redirect();
};

export const deleteAlumn = (alumn) => dispatch => {
  const action = {
    type: DELETE_ALUMN,
    payload: alumn,
  }

  dispatch(action);
};

export const editAlumn = (alumn, newAlumn) => dispatch => {
  const action = {
    type: EDIT_ALUMN,
    payload: {alumn, newAlumn},
  }

  dispatch(action);
}