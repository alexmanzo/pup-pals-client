import {createStore, combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import navBarReducer from './reducers/navBar-reducer'
import profileReducer from './reducers/profile-reducer'


const store = createStore(combineReducers({
	nav: navBarReducer,
	profile: profileReducer,
	form: formReducer
}))

export default store;
