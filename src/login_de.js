import React from "react";
import "./common.css";
import { Link, Navigate, useNavigate} from "react-router-dom";
import Row from "react-bootstrap/Row";

import constants from "./constants";
import ActivitySelection from "./activitySelection";

class LoginFormDe extends React.Component {
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
            <label style={{ fontSize: 30 }}>
              <Row>Dein Name:</Row>

              <input
                style={{height:"1.8vw", fontSize:"2vw"}}
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </label>
          </Row>
          <div style={{ height: 30 }}></div>
          <Row>
            <label style={{ fontSize: 30 }}>
              <Row>Dein Alter:</Row>
              <input
                style={{height:"1.8vw", fontSize:"2vw"}}
                type="number"
                value={this.state.age}
                onChange={this.handleAgeChange}
              />
            </label>
          </Row>
          <div style={{ height: 30 }}></div>
          <Row>
            {this.state.name != '' && this.state.age > 0 && <Link className='button' to='/activityselection_de' onClick={() => this.doSubmit()}> Eingabe </Link>}
          </Row>
        </form>
      </div>
    );
  }
}

export default LoginFormDe;
