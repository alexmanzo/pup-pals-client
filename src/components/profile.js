import React from 'react'
import { connect } from 'react-redux'
import './profile.css'
import { updateNavBar } from '../actions/navbar'

export class Profile extends React.Component {

    componentDidMount() {
        const currentPage = this.props.location.pathname
        this.props.dispatch(updateNavBar(currentPage))
    
    }

    render() {
    	return (
        <div>
            <header role="banner">
                <h1>Profile</h1>
            </header>

            <section>
                <header>
                    <h3>{this.props.profileInfo.dogName}</h3>
                </header>
                <img src={this.props.profileInfo.dogPhotoPath} alt={this.props.profileInfo.photoAlt}/>
                <p>Age: {this.props.profileInfo.dogAge}</p>
                <p>Breed: {this.props.profileInfo.dogBreed}</p>
            </section>

            <section>
                <header>
                    <h3>Likes</h3>
                </header>
                <p>{this.props.profileInfo.likes}</p>
            </section>

            <section>
                <header>
                    <h3>Dislikes</h3>
                </header>
                <p>{this.props.profileInfo.dislikes}</p>
            </section>

            <section>
                <header>
                    <h3>My Owner</h3>
                </header>
                <img src={this.props.profileInfo.ownerInfo.ownerPhotoPath} alt={this.props.profileInfo.ownerInfo.ownerPhotoAlt}/>
                <p>{this.props.profileInfo.ownerInfo.ownerName}</p>
                <p>Age: {this.props.profileInfo.ownerInfo.ownerAge}</p>
                <p>Contact: {this.props.profileInfo.ownerInfo.number}</p>
            </section>
            <footer>Footer</footer>
        </div>
    		)
    }
}

const mapStateToProps = state => ({
    profileInfo: state.profile.profileInfo
})

export default connect(mapStateToProps)(Profile)