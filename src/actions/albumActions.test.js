
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './albumActions'
import {  FETCH_ALBUMS_BEGIN,
          FETCH_ALBUMS_SUCCESS,
          FETCH_ALBUMS_FAILURE
} from '../actions/albumActions';
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const ApiUrl = 'https://jsonplaceholder.typicode.com/photos';
const mockResult = [
              {
                "albumId": 1,
                "id": 1,
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "http://placehold.it/600/92c952",
                "thumbnailUrl": "http://placehold.it/150/92c952"
              },
              {
                "albumId": 1,
                "id": 2,
                "title": "reprehenderit est deserunt velit ipsam",
                "url": "http://placehold.it/600/771796",
                "thumbnailUrl": "http://placehold.it/150/771796"
              }
]

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates FETCH_ALBUMS_SUCCESS when fetching photos has been done', () => {

    fetchMock.getOnce(ApiUrl, mockResult)

    const expectedActions = [
      { type: FETCH_ALBUMS_BEGIN },
      { type: FETCH_ALBUMS_SUCCESS, payload: {albums: mockResult} } 
    ]
    const store = mockStore({ albums: [] })

    return store.dispatch(actions.fetchAlbums()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})