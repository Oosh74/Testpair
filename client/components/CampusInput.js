/* eslint react/no-unused-state:0 */
import React, { Component } from 'react';

export class CampusInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return <input onChange={this.handleChange} />;
  }
}
