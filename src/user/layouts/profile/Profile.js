import React, { Component } from 'react'
import ProfileFormContainer from '../../ui/profileform/ProfileFormContainer'

class Profile extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Profile</h1>
            <p>Here you are able to edit your username. This profile will include your personal information so the
              Institution can identify you. From you profile you will be able to attend you timetabled classes from the click of a button.
            </p>
            <ProfileFormContainer />
            
          </div>
          <div className="pure-u-1-1">
            <h1>Your Current Balance</h1>
            
            <p>UNI TOKENS: 100</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
