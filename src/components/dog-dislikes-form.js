import React from 'react'
import {Field, reduxForm} from 'redux-form'


let DogDislikes = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="dogDislikes">Dislikes</label>
                <Field component="textarea" name='dogDislikes' id="dogDislikes" />
            </div>
            <button type='submit'>Save</button>
        </form>
    )
}

DogDislikes = reduxForm({ form: 'dog-dislikes' })(DogDislikes)

export default DogDislikes