import React from 'react'


export default function RegistrationForm(props) {
	return (
    <form className='registration-form'>
        <div>
            <label for="owner-name">Your Name</label>
            <input placeholder='Dog Parent' type="text" name='owner-name' id='owner-name' />
        </div>
        <div>
            <label for="username">Email</label>
            <input type="text" name='username' id='username' />
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name='password' id='password' />
        </div>
        <button type='submit'>Sign Up</button>
    </form>
    )
}