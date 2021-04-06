import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Button,
  Collapse,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import Users from "./usersComponent";
import axios from "axios";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUsers: false,
      isModalOpen: false,
    };
  }

  handleClick = () => {
    this.setState({ showUsers: !this.state.showUsers });
  };

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { name, phoneNumber, users } = this.props.company;

    return (
      <React.Fragment>
        <ListGroup horizontal style={{ borderWidth: "thick" }}>
          <ListGroupItem className="justify-content-between col-8">
            <Button color="warning" onClick={this.toggleModal}>
              {name}
            </Button>
            <Collapse isOpen={this.state.showUsers}>
              <ul>
                {users.map((USER) => {
                  return <Users key={USER.id} user={USER} />;
                })}
              </ul>
            </Collapse>
          </ListGroupItem>
          <Button className="col-3" color="primary" onClick={this.handleClick}>
            {this.state.showUsers ? "Hide Users" : "Show Users"}
          </Button>
        </ListGroup>
        {/*Modal with company contact info*/}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Contact</ModalHeader>
          <ModalBody>{`${name} ${phoneNumber}`}</ModalBody>
        </Modal>
      </React.Fragment>
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
    try {
      const { data: companies } = await axios.get(baseUrl + "companies");
      this.setState({ companies });
      console.log({ companies });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("error", error.message);
      }
    }
    console.log(error.config);
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
