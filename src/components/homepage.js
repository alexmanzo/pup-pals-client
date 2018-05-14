import React from 'react'
import RegistrationForm from './registration-form'


export default function HomePage(props) {
	return (
    <main role="main">
        <header role="banner">
            <h1>Pup Pals</h1>
            <h2>A place for your pup to find a BFF (Best Fur Friend)!</h2>
        </header>

        <section>
            <header>
                <h3>Tell potential friends about your pet.</h3>
            </header>
            <p>[<em>placeholder for picture of a doggo.</em>]</p>
            <p>What's your pup's name? What breed are they? How old are they? What are some of their favorite hobbies, and what do they hate? Let new friends learn all about your pup.</p>
        </section>

        <section>
            <header>
                <h3>Find your pup's new friends.</h3>
            </header>
            <p>[<em>placeholder for screenshot of a map.</em>]</p>
            <p>Look near you to find new playmates for your pup.</p>
        </section>

        <section>
            <header>
                <h3>Get started:</h3>
            </header>

            <RegistrationForm />

        </section>

        <footer>Footer</footer>
    </main>
		)
}