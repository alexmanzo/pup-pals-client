import React from 'react'
import './nav.css'

export default function Nav(props) {
	return (
		<nav>
			<img src="dog-logo.svg" alt="cartoon dog in red circle" className="nav-logo" />
			<ul>
				<li>Sign In</li>
				<li>Register</li>
				<li>Profile</li>
			</ul>
		</nav>
		)
}