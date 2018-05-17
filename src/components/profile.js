import React from 'react'
import { connect } from 'react-redux'
import './profile.css'

export function Profile(props) {
	return (
    <div>
        <header role="banner">
            <h1>Profile</h1>
        </header>

        <section>
            <header>
                <h3>{props.profileInfo.dogName}</h3>
            </header>
            <img src={props.profileInfo.dogPhotoPath} alt={props.profileInfo.photoAlt}/>
            <p>Age: {props.profileInfo.dogAge}</p>
            <p>Breed: {props.profileInfo.dogBreed}</p>
        </section>

        <section>
            <header>
                <h3>Likes</h3>
            </header>
            <p>{props.profileInfo.likes}</p>
        </section>

        <section>
            <header>
                <h3>Dislikes</h3>
            </header>
            <p>{props.profileInfo.dislikes}</p>
        </section>

        <section>
            <header>
                <h3>My Owner</h3>
            </header>
            <img src={props.profileInfo.ownerInfo.ownerPhotoPath} alt={props.profileInfo.ownerInfo.ownerPhotoAlt}/>
            <p>{props.profileInfo.ownerInfo.ownerName}</p>
            <p>Age: {props.profileInfo.ownerInfo.ownerAge}</p>
            <p>Contact: {props.profileInfo.ownerInfo.contact}</p>
        </section>
        <footer>Footer</footer>
    </div>
		)
}

const mapStateToProps = state => ({
    profileInfo: state.profile.profileInfo
})

export default connect(mapStateToProps)(Profile)