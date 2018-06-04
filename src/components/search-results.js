import React from 'react'
import { connect } from 'react-redux'
import './profile.css'
import { updateNavBar } from '../actions/navbar'

export class SearchResults extends React.Component {

    componentDidMount() {
        const currentPage = this.props.location.pathname
        this.props.dispatch(updateNavBar(currentPage))
    
    }

    render() {
    	return (
        <div>
            <header role="banner">
                <h1>Search Results</h1>
            </header>

            <footer>Footer</footer>
        </div>
    		)
    }
}

const mapStateToProps = state => ({
    profileInfo: state.profile.profileInfo
})

export default connect(mapStateToProps)(SearchResults)