import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchDogs } from '../actions/searchDogs'
import { withRouter } from 'react-router-dom'
import './nav.css'


export class Nav extends React.Component {
	submit = value => {
        return this.props
            .dispatch(searchDogs(value))
            .then(this.props.history.push('/search-results'))
    }

	render() {
	const navItems = this.props.navItems.map((navItem, index) => {
		return <li key={index}><Link to={navItem.path}>{navItem.item}</Link></li>
	})	

	return (
		<nav>
			<Link to="/"><img src="dog-logo.svg" alt="cartoon dog in red circle" className="nav-logo"/></Link>
			<div className="search">
				<label htmlFor="search">Search for pups near you:</label>
				<input type="text" name="search" placeholder="Enter zip code"/>
				<button type="submit" onClick={this.submit}>Search</button>
			</div>
			<ul>
				{navItems}
			</ul>
	</nav>
		)

	}
}
const mapStateToProps = state => ({
	navItems: state.nav.navItems
})

export default withRouter(connect(mapStateToProps)(Nav))