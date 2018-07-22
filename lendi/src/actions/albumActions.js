export const FETCH_ALBUMS_BEGIN   = 'FETCH_ALBUMS_BEGIN';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';

const ApiUrl = 'https://jsonplaceholder.typicode.com/photos';

export function fetchAlbums() {
  return dispatch => {
    dispatch(fetchAlbumsBegin());
    return fetch(ApiUrl)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchAlbumsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchAlbumsError(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


export const fetchAlbumsBegin = () => ({
  type: FETCH_ALBUMS_BEGIN
});

export const fetchAlbumsSuccess = albums => ({
  type: FETCH_ALBUMS_SUCCESS,
  payload: { albums }
});

export const fetchAlbumsError = error => ({
  type: FETCH_ALBUMS_FAILURE,
  payload: { error }
});