import React from 'react';
import './common.css';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import constants from "./constants";

class ActivitySelection extends React.Component {
    render() {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <Row>
                    <h1>Hello!</h1>
                    <p style={{width: 600}}>Today we are going to explore something called binary.
                        <br/>
                        Have you ever heard of it?
                        <br/>
                        If not, that's not a problem, you will hopefully be a binary master by the end of this lesson!
                        <br/>
                        Please click the group you belong to.
                        <br/>
                        <br/>
                    </p>
                </Row>
                <Row>
                    <div style={{width: 100}}></div>
                </Row>
                <Row>
                    <Link className="button" to="/problem-solving" onClick={() => constants.group = 1}>Group 1</Link>
                </Row>
                <Row>
                    <div style={{width: 100}}></div>
                </Row>
                <Row>
                    <Link className="button" to="/instruction" onClick={() => constants.group = 2}>Group 2</Link>
                </Row>

            </div>


        );
    }

}


export default ActivitySelection;