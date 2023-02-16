import React, { Component } from 'react';
class Uc extends Component {
  constructor() {
    super();
    this.state = {
      con: true,
    };
  }
  render() {
    return this.state.con && <h1>'hello brain'</h1>;
  }
}
export default Uc;
