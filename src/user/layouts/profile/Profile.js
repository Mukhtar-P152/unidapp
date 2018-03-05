import React, { Component } from 'react'
import ProfileFormContainer from '../../ui/profileform/ProfileFormContainer'
import DepositFormContainer from '../../ui/depositform/DepositFormContainer'
class Profile extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Profile</h1>
            <p>Edit your account details here.</p>
            <ProfileFormContainer />
            <DepositFormContainer />
          </div>
          <div className="pure-u-1-1">
            <h1>Your Current Balances</h1>
            
            <p>UNI TOKENS: 100</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
