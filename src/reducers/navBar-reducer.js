const initialState = {
	navItems: [
		{
			item: 'profile',
			path: '/profile'

		},
		{
			item: 'login',
			path: '/login'
		}
	]
}

export default function navBarReducer(state=initialState, action) {
	return state
}