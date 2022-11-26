import React from "react";
import "./common.css";
import { Link, Navigate, useNavigate} from "react-router-dom";
import Row from "react-bootstrap/Row";
import {logUser} from "./utils/firebase"
import { uuidv4 } from "@firebase/util";

import constants from "./constants";
import ActivitySelection from "./activitySelection";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", age: "" };


    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleAgeChange(event) {
    if (0 < event.target.value) {
      this.setState({ age: event.target.value });
    }
  }

  doSubmit() {
    constants.name = this.state.name
    constants.age = this.state.age
    constants.uuid = uuidv4()
    logUser(this.state.name, this.state.age, constants.uuid)
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <Row>
            <label style={{ fontSize: "3vw" }}>
              <Row>Your Name:</Row>

              <input
                style={{height:"3.5vw", fontSize:"2vw"}}
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </label>
          </Row>
          <div style={{ height: "3vw" }}></div>
          <Row>
            <label style={{ fontSize: "3vw" }}>
              <Row>Your Age:</Row>
              <input
                style={{height:"3.5vw", fontSize:"2vw"}}
                type="number"
                value={this.state.age}
                onChange={this.handleAgeChange}
              />
            </label>
          </Row>
          <div style={{ height: "3vw" }}></div>
          <Row>
            {this.state.name != '' && this.state.age > 0 && <Link className='button' to='/activityselection' onClick={() => this.doSubmit()}> Submit </Link>}
          </Row>
        </form>
      </div>
    );
  }
}

export default LoginForm;
