import React, { Component } from "react";
import { Media } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import axios from "axios";

class Company extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Media>
        <Media body>
          <Media heading>{this.props.name}</Media>
        </Media>
      </Media>
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
    console.log({companies});
  }

  render() {
    return (
      <div>
        <h2>Companies</h2>
        <div>
          {this.state.companies.map((COMPANY) => {
            return <Company key={COMPANY.id} name={COMPANY.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default Companies;
