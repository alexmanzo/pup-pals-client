import React from 'react'
import {Field, reduxForm} from 'redux-form'

let LoginForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Email</label>
                <Field component="input" type="text" name="username"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field component="input" type="password" name="password"/>
            </div>
            <button type='submit'>Sign In</button>
        </form>
    )
}

LoginForm = reduxForm({ form: 'login' })(LoginForm)

export default LoginForm