import React, { Component } from "react";

class Users extends Component {
  render() {
    const { user } = this.props;
    console.log("user props", this.props);
    return <li>{user.name}</li>;
  }
}

export default Users;
