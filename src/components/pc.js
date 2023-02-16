import React, { Component } from 'react';
import Fgh from './cc';
class Pc extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'parent',
    };
    this.gty = this.gty.bind(this);
  }
  gty() {
    this.setState({ msg: 'in gty' });
  }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <Fgh met={this.gty}></Fgh>
      </div>
    );
  }
}
export default Pc;
