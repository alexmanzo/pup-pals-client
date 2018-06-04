import { SEARCH_DOGS } from '../actions/searchDogs'

const initialState = {
	results: null,
	loading: false
}

export default function searchDogsReducer(state=initialState, action) {
	if (action.type === SEARCH_DOGS) {
		const location = action.location

		fetch('url', {
            method: 'GET',
            query: `${location}`,
            dataType: 'json' 
        })
        .then(results => results.map((result, index) => {
        	return Object.assign({}, state, {
				results: `
        		<div>
        			<h2>${result.profileInfo.dogName}</h2>
        		</div>
        	`
			})
		}))
	}

	return state
}