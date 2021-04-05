import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button, Row, Collapse } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import Users from "./usersComponent";
import axios from "axios";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUsers: false,
    };
  }

  handleClick = () => {
    this.setState({ showUsers: !this.state.showUsers });
  };

  render() {
    const { name, users } = this.props.company;

    return (
      <ListGroup horizontal style={{ borderWidth: "thick" }}>
        <ListGroupItem className="justify-content-between col-8">
          {name}
          <Collapse isOpen={this.state.showUsers}>
            <ul>
              {users.map((USER) => {
                return <Users key={USER.id} user={USER} />;
              })}
            </ul>
          </Collapse>
        </ListGroupItem>
        <Button className="col-3" onClick={this.handleClick}>
          {this.state.showUsers ? "Hide Users" : "Show Users"}
        </Button>
      </ListGroup>
    );
  }
}

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
    };
  }

  async componentDidMount() {
    const { data: companies } = await axios.get(baseUrl + "companies");
    this.setState({ companies });
    console.log({ companies });
  }

  render() {
    return (
      <div>
        <h2>Companies:</h2>
        <div>
          {this.state.companies.map((COMPANY) => {
            return <Company key={COMPANY.id} company={COMPANY} />;
          })}
        </div>
      </div>
    );
  }
}

export default Companies;
