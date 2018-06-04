import React from 'react'
import {Field, reduxForm} from 'redux-form'


let OwnerInfo = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Your Name</label>
                <Field component="input" type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <Field component="input" type="number" name='age' id='age' />
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <Field component="input" type="tel" name="phone-number"/>
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <Field component="input" type="text" name="address"/>
            </div>
            <div>
                <label htmlFor="city">City</label>
                <Field component="input" type="text" name="city"/>
            </div>
            <div>
                <label htmlFor="state">State</label>
                <Field component="input" type="text" name="state"/>
            </div>
            <div>
                <Field component="input" type="file" name="profile-pic" accept="image/*"/>
            </div>
            <button type='submit'>Save</button>
        </form>
    )
}

OwnerInfo = reduxForm({ form: 'owner-info' })(OwnerInfo)

export default OwnerInfo