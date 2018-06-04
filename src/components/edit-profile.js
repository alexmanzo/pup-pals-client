import React from 'react'
import './profile.css'
import DogInfoForm from './dog-info-form'
import DogLikes from './dog-likes-form'
import DogDislikes from './dog-dislikes-form'
import OwnerInfo from './owner-info-form'

export default class EditProfile extends React.Component {

   submit = values => {
        console.log(values)
    }

    render() {
    	return (
        <div>
            <header role="banner">
                <h1>Edit Profile</h1>
            </header>

            <section>
                <header>
                    <h3>Basic Info</h3>
                </header>
                <DogInfoForm onSubmit={this.submit} />
            </section>

            <section>
                <header>
                    <h3>Likes</h3>
                </header>
                <DogLikes onSubmit={this.submit} />
            </section>

             <section>
                <header>
                    <h3>Dislikes</h3>
                </header>
                <DogDislikes onSubmit={this.submit} />
            </section>

            <section>
                <header>
                    <h3>Owner Info</h3>
                </header>
                <OwnerInfo onSubmit={this.submit} />
            </section>

            <footer>Footer</footer>

        </div>
    		)
    }
}

