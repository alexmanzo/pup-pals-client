import React from 'react'
import {Field, reduxForm} from 'redux-form'
import LoginForm from './login-form'


export default class Login extends React.Component {
    submit = values => {
        console.log(values)
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