import React, { Component } from 'react'


class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      
      <main className="container">
      
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page, you've logged in with your own smart contract successfully.</p>
            <p> Here you will find details about your module(s) and other going ons in the university</p>
            <h2>My Modules</h2>
            <table>
              <tr>
                <th>Module</th>
                <th>Date</th>
              </tr>
              <tr>
              <td>Forensics</td>
              <td>22 Weeks</td>
              
              </tr>
              <tr>
              <td>Security</td>
              <td>22 Weeks</td>
              
              </tr>
              <tr>
              <td>Coding </td>
              <td>22 Weeks</td>
              
              </tr>
            </table>
            <h2>NEWS</h2>
            <p>For more on news from our campus check out <a href="www.dmu.ac.uk">here.</a></p>
          </div>
        </div>
      </main>
      
    )
  }
}

export default Dashboard
