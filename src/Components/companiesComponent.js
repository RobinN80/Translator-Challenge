import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button, Row } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import axios from "axios";

class Company extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const {name} = this.props.company;
    return (
      <ListGroup horizontal style={{borderWidth: 'thick'}}>
        <ListGroupItem className="justify-content-between col-8">
          {name}
        </ListGroupItem>
        <Button className="col-3">Users</Button>

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
