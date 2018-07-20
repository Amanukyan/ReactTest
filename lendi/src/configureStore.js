import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import albumReducer from "./reducers/albumReducer";

export default function configureStore(initialState) {
	return createStore(
		albumReducer,
		initialState,
		applyMiddleware(thunkMiddleware)
	)
}
