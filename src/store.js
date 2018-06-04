import {createStore, applyMiddleware, combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import {loadAuthToken} from './local-storage'
import authReducer from './reducers/auth'
import {setAuthToken, refreshAuthToken} from './actions/auth'
import navBarReducer from './reducers/navBar-reducer'
import profileReducer from './reducers/profile-reducer'
import searchDogsReducer from './reducers/search-dogs-reducer'


const store = createStore(
	combineReducers({
		nav: navBarReducer,
		profile: profileReducer,
		auth: authReducer,
		form: formReducer,
		search: searchDogsReducer
	}),
	applyMiddleware(thunk)
)

const authToken = loadAuthToken()
if (authToken) {
	store.dispatch(setAuthToken(authToken))
	store.dispatch(refreshAuthToken())
}

export default store
