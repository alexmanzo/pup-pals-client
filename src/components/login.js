import React from 'react'
import LoginForm from './login-form'
import { connect } from 'react-redux'
import { updateNavBar } from '../actions/navbar'
import {login} from '../actions/auth'


export class Login extends React.Component {
    submit = values => {
        return this.props.dispatch(login(values.username, values.password))
    }

    componentDidMount() {
        const currentPage = this.props.location.pathname
        this.props.dispatch(updateNavBar(currentPage))
    }

    render() {
        return(
            <div>
                <header role="banner">
                    <h1>Sign In</h1>
                </header>
                <section>
                    <LoginForm onSubmit={this.submit} />
                </section>
            </div>
            )
    }
}

const mapStateToProps = state => ({
    navItems: state.nav.navItems
})


export default connect(mapStateToProps)(Login)
