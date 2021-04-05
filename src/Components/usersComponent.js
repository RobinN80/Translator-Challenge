import React, { Component } from "react";

class Users extends Component {
  render() {
    const { name } = this.props.user;
    //console.log("user props", this.props);
    return  <li>{name}</li>
  }
}

export default Users;
