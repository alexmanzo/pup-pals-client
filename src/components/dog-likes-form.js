import React from 'react'
import {Field, reduxForm} from 'redux-form'


let DogLikes = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="dogLikes">Likes</label>
                <Field component="textarea" name='dogLikes' id="dogLikes" />
            </div>
            <button type='submit'>Save</button>
        </form>
    )
}

DogLikes = reduxForm({ form: 'dog-likes' })(DogLikes)

export default DogLikes