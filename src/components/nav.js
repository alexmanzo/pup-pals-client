import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './nav.css'

export function Nav(props) {
	const navItems = props.navItems.map((navItem, index) => {
		return <li key={index}><Link to={navItem.path}>{navItem.item}</Link></li>
	})

	return (
		<nav>
			<Link to="/"><img src="dog-logo.svg" alt="cartoon dog in red circle" className="nav-logo" /></Link>
			<ul>
				{navItems}
			</ul>
	</nav>
		)
}
const mapStateToProps = state => ({
	navItems: state.nav.navItems
})

export default connect(mapStateToProps)(Nav)