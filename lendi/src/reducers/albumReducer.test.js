import reducer from './albumReducer'
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

const expectedResult = {
              1: [{
                "albumId": 1,
                "id": 1,
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "http://placehold.it/600/92c952",
                "thumbnailUrl": "http://placehold.it/150/92c952"
              }],
              2 :[{
                "albumId": 2,
                "id": 2,
                "title": "reprehenderit est deserunt velit ipsam",
                "url": "http://placehold.it/600/771796",
                "thumbnailUrl": "http://placehold.it/150/771796"
              },
              {
                "albumId": 2,
                "id": 3,
                "title": "TEST",
                "url": "http://placehold.it/600/245245",
                "thumbnailUrl": "http://placehold.it/150/group"
              }]
}

const photos = [
              {
                "albumId": 1,
                "id": 1,
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "http://placehold.it/600/92c952",
                "thumbnailUrl": "http://placehold.it/150/92c952"
              },
              {
                "albumId": 2,
                "id": 2,
                "title": "reprehenderit est deserunt velit ipsam",
                "url": "http://placehold.it/600/771796",
                "thumbnailUrl": "http://placehold.it/150/771796"
              },
              {
                "albumId": 2,
                "id": 3,
                "title": "TEST",
                "url": "http://placehold.it/600/245245",
                "thumbnailUrl": "http://placehold.it/150/group"
              }
]

describe('album reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_ALBUMS_SUCCESS', () => {
    expect(
      reducer([], {
        type: FETCH_ALBUMS_SUCCESS,
        payload: {albums :photos}
      })
    ).toEqual(
      {
        albums: expectedResult,
        loading: false,
        error: null
      }
    )
  })
})