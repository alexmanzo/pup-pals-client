import React from 'react'
import {Field, reduxForm} from 'redux-form'

let RegistrationForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="ownerName">Your name</label>
                <Field component="input" type="text" name='ownerName'placeholder='Dog Parent' />
            </div>
            <div>
                <label htmlFor="username">Email</label>
                <Field component="input" type="text" name="username"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field component="input" type="password" name="password"/>
            </div>
            <button type='submit'>Sign Up</button>
        </form>
    )
}

RegistrationForm = reduxForm({ form: 'registration' })(RegistrationForm)

export default RegistrationForm