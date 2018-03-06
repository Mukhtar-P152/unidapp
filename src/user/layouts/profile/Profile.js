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
            <p>Here you are able to edit your username. This profile will include your personal information so the
              Institution can identify you. From you profile you will be able to attend you timetabled classes from the click of a button.
            </p>
            <h5>IMPORTANT!</h5>
            <p>This application is running on a private university network. At the beginning of the academic year, 
              each student is allocated 1 UNI TOKEN per class. Everytime you are to attend a scheduled class, you are expected to deposit back the UNI TOKEN.
            </p>
            <p>Everytime you press attend there is a Smart Contract activated. This Smart Contract stores this action on the private blockchain and along with 
              the 1 UNI TOKEN a timestamp is with an identifying "Wallet Address" (your Profile) that comes along with it.</p>
            <ProfileFormContainer />
            <h3>Next Module To Attend:</h3>
            <p>Forensics <strong>HB 0.45</strong> 11:00</p>
            <p><strong>Only Deposit 1 UNI TOKEN</strong></p>
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
