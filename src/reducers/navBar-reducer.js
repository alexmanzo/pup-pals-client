import { UPDATE_NAV_BAR } from '../actions/navbar'

const initialState = {
	navItems: [
		{
			item: 'login',
			path: '/login'
		}
	]
}

export default function navBarReducer(state=initialState, action) {
	if (action.type === UPDATE_NAV_BAR) {
		const page = action.page
		switch (page) {
			case '/':
				return Object.assign({}, state, {
					navItems: [
						{
							item: 'login',
							path: '/login'
						}
					]
				})
			case '/login':
				return Object.assign({}, state, {
					navItems: []
				})
			case '/profile':
				return Object.assign({}, state, {
					navItems: [
						{
							item: 'edit profile',
							path: '/edit-profile'
						},
						{
							item: 'dashboard',
							path: '/map'
						}
					]
				})
			case '/search-results':
				return Object.assign({}, state, {
					navItems: [
						{
							item: 'profile',
							path: '/profile'
						}
					]
				})
			default:
				return Object.assign({}, state, {
					navItems: [
						{
							item: 'login',
							path: '/login'
						}
					]
				})
		}
	}
	return state
}