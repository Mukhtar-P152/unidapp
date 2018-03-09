import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>UNIDAPP: The Lecture Sign up dAPP</h1>
            <p>Welcome to the first ever ethereum decentralised app built with you in mind!</p>
            <h2>Smart Contracts</h2>
            <p>Smart contracts are...</p>
            <p>In the upper-right corner, you'll see a login button. Click it to login with with the Authentication smart contract. If there is no user information for the given address, you'll be redirected to sign up.</p>
            <h3>Ensure Metamask is installed</h3>
            <p>
             <a href="https://metamask.io" target="_blank">Get Metamask</a>. 
              MetaMask is an extension for accessing Ethereum enabled distributed applications, or "Dapps" in your normal Chrome browser!

              The extension injects the Ethereum web3 API into every website's javascript context, so that dapps can read from the blockchain.

              MetaMask also lets the user create and manage their own identities, so when a Dapp wants to perform a transaction and write to the blockchain, the user gets a secure interface to review the transaction, before approving or rejecting it.
            </p>
            <h3>Get your UNI TOKEN</h3>
            <p>Ask your personal tutor if you haven't already been given your 100 tokens. Your tokens wallet requires UNI TOKENS to pay the small gas fees required for making transactions on the network. This includes signing in and attending a class. This also allows us to monitor and see which classes you have been attending which ones you haven't. Thus giving us a better understnding of the user experience.</p>
            <a href="#">For Detailed Instructions</a>
            
          </div>
        </div>
      </main>
    )
  }
}

export default Home
