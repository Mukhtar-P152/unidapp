import React, { Component } from 'react'

class DepositForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: this.props.num || 1
    }
  }
  onInputChange(event) {
    this.setState({num: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onDepositFormSubmit(this.state.num)
  }

  render() {
    return (
    <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
    <fieldset>
      <input id="num" type="number" value={this.state.num} onChange={this.onInputChange.bind(this)} placeholder="Num"/>
      <span className="pure-form-message">This is a required field.</span>
      <div>{this.props.num}</div>
      <br />
      <button type="submit" className="pure-button pure-button-primary">Attend Lecture</button>
    </fieldset>
    </form>

    )
  }
}

export default DepositForm
