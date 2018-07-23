import {
  FETCH_ALBUMS_BEGIN,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_FAILURE
} from '../actions/albumActions';

const initialState = {
  albums: [],
  loading: false,
  error: null
};

function groupPhotosByAlbumId(photos){
	const grouped = photos.reduce((albums, photo) => {
		  if (!albums[photo.albumId]) albums[photo.albumId] = [];
		  albums[photo.albumId].push(photo);
		  return albums;
		}, {});
	return grouped
}

export default function albumReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_ALBUMS_BEGIN:
		return {
		...state,
		loading: true,
		error: null
		};

    case FETCH_ALBUMS_SUCCESS:
		const grouped = groupPhotosByAlbumId(action.payload.albums)
    	return Object.assign({}, state, {
			albums: grouped,
  			loading: false,
  			error: null
		});

    case FETCH_ALBUMS_FAILURE:
		return {
		...state,
		loading: false,
		error: action.payload.error,
		albums: []
		};

    default:
    	return state;
  }
}