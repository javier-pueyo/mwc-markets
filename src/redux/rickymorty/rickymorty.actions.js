/**
 * En actions crearemos las funciones que llamarán los componentes.
 * 
 * Estas funciones ejecutarán dispatch({ type: '...', payload: [..]})
 * 
 * Una vez que se ejecuta el dispatch, estamos 'disparando' una acción de redux.
 * 
 * Esa acción será recibida por el reducer (rickymortyReducer) y pasará al switch.
 * 
 * En el switch, si tenemos definido un 'case' igual a la acción 'disparada', nuestro código entrará ahí.
 * 
 * Una vez dentro del 'case' en el switch, nuestra tarea será generar un nuevo estado con los cambios
 * que hayamos decidido para nuestra aplicación.
 */

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_OK = 'FETCH_CHARACTERS_OK';
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';

export const pepe = 'Pepito Pérez';


export const getRickymortyCharacters = (url) => dispatch => {
  dispatch({ type: FETCH_CHARACTERS });

  const pageFromUrl = url.split('=')[1];

  fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // Tendré que mandarle al reducer la información para que la guarde.

        if (res.error) throw new Error(res.error);
        
        dispatch({
          type: FETCH_CHARACTERS_OK,
          payload: { ...res, page: pageFromUrl },
        });
      })
      .catch((error) => {
        console.log('error', error.message);
        dispatch({
          type: FETCH_CHARACTERS_ERROR,
          payload: error.message,
        });
      });
};