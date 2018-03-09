import React, { Component } from 'react'
import DepositFormContainer from '../../ui/depositform/DepositFormContainer'
class Attend extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Attend</h1>
            
            <h5>IMPORTANT!</h5>
            <p>This application is running on a private university network. At the beginning of the academic year, 
              each student is allocated 1 UNI TOKEN per class. Everytime you are to attend a scheduled class, you are expected to deposit back the UNI TOKEN.
            </p>
            
            <h3>Next Module To Attend:</h3>
            <p>Forensics <strong>HB 0.45</strong> 11:00</p>
            <p><strong>Only Deposit 1 UNI TOKEN</strong></p>
            <DepositFormContainer />
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

export default Attend
