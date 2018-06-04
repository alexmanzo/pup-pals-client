import React from 'react'
import RegistrationForm from './registration-form'
import { connect } from 'react-redux'
import { registerUser } from '../actions/users'
import './homepage.css'
import { updateNavBar } from '../actions/navbar'


export class HomePage extends React.Component {

   submit = values => {
        const { ownerName, username, password } = values
        const user = { ownerName, username, password }
        return this.props
            .dispatch(registerUser(user))
    }

    componentDidMount() {
        const currentPage = this.props.location.pathname
        this.props.dispatch(updateNavBar(currentPage))
    }

    render() {
    	return (
        <div>
            <header role="banner">
                <h1>Pup Pals</h1>
                <h2>A place for your pup to find a BFF (Best Fur Friend)!</h2>
            </header>

            <section>
                <header>
                    <h3>Tell potential friends about your pet.</h3>
                </header>
                <img className="homepage-photo" src="https://lh3.googleusercontent.com/geJEqgaoPomuBzbg1a0mpiFO_3O-M5IKGTvEhbDDvBtpGF6YsTRUnsLKSu3A_Y-7tqnkHs80_vvi1_gAKCnpQVjbbDSICq9nC6afxEGOUitAsuZGLzBhUrv9rRKbcAfAEWRnxnrLGg=w2400" alt="Black dog laying down looking at camera."/>
                <p className="photo-text">What's your pup's name? What breed are they? How old are they? What are some of their favorite hobbies, and what do they hate? Let new friends learn all about your pup.</p>
            </section>

            <section>
                <header>
                    <h3>Find your pup's new friends.</h3>
                </header>
                <p>[<em>placeholder for screenshot of a map.</em>]</p>
                <p>Look near you to find new playmates for your pup.</p>
            </section>

            <section id="registration-form">
                <header>
                    <h3>Get started:</h3>
                </header>

                <RegistrationForm onSubmit={this.submit} />

            </section>

            <footer>Footer</footer>
        </div>
    		)
    }
}

const mapStateToProps = state => ({
    navItems: state.nav.navItems
})


export default connect(mapStateToProps)(HomePage)

