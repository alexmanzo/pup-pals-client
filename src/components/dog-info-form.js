import React from 'react'
import {Field, reduxForm} from 'redux-form'


let DogInfoForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="dog-name">Your Pup's Name</label>
                <Field component="input" type="text" name='dogName'placeholder='Fido' id="dogName" />
            </div>
            <div>
                <label htmlFor="dog-age">Age</label>
                <Field component="input" type="number" name='dogAge' id="dogAge" />
            </div>
            <div>
                <label htmlFor="breed">Breed</label>
                <Field component="input" type="text" name='breed' placeholder='Lab' id="breed" />
            </div>
            <div>
                <Field component="input" type="file" name='dogPic' id='dogPic' accept="image/*" />
            </div>    
            <button type='submit'>Save</button>
            </form>
    )
}

DogInfoForm = reduxForm({ form: 'dog-info' })(DogInfoForm)

export default DogInfoForm